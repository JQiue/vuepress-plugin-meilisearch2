---
home: true
title: Home
heroImage: /logo.svg
actions:
  - text: Get Started
    link: /usage.html
    type: primary

footer: MIT Licensed | Copyright © 2024-present JQiue
---

In the search button of this website, the data for searching official vuepress documents has been prepared in advance to demonstrate the use of MeiliSearch.

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
