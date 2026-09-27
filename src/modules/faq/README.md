# faq module

- **Route:** `/faq` (each category is addressable, e.g. `/faq#cards`).
- **Data:** `data/faq-categories.ar.ts` (grouped Q&A) and `data/faq-page.ar.ts` (page copy). Product-specific FAQs stay with their product in the `products` module; this page holds cross-cutting questions.
- **Composition:** `PageHero` with an `AnchorNav` of categories → one shared `FaqSection` per category (alternating tones) → `CtaBanner`.
- **SEO:** emits `FAQPage` and `BreadcrumbList` JSON-LD.
- **Public API:** `FaqPage`.
