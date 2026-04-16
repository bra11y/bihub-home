# Bihub Homes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the complete Bihub Homes real estate demo — a 10-section single-page Next.js 14 site that is WCAG 2.2 AA compliant throughout.

**Architecture:** Single `app/page.tsx` composes all section components in order; root layout provides skip-nav, landmark structure, and Google Fonts. All data is static in `lib/demo-data.ts`. Interactive sections are Client Components; static sections are Server Components.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide React, next/font/google (Playfair Display + DM Sans), Unsplash image URLs, Jest + React Testing Library + jest-axe

---

## File Map

| File | Role |
|------|------|
| `bihub-homes/app/layout.tsx` | Root layout — skip nav, fonts, meta, landmark wrappers |
| `bihub-homes/app/page.tsx` | Home page — composes all sections |
| `bihub-homes/app/globals.css` | Design tokens, reset, focus ring, skip nav |
| `bihub-homes/tailwind.config.ts` | Font family extension |
| `bihub-homes/next.config.ts` | Unsplash remote image pattern |
| `bihub-homes/lib/demo-data.ts` | All static content arrays |
| `bihub-homes/components/ui/StatCard.tsx` | Reusable stat display card |
| `bihub-homes/components/layout/Navbar.tsx` | Sticky nav, mobile hamburger (Client) |
| `bihub-homes/components/layout/Footer.tsx` | Dark footer, 3-col links |
| `bihub-homes/components/sections/Hero.tsx` | Full-bleed hero, search, tab filters (Client) |
| `bihub-homes/components/sections/Stats.tsx` | 2-col stat section |
| `bihub-homes/components/sections/TrustedPartners.tsx` | Logo row |
| `bihub-homes/components/sections/Services.tsx` | Filter tabs + 3-col service cards (Client) |
| `bihub-homes/components/sections/HomeLoans.tsx` | Icon feature columns |
| `bihub-homes/components/sections/PropertyGallery.tsx` | Horizontal scroll gallery (Client) |
| `bihub-homes/components/sections/Testimonials.tsx` | 4 testimonial cards |
| `bihub-homes/components/sections/ContactForm.tsx` | Form + map, validation (Client) |
| `bihub-homes/__tests__/StatCard.test.tsx` | StatCard unit + a11y |
| `bihub-homes/__tests__/Navbar.test.tsx` | Nav keyboard + mobile toggle |
| `bihub-homes/__tests__/Hero.test.tsx` | Tab filter, search, a11y |
| `bihub-homes/__tests__/Services.test.tsx` | Filter tab panel pattern |
| `bihub-homes/__tests__/PropertyGallery.test.tsx` | Arrow button states |
| `bihub-homes/__tests__/ContactForm.test.tsx` | Validation, success state |

---

## Task 1: Project Scaffolding

**Files:**
- Create: `bihub-homes/` (Next.js project root)
- Modify: `bihub-homes/next.config.ts`
- Modify: `bihub-homes/tailwind.config.ts`

- [ ] **Step 1: Scaffold the project**

Run from `/Users/mac/Vibecodder/`:
```bash
npx create-next-app@latest bihub-homes \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir \
  --import-alias "@/*" \
  --no-git
```
Answer prompts: TypeScript → Yes, ESLint → Yes, Tailwind → Yes, src/ → No, App Router → Yes, alias → Yes (@/*)

- [ ] **Step 2: Install dependencies**

```bash
cd bihub-homes
npm install lucide-react
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-axe @types/jest @types/jest-axe
```

Expected: Clean install, no peer dep warnings.

- [ ] **Step 3: Configure next.config.ts for Unsplash images**

Replace the content of `bihub-homes/next.config.ts`:
```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
```

- [ ] **Step 4: Extend tailwind.config.ts with font families**

Replace the content of `bihub-homes/tailwind.config.ts`:
```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 5: Commit**

```bash
git init && git add .
git commit -m "feat: scaffold bihub-homes Next.js 14 project"
```

---

## Task 2: Testing Infrastructure

**Files:**
- Create: `bihub-homes/jest.config.ts`
- Create: `bihub-homes/jest.setup.ts`
- Create: `bihub-homes/__mocks__/next/font/google.js`

- [ ] **Step 1: Create jest.config.ts**

```ts
// bihub-homes/jest.config.ts
import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const customConfig: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterFramework: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}

export default createJestConfig(customConfig)
```

- [ ] **Step 2: Create jest.setup.ts**

```ts
// bihub-homes/jest.setup.ts
import '@testing-library/jest-dom'
```

- [ ] **Step 3: Mock next/font/google**

Create the directory and file:
```bash
mkdir -p bihub-homes/__mocks__/next/font
```

```js
// bihub-homes/__mocks__/next/font/google.js
module.exports = {
  Playfair_Display: () => ({
    variable: '--font-display',
    className: 'mock-playfair',
  }),
  DM_Sans: () => ({
    variable: '--font-body',
    className: 'mock-dm-sans',
  }),
}
```

- [ ] **Step 4: Add test script to package.json**

In `bihub-homes/package.json`, ensure scripts includes:
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

- [ ] **Step 5: Verify test runner works**

```bash
cd bihub-homes && npx jest --passWithNoTests
```
Expected: `Test Suites: 0 passed`, exit code 0.

- [ ] **Step 6: Commit**

```bash
git add jest.config.ts jest.setup.ts __mocks__ package.json
git commit -m "feat: add Jest + RTL + jest-axe testing infrastructure"
```

---

## Task 3: Design Tokens & Global CSS

**Files:**
- Modify: `bihub-homes/app/globals.css`

- [ ] **Step 1: Replace globals.css with design tokens and base styles**

```css
/* bihub-homes/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Brand */
    --color-brand:        #1a3c2e;
    --color-brand-light:  #2d6a4f;
    --color-accent:       #c9a84c;
    --color-accent-dark:  #a8813a;

    /* Neutrals */
    --color-bg:           #fafaf8;
    --color-surface:      #ffffff;
    --color-surface-alt:  #f3f2ee;
    --color-text:         #141413;
    --color-text-muted:   #5e5d59;
    --color-border:       #e8e6df;

    /* Dark variant */
    --color-dark-bg:      #0f2318;
    --color-dark-surface: #1a3c2e;
    --color-dark-text:    #f0ede4;

    /* Semantic */
    --color-focus:        #3898ec;
    --color-error:        #d62828;
    --color-success:      #2d6a4f;

    /* Typography fallbacks (overridden by next/font CSS vars) */
    --font-display: 'Playfair Display', Georgia, serif;
    --font-body:    'DM Sans', system-ui, sans-serif;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-body);
    background-color: var(--color-bg);
    color: var(--color-text);
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  /* Global focus ring — never remove without replacement */
  *:focus-visible {
    outline: 3px solid var(--color-focus);
    outline-offset: 2px;
    border-radius: 4px;
  }

  /* Skip nav — visually hidden until focused */
  .skip-nav {
    position: absolute;
    left: -9999px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
  .skip-nav:focus {
    position: fixed;
    top: 1rem;
    left: 1rem;
    width: auto;
    height: auto;
    overflow: visible;
    background: var(--color-brand);
    color: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-weight: 500;
    z-index: 9999;
    text-decoration: none;
  }

  /* Hide scrollbar for gallery while keeping scroll */
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
}
```

- [ ] **Step 2: Verify Tailwind compiles**

```bash
cd bihub-homes && npm run build 2>&1 | head -20
```
Expected: No CSS errors in output.

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: add design tokens and global CSS base styles"
```

