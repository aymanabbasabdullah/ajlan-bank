# news module

- **Routes:** `/news` (list) and `/news/:slug` (article). Unknown slugs render the not-found page.
- **Data:** `data/articles.ar.ts` (articles, newest first after sorting) and `data/news-page.ar.ts` (labels and SEO).
- **Public API:** `NewsListPage`, `NewsDetailPage`, `NewsCard`, `NewsGrid`, `getLatestNews`, types. The home page consumes `NewsGrid` + `getLatestNews`.
- **SEO:** articles emit `NewsArticle` and `BreadcrumbList` JSON-LD.
