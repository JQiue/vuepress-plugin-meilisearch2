import { getDirname, path } from "@vuepress/utils";

interface PluginOptions {
  host: string;
  apiKey: string;
  index: string;
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
    },
  };
};
