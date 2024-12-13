# Server

MeiliSearch provides a server program that provides self-deployment options for users using cloud servers. To simplify the use of MeiliSearch on the server side, you can use Docker for installation and management.

## Installation

```sh
docker pull getmeili/meilisearch:v1.11
```

## Start

By default, data written to the container (including stored indexes) will be deleted when the container stops. Use `-v` to persist data.

```sh
docker run -it --rm \
  -p 7700:7700 \
  -v $(pwd)/meili_data:/meili_data \
  getmeili/meilisearch:v1.11
```

On first startup, a Master key will be generated by default. Do not expose this key; only use it for internal server access, as it has full operational permissions.

## Options

MeiliSearch has many startup options that can be passed in two ways:

Using environment variables

```sh
docker run -it --rm \
  -p 7700:7700 \
  -e MEILI_MASTER_KEY='MASTER_KEY'\
  -v $(pwd)/meili_data:/meili_data \
  getmeili/meilisearch:v1.11
```

Using CLI parameters

```sh
docker run -it --rm \
  -p 7700:7700 \
  -v $(pwd)/meili_data:/meili_data \
  getmeili/meilisearch:v1.11 \
  meilisearch --master-key="MASTER_KEY"
```

## Access

Create an access key that only allows searching using the following request. The `indexes` array specifies which indexes this key can access, and `expiresAt` sets the key's expiration time.

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

If successful, you'll receive the following:

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

This key can be exposed and used anywhere.