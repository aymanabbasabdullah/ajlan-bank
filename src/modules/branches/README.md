# branches module

- **Route:** `/branches` (deep-linkable filter: `/branches?city=aden`).
- **Data:** `data/branches.ar.ts` (branch directory), `data/cities.ar.ts` (filter options), `data/branches-page.ar.ts` (page copy and service labels).
- **Filter state** lives in the URL via `useCityFilter` (`useSearchParams`, `replace` + `preventScrollReset`), so a filtered view can be shared and survives reloads. Unknown `city` values fall back to "all".
- **Map links** open a Google Maps search for the branch address. No embedded map, which keeps the page light and avoids third-party scripts.
- **Adding a branch:** append an `IBranch` to `branches.ar.ts`. Adding a city: extend `CityId` and `CITIES`.
- **Public API:** `BranchesPage`, `CityId`, `IBranch`.
