# careers module

- **Route:** `/careers`
- **Data:** `data/careers.ar.ts` (page copy, labels, careers email) and `data/openings.ar.ts` (job list). To publish or close a vacancy, edit `openings.ar.ts` only.
- **Applying:** each `JobCard` builds a `mailto:` link with the job title and reference in the subject (`utils/apply.ts`). No upload form, since the site is frontend-only.
- **Requirements** are collapsed in a native `<details>` so the list stays scannable.
- **Public API:** `CareersPage`.
