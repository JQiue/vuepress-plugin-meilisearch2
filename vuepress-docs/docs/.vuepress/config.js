import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import { MeiliSearchPlugin } from "vuepress-plugin-meilisearch2";

export default defineUserConfig({
  bundler: viteBundler(),
  lang: "en-US",
  title: "vuepress-plugin-meilisearch2",
  description:
    "Integrate MeiliSearch into VuePress to provide search functionality for your documentation website.",
  theme: defaultTheme({
    logo: "/favicon.ico",
    repo: "JQiue/vuepress-plugin-meilisearch2",
    navbar: ["/", "/usage"],
    sidebar: ["/usage", "/server", "/scraping", "/migrating"],
  }),
  plugins: [
    MeiliSearchPlugin({
      host: "https://search.jinqiu.wang",
      apiKey:
        "45a491ecc58df092acf6ec7e8321e40cae427a74aabf9cc831da7af275ae9b09",
      indexUid: "vuepress",
    }),
  ],
});
