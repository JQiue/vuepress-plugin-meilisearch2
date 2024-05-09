import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { MeiliSearchPlugin } from "../../../lib/index.js";

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
        "b172d836e622bd80787992d0ad189cca8bd1735fe9ca767e8c8340b0cdfd6638",
      index: "jinqiu-wang",
      // limit: 10,
    }),
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
