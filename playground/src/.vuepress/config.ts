import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { MeiliSearchPlugin } from "vuepress-plugin-meilisearch2";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  theme,

  plugins: [
    MeiliSearchPlugin({
      host: "https://search.jinqiu.wang",
      apiKey:
        "45a491ecc58df092acf6ec7e8321e40cae427a74aabf9cc831da7af275ae9b09",
      index: "vuepress",
      // limit: 10,
    }),
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
