<template>
  <div id="docsearch"></div>
</template>

<script setup>
import { onMounted } from "vue";
import { pluginOptions } from "../define";
import "../assets/search.css";
onMounted(async () => {
  const { __docsearch_meilisearch__ } = await import("../assets/search.js");
  const { docsearch } = __docsearch_meilisearch__;
  docsearch({
    container: "#docsearch",
    ...pluginOptions
  });
})
</script>

<style scoped></style>