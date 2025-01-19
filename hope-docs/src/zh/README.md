---
home: true
icon: home
title: 首页
heroImage: /logo.svg
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: vuepress-plugin-meilisearch2
tagline: 将 MeiliSearch 集成到 VuePress 中，为您的文档网站提供搜索功能。
actions:
  - text: 如何使用
    icon: lightbulb
    link: ./usage
    type: primary
copyright: false
footer: MIT Licensed, Copyright © 2024-present JQiue
---

在本网站的搜索按钮中，提前准备了搜索 VuePress 官方文档的数据，以演示 MeiliSearch 的使用

## 快速开始

::: code-tabs#npm

@tab npm

```sh
npm i -D vuepress-plugin-meilisearch2
```

@tab pnpm

```sh
pnpm add -D vuepress-plugin-meilisearch2
```

:::

在您的 VuePress 配置中使用它

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
