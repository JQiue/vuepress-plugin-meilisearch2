---
title: Scraping
icon: spider
order: 3
---

MeiliSearch provides a Docker crawler for scraping documents. MeiliSearch must be started first.

This is the configuration for scraping official documentation, save it locally:

```json
{
  "index_uid": "YOUR_INDEX_NAME",
  "start_urls": ["https://YOUR_WEBSITE_URL/"],
  "sitemap_urls": ["https://YOUR_WEBSITE_URL/sitemap.xml"],
  "selectors": {
    "lvl0": {
      "selector": ".vp-sidebar-heading.active",
      "global": true,
      "default_value": "Documentation"
    },
    "lvl1": "[vp-content] h1",
    "lvl2": "[vp-content] h2",
    "lvl3": "[vp-content] h3",
    "lvl4": "[vp-content] h4",
    "lvl5": "[vp-content] h5",
    "lvl6": "[vp-content] h6",
    "content": "[vp-content] p, [vp-content] li",
  }
}
```

Start scraping documents, `<absolute-path-to-your-config-file>` is the absolute path to the scraping configuration file

```sh
docker run -t --rm \
  --network=host \
  -e MEILISEARCH_HOST_URL='http://localhost:7700' \
  -e MEILISEARCH_API_KEY='MASTER_KEY' \
  -v <absolute-path-to-your-config-file>:/docs-scraper/config.json \
  getmeili/docs-scraper:latest pipenv run ./docs_scraper config.json
```
