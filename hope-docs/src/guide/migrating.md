---
title: Migrating from Algolia DocSearch
icon: database
order: 4
---

Migrating from an existing Algolia DocSearch to MeiliSearch is also straightforward. Replace the required parameters in the following script and run it in Node.js to easily complete the migration.

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