---

## Task 4: Demo Data

**Files:**
- Create: `bihub-homes/lib/demo-data.ts`
- Create: `bihub-homes/__tests__/demo-data.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
// bihub-homes/__tests__/demo-data.test.ts
import { stats, services, loanFeatures, properties, testimonials, partnerLogos } from '@/lib/demo-data'

describe('demo-data', () => {
  it('exports 4 stats', () => {
    expect(stats).toHaveLength(4)
    stats.forEach(s => {
      expect(s).toHaveProperty('value')
      expect(s).toHaveProperty('label')
      expect(typeof s.isDark).toBe('boolean')
    })
  })

  it('exports 3 services each with image URL and alt', () => {
    expect(services).toHaveLength(3)
    services.forEach(s => {
      expect(s.imageSrc).toMatch(/^https:\/\/images\.unsplash\.com/)
      expect(s.imageAlt.length).toBeGreaterThan(10)
    })
  })

  it('exports 3 loanFeatures each with an icon name', () => {
    expect(loanFeatures).toHaveLength(3)
    loanFeatures.forEach(f => expect(typeof f.icon).toBe('string'))
  })

  it('exports 5 properties each with price', () => {
    expect(properties).toHaveLength(5)
    properties.forEach(p => expect(p.price).toBeTruthy())
  })

  it('exports 4 testimonials each with rating 1-5', () => {
    expect(testimonials).toHaveLength(4)
    testimonials.forEach(t => {
      expect(t.rating).toBeGreaterThanOrEqual(1)
      expect(t.rating).toBeLessThanOrEqual(5)
    })
  })

  it('exports 4 partnerLogos', () => {
    expect(partnerLogos).toHaveLength(4)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd bihub-homes && npx jest __tests__/demo-data.test.ts
```
Expected: FAIL — "Cannot find module '@/lib/demo-data'"

- [ ] **Step 3: Create lib/demo-data.ts**

```bash
mkdir -p bihub-homes/lib
```

```ts
// bihub-homes/lib/demo-data.ts

export const stats = [
  { value: '18k+', label: 'Satisfied Customers', isDark: true },
  { value: '17k+', label: 'Total Partners', isDark: true },
  { value: '13+', label: 'Years of Experience', isDark: false },
  { value: '14k+', label: 'Property Available', isDark: false },
]

export const services = [
  {
    title: 'Buy a Home',
    description:
      'Find your dream home from our extensive listings. We guide you through every step of the buying process with expert support.',
    href: '#contact',
    imageSrc: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
    imageAlt: 'Charming two-story house with covered porch and green lawn',
  },
  {
    title: 'Sell a Home',
    description:
      'Get the best value for your property with our expert agents and proven marketing strategies that attract serious buyers.',
    href: '#contact',
    imageSrc: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    imageAlt: 'Contemporary villa with floor-to-ceiling windows and pool',
  },
  {
    title: 'Rent a Home',
    description:
      'Explore quality rental properties that fit your lifestyle and budget in prime locations across the city.',
    href: '#contact',
    imageSrc: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80',
    imageAlt: 'Minimalist apartment interior with open living and dining area',
  },
]

export const loanFeatures = [
  {
    icon: 'Users',
    title: 'Top-Rated Loan Officers',
    description:
      'Our certified loan officers are rated #1 in customer satisfaction, guiding you every step of the way.',
  },
  {
    icon: 'TrendingDown',
    title: 'Competitive Rates',
    description:
      'We shop multiple lenders to ensure you get the lowest possible rate for your specific situation.',
  },
  {
    icon: 'PiggyBank',
    title: 'Low Down Payment Options',
    description:
      'Start your homeownership journey with as little as 3% down through our flexible loan programs.',
  },
]

export const properties = [
  {
    title: 'Willow Creek Estate',
    description: 'A stunning 4-bed family home nestled in a quiet cul-de-sac with a spacious backyard.',
    price: '$485,000',
    imageSrc: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
    imageAlt: 'Charming two-story house with covered porch and green lawn',
  },
  {
    title: 'Azure Heights Villa',
    description: 'Modern villa with panoramic views, private pool, and designer interiors throughout.',
    price: '$1,200,000',
    imageSrc: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    imageAlt: 'Contemporary villa with floor-to-ceiling windows and pool',
  },
  {
    title: 'The Meridian Loft',
    description: 'Open-plan city apartment perfect for professionals. Walking distance to transit.',
    price: '$320,000',
    imageSrc: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80',
    imageAlt: 'Minimalist apartment interior with open living and dining area',
  },
  {
    title: 'Oakwood Manor',
    description: 'Grand estate on 2 acres with a circular driveway, guesthouse, and manicured grounds.',
    price: '$2,400,000',
    imageSrc: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    imageAlt: 'Luxury estate with manicured garden and circular driveway',
  },
  {
    title: 'Bluebell Cottage',
    description: 'Charming 3-bed home with a flowering garden and bright, airy rooms throughout.',
    price: '$395,000',
    imageSrc: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
    imageAlt: 'Bright suburban home with blue shutters and flowering garden',
  },
]

export const testimonials = [
  {
    name: 'John D.',
    role: 'First-Time Buyer',
    rating: 5,
    text: 'Bihub Homes made our first home purchase effortless. The team was with us every step of the way and we got an incredible deal.',
    avatarSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
    avatarAlt: 'John D., a satisfied Bihub Homes customer, smiling headshot',
  },
  {
    name: 'Jessie Hike',
    role: 'Property Investor',
    rating: 5,
    text: 'I have worked with many agencies, but none match the professionalism and market knowledge that Bihub Homes brings to the table.',
    avatarSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
    avatarAlt: 'Jessie Hike, happy Bihub Homes customer, smiling headshot',
  },
  {
    name: 'Emily G.',
    role: 'Home Seller',
    rating: 5,
    text: 'Sold my house above asking price in just 12 days. The marketing strategy was outstanding — highly recommend to anyone selling.',
    avatarSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80',
    avatarAlt: 'Emily G., Bihub Homes customer, professional headshot',
  },
  {
    name: 'Sarah L.',
    role: 'Renter',
    rating: 4,
    text: 'Found my perfect apartment in under a week. The listings are accurate and the team is incredibly responsive.',
    avatarSrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
    avatarAlt: 'Sarah L., Bihub Homes customer, friendly headshot',
  },
]

export const partnerLogos = [
  { name: 'BuildRight Co.', id: 'buildright' },
  { name: 'HomeFirst Bank', id: 'homefirst' },
  { name: 'Urban Realty Group', id: 'urban' },
  { name: 'Keystone Finance', id: 'keystone' },
]
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd bihub-homes && npx jest __tests__/demo-data.test.ts
```
Expected: PASS — 6 tests pass.

