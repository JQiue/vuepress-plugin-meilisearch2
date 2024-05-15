<template>
  <div id="docsearch"></div>
</template>

<script setup>
import { onMounted } from "vue";
import "../assets/docsearch.css";
import { pluginOptions } from "../define";

onMounted(async () => {
  const { __docsearch_meilisearch__ } = await import("../assets/docsearch.js");
  const { docsearch } = __docsearch_meilisearch__;
  docsearch({
    container: "#docsearch",
    host: pluginOptions.HOST,
    apiKey: pluginOptions.API_KEY,
    indexUid: pluginOptions.INDEX,
    searchParams: {
      limit: pluginOptions.LIMIT,
      offset: pluginOptions.OFFSET,
      filter: pluginOptions.FILTER,
    }
  });
})
</script>

<style scoped></style>../assets/docsearch.js