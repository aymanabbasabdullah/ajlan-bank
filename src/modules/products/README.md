# products module

Owns the product catalog for all three business sections and the shared product detail template.

- **Route:** `/:section/:slug` (`section` is `individuals`, `business`, or `financing`). Unknown sections or slugs render the not-found page.
- **Data:** `data/individuals.products.ar.ts`, `data/business.products.ar.ts`, `data/financing.products.ar.ts` (one typed `ISectionCatalog` each), and `data/product-detail.ar.ts` for page labels.
- **Public API (barrel):** `ProductDetailPage`, `ProductCard`, `ProductGrid`, `ProductCatalog`, catalog queries, and types.
- **Adding a product:** append an `IProduct` to the right catalog file. The landing page, detail page, related products, and sitemap links pick it up automatically.
