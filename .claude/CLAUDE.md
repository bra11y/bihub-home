# Bihub Homes Real Estate - Claude Code Context

## Project Overview

**Bihub Homes** is an accessibility-first real estate website demo.
Built to showcase how a modern property platform can be both visually stunning and universally usable.

> "Accessibility is not a feature. It is a social trend." - Antonio Santos

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + CSS custom properties
- **Images**: Unsplash API (free, no auth needed for demo)
- **Icons**: Lucide React
- **Fonts**: Google Fonts - `Playfair Display` (headings) + `DM Sans` (body)
- **Accessibility**: WCAG 2.2 AA compliant throughout

---

## Project Structure

```
bihub-homes/
├── app/
│   ├── layout.tsx          # Root layout with skip nav + fonts
│   ├── page.tsx            # Home page (all sections)
│   └── globals.css         # Design tokens + base styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── TrustedPartners.tsx
│   │   ├── Services.tsx
│   │   ├── HomeLoans.tsx
│   │   ├── PropertyGallery.tsx
│   │   ├── Testimonials.tsx
│   │   └── ContactForm.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── StatCard.tsx
│       └── SearchBar.tsx
├── public/
│   └── images/             # Local fallback images
└── lib/
    └── unsplash.ts         # Image helper with alt text
```

---

## Design Tokens (CSS Custom Properties)

```css
:root {
  /* Brand Colors */
  --color-brand:        #1a3c2e;   /* Deep forest green - primary */
  --color-brand-light:  #2d6a4f;   /* Mid green - hover states */
  --color-accent:       #c9a84c;   /* Gold - CTAs, highlights */
  --color-accent-dark:  #a8813a;   /* Darker gold - hover */

  /* Neutrals */
  --color-bg:           #fafaf8;   /* Off-white background */
  --color-surface:      #ffffff;   /* Card surfaces */
  --color-surface-alt:  #f3f2ee;   /* Alternate section bg */
  --color-text:         #141413;   /* Primary text */
  --color-text-muted:   #5e5d59;   /* Secondary text */
  --color-border:       #e8e6df;   /* Borders */

  /* Dark variant */
  --color-dark-bg:      #0f2318;   /* Dark section background */
  --color-dark-surface: #1a3c2e;   /* Dark cards */
  --color-dark-text:    #f0ede4;   /* Text on dark bg */

  /* Semantic */
  --color-focus:        #3898ec;   /* Focus rings - keyboard nav */
  --color-error:        #d62828;   /* Error states */
  --color-success:      #2d6a4f;   /* Success states */

  /* Typography */
  --font-display:       'Playfair Display', Georgia, serif;
  --font-body:          'DM Sans', system-ui, sans-serif;

  /* Spacing scale */
  --space-xs:   0.25rem;   /* 4px */
  --space-sm:   0.5rem;    /* 8px */
  --space-md:   1rem;      /* 16px */
  --space-lg:   1.5rem;    /* 24px */
  --space-xl:   2rem;      /* 32px */
  --space-2xl:  3rem;      /* 48px */
  --space-3xl:  4rem;      /* 64px */

  /* Border radius */
  --radius-sm:   6px;
  --radius-md:   12px;
  --radius-lg:   20px;
  --radius-full: 9999px;
}
```

---

## Accessibility Rules (Non-negotiable)

### The First Rule of ARIA
> Use native HTML elements whenever possible. Add ARIA only when native semantics fall short.

### Mandatory Patterns

```tsx
// CORRECT - semantic button
<button type="button" onClick={handleSearch}>
  Search Properties
</button>

// WRONG - never do this
<div onClick={handleSearch}>Search Properties</div>
```

### Every Component Must Have

- [ ] Semantic HTML element (`<button>`, `<nav>`, `<main>`, `<section>`, `<article>`)
- [ ] Visible focus ring - never `outline: none` without replacement
- [ ] Color contrast - min 4.5:1 for normal text, 3:1 for large text (18px+)
- [ ] All images: meaningful `alt` text OR `alt=""` if decorative
- [ ] Form inputs: `<label>` associated via `htmlFor`
- [ ] Keyboard navigable - Tab, Enter, Space, Escape where relevant
- [ ] Touch targets: minimum 44x44px on mobile

### Landmarks Structure (every page)

