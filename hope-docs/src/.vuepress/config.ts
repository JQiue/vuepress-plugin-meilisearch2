import { defineUserConfig } from "vuepress";
import { meilisearchPlugin } from "@vuepress/plugin-meilisearch";

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
    meilisearchPlugin({
      host: "https://search.jinqiu.wang",
      apiKey:
        "b12ae64a1070b6f5688f4f66469e19a3b67aa05fd921bb55eb6be192e4946b29",
      indexUid: "vuepress-hope-theme",
    }),
  ],
});
