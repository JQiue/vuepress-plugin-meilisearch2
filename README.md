# vuepress-plugin-meilisearch2

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

## 在默认的vuepress2中使用

![default-theme-use](./images/default-theme-search.gif)

配置中添加 `searchBoxName: "SearchBox"` 

```ts
import { defineUserConfig } from 'vuepress';
import { MeiliSearchPlugin } from 'vuepress-plugin-meilisearch2';

defineUserConfig({
  plugins: [
    MeiliSearchPlugin({
      host: "",
      apiKey: "",
      index: "",
      searchBoxName: "SearchBox",
    })
  ]
})
```


## 选项

+ `host` - 主机
+ `apiKey` - 密钥
+ `index` - 要查询的索引
+ `limit` - 设置单个查询返回的最大文档数，默认`20`
+ `offset` - 在搜索结果中设置起始点，有效地跳过给定数量的文档，默认`0`
+ `filter` - 使用筛选表达式来优化搜索结果，详见[filtering](https://www.meilisearch.com/docs/learn/fine_tuning_results/filtering)