```html
<a href="#main-content" class="skip-nav">Skip to main content</a>
<header role="banner">     <!-- Navbar -->
<main id="main-content">   <!-- Page content -->
  <section aria-labelledby="hero-heading">
  <section aria-labelledby="stats-heading">
  <!-- etc. -->
</main>
<footer role="contentinfo"> <!-- Footer -->
```

### Live Regions

```tsx
// Search results update - announce to screen readers
<div aria-live="polite" aria-atomic="true" className="sr-only">
  {resultCount} properties found
</div>
```

---

## Image Strategy (Unsplash - No API Key Needed)

Use Unsplash Source URLs directly in `<img>` tags:

```tsx
// Property hero image
<img
  src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1400&q=80"
  alt="Modern two-story home with large windows and manicured lawn"
  width={1400}
  height={800}
/>

// Property card thumbnails (consistent category)
const propertyImages = [
  {
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
    alt: "Spacious suburban house with covered porch"
  },
  {
    src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80",
    alt: "Contemporary apartment with open floor plan"
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    alt: "Luxury villa with private pool and garden"
  },
]
```

**Rule**: Every `alt` text must describe the scene for someone who cannot see it.

---

## Section-by-Section Build Guide

### 1. Navbar
- Sticky on scroll (add `shadow` class after 80px scroll)
- Mobile: hamburger with `aria-expanded`, `aria-controls`
- Links: `Buy`, `Rent`, `Sell`, `About`, `Services`, `Home Loans`
- CTA: `Contact Us` button - gold accent color

### 2. Hero Section
- Full-width background image (property photo)
- Headline: `We Build Community` (Playfair Display, large)
- Subtext: value proposition
- Search bar: location input + filter dropdowns + search button
- Tab filters: Architecture / House / Commercial
- Bottom CTA card: "Find a home that suits your budget"

### 3. Stats Section (2-column layout)
- Left: headline + description
- Right: 2x2 stat grid
  - `18k+` Satisfied Customers (dark card)
  - `17k+` Total Partners (dark card)
  - `13+` Years of Experience
  - `14k+` Property Available

### 4. Trusted Partners
- Headline + paragraph
- Logo row: 4 partner logos (use SVG placeholders)

### 5. Services Section
- 3-column card grid: Buy a home, Sell a home, Rent a home
- Each card: property image, title, description, `View Details` link
- Filter tabs: Commercial / Property / House / Short / Apartment

### 6. Home Loans Section
- Centered headline `Why Bihub Homes Home Loans?`
- 3 feature columns with icons:
  - Top-rated loan officers help
  - Competitive rates
  - Low down payment options
- `See all Loan Pricing →` link

### 7. Property Gallery
- Horizontal scroll card gallery
- 5 cards with property images
- Each: image, title, description snippet
- Navigation arrows (left/right)

### 8. Testimonials
- Heading: `See what our customers are saying`
- Social proof: `700 million+ people` stat
- 4 testimonial cards: photo, name, role, star rating, text

### 9. Contact Form
- Split layout: form left, map right
- Fields: First Name, Last Name, Email, Phone, Message
- Submit button: full-width, gold accent
- Map: embed Google Maps placeholder

### 10. Footer
- Dark background (`--color-dark-bg`)
- Logo + email
- 3 link columns: Service, Help, About
- Bottom bar: copyright

---

## Code Style Rules

```tsx
// Component naming: PascalCase
export default function HeroSection() {}

// Props: typed with TypeScript interface
interface StatCardProps {
  value: string
  label: string
  isDark?: boolean
}

// CSS: Tailwind classes + CSS variables for brand tokens
// Never hardcode hex values in JSX - use CSS variables

// Semantic HTML first, Tailwind for layout/spacing
<section
  aria-labelledby="services-heading"
  className="py-16 bg-[var(--color-surface-alt)]"
>
  <h2 id="services-heading" className="font-display text-4xl">
    Expert Services
  </h2>
</section>
```

---

## Performance Notes

- Use `next/image` for automatic optimization
- Lazy load property cards below the fold
- Preload hero image (`priority` prop on hero `<Image>`)
- No layout shift - set explicit `width` and `height` on all images

---

## Demo Data

All content is static for this demo. No API calls needed.
Images come from Unsplash URLs (always available, no rate limits for demo use).
Stats, testimonials, and property listings are hardcoded in `/lib/demo-data.ts`.

---

## Commands

```bash
# Install
npx create-next-app@latest bihub-homes --typescript --tailwind --app

# Dev
npm run dev

# Build
npm run build
```
