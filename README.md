# vuepress-plugin-meilisearch2

![preview](./images/vuepress-plugin-meilisearch.gif)

这是在 [VuePress Theme Hope](https://theme-hope.vuejs.press/) 中使用的例子

```ts
import { defineUserConfig } from 'vuepress';
import { MeiliSearchPlugin } from 'vuepress-plugin-meilisearch2';

defineUserConfig({
  plugins: [
    MeiliSearchPlugin({
      host: '',
      apiKey: '',
      index: '',
    })
  ]
})
```

```ts
import { hopeTheme } from 'vuepress-theme-hope';

export default hopeTheme({
  navbarLayout: {
    start: ['Brand'],
    center: ['Links'],
    // 插入到 navbar
    end: ['Repo', 'Outlook', 'MeiliSearch'],
  },
});
```

## 选项
