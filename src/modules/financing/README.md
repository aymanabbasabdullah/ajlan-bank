# financing module

- **Route:** `/financing`
- **Data:** `data/financing.ar.ts` (header, requirements, steps, calculator programs and labels, FAQ, CTA). Programs come from `products/data/financing.products.ar.ts`.
- **Calculator:** `utils/installment.ts` (pure amortization formula) + `pages/financing/hooks/useFinancingCalculator.ts` (UI state) + `components/FinancingCalculator.tsx` (view). Rates in the data file are indicative and must be confirmed by the bank.
- **Composition:** `PageHero` + `AnchorNav` → `ProductCatalog` → `FinancingRequirements` → `StepsSection` → `FinancingCalculator` → `FaqSection` → `CtaBanner`.
- **Public API:** `FinancingPage`, `calculateInstallment`, types.
