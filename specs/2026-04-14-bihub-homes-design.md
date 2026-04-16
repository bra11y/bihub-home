# Bihub Homes — Design Spec

**Date:** 2026-04-14  
**Project:** Bihub Homes Real Estate  
**Type:** Single-page demo website  
**Status:** Approved

---

## Overview

Bihub Homes is an accessibility-first real estate demo website. A single-page Next.js 14 app with 10 sections, smooth-scroll anchor navigation, WCAG 2.2 AA compliant throughout. All content is static — no API calls, no authentication.

---

## Tech Stack

| Concern | Choice |
|---------|--------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + CSS custom properties |
| Icons | Lucide React |
| Images | Unsplash direct URLs (no API key) |
| Fonts | Playfair Display (headings) + DM Sans (body) |
| Language | TypeScript |

---

## Architecture

Single `app/page.tsx` imports all section components in order. Root layout (`app/layout.tsx`) wraps everything with skip-nav, `<header>`, `<main id="main-content">`, and `<footer>`.

```
app/
  layout.tsx          — root layout, skip nav, fonts, meta
  page.tsx            — home page, all sections composed here
  globals.css         — design tokens, base reset, focus ring, skip nav

components/
  layout/
    Navbar.tsx        — sticky nav, mobile hamburger
    Footer.tsx        — dark bg, 3-col links
  sections/
    Hero.tsx
    Stats.tsx
    TrustedPartners.tsx
    Services.tsx
    HomeLoans.tsx
    PropertyGallery.tsx
    Testimonials.tsx
    ContactForm.tsx
  ui/
    Button.tsx
    StatCard.tsx

lib/
  demo-data.ts        — all static content arrays
```

---

## Design Tokens

```css
--color-brand:        #1a3c2e   /* forest green, primary */
--color-brand-light:  #2d6a4f   /* hover states */
--color-accent:       #c9a84c   /* gold, CTAs */
--color-accent-dark:  #a8813a   /* gold hover */
--color-bg:           #fafaf8   /* page background */
--color-surface:      #ffffff   /* cards */
--color-surface-alt:  #f3f2ee   /* alternate sections */
--color-text:         #141413   /* primary text — 16.7:1 on bg */
--color-text-muted:   #5e5d59   /* secondary — 7.2:1 on bg */
--color-dark-bg:      #0f2318   /* footer/dark sections */
--color-dark-text:    #f0ede4   /* text on dark — 13.4:1 */
--color-focus:        #3898ec   /* keyboard focus rings */
```

All text/background pairings verified WCAG AA (≥4.5:1 body, ≥3:1 large text).

---

## Typography

- **Display:** Playfair Display — headings (h1–h2), elegant serif
- **Body:** DM Sans — all body copy, labels, UI text
- h1: 80px desktop / 48px tablet / 36px mobile
- Section h2: 40px desktop / 32px mobile
- Body: 16px base, 18px lead paragraphs

---

## Sections

### 1. Navbar
- Logo: "BIHUB HOMES" in Playfair Display, `--color-brand`
- Links: Buy · Rent · Sell · About · Services · Home Loans (anchor hrefs)
- CTA: "Contact Us" button, gold accent, `min-height: 44px`
- Sticky: drops shadow after 80px scroll via scroll event
- Mobile: hamburger with `aria-expanded` / `aria-controls`, Escape closes menu

### 2. Hero
- Full-viewport background image (Unsplash, `priority` load)
- Dark overlay rgba(0,0,0,0.45) for contrast
- h1: "We Build Community" — Playfair Display, white
- Search bar: location input + 3 selects (Where / When / Property) + Search button
- Tab row: Architecture · House · Commercial (`role="tablist"`)
- Bottom card: "Find a home that suits your budget" with arrow CTA

### 3. Stats
- 2-column layout: headline + description left, 2×2 stat grid right
- Dark cards (top row): 18k+ Satisfied Customers · 17k+ Total Partners
- Light cards (bottom row): 13+ Years of Experience · 14k+ Property Available
- StatCard: `aria-label` combines value + label for screen readers

### 4. Trusted Partners
- h2 + paragraph
- 4 SVG placeholder logos in a flex row, each with `aria-label`

### 5. Services
- Filter tabs: Commercial · Property · House · Short · Apartment (`role="tablist"`)
- 3 ServiceCard components: Buy a Home · Sell a Home · Rent a Home
- Each card: Unsplash image (lazy), h3, description, "View Details" link with sr-only context

### 6. Home Loans
- Light gray section (`--color-surface-alt`)
- h2: "Why Bihub Homes Home Loans?"
- 3 feature columns with Lucide icons: Users · TrendingDown · PiggyBank
- "See all Loan Pricing →" link

### 7. Property Gallery
- h2 + horizontally scrollable row of 5 property cards
- Left/right arrow buttons: `aria-label="Previous properties"` / `"Next properties"`
- Disabled state at scroll boundaries
- Touch/swipe works natively via CSS `overflow-x: auto`

### 8. Testimonials
- h2: "See what our customers are saying"
- Social proof stat: "700 million+ people"
- 2×2 grid (desktop), 1-col (mobile) of TestimonialCard components
- Star ratings: visually rendered stars + `aria-label="Rated X out of 5 stars"`

### 9. Contact Form
- Split layout: form (left) + map placeholder (right)
- Fields: First Name · Last Name · Email · Phone · Message
- All inputs: visible `<label>`, `htmlFor`, `aria-required`, `autocomplete`
- Error state: `aria-invalid` + `role="alert"` error message
- Success: `aria-live="polite"` announces "Message sent successfully"
- Submit: full-width, gold, `aria-busy` during loading state
- Map: static image with descriptive alt text

### 10. Footer
- Dark background (`--color-dark-bg`)
- Logo + email address
- 3 nav columns: Service · Help · About (each `<nav aria-label="...">`)
- Copyright bar

---

## Accessibility Requirements (Non-negotiable)

- Skip nav link is first focusable element on every page
- One `<h1>` per page, logical h2→h3 hierarchy
- Every section has `aria-labelledby` pointing to its heading
- Focus rings: `3px solid #3898ec`, `outline-offset: 2px` — never removed
- All images: meaningful alt or `alt=""` + `aria-hidden="true"` if decorative
- Touch targets: minimum 44×44px
- No `user-scalable=no` — pinch zoom must work
- Mobile readable at 320px without horizontal scroll

---

## Static Data (lib/demo-data.ts)

- `stats[]` — 4 items
- `services[]` — 3 items (Buy, Sell, Rent) with Unsplash URLs
- `loanFeatures[]` — 3 items with Lucide icon names
- `properties[]` — 5 items with Unsplash URLs
- `testimonials[]` — 4 items with avatar Unsplash URLs
- `partnerLogos[]` — 4 SVG placeholder entries

---

## Responsive Breakpoints

```
base:  320px  (mobile-first)
sm:    640px
md:    768px
lg:    1024px
xl:    1280px
```

3-col grids → 2-col at md → 1-col at sm.  
Hero text scales 80px → 48px → 36px.

---

## Out of Scope

- Authentication / user accounts
- Real property search API
- Dark mode toggle (CSS vars are set up for it but not wired)
- Multi-page routing
- CMS integration
