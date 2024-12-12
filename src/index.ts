import { getDirname, path } from "@vuepress/utils";
import type { DocSearchProps } from "meilisearch-docsearch/solid";

const __dirname = getDirname(import.meta.url);

export const MeiliSearchPlugin = (options: DocSearchProps) => {
  return {
    name: "vuepress-plugin-meilisearch",
    clientConfigFile: path.resolve(__dirname, "./client/index.js"),
    define: {
      OPTIONS: options,
    },
  };
};
