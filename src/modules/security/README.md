# security module

- **Route:** `/security`
- **Data:** `data/security.ar.ts`. Call-center number and fraud email come from `shared/data/site.ar.ts`.
- **Composition:** `PageHero` → `NeverAskPanel` (the single most important message, shown first) → common scams (`FeaturesSection`) → everyday habits (`FeaturesSection`, plain) → what to do if defrauded (`StepsSection`) → `CtaBanner` with a direct `tel:` link.
- **Tone:** calm and practical, never alarmist. Danger red is used only on the "never ask" icons and fraud-reporting surfaces.
- **Public API:** `SecurityPage`.
