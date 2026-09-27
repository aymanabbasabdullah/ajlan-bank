# contact module

- **Route:** `/contact` (the form section is addressable as `/contact#contact-form`).
- **Data:** `data/contact.ar.ts`. Phone numbers, emails, address, and SWIFT come from `shared/data/site.ar.ts` so they are defined once.
- **Form flow:** `useContactForm` holds values, errors, and status. `utils/validate-contact.ts` is a pure validator (Yemeni phone formats, optional email, minimum message length). On submit, the first invalid field receives focus; errors are linked with `aria-invalid` + `aria-describedby`.
- **Service:** `services/contact.service.ts` is a frontend-only stub that simulates latency and returns a reference number. Swap its body for a real `fetch` when a backend exists; nothing else needs to change.
- **Security copy:** the form warns users never to enter card numbers, PINs, or OTPs.
- **Public API:** `ContactPage`.