- [ ] **Step 5: Commit**

```bash
git add lib/demo-data.ts __tests__/demo-data.test.ts
git commit -m "feat: add static demo data and passing tests"
```

---

## Task 5: StatCard UI Component

**Files:**
- Create: `bihub-homes/components/ui/StatCard.tsx`
- Create: `bihub-homes/__tests__/StatCard.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// bihub-homes/__tests__/StatCard.test.tsx
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import StatCard from '@/components/ui/StatCard'

expect.extend(toHaveNoViolations)

describe('StatCard', () => {
  it('renders value and label', () => {
    render(<StatCard value="18k+" label="Satisfied Customers" />)
    expect(screen.getByText('18k+')).toBeInTheDocument()
    expect(screen.getByText('Satisfied Customers')).toBeInTheDocument()
  })

  it('provides combined aria-label for screen readers', () => {
    render(<StatCard value="18k+" label="Satisfied Customers" />)
    expect(screen.getByLabelText('18k+ Satisfied Customers')).toBeInTheDocument()
  })

  it('applies dark styles when isDark is true', () => {
    const { container } = render(<StatCard value="17k+" label="Total Partners" isDark />)
    expect(container.firstChild).toHaveClass('bg-[var(--color-dark-surface)]')
  })

  it('has no axe violations', async () => {
    const { container } = render(<StatCard value="13+" label="Years of Experience" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd bihub-homes && npx jest __tests__/StatCard.test.tsx
```
Expected: FAIL — "Cannot find module '@/components/ui/StatCard'"

- [ ] **Step 3: Create the component**

```bash
mkdir -p bihub-homes/components/ui
```

```tsx
// bihub-homes/components/ui/StatCard.tsx
interface StatCardProps {
  value: string
  label: string
  isDark?: boolean
}

export default function StatCard({ value, label, isDark = false }: StatCardProps) {
  return (
    <div
      className={`rounded-2xl p-8 flex flex-col gap-2 ${
        isDark
          ? 'bg-[var(--color-dark-surface)] text-[var(--color-dark-text)]'
          : 'bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border)]'
      }`}
    >
      <p
        className="font-display text-4xl font-semibold"
        aria-label={`${value} ${label}`}
      >
        <span aria-hidden="true">{value}</span>
      </p>
      <p
        className={`text-sm ${
          isDark ? 'text-[var(--color-dark-text)]/75' : 'text-[var(--color-text-muted)]'
        }`}
        aria-hidden="true"
      >
        {label}
      </p>
    </div>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd bihub-homes && npx jest __tests__/StatCard.test.tsx
```
Expected: PASS — 4 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/ui/StatCard.tsx __tests__/StatCard.test.tsx
git commit -m "feat: add accessible StatCard component"
```

---

## Task 6: Navbar

**Files:**
- Create: `bihub-homes/components/layout/Navbar.tsx`
- Create: `bihub-homes/__tests__/Navbar.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// bihub-homes/__tests__/Navbar.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe, toHaveNoViolations } from 'jest-axe'
import Navbar from '@/components/layout/Navbar'

expect.extend(toHaveNoViolations)

