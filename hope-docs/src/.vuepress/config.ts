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
        "64294e4e662062d21cdd1a3b7464ccdcf1477f5c9f3f0b8e9b521baf5a39a7ff",
      indexUid: "vuepress",
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
