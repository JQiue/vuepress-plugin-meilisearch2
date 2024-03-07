import { defineClientConfig } from "vuepress/client";
import { defineAsyncComponent } from "vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component(
      "MeiliSearch",
      defineAsyncComponent(() => import("./index.vue"))
    );
  },
});
