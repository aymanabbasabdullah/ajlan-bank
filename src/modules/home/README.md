# home module

- **Route:** `/`
- **Data:** `data/home.ar.ts` (typed by `types/home.types.ts`). Key figures come from `shared/data/site.ar.ts`; featured products from the `products` barrel; latest news from the `news` barrel.
- **Composition (Trust & Authority pattern):** `HomeHero` → `TrustFigures` → `AudiencePaths` → `FeaturedProducts` → `DigitalBanking` → values (`FeaturesSection`) → `LatestNews` → `CtaBanner`.
- **Visuals:** `HeroVisual` and `PhoneMockup` are decorative flat compositions (`aria-hidden`), no images or gradients.
- **SEO:** emits `BankOrCreditUnion` JSON-LD.
- **Public API:** `HomePage`.
