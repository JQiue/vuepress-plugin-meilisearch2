---
home: true
icon: home
title: Home
heroImage: /logo.svg
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: vuepress-plugin-meilisearch2
tagline: Integrate MeiliSearch into VuePress to provide search functionality for your documentation website.
actions:
  - text: How to Use
    icon: lightbulb
    link: ./guide/
    type: primary
copyright: false
footer: MIT Licensed, Copyright © 2024-present JQiue
---

## Quick Start

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

Use it in your Vuepress Config

```ts
import { MeiliSearchPlugin } from 'vuepress-plugin-meilisearch2'

export default {
  plugins: [
    MeiliSearchPlugin({
     // Configuration options
    })
  ],
}
```
