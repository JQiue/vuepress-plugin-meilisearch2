import { hopeTheme } from "vuepress-theme-hope";

import * as navbar from "./navbar.ts";
import * as sidebar from "./sidebar.ts";

export default hopeTheme({
  hostname: "https://vuepress-plugin-meilisearch.jinqiu.wang",
  author: {
    name: "JQiue",
    url: "https:/jinqiu.wang",
  },
  iconAssets: "fontawesome-with-brands",
  logo: "/logo.svg",
  repo: "JQiue/vuepress-plugin-meilisearch2",
  docsDir: "src",
  locales: {
    "/": {
      navbar: navbar.en,
      sidebar: sidebar.en,
    },
    "/zh/": {
      navbar: navbar.zh,
      sidebar: sidebar.zh,
    },
  },
  editLink: false,
  breadcrumb: false,
  markdown: {
    codeTabs: true,
  },
});
