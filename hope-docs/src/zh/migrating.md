---
title: 从 Algolia DocSearch 迁移
icon: database
order: 4
---

从现有的 Algolia DocSearch 迁移到 MeiliSearch 也很简单。替换以下脚本中所需的参数，并在 Node.js 中运行它，以轻松完成迁移

```js
const algoliaSearch = require("algoliasearch");
const { MeiliSearch } = require("meilisearch");

const BATCH_SIZE = 1000;

(async () => {
  const algoliaClient = algoliaSearch("APPLICATION_ID", "ADMIN_API_KEY");
  const algoliaIndex = algoliaClient.initIndex("INDEX_NAME");

  let records = [];
  await algoliaIndex.browseObjects({
    batch: (hits) => {
      records = records.concat(hits);
    }
  });

  const meiliClient = new MeiliSearch({
    host: "MEILI_HOST",
    apiKey: "MEILI_API_KEY",
  });
  const meiliIndex = meiliClient.index("MEILI_INDEX_NAME");

  await meiliIndex.addDocumentsInBatches(records, BATCH_SIZE);
})();
```
