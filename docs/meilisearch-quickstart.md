## 说明

- 开源轻量搜索引擎
- 可docker部署

## 安装

> [Using Meilisearch with Docker — Meilisearch documentation](https://www.meilisearch.com/docs/learn/cookbooks/docker)

master key 生成

```shell
cat /proc/sys/kernel/random/uuid
```

创建映射目录
```shell
mkdir meilisearch && cd meilisearch
```
`docker-compose.yml` 

```docker-compose
version: "3.8"

services:
  meilisearch:
    image: getmeili/meilisearch:v1.8
    container_name: meilisearch
    ports:
      - "7700:7700"
    environment:
      # 刚才生成的 master key
      MEILI_MASTER_KEY: 1bee8bb7-a33f-4579-8784-37af44e07771
    volumes:
      - ./meili_data:/meili_data
    # restart: always
```

```shell
docker compose up -d
```

## nginx 配置

```nginx
server {
  listen 443 ssl;
  server_name meilisearch.example.com;

  include your_ssl.conf;

  location / {
    proxy_pass http://127.0.0.1:7700;
  }
}
```

## 访问

> https://meilisearch.example.com/

API Key 使用master key

## 导入数据

> [Quick start — Meilisearch documentation](https://www.meilisearch.com/docs/learn/getting_started/quick_start#add-documents)

```shell
wget --no-check-certificate https://www.meilisearch.com/movies.json
```

导入测试数据

```shell
curl \
  -X POST 'http://localhost:7700/indexes/movies/documents?primaryKey=id' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer 1bee8bb7-a33f-4579-8784-37af44e07771' \
  --data-binary @movies.json
```

会自动创建 `movies` 索引集合

## API Key

> [Managing API keys — Meilisearch documentation](https://www.meilisearch.com/docs/learn/security/managing_api_keys)
> [Keys — Meilisearch API reference](https://www.meilisearch.com/docs/reference/api/keys#create-a-key)

### Create API Key

master key 不要对外暴漏，可以生成一个只有查询权限的key

```shell
curl \
  -X POST 'http://localhost:7700/keys' \
  -H 'Authorization: Bearer 1bee8bb7-a33f-4579-8784-37af44e07771' \
  -H 'Content-Type: application/json' \
  --data-binary '{
    "description": "Search API key",
    "actions": ["search"],
    "indexes": ["*"],
    "expiresAt": "2042-04-02T00:42:42Z"
  }'
```

结果：

```json
{
  "name": null,
  "description": "Search API key",
  "key": "987f6119s39c52709f90c78gsd8cdbad3f8a705d944fb39e3fabd5d83ef804041",
  "uid": "511b62c6-0090-4627-8f1a-fdf6d54d0d65",
  "actions": ["search"],
  "indexes": ["*"],
  "expiresAt": "2099-01-01T00:00:00Z",
  "createdAt": "2024-05-11T02:26:15.696213429Z",
  "updatedAt": "2024-05-11T02:26:15.696213429Z"
}
```

### 查询所有Key

```shell
curl \
  -X GET 'http://localhost:7700/keys' \
  -H 'Authorization: Bearer 1bee8bb7-a33f-4579-8784-37af44e07771'
```

## 集成到vuepress2中

### 安装配置

```shell
npm install -D vuepress-plugin-meilisearch2
```

```ts
import { MeiliSearchPlugin } from "vuepress-plugin-meilisearch2";

export default defineUserConfig({
  // ...,

  plugins: [
    MeiliSearchPlugin({
      host: "https://meilisearch.example.com",
      // 使用上面只有查询权限的 API Key
      apiKey:
        "987f6119s39c52709f90c78gsd8cdbad3f8a705d944fb39e3fabd5d83ef804041",
      index: "vuepress-blog",
    }),
  ],
});
```

### 索引内容爬取

使用官方提供的爬虫

> https://github.com/meilisearch/docs-scraper

爬虫配置 `melisearch_scraper.json` 

下面是 hope 主题的，如果使用别的主题需要修改一下

```json
{
  "index_uid": "vuepress-blog",
  "sitemap_urls": [
    "https://blog.example.com/sitemap.xml"
  ],
  "start_urls": ["https://blog.example.com/"],
  "selectors": {
    "lvl0": {
      "selector": "h1",
      "global": true,
      "default_value": "Documentation"
    },
    "lvl1": ".theme-hope-content h2",
    "lvl2": ".theme-hope-content h3",
    "lvl3": ".theme-hope-content h4",
    "lvl4": ".theme-hope-content h5",
    "lvl5": ".theme-hope-content h6",
    "text": ".theme-hope-content p, .theme-hope-content li, .theme-hope-content td"
  },
  "strip_chars": " .,;:#",
  "scrap_start_urls": true,
  "selectors_exclude": [
    "iframe",
    ".katex-block",
    ".md-flowchart",
    ".md-mermaid",
    ".md-presentation.reveal.reveal-viewport",
    ".line-numbers-mode",
    ".code-group",
    ".footnotes",
    "footer.page-meta",
    ".page-nav",
    ".comments-wrapper"
  ]
}
```

### 爬取

```shell
docker run -t --rm \
--network=host \
-e MEILISEARCH_HOST_URL='http://localhost:7700' \
-e MEILISEARCH_API_KEY='1bee8bb7-a33f-4579-8784-37af44e07771' \
-v ./melisearch_scraper.json:/docs-scraper/config.json \
getmeili/docs-scraper:v0.12.12 pipenv run ./docs_scraper config.json
```

如果使用本地网络，记得加上 `--network=host`

### 集成到 GitHub Actions

```yml
name: 博客部署

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  deploy-gh-pages:
    runs-on: ubuntu-latest
    steps:
      # ....

      - name: 爬取文章内容并重建meilisearch索引
        run: |-
          docker run -t --rm \
            -e MEILISEARCH_HOST_URL='https://meilisearch.example.com' \
            -e MEILISEARCH_API_KEY='${{ secrets.MEILISEARCH_API_KEY }}' \
            -v ${{ github.workspace }}/melisearch_scraper.json:/docs-scraper/config.json \
            getmeili/docs-scraper:v0.12.12 pipenv run ./docs_scraper config.json
```

在仓库配置中设置 
`Settings` -> `Secrets and variables` -> `Actions` -> `New repository secret`
设置：`MEILISEARCH_API_KEY` 
