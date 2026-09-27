# legal module

- **Routes:** `/privacy`, `/terms`
- **Data:** one `ILegalDocument` per page (`data/privacy.ar.ts`, `data/terms.ar.ts`) plus shared labels in `data/legal-ui.ar.ts`. Each section has a stable `id`, so clauses can be linked directly (e.g. `/privacy#your-rights`).
- **Rendering:** both pages are thin wrappers around `components/legal-document/LegalDocument`, which renders the hero, a sticky table of contents on large screens, and numbered sections.
- **Adding a legal page** (e.g. fee schedule, cookie notice): add a data file, a one-line page component, a route, and a footer link.
- **Note:** the text is a realistic draft for layout purposes and must be reviewed by the bank's legal department before launch.
- **Public API:** `PrivacyPage`, `TermsPage`.
