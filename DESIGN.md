---
version: 1.0
name: Ajlan-Bank-design-system
description: The visual language of Ajlan Bank (بنك عجلان) — a calm, trustworthy Yemeni bank. Flat soft-purple brand color on a warm beige canvas, Arabic-first right-to-left typography in IBM Plex Sans Arabic, crisp 1px borders, near-invisible purple-tinted shadows, and quiet motion. No gradients, no glassmorphism, no emoji.

colors:
  brand-50: "#F6F3FB"
  brand-100: "#ECE6F6"
  brand-200: "#D9CCEE"
  brand-300: "#BFA9E0"
  brand-500: "#7A5CB0"
  brand-600: "#6246A0"
  brand-700: "#4E3782"
  brand-900: "#2A1D47"
  canvas: "#FBF8F3"
  surface: "#FFFFFF"
  sand-100: "#F5EFE4"
  sand-200: "#EADFCC"
  sand-500: "#B89A6A"
  sand-700: "#7A6240"
  ink: "#1F1A2B"
  body: "#4A4458"
  muted: "#6E6780"
  line: "#ECE7DF"
  line-strong: "#DDD5C8"
  success: "#2F6B4F"
  success-bg: "#E8F1EC"
  danger: "#B3261E"
  danger-bg: "#FBEAE8"

typography:
  display-xl:
    fontFamily: IBM Plex Sans Arabic, system-ui, sans-serif
    fontSize: 52px
    fontWeight: 700
    lineHeight: 1.25
  display-lg:
    fontFamily: IBM Plex Sans Arabic, system-ui, sans-serif
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.3
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

rounded:
  sm: 6px
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
  xs: "0 1px 2px rgba(42, 29, 71, 0.04)"
  sm: "0 2px 8px rgba(42, 29, 71, 0.05)"
  hover: "0 6px 20px rgba(42, 29, 71, 0.06)"

motion:
  ease-out-soft: "cubic-bezier(0.16, 1, 0.3, 1)"
  duration-fast: 150ms
  duration-base: 200ms
  duration-slow: 450ms
  duration-reveal: 600ms
  reveal-offset: 12px
  stagger: 80ms

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
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
    textColor: "{colors.brand-700}"
    borderColor: "{colors.line-strong}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.brand-700}"
    hoverBackground: "{colors.brand-50}"
    rounded: "{rounded.md}"
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.line}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    shadow: "{shadows.xs}"
    hoverShadow: "{shadows.hover}"
  card-tinted:
    backgroundColor: "{colors.brand-50}"
    borderColor: "{colors.brand-100}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  icon-tile:
    backgroundColor: "{colors.brand-50}"
    textColor: "{colors.brand-600}"
    rounded: "{rounded.md}"
    size: 48px
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
    backgroundColor: "{colors.brand-900}"
    textColor: "{colors.surface}"
    rounded: "{rounded.xl}"
  footer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    borderColor: "{colors.line}"
---

## Overview

Ajlan Bank is a Yemeni bank whose website must feel **established, calm, and honest**. The design takes the "Trust & Authority" landing pattern and the Minimalism & Swiss style recommended by the `ui-ux-pro-max` design-system search for banking. It then replaces the generic navy palette with the bank's own identity: a **soft, flat purple** for the brand and a **warm beige canvas** that evokes paper, stone, and Yemeni architecture.

The page reads like a well-typeset annual report rather than a startup landing page:

- generous whitespace
- one clear action per section
- thin warm borders instead of heavy boxes
- shadows so faint they are felt rather than seen

**Key characteristics:**

- One brand color (`brand-600` `#6246A0`) for primary actions, links, and icon tiles. Beige is the stage, purple is the actor.
- **Flat color only.** Gradients, glow effects, glassmorphism, and blurred color blobs are forbidden.
- Arabic-first typography in **IBM Plex Sans Arabic**. It is the Arabic companion of IBM Plex Sans, the banking typeface recommended by `ui-ux-pro-max`.
- Right-to-left layout built entirely with logical properties.
- Motion is quiet: content fades up 12px when it enters the viewport, and cards lift 2px on hover.

## Colors

### Brand (purple)

- **Brand 600** (`#6246A0`): primary buttons, active navigation, links, and icon glyphs. White text on it has a 7.2:1 contrast ratio (AAA).
- **Brand 700** (`#4E3782`): hover and pressed state of the primary color, and secondary-button text.
- **Brand 900** (`#2A1D47`): headings and the CTA band background. On the canvas it reaches 14.6:1.
- **Brand 50 / 100 / 200** (`#F6F3FB` / `#ECE6F6` / `#D9CCEE`): icon tiles, tinted cards, and selected chips. These are never used for text.
- **Brand 300** (`#BFA9E0`): focus ring color.

