# home module

- **Route:** `/`
- **Data:** `data/home.ar.ts` (typed by `types/home.types.ts`). Key figures come from `shared/data/site.ar.ts`; featured products from the `products` barrel; latest news from the `news` barrel.
- **Composition (editorial):** `HomeHero` (full-bleed photo) → `TrustFigures` → `AudiencePaths` (featured + stacked) → `FeaturedProducts` → `VisaCardsSection` (dark pinned flip) → `DigitalBanking` (lifestyle photo + phone) → values (`FeaturesSection`) → `LatestNews` (magazine grid) → `CtaBanner`.
- **Visuals:** real photographs from `shared/data/media.ts`. `PhoneMockup` is a decorative app preview (`aria-hidden`).
- **SEO:** emits `BankOrCreditUnion` JSON-LD.
- **Public API:** `HomePage`.
