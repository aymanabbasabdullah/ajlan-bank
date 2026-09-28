---
version: 2.0
name: Ajlan-Bank-design-system
description: Editorial visual language for Ajlan Bank (بنك عجلان). Cool stone canvas, ink type, a single purple accent, large real photographs on a Swiss 12-column grid, and quiet motion. No gradients, no glass, no generated imagery.

colors:
  brand-50: "#F6F3FB"
  brand-100: "#ECE6F6"
  brand-200: "#D9CCEE"
  brand-300: "#BFA9E0"
  brand-500: "#7A5CB0"
  brand-600: "#6246A0"
  brand-700: "#4E3782"
  brand-900: "#2A1D47"
  canvas: "#F7F6F3"
  surface: "#FFFFFF"
  sand-100: "#F0EFEA"
  sand-200: "#E6E4DF"
  sand-500: "#9A9486"
  sand-700: "#5C5648"
  ink: "#141218"
  body: "#3F3C45"
  muted: "#6B6673"
  line: "#E6E4DF"
  line-strong: "#D4D1C9"
  success: "#2F6B4F"
  success-bg: "#E8F1EC"
  danger: "#B3261E"
  danger-bg: "#FBEAE8"

typography:
  display-xl:
    fontFamily: IBM Plex Sans Arabic, system-ui, sans-serif
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.2
  display-lg:
    fontFamily: IBM Plex Sans Arabic, system-ui, sans-serif
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.25
  heading-lg:
    fontFamily: IBM Plex Sans Arabic, system-ui, sans-serif
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.35
  heading-md:
    fontFamily: IBM Plex Sans Arabic, system-ui, sans-serif
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.4
  heading-sm:
    fontFamily: IBM Plex Sans Arabic, system-ui, sans-serif
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.5
  body-lg:
    fontFamily: IBM Plex Sans Arabic, system-ui, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.8
  body-md:
    fontFamily: IBM Plex Sans Arabic, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: IBM Plex Sans Arabic, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: IBM Plex Sans Arabic, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
  button-md:
    fontFamily: IBM Plex Sans Arabic, system-ui, sans-serif
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.5
  caption:
    fontFamily: IBM Plex Sans Arabic, system-ui, sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6

rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px

shadows:
  xs: "0 1px 2px rgba(20, 18, 24, 0.04)"
  sm: "0 2px 8px rgba(20, 18, 24, 0.05)"
  hover: "0 8px 24px rgba(20, 18, 24, 0.06)"

motion:
  ease-out-soft: "cubic-bezier(0.16, 1, 0.3, 1)"
  duration-fast: 150ms
  duration-base: 200ms
  duration-slow: 300ms
  duration-reveal: 500ms
  reveal-offset: 10px
  stagger: 70ms

components:
  nav-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.line}"
    typography: "{typography.label}"
  button-primary:
    backgroundColor: "{colors.brand-600}"
    hoverBackground: "{colors.brand-700}"
    textColor: "{colors.surface}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.line-strong}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    hoverBackground: "{colors.sand-100}"
    rounded: "{rounded.md}"
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.line}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    shadow: "none"
    hoverShadow: "{shadows.xs}"
  media-figure:
    rounded: "{rounded.lg}"
    captionColor: "{colors.muted}"
  badge:
    backgroundColor: "{colors.sand-100}"
    textColor: "{colors.sand-700}"
    rounded: "{rounded.pill}"
    typography: "{typography.label}"
  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.line-strong}"
    focusRing: "{colors.brand-300}"
    rounded: "{rounded.md}"
    height: 48px
  section-alt:
    backgroundColor: "{colors.sand-100}"
  cta-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.xl}"
  footer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    borderColor: "{colors.line}"
---

## Overview

Ajlan Bank’s site is an **editorial bank**: light stone paper, ink type, one purple accent, and large real photographs. The model is Swiss Modernism 2.0 plus an editorial grid — not a beige icon-card template, not a dark luxury site, and not Aurora or glass.

Life on the page comes from **photographs of streets, work, and people**, not from purple panels or a drawn debit card.

**Key characteristics:**

- Purple (`brand-600`) is the **only accent**: primary buttons, links, the focus ring. Never large purple backgrounds or tinted card grids.
- Canvas is cool stone (`#F7F6F3`). Depth comes from photos, type scale, and 1px borders.
- **Flat color only.** No gradients, glow, glass, or blurred color blobs.
- Arabic-first type in **IBM Plex Sans Arabic**. Display headlines go up to 64px on 1440px.
- 12-column splits (`7/5`, `8/4`, one featured tile + two stacked). Ban three identical icon cards on Home.
- Motion is short (200–300ms). Photos do the vitality.

## Colors

### Accent (purple) — use sparingly

- **Brand 600** (`#6246A0`): primary buttons and links. White on it is 7.2:1 (AAA).
- **Brand 700** (`#4E3782`): hover / pressed.
- **Brand 300** (`#BFA9E0`): focus ring only.
- **Brand 50 / 100**: rare selected chips. Not a section fill.