### Surface (beige)

- **Canvas** (`#FBF8F3`): the page background, a warm off-white.
- **Surface** (`#FFFFFF`): cards, header, footer, and inputs.
- **Sand 100** (`#F5EFE4`): alternating section background.
- **Sand 200** (`#EADFCC`): warm dividers and decorative shapes.
- **Sand 500** (`#B89A6A`): a decorative accent for thin rules and illustration details only. Never used for text.
- **Sand 700** (`#7A6240`): text on beige badges (5.0:1 on Sand 100).

### Text

- **Ink** (`#1F1A2B`): primary text and strong labels (16:1).
- **Body** (`#4A4458`): paragraphs (8.8:1 on canvas).
- **Muted** (`#6E6780`): metadata, captions, and helper text (5.0:1 on canvas, 4.7:1 on Sand 100).

### Lines

- **Line** (`#ECE7DF`): default 1px border for cards and dividers.
- **Line strong** (`#DDD5C8`): input borders and secondary-button borders.

### Semantic

- **Success** (`#2F6B4F` on `#E8F1EC`): form success states.
- **Danger** (`#B3261E` on `#FBEAE8`): form errors and security warnings.

## Typography

### Font family

`IBM Plex Sans Arabic` in weights 300, 400, 500, 600, and 700, loaded from Google Fonts with `display=swap` and preconnect. The fallback stack is `system-ui, "Segoe UI", Tahoma, sans-serif`.

### Hierarchy

| Token | Size (mobile to desktop) | Weight | Use |
|-------|--------------------------|--------|-----|
| display-xl | 34px to 52px | 700 | Home hero `h1` only |
| display-lg | 30px to 40px | 700 | Inner page `h1` |
| heading-lg | 26px to 32px | 600 | Section `h2` |
| heading-md | 20px to 24px | 600 | Sub-section `h3` |
| heading-sm | 18px to 20px | 600 | Card titles |
| body-lg | 17px to 18px | 400 | Lead paragraphs |
| body-md | 16px | 400 | Default text |
| body-sm | 14px | 400 | Metadata and footers |
| label | 14px | 500 | Nav, labels, badges |

### Principles

- Arabic needs a taller line height than Latin text: 1.7 for body copy and 1.25 to 1.4 for headings.
- Do not add letter-spacing to Arabic. It breaks the joining between letters.
- Keep line length to about 65 characters (`max-w-2xl`) for paragraphs.
- Numbers use Western digits for financial clarity (`ar-YE-u-nu-latn`), with tabular numerals in figures and calculators.
- No uppercase eyebrows and no single-word color highlights in headlines.

## Layout

### Spacing system

Spacing is on a 4px base grid. Sections use 64px vertical padding on mobile and 96px on desktop. Card padding is 24px to 32px.

### Grid and container

- The container is `max-w-7xl` (1280px) with 20px inline padding on mobile and 32px on desktop.
- Grids are content-driven, not always "three identical cards". Use a 12-column grid with asymmetric splits (7/5, 8/4) for hero and feature rows, and 2, 3, or 4 column card grids as the content requires.

### Whitespace philosophy

Whitespace carries the premium feel. When in doubt, remove an element rather than add a divider.

## Elevation and depth

| Level | Value | Use |
|-------|-------|-----|
| 0 | none plus 1px `line` border | Default surfaces |
| xs | `0 1px 2px rgba(42,29,71,0.04)` | Cards at rest, header when scrolled |
| sm | `0 2px 8px rgba(42,29,71,0.05)` | Open menus and drawers |
| hover | `0 6px 20px rgba(42,29,71,0.06)` | Card hover |

Shadows are purple-tinted, never grey or black, and never above 0.06 opacity. Depth comes mainly from borders and background contrast between canvas, surface, and sand.

### Decorative depth

Illustrations are flat SVG compositions made of brand and sand shapes: circles, arcs, and the bank-card motif. They use no gradients and no photography filters.

## Shapes

| Token | Value | Use |
|-------|-------|-----|
| sm | 6px | Small chips inside cards |
| md | 8px | Buttons, inputs, icon tiles |
| lg | 12px | Cards |
| xl | 16px | Large panels, CTA band, hero visual |
| pill | 9999px | Badges and filter chips only |

Pills are never used for cards or primary buttons.

## Components

