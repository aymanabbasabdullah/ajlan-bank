# about module

- **Route:** `/about`
- **Data:** `data/about.ar.ts` (typed by `types/about.types.ts`). Key figures and the regulator statement come from `shared/data/site.ar.ts`.
- **Composition:** `PageHero` → `AboutStory` → `VisionMission` → values (`FeaturesSection`) → `Timeline` → key figures (`StatList`) → `Leadership` → `Governance` → `CtaBanner`.
- **Leadership avatars** are initials, not photos. Names and bios are placeholders to be replaced with the bank's real, approved profiles.
- **SEO:** emits `BankOrCreditUnion` and `BreadcrumbList` JSON-LD.
- **Public API:** `AboutPage`.