### Surfaces (stone)

- **Canvas** (`#F7F6F3`): page background.
- **Surface** (`#FFFFFF`): header, cards, inputs.
- **Sand 100** (`#F0EFEA`): quiet alternate band — not yellow-beige.
- **Sand 200 / line** (`#E6E4DF`): 1px rules.

### Text

- **Ink** (`#141218`): headings and strong labels.
- **Body** (`#3F3C45`): paragraphs.
- **Muted** (`#6B6673`): captions, credits, helpers (meets 4.5:1 on canvas).

### Semantic

- **Success** (`#2F6B4F` on `#E8F1EC`).
- **Danger** (`#B3261E` on `#FBEAE8`).

## Typography

`IBM Plex Sans Arabic` 300–700. Do not add a Latin serif for display — it breaks Arabic.

| Token | Size (mobile to desktop) | Weight | Use |
|-------|--------------------------|--------|-----|
| display-xl | 36px to 64px | 700 | Home hero `h1` |
| display-lg | 32px to 44px | 700 | Inner page `h1` |
| heading-lg | 26px to 32px | 600 | Section `h2` |
| heading-md | 20px to 24px | 600 | `h3` |
| heading-sm | 18px to 20px | 600 | Card titles |
| body-lg | 17px to 18px | 400 | Leads |
| body-md | 16px | 400 | Body |
| body-sm | 14px | 400 | Meta |
| caption | 13px | 400 | Photo captions and credits |

- Body line-height 1.7; display 1.2–1.25. No letter-spacing on Arabic.
- Numbers: Western digits (`ar-YE-u-nu-latn`), tabular in figures.

## Photography

Vitality is photographic.

- Assets live in `public/media/` and are registered in `src/shared/data/media.ts` (src, width, height, credit). Arabic `alt` and captions live in `*.ar.ts`.
- Real licensed stills only. No generated people, no fake bank interiors, no handshake-in-glass-tower stock.
- Every photo has a caption (place + what is happening) and a credit.
- Reserve ratio (`aspect-[4/5]`, `aspect-[16/10]`, `aspect-[3/2]`). Lazy-load below the fold. Eager-load the home hero only.
- `object-fit: cover` inside the reserved box. No filters that mimic film or AI smoothness.

## Layout

- 4px spacing grid. Sections: 64px mobile, 96px desktop.
- Container `max-w-7xl` with 20px / 32px inline padding.
- Home hero may break the container (full-bleed image).
- Asymmetric 12-column grids. Stack below `lg`.
- Whitespace first. Remove a box before adding a divider.

## Elevation

Default surfaces are flat (border only). `xs` shadow on hover or open menus. Max opacity 0.06. Ink-tinted, not purple-tinted.

## Shapes

| Token | Value | Use |
|-------|-------|-----|
| sm | 4px | Small chips |
| md | 8px | Buttons, inputs |
| lg | 12px | Cards, photos |
| xl | 16px | Large panels |
| pill | 9999px | Filter chips only |

## Components

- **Primary button:** `brand-600` / white. Hover `brand-700`. Press `scale(0.98)`. 44px min height.
- **Secondary:** white, `line-strong` border, ink text.
- **Card:** white, 1px line, no rest shadow. Photo cards have no extra chrome.
- **Media figure:** photo + caption + optional credit. This is the signature component, not a debit-card drawing.
- **CTA band:** **ink** background, white type, one accent button — not a purple slab.
- **Header:** thin sticky surface bar. Utility links stay above on large screens.

## Motion

| Interaction | Duration | Easing | Properties |
|-------------|----------|--------|------------|
| Hover / press | 150–200ms | ease-out | color, transform |
| Card / photo hover | 200–300ms | ease-out-soft | transform, opacity |
| Scroll reveal | 500ms | `cubic-bezier(0.16,1,0.3,1)` | opacity, translateY 10px |
| Stagger | 70ms | same | same |

Only `transform` and `opacity`. Respect `prefers-reduced-motion`. No parallax.

## Do's and don'ts

### Do

- Lead sections with a photograph or a strong type block — not an icon tile.
- Use one purple action per section.
- Caption every photo.
- Write specific, formal Arabic.
- Use logical properties only.

### Don't

- No gradients, glass, glow, or decorative debit-card heroes.
- No three equal icon+title+paragraph cards on Home.
- No generated imagery, no emoji, no default Tailwind shadows.
- No large purple or beige panels as decoration.
- No physical left/right utilities.

## Responsive

Verify 320, 375, 768, 1024, 1440. Full-bleed heroes crop with reserved height. Touch targets 44px.

## Iteration

1. Colors only in `@theme` (`src/shared/styles/tokens.css`).
2. Swap a photo by editing `media.ts` — components stay put.
3. Keep this file and `tokens.css` in sync.
