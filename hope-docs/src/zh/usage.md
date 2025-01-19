---
title: 使用方法
icon: book
order: 1
---

```bash
npm i -D vuepress-plugin-meilisearch2
```

```ts
import { defineUserConfig } from 'vuepress';
import { MeiliSearchPlugin } from 'vuepress-plugin-meilisearch2'

defineUserConfig({
  plugins: [
    MeiliSearchPlugin({
      // 配置选项
      host: '',
      apiKey: '',
      indexUid: '',
    })
  ]
})
```

## 选项

### host

- 类型：`string`

- 是否必需：`true`

- 详情：

  提供 MeiliSearch API 的 HTTP 地址

### apiKey

- 类型：`string`

- 是否必需：`true`

- 详情：

  MeiliSearch 生成的 API 密钥

### indexUid

- 类型：`string`

- 是否必需：`true`

- 详情：

  指定用于搜索的索引名称

### translations

- 类型：`DocSearchTranslations`

- 是否必需：`false`

- 详情：

  按钮和模态框

### hotKeys

- 类型：`false | string[]`

- 是否必需：`false`

- 详情：

  默认快捷键是 `['ctrl+k', 's', '/']`, 设置 `false` 禁用默认快捷键

### debounceDuration

- 类型：`number | false`

- 是否必需：`false`

- 详情：

- 在按键之间等待的时间，以确定是否应该进行搜索。默认为 `200`。设置为 `false` 以禁用防抖动

### searchParams

- 类型：`SearchParams`

- 是否必需：`false`

- 详情：

  - `limit(number)` - 每个查询返回的最大文档数, 默认是 `20`
  - `offset(number)` - 搜索结果的起始偏移量, 默认是 `0`
  - [more](https://www.meilisearch.com/docs/reference/api/search#search-parameters)

## 组件

- SearchBox
