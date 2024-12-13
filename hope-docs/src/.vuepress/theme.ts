import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

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
  navbar,
  sidebar,
  editLink: false,
  breadcrumb: false,
  markdown: {
    codeTabs: true,
  },
});