describe('Navbar', () => {
  it('renders logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('BIHUB HOMES')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    const links = ['Buy', 'Rent', 'Sell', 'About', 'Services', 'Home Loans']
    links.forEach(label => {
      expect(screen.getAllByText(label)[0]).toBeInTheDocument()
    })
  })

  it('hamburger button opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open navigation menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('Escape key closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open navigation menu/i })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.keyboard('{Escape}')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('has no axe violations', async () => {
    const { container } = render(<Navbar />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd bihub-homes && npx jest __tests__/Navbar.test.tsx
```
Expected: FAIL — "Cannot find module '@/components/layout/Navbar'"

- [ ] **Step 3: Create the component**

```bash
mkdir -p bihub-homes/components/layout
```

```tsx
// bihub-homes/components/layout/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Buy', href: '#services' },
  { label: 'Rent', href: '#services' },
  { label: 'Sell', href: '#services' },
  { label: 'About', href: '#stats' },
  { label: 'Services', href: '#services' },
  { label: 'Home Loans', href: '#loans' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
        document.getElementById('menu-toggle')?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 bg-[var(--color-surface)] transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="font-display text-xl font-semibold text-[var(--color-brand)]"
            aria-label="Bihub Homes — return to top"
          >
            BIHUB HOMES
          </a>

          <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-brand)] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-accent)] text-[var(--color-dark-bg)] text-sm font-medium hover:bg-[var(--color-accent-dark)] transition-colors min-h-[44px]"
            >
              Contact Us
            </a>

            <button
              id="menu-toggle"
              type="button"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden p-2 text-[var(--color-text)] min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-[var(--color-surface-alt)] transition-colors"
            >
              {isOpen
                ? <X size={24} aria-hidden="true" />
                : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          hidden={!isOpen}
          aria-label="Mobile navigation links"
          className="md:hidden border-t border-[var(--color-border)] py-4"
        >
          <ul className="flex flex-col gap-1 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-brand)] py-3 px-2 min-h-[44px] rounded-lg hover:bg-[var(--color-surface-alt)] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-accent)] text-[var(--color-dark-bg)] text-sm font-medium hover:bg-[var(--color-accent-dark)] min-h-[44px]"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd bihub-homes && npx jest __tests__/Navbar.test.tsx
```
Expected: PASS — 5 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/layout/Navbar.tsx __tests__/Navbar.test.tsx
git commit -m "feat: add accessible sticky Navbar with mobile hamburger"
```

---

## Task 7: Footer

**Files:**
- Create: `bihub-homes/components/layout/Footer.tsx`

- [ ] **Step 1: Create the component**

```tsx
// bihub-homes/components/layout/Footer.tsx
const serviceLinks = ['Property Listing', 'Home Loans', 'Market Analysis', 'Legal Services']
const helpLinks = ['Help Center', 'FAQ', 'Privacy Policy', 'Terms of Service']
const aboutLinks = ['About Us', 'Our Team', 'Careers', 'Press']

export default function Footer() {
  return (
    <div className="bg-[var(--color-dark-bg)] text-[var(--color-dark-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <p className="font-display text-xl font-semibold text-[var(--color-dark-text)] mb-3">
              BIHUB HOMES
            </p>
            <a
              href="mailto:hello@bihubhomes.com"
              className="text-sm text-[var(--color-dark-text)]/70 hover:text-[var(--color-accent)] transition-colors"
            >
              hello@bihubhomes.com
            </a>
          </div>

          <nav aria-label="Service links">
            <h3 className="font-medium text-[var(--color-dark-text)] mb-4 text-sm uppercase tracking-wide">
              Service
            </h3>
            <ul className="space-y-3 list-none m-0 p-0">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[var(--color-dark-text)]/70 hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Help links">
            <h3 className="font-medium text-[var(--color-dark-text)] mb-4 text-sm uppercase tracking-wide">
              Help
            </h3>
            <ul className="space-y-3 list-none m-0 p-0">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[var(--color-dark-text)]/70 hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="About links">
            <h3 className="font-medium text-[var(--color-dark-text)] mb-4 text-sm uppercase tracking-wide">
              About
            </h3>
            <ul className="space-y-3 list-none m-0 p-0">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[var(--color-dark-text)]/70 hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-sm text-[var(--color-dark-text)]/50 text-center">
            © {new Date().getFullYear()} Bihub Homes. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/layout/Footer.tsx
git commit -m "feat: add dark Footer with 3-column navigation"
```

---

## Task 8: Root Layout

**Files:**
- Modify: `bihub-homes/app/layout.tsx`

- [ ] **Step 1: Replace app/layout.tsx**

```tsx
// bihub-homes/app/layout.tsx
import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bihub Homes — We Build Community',
  description:
    'Discover luxury properties, expert agents, and competitive home loans with Bihub Homes.',
  openGraph: {
    title: 'Bihub Homes — We Build Community',
    description:
      'Discover luxury properties, expert agents, and competitive home loans with Bihub Homes.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-body bg-[var(--color-bg)] text-[var(--color-text)]">
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <header role="banner">
          <Navbar />
        </header>
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <footer role="contentinfo">
          <Footer />
        </footer>
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Delete the default Next.js page content**

Replace `bihub-homes/app/page.tsx` with a placeholder so the build doesn't error:
```tsx
// bihub-homes/app/page.tsx
export default function HomePage() {
  return <div />
}
```

- [ ] **Step 3: Verify dev server starts**

```bash
cd bihub-homes && npm run dev &
sleep 5 && curl -s http://localhost:3000 | grep -i "bihub" | head -3
```
Expected: Lines containing "Bihub Homes" in the HTML output.

Kill the dev server: `kill %1`

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx app/page.tsx
git commit -m "feat: add root layout with skip nav, fonts, and landmark structure"
```

---

## Task 9: Hero Section

**Files:**
- Create: `bihub-homes/components/sections/Hero.tsx`
- Create: `bihub-homes/__tests__/Hero.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// bihub-homes/__tests__/Hero.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe, toHaveNoViolations } from 'jest-axe'
import HeroSection from '@/components/sections/Hero'

expect.extend(toHaveNoViolations)

describe('HeroSection', () => {
  it('renders the h1 heading', () => {
    render(<HeroSection />)
    expect(screen.getByRole('heading', { level: 1, name: /we build community/i })).toBeInTheDocument()
  })

  it('renders the search form with labelled inputs', () => {
    render(<HeroSection />)
    expect(screen.getByRole('combobox', { name: /when/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /property/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search properties/i })).toBeInTheDocument()
  })

  it('switches active tab on click', async () => {
    const user = userEvent.setup()
    render(<HeroSection />)
    const houseTab = screen.getByRole('tab', { name: /house/i })
    await user.click(houseTab)
    expect(houseTab).toHaveAttribute('aria-selected', 'true')
  })

  it('announces search results to screen readers', async () => {
    const user = userEvent.setup()
    render(<HeroSection />)
    const searchBtn = screen.getByRole('button', { name: /search properties/i })
    await user.click(searchBtn)
    expect(screen.getByText(/properties found/i)).toBeInTheDocument()
  })

  it('has no axe violations', async () => {
    const { container } = render(<HeroSection />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd bihub-homes && npx jest __tests__/Hero.test.tsx
```
Expected: FAIL — "Cannot find module '@/components/sections/Hero'"

- [ ] **Step 3: Create the component**

```bash
mkdir -p bihub-homes/components/sections
```

```tsx
// bihub-homes/components/sections/Hero.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search, MapPin, ArrowRight } from 'lucide-react'

const tabFilters = ['Architecture', 'House', 'Commercial']

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [resultCount, setResultCount] = useState<number | null>(null)

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    setResultCount(24)
  }

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      <Image
        src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&q=85"
        alt=""
        aria-hidden="true"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex-1 flex flex-col justify-center">
        <h1
          id="hero-heading"
          className="font-display text-5xl sm:text-6xl lg:text-8xl font-semibold text-white leading-tight mb-6"
        >
          We Build
          <br />
          <em className="italic">Community</em>
        </h1>

        <p className="text-white/85 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed">
          Welcome to a world where every luxury lifestyle is offered with panoramic ocean views from every room.
        </p>

        <form
          onSubmit={handleSearch}
          aria-label="Property search"
          className="bg-white rounded-2xl p-4 sm:p-5 max-w-3xl mb-6 shadow-xl"
        >
          <p className="text-sm font-medium text-[var(--color-text-muted)] mb-3">
            Search for the price you&apos;re looking for
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label htmlFor="location" className="sr-only">Location</label>
              <div className="flex items-center gap-2 border border-[var(--color-border)] rounded-xl px-3 min-h-[44px]">
                <MapPin size={16} className="text-[var(--color-text-muted)] shrink-0" aria-hidden="true" />
                <input
                  id="location"
                  type="text"
                  placeholder="Location..."
                  className="flex-1 text-sm outline-none bg-transparent py-2"
                  aria-label="Enter a city, neighborhood, or address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="when" className="sr-only">When</label>
              <select
                id="when"
                aria-label="When"
                className="border border-[var(--color-border)] rounded-xl px-3 py-2 text-sm text-[var(--color-text-muted)] outline-none min-h-[44px] w-full"
              >
                <option>When</option>
                <option>Now</option>
                <option>1–3 months</option>
                <option>3–6 months</option>
              </select>
            </div>

            <div>
              <label htmlFor="property-type" className="sr-only">Property type</label>
              <select
                id="property-type"
                aria-label="Property type"
                className="border border-[var(--color-border)] rounded-xl px-3 py-2 text-sm text-[var(--color-text-muted)] outline-none min-h-[44px] w-full"
              >
                <option>Property</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Commercial</option>
              </select>
            </div>

            <button
              type="submit"
              aria-label="Search properties"
              className="flex items-center justify-center gap-2 bg-[var(--color-brand)] text-white rounded-xl px-5 text-sm font-medium hover:bg-[var(--color-brand-light)] transition-colors min-h-[44px] whitespace-nowrap"
            >
              <Search size={16} aria-hidden="true" />
              Search
            </button>
          </div>
        </form>

        <div aria-live="polite" aria-atomic="true" className="sr-only">
          {resultCount !== null ? `${resultCount} properties found` : ''}
        </div>

        <div
          role="tablist"
          aria-label="Property category filter"
          className="flex gap-2 flex-wrap"
        >
          {tabFilters.map((tab, i) => (
            <button
              key={tab}
              role="tab"
              id={`hero-tab-${tab.toLowerCase()}`}
              aria-selected={activeTab === i}
              aria-controls={`hero-panel-${tab.toLowerCase()}`}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors min-h-[44px] ${
                activeTab === i
                  ? 'bg-[var(--color-accent)] text-[var(--color-dark-bg)]'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {tabFilters.map((tab, i) => (
          <div
            key={tab}
            role="tabpanel"
            id={`hero-panel-${tab.toLowerCase()}`}
            aria-labelledby={`hero-tab-${tab.toLowerCase()}`}
            hidden={activeTab !== i}
            className="sr-only"
          >
            {tab} properties
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full flex justify-end">
        <a
          href="#contact"
          className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-xl hover:shadow-2xl transition-shadow group max-w-xs"
        >
          <span className="font-medium text-[var(--color-text)] text-sm">
            Find a home that suits your budget
          </span>
          <span
            className="w-8 h-8 bg-[var(--color-brand)] rounded-full flex items-center justify-center group-hover:bg-[var(--color-brand-light)] transition-colors shrink-0"
            aria-hidden="true"
          >
            <ArrowRight size={14} className="text-white" />
          </span>
        </a>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd bihub-homes && npx jest __tests__/Hero.test.tsx
```
Expected: PASS — 5 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/sections/Hero.tsx __tests__/Hero.test.tsx
git commit -m "feat: add Hero section with accessible search bar and tab filters"
```

---

## Task 10: Stats Section

**Files:**
- Create: `bihub-homes/components/sections/Stats.tsx`

- [ ] **Step 1: Create the component**

```tsx
// bihub-homes/components/sections/Stats.tsx
import Image from 'next/image'
import { stats } from '@/lib/demo-data'
import StatCard from '@/components/ui/StatCard'

export default function StatsSection() {
  return (
    <section
      id="stats"
      aria-labelledby="stats-heading"
      className="py-20 bg-[var(--color-bg)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="stats-heading"
              className="font-display text-4xl sm:text-5xl font-semibold text-[var(--color-text)] mb-6 leading-tight"
            >
              Your Trusted Real Estate Advisors
            </h2>
            <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-8">
              Discover the options of luxury living in this offering sweeping panoramic ocean views from every room.
              We bring decades of expertise to every transaction.
            </p>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80"
                alt="Luxury estate with manicured garden and circular driveway, representing the quality of homes Bihub Homes offers"
                width={600}
                height={380}
                className="object-cover w-full rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Stats.tsx
git commit -m "feat: add Stats section with 2-column layout and stat grid"
```

---

## Task 11: Trusted Partners Section

**Files:**
- Create: `bihub-homes/components/sections/TrustedPartners.tsx`

- [ ] **Step 1: Create the component**

```tsx
// bihub-homes/components/sections/TrustedPartners.tsx
import { partnerLogos } from '@/lib/demo-data'

export default function TrustedPartnersSection() {
  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="py-16 bg-[var(--color-surface-alt)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2
            id="partners-heading"
            className="font-display text-3xl sm:text-4xl font-semibold text-[var(--color-text)] mb-4"
          >
            Trusted Partner in Exceptional Real Estate
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
            We work alongside industry-leading partners to bring you unmatched service, financing
            options, and market expertise at every step of your journey.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          {partnerLogos.map((logo) => (
            <div
              key={logo.id}
              role="img"
              aria-label={`${logo.name} — trusted partner`}
              className="flex items-center justify-center w-40 h-16 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-4 shadow-sm"
            >
              <span className="text-sm font-medium text-[var(--color-text-muted)]">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/TrustedPartners.tsx
git commit -m "feat: add TrustedPartners section with accessible logo row"
```

---

## Task 12: Services Section

**Files:**
- Create: `bihub-homes/components/sections/Services.tsx`
- Create: `bihub-homes/__tests__/Services.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// bihub-homes/__tests__/Services.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe, toHaveNoViolations } from 'jest-axe'
import ServicesSection from '@/components/sections/Services'

expect.extend(toHaveNoViolations)

describe('ServicesSection', () => {
  it('renders the section heading', () => {
    render(<ServicesSection />)
    expect(screen.getByRole('heading', { level: 2, name: /expert services/i })).toBeInTheDocument()
  })

  it('renders all 3 service card headings', () => {
    render(<ServicesSection />)
    expect(screen.getByRole('heading', { name: /buy a home/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /sell a home/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /rent a home/i })).toBeInTheDocument()
  })

  it('each View Details link has unique accessible name', () => {
    render(<ServicesSection />)
    const links = screen.getAllByRole('link', { name: /view details/i })
    expect(links).toHaveLength(3)
    const names = links.map(l => l.getAttribute('aria-label') ?? l.textContent)
    const unique = new Set(names)
    expect(unique.size).toBe(3)
  })

  it('filter tab changes aria-selected', async () => {
    const user = userEvent.setup()
    render(<ServicesSection />)
    const houseTab = screen.getByRole('tab', { name: /^house$/i })
    await user.click(houseTab)
    expect(houseTab).toHaveAttribute('aria-selected', 'true')
  })

  it('has no axe violations', async () => {
    const { container } = render(<ServicesSection />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd bihub-homes && npx jest __tests__/Services.test.tsx
```
Expected: FAIL — "Cannot find module '@/components/sections/Services'"

- [ ] **Step 3: Create the component**

```tsx
// bihub-homes/components/sections/Services.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { services } from '@/lib/demo-data'

const filters = ['Commercial', 'Property', 'House', 'Short', 'Apartment']

export default function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState(0)

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 bg-[var(--color-surface)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="services-heading"
          className="font-display text-4xl sm:text-5xl font-semibold text-[var(--color-text)] mb-4 max-w-2xl"
        >
          Expert Services for Buyers, Sellers, and Investors
        </h2>

        <div
          role="tablist"
          aria-label="Property category filter"
          className="flex flex-wrap gap-2 my-8"
        >
          {filters.map((filter, i) => (
            <button
              key={filter}
              role="tab"
              id={`service-tab-${filter.toLowerCase()}`}
              aria-selected={activeFilter === i}
              aria-controls="services-panel"
              onClick={() => setActiveFilter(i)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors min-h-[44px] ${
                activeFilter === i
                  ? 'bg-[var(--color-brand)] text-white'
                  : 'bg-[var(--color-surface-alt)] text-[var(--color-text)] hover:bg-[var(--color-border)]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div
          id="services-panel"
          role="tabpanel"
          aria-label={`${filters[activeFilter]} properties`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-[var(--color-surface)] rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-lg transition-shadow"
            >
              <div className="relative h-52">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-[var(--color-text)] mb-2">
                  {service.title}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href={service.href}
                  className="text-sm font-medium text-[var(--color-brand)] hover:text-[var(--color-brand-light)] underline-offset-2 hover:underline transition-colors"
                >
                  View Details
                  <span className="sr-only"> — {service.title}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd bihub-homes && npx jest __tests__/Services.test.tsx
```
Expected: PASS — 5 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/sections/Services.tsx __tests__/Services.test.tsx
git commit -m "feat: add Services section with accessible filter tabs"
```

---

## Task 13: Home Loans Section

**Files:**
- Create: `bihub-homes/components/sections/HomeLoans.tsx`

- [ ] **Step 1: Create the component**

```tsx
// bihub-homes/components/sections/HomeLoans.tsx
import { Users, TrendingDown, PiggyBank } from 'lucide-react'
import { loanFeatures } from '@/lib/demo-data'

const iconMap = { Users, TrendingDown, PiggyBank } as const

export default function HomeLoansSection() {
  return (
    <section
      id="loans"
      aria-labelledby="loans-heading"
      className="py-20 bg-[var(--color-surface-alt)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="loans-heading"
          className="font-display text-4xl sm:text-5xl font-semibold text-[var(--color-text)] mb-4"
        >
          Why Bihub Homes Home Loans?
        </h2>
        <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
          Selling a home is a journey. Our loan officers are here to help you stay on budget and on schedule.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {loanFeatures.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <div key={feature.title} className="flex flex-col items-center text-center">
                <div
                  className="w-14 h-14 bg-[var(--color-brand)] rounded-2xl flex items-center justify-center mb-5"
                  aria-hidden="true"
                >
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--color-text)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-xs">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-1 text-[var(--color-brand)] font-medium hover:text-[var(--color-brand-light)] transition-colors text-sm"
        >
          See all Loan Pricing
          <span aria-hidden="true"> →</span>
        </a>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/HomeLoans.tsx
git commit -m "feat: add HomeLoans section with icon feature columns"
```

---

## Task 14: Property Gallery

**Files:**
- Create: `bihub-homes/components/sections/PropertyGallery.tsx`
- Create: `bihub-homes/__tests__/PropertyGallery.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// bihub-homes/__tests__/PropertyGallery.test.tsx
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import PropertyGallerySection from '@/components/sections/PropertyGallery'

expect.extend(toHaveNoViolations)

describe('PropertyGallerySection', () => {
  it('renders the section heading', () => {
    render(<PropertyGallerySection />)
    expect(screen.getByRole('heading', { level: 2, name: /featured properties/i })).toBeInTheDocument()
  })

  it('renders Previous and Next navigation buttons', () => {
    render(<PropertyGallerySection />)
    expect(screen.getByRole('button', { name: /previous properties/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next properties/i })).toBeInTheDocument()
  })

  it('Previous button starts disabled', () => {
    render(<PropertyGallerySection />)
    expect(screen.getByRole('button', { name: /previous properties/i })).toBeDisabled()
  })

  it('renders all 5 property cards', () => {
    render(<PropertyGallerySection />)
    expect(screen.getAllByRole('article')).toHaveLength(5)
  })

  it('has no axe violations', async () => {
    const { container } = render(<PropertyGallerySection />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd bihub-homes && npx jest __tests__/PropertyGallery.test.tsx
```
Expected: FAIL — "Cannot find module '@/components/sections/PropertyGallery'"

- [ ] **Step 3: Create the component**

```tsx
// bihub-homes/components/sections/PropertyGallery.tsx
'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { properties } from '@/lib/demo-data'

export default function PropertyGallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  function updateScrollState() {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1)
  }

  useEffect(() => {
    updateScrollState()
  }, [])

  function scroll(dir: 'left' | 'right') {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' })
    setTimeout(updateScrollState, 350)
  }

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="py-20 bg-[var(--color-bg)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 gap-4">
          <h2
            id="gallery-heading"
            className="font-display text-4xl sm:text-5xl font-semibold text-[var(--color-text)]"
          >
            Featured Properties
          </h2>
          <div className="flex gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous properties"
              className="w-11 h-11 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--color-surface-alt)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Next properties"
              className="w-11 h-11 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--color-surface-alt)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar"
        >
          {properties.map((property) => (
            <article
              key={property.title}
              className="flex-none w-72 bg-[var(--color-surface)] rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-lg transition-shadow snap-start"
            >
              <div className="relative h-48">
                <Image
                  src={property.imageSrc}
                  alt={property.imageAlt}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="288px"
                />
              </div>
              <div className="p-5">
                <p className="font-medium text-[var(--color-accent)] text-sm mb-1">{property.price}</p>
                <h3 className="font-display text-lg font-semibold text-[var(--color-text)] mb-2">
                  {property.title}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                  {property.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd bihub-homes && npx jest __tests__/PropertyGallery.test.tsx
```
Expected: PASS — 5 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/sections/PropertyGallery.tsx __tests__/PropertyGallery.test.tsx
git commit -m "feat: add PropertyGallery with horizontal scroll and arrow navigation"
```

---

## Task 15: Testimonials Section

**Files:**
- Create: `bihub-homes/components/sections/Testimonials.tsx`

- [ ] **Step 1: Create the component**

```tsx
// bihub-homes/components/sections/Testimonials.tsx
import Image from 'next/image'
import { testimonials } from '@/lib/demo-data'

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div aria-label={`Rated ${rating} out of ${max} stars`} className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`text-lg ${i < rating ? 'text-[var(--color-accent)]' : 'text-white/20'}`}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-20 bg-[var(--color-dark-bg)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2
            id="testimonials-heading"
            className="font-display text-4xl sm:text-5xl font-semibold text-[var(--color-dark-text)] mb-4"
          >
            See what our customers are saying
          </h2>
          <p className="text-[var(--color-dark-text)]/70 text-lg max-w-2xl">
            More than{' '}
            <strong className="text-[var(--color-accent)]">700 million+ people</strong>{' '}
            have tried the platform and given their opinion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-[var(--color-dark-surface)] rounded-2xl p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src={t.avatarSrc}
                  alt={t.avatarAlt}
                  width={48}
                  height={48}
                  className="rounded-full object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[var(--color-dark-text)] truncate">{t.name}</p>
                  <p className="text-sm text-[var(--color-dark-text)]/60">{t.role}</p>
                </div>
                <StarRating rating={t.rating} />
              </div>
              <p className="text-[var(--color-dark-text)]/80 text-sm leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Testimonials.tsx
git commit -m "feat: add Testimonials section with star ratings and customer photos"
```

---

## Task 16: Contact Form Section

**Files:**
- Create: `bihub-homes/components/sections/ContactForm.tsx`
- Create: `bihub-homes/__tests__/ContactForm.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// bihub-homes/__tests__/ContactForm.test.tsx
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe, toHaveNoViolations } from 'jest-axe'
import ContactFormSection from '@/components/sections/ContactForm'

expect.extend(toHaveNoViolations)

describe('ContactFormSection', () => {
  it('renders the section heading', () => {
    render(<ContactFormSection />)
    expect(screen.getByRole('heading', { level: 2, name: /let's get in touch/i })).toBeInTheDocument()
  })

  it('all form fields have associated labels', () => {
    render(<ContactFormSection />)
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('shows validation errors when submitting empty form', async () => {
    const user = userEvent.setup()
    render(<ContactFormSection />)
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(await screen.findByText(/first name is required/i)).toBeInTheDocument()
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument()
  })

  it('shows email format error for invalid email', async () => {
    const user = userEvent.setup()
    render(<ContactFormSection />)
    await user.type(screen.getByLabelText(/first name/i), 'Jane')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/email/i), 'not-an-email')
    await user.type(screen.getByLabelText(/phone/i), '123456789')
    await user.type(screen.getByLabelText(/message/i), 'Hello')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(await screen.findByText(/valid email/i)).toBeInTheDocument()
  })

  it('shows success message after valid submission', async () => {
    jest.useFakeTimers()
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
    render(<ContactFormSection />)
    await user.type(screen.getByLabelText(/first name/i), 'Jane')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/email/i), 'jane@example.com')
    await user.type(screen.getByLabelText(/phone/i), '+1234567890')
    await user.type(screen.getByLabelText(/message/i), 'I am interested in your services.')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    jest.runAllTimers()
    await waitFor(() =>
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument()
    )
    jest.useRealTimers()
  })

  it('has no axe violations', async () => {
    const { container } = render(<ContactFormSection />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd bihub-homes && npx jest __tests__/ContactForm.test.tsx
```
Expected: FAIL — "Cannot find module '@/components/sections/ContactForm'"

- [ ] **Step 3: Create the component**

```tsx
// bihub-homes/components/sections/ContactForm.tsx
'use client'

import { useState } from 'react'

interface FormState {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
}

export default function ContactFormSection() {
  const [form, setForm] = useState<FormState>({
    firstName: '', lastName: '', email: '', phone: '', message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  function validate(): FormErrors {
    const e: FormErrors = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required.'
    if (!form.lastName.trim()) e.lastName = 'Last name is required.'
    if (!form.email.trim()) {
      e.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email address.'
    }
    if (!form.phone.trim()) e.phone = 'Phone number is required.'
    if (!form.message.trim()) e.message = 'Message is required.'
    return e
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1500)
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 bg-[var(--color-surface)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2
              id="contact-heading"
              className="font-display text-4xl sm:text-5xl font-semibold text-[var(--color-text)] mb-4"
            >
              Let&apos;s Get In Touch
            </h2>
            <p className="text-[var(--color-text-muted)] text-lg mb-8 leading-relaxed">
              Have questions about buying, selling, or renting? Our team is here to help you every step of the way.
            </p>

            <form noValidate onSubmit={handleSubmit} aria-describedby="form-instructions">
              <p id="form-instructions" className="sr-only">All fields are required.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    aria-required="true"
                    aria-invalid={!!errors.firstName}
                    aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--color-brand)] transition-colors min-h-[44px]"
                  />
                  {errors.firstName && (
                    <span id="firstName-error" role="alert" className="text-xs text-[var(--color-error)] mt-1 block">
                      {errors.firstName}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    aria-required="true"
                    aria-invalid={!!errors.lastName}
                    aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--color-brand)] transition-colors min-h-[44px]"
                  />
                  {errors.lastName && (
                    <span id="lastName-error" role="alert" className="text-xs text-[var(--color-error)] mt-1 block">
                      {errors.lastName}
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--color-brand)] transition-colors min-h-[44px]"
                />
                {errors.email && (
                  <span id="email-error" role="alert" className="text-xs text-[var(--color-error)] mt-1 block">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--color-brand)] transition-colors min-h-[44px]"
                />
                {errors.phone && (
                  <span id="phone-error" role="alert" className="text-xs text-[var(--color-error)] mt-1 block">
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--color-brand)] transition-colors resize-none"
                />
                {errors.message && (
                  <span id="message-error" role="alert" className="text-xs text-[var(--color-error)] mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>

              <div aria-live="polite" aria-atomic="true" className="mb-4">
                {status === 'success' && (
                  <p className="text-[var(--color-success)] font-medium text-sm">
                    Message sent successfully! We&apos;ll get back to you soon.
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                aria-busy={status === 'loading'}
                className="w-full bg-[var(--color-accent)] text-[var(--color-dark-bg)] font-semibold py-4 rounded-xl hover:bg-[var(--color-accent-dark)] disabled:opacity-60 transition-colors min-h-[44px] text-sm"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="relative rounded-2xl overflow-hidden min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
              alt="Aerial map view showing Bihub Homes office location in the city centre"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end p-6">
              <div className="bg-white/95 rounded-2xl px-5 py-4 shadow-lg">
                <p className="font-display font-semibold text-[var(--color-brand)] text-sm">Bihub Homes</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Visit our office today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd bihub-homes && npx jest __tests__/ContactForm.test.tsx
```
Expected: PASS — 5 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/sections/ContactForm.tsx __tests__/ContactForm.test.tsx
git commit -m "feat: add ContactForm section with validation and accessible error messages"
```

---

## Task 17: Page Composition

**Files:**
- Modify: `bihub-homes/app/page.tsx`

- [ ] **Step 1: Replace the placeholder page.tsx with all sections composed**

```tsx
// bihub-homes/app/page.tsx
import HeroSection from '@/components/sections/Hero'
import StatsSection from '@/components/sections/Stats'
import TrustedPartnersSection from '@/components/sections/TrustedPartners'
import ServicesSection from '@/components/sections/Services'
import HomeLoansSection from '@/components/sections/HomeLoans'
import PropertyGallerySection from '@/components/sections/PropertyGallery'
import TestimonialsSection from '@/components/sections/Testimonials'
import ContactFormSection from '@/components/sections/ContactForm'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <TrustedPartnersSection />
      <ServicesSection />
      <HomeLoansSection />
      <PropertyGallerySection />
      <TestimonialsSection />
      <ContactFormSection />
    </>
  )
}
```

- [ ] **Step 2: Run full test suite**

```bash
cd bihub-homes && npx jest
```
Expected: All test suites pass, 0 failures.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: compose all 10 sections into home page"
```

---

## Task 18: Build Verification

**Files:** None — verification only

- [ ] **Step 1: Run production build**

```bash
cd bihub-homes && npm run build
```
Expected: Exits 0. No TypeScript errors. No missing `alt` text warnings.

- [ ] **Step 2: Start dev server and manually verify golden path**

```bash
cd bihub-homes && npm run dev
```

Open `http://localhost:3000` and verify:
- [ ] Skip nav appears on first Tab keypress
- [ ] Navbar sticks on scroll and drops shadow after 80px
- [ ] Mobile hamburger opens/closes menu (resize to 375px)
- [ ] Hero h1 is visible with dark overlay contrast
- [ ] Search form submits and screen reader status updates
- [ ] Tab filters in Hero switch active state
- [ ] Stats 2×2 grid renders dark and light cards
- [ ] Services filter tabs change `aria-selected`
- [ ] Gallery arrows enable/disable at scroll boundaries
- [ ] Contact form shows field errors on empty submit
- [ ] Contact form shows success message after valid submit
- [ ] Footer dark background with 3 nav columns

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "feat: bihub-homes complete — WCAG 2.2 AA compliant real estate demo"
```
