<template>
  <div id="docsearch"></div>
</template>

<script setup>
import { onMounted } from "vue";
import { pluginOptions } from "../define";
import { docsearch } from "meilisearch-docsearch"
import "meilisearch-docsearch/css"
onMounted(() => {
  docsearch({
    container: "#docsearch",
    ...pluginOptions
  });
})
</script>

<style scoped></style>../assets/docsearch.js