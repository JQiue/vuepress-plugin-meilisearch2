---
title: 服务端
icon: server
order: 2
---

MeiliSearch 提供了一个服务器程序，拥有云服务器的用户可以自行部署。为了简化 MeiliSearch 在服务器端的使用，您可以使用 Docker 进行安装和管理

## 安装

```sh
docker pull getmeili/meilisearch:v1.11
```

## 启动

默认情况下，写入容器的数据（包括存储的索引）将在容器停止时被删除。使用`-v`来持久化数据

```sh
docker run -it --rm \
  -p 7700:7700 \
  -v $(pwd)/meili_data:/meili_data \
  getmeili/meilisearch:v1.11
```

在第一次启动时，将生成一个主密钥，不要暴露这个密钥，仅将其用于内部服务器访问，因为它具有完全的操作权限

## 选项

MeiliSearch 有许多启动选项，可以通过两种方式传递：

使用环境变量

```sh
docker run -it --rm \
  -p 7700:7700 \
  -e MEILI_MASTER_KEY='MASTER_KEY'\
  -v $(pwd)/meili_data:/meili_data \
  getmeili/meilisearch:v1.11
```

使用 CLI 参数

```sh
docker run -it --rm \
  -p 7700:7700 \
  -v $(pwd)/meili_data:/meili_data \
  getmeili/meilisearch:v1.11 \
  meilisearch --master-key="MASTER_KEY"
```

## 访问

当需要暴露访问时，可以使用以下请求创建仅能搜索的 key。`indexes`数组指定该 key 可以访问哪些索引，`expiresAt`设置 key 的过期时间

```sh
curl \
  -X POST 'http://localhost:7700/keys' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer MASTER_KEY' \
  --data-binary '{
    "description": "Search records key",
    "actions": ["search"],
    "indexes": ["YOUR_INDEX_NAME"],
    "expiresAt": "2025-01-01T00:00:00Z"
  }'
```

如果成功，您将收到以下信息：

```json
{
  "name": null,
  "description": "Search records key",
  "key": "adaf72e2a6d6f428ec465bc786ec41de868bbd53121997e89ba2299e9566c88213",
  "uid": "b84d1be5-caa5-4752-b078-8f40be39051d",
  "actions": ["search"],
  "indexes": ["YOUR_INDEX_NAME"],
  "expiresAt": "2025-01-01T00:00:00Z",
  "createdAt": "2024-01-27T06:50:33.668329328Z",
  "updatedAt": "2024-01-27T06:50:33.668329328Z"
}
```

这个 key 可以暴露在任何地方使用
