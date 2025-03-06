---
title: 刮削
icon: spider
order: 3
---

MeiliSearch 提供了一个 Docker 爬虫来抓取文档。在此之前，先启动 MeiliSearch

这是抓取 VuePress 官方文档的示例配置，保存在本地：

```json
{
  "index_uid": "YOUR_INDEX_NAME",
  "start_urls": ["https://YOUR_WEBSITE_URL/"],
  "sitemap_urls": ["https://YOUR_WEBSITE_URL/sitemap.xml"],
  "selectors": {
    "lvl0": {
      "selector": ".vp-sidebar-heading.active",
      "global": true,
      "default_value": "Documentation"
    },
    "lvl1": "[vp-content] h1",
    "lvl2": "[vp-content] h2",
    "lvl3": "[vp-content] h3",
    "lvl4": "[vp-content] h4",
    "lvl5": "[vp-content] h5",
    "lvl6": "[vp-content] h6",
    "content": "[vp-content] p, [vp-content] li",
  }
}
```

开始抓取文档，`<absolute-path-to-your-config-file>`是抓取配置文件的绝对路径

```sh
docker run -t --rm \
  --network=host \
  -e MEILISEARCH_HOST_URL='http://localhost:7700' \
  -e MEILISEARCH_API_KEY='MASTER_KEY' \
  -v <absolute-path-to-your-config-file>:/docs-scraper/config.json \
  getmeili/docs-scraper:latest pipenv run ./docs_scraper config.json
```
