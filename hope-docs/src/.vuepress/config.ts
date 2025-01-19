import { defineUserConfig } from "vuepress";
import { MeiliSearchPlugin } from "vuepress-plugin-meilisearch2";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  dest: "./dist",
  lang: "en-US",
  title: "vuepress-plugin-meilisearch2",
  description:
    "Integrate MeiliSearch into VuePress to provide search functionality for your documentation website.",
  theme,
  locales: {
    "/": {
      lang: "en-US",
      title: "vuepress-plugin-meilisearch2",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "vuepress-plugin-meilisearch2",
    },
  },
  plugins: [
    MeiliSearchPlugin({
      host: "https://search.jinqiu.wang",
      apiKey:
        "45a491ecc58df092acf6ec7e8321e40cae427a74aabf9cc831da7af275ae9b09",
      indexUid: "vuepress",
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
