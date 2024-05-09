import { defineClientConfig } from "vuepress/client";
import { defineAsyncComponent } from "vue";

declare const __SEARCH_BOX_NAME__: string;

const searchBoxName = __SEARCH_BOX_NAME__;

export default defineClientConfig({
  enhance({ app }) {
    app.component(
      searchBoxName,
      defineAsyncComponent(() => import("./index.vue"))
    );
  },
});
