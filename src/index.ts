import { getDirname, path } from "@vuepress/utils";

interface PluginOptions {
  host: string;
  apiKey: string;
  index: string;
  limit?: number;
  offset?: number;
  filter?: string | (string | string[])[];
  searchBoxName?: String;
}

const __dirname = getDirname(import.meta.url);

export const MeiliSearchPlugin = (options: PluginOptions) => {
  return {
    name: "vuepress-plugin-meilisearch",
    clientConfigFile: path.resolve(__dirname, "./client/index.js"),
    define: {
      HOST: options.host,
      API_KEY: options.apiKey,
      INDEX: options.index,
      LIMIT: options.limit ?? 20,
      OFFSET: options.offset ?? 0,
      FILTER: options.filter ?? "",
      __SEARCH_BOX_NAME__: options.searchBoxName ?? "MeiliSearch",
    },
  };
};