### Buttons

- **Primary:** `brand-600` background with white text. Hovers to `brand-700`, scales to 0.98 when pressed, and shows a 2px `brand-300` ring on focus. Minimum height 44px.
- **Secondary:** white background, `line-strong` border, and `brand-700` text. The border turns `brand-300` on hover.
- **Ghost / link:** `brand-700` text and a `brand-50` background on hover. Directional arrows flip in RTL.
- Labels name the action ("افتح حسابك", "احسب القسط", "اعثر على فرع"), never "إرسال" alone.

### Cards and containers

- **Card:** white surface, 1px `line` border, 12px radius, and the xs shadow. On hover it gains the hover shadow and moves up 2px over 200ms.
- **Tinted card:** `brand-50` background with a `brand-100` border. Used for highlighted information such as eligibility and notes.
- **Icon tile:** a 48px `brand-50` square with 8px radius and a `brand-600` Phosphor icon at 24px.

### Inputs and forms

- Inputs are 48px tall with a white background, a 1px `line-strong` border, and an 8px radius. Focus shows a `brand-300` ring.
- Labels are always visible above the field. Errors appear below the field in `danger`, together with an icon.
- Helper text uses `muted`.

### Navigation

- A sticky header on `surface` gets a 1px `line` bottom border and the xs shadow once the page scrolls.
- On desktop: logo at the start, links in the center, and the primary CTA at the end.
- On mobile: a native `<dialog>` drawer that traps focus, closes on Escape, and locks body scroll.
- A utility top bar shows the call center, news, careers, and security awareness links.

### Badges and chips

Badges are `sand-100` pills with `sand-700` text, 14px, 500 weight. Filter chips on the branches page are white with a `line-strong` border and switch to `brand-600` with white text when selected.

### Signature components

- **Bank-card visual:** a flat `brand-600` card with a sand chip, the logo, and masked digits. It anchors the home hero.
- **CTA band:** a `brand-900` panel with white text and one primary action.
- **Financing calculator:** a white card with a range input, a duration select, and a large tabular result in `brand-900`.

## Motion

| Interaction | Duration | Easing | Properties |
|-------------|----------|--------|------------|
| Button hover and press | 150 to 200ms | ease-out | color, background, transform |
| Card hover | 200ms | ease-out-soft | transform (-2px), box-shadow |
| Scroll reveal | 600ms | `cubic-bezier(0.16,1,0.3,1)` | opacity 0 to 1, translateY 12px to 0 |
| Stagger | 80ms per item, up to 8 items | same | same |
| Drawer | 250ms enter, 180ms exit | ease-out-soft | opacity, transform |

- Only `transform` and `opacity` are animated.
- Content is visible without JavaScript. The reveal state is applied by JavaScript just before the element is observed.
- `prefers-reduced-motion: reduce` removes reveal offsets, hover lifts, and drawer slides.

## Do's and don'ts

### Do

- Use flat brand purple for exactly one primary action per section.
- Use beige surfaces to separate sections instead of heavy borders.
- Use Phosphor icons in a single weight (regular), inside icon tiles.
- Write specific, calm, formal Arabic.
- Use logical properties (`ms`, `me`, `ps`, `pe`, `start`, `end`) everywhere.

### Don't

- No gradients of any kind, including text gradients and gradient borders.
- No emoji, no stock "handshake" photos, no fabricated partner logos.
- No default Tailwind shadows (`shadow-md`, `shadow-lg`, `shadow-xl`).
- No pill-shaped cards or primary buttons.
- No left or right physical properties (`ml`, `pl`, `left-*`).
- No vanity metrics without a source. Figures live in one data file, marked for verification.

## Responsive behavior

### Breakpoints

The layout is mobile-first and verified at 320, 375, 768 (`md`), 1024 (`lg`), and 1440px (`xl` / `2xl`).

### Touch targets

Every interactive element is at least 44 by 44px, with at least 8px between targets.

### Collapsing strategy

- Header links collapse into the drawer below `lg`.
- Asymmetric grids stack below `lg`, with the visual placed after the text.
- Card grids go from 1 to 2 to 3 (or 4) columns.

### Image behavior

SVG visuals scale with `w-full h-auto` inside a reserved aspect-ratio box to avoid layout shift.

## Iteration guide

1. Add a color by extending `@theme` in `src/shared/styles/tokens.css`. Never write raw hex values in components.
2. Add a component under `src/shared/components/ui/` only when a second module needs it.
3. Keep this file and `tokens.css` in sync; this file is the visual source of truth.
