import { useState } from 'react'
import PageHero from '../components/ui/PageHero'
import ListingCard from '../components/ui/ListingCard'
import { listings } from '../lib/demo-data'

const filters = ['All', 'Buy', 'Rent']

export default function Listings() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? listings
    : listings.filter((l) => l.type === active.toLowerCase())

  return (
    <>
      <PageHero
        title="All Properties"
        subtitle="Browse our full catalogue of homes for sale and rent. Updated daily with the latest listings."
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80"
        imageAlt="Aerial view of a luxury residential neighbourhood"
      />

      <section aria-labelledby="listings-heading" className="py-16" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h2 id="listings-heading" className="text-3xl" style={{ color: 'var(--color-text)' }}>
              {filtered.length} Properties
            </h2>
            <div
              className="flex gap-1 p-1 rounded-[var(--radius-sm)]"
              role="group"
              aria-label="Filter by property type"
              style={{ backgroundColor: 'var(--color-surface-alt)' }}
            >
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  aria-pressed={active === f}
                  className="px-4 py-2 text-xs font-medium rounded-[var(--radius-sm)] transition-all duration-200"
                  style={{
                    backgroundColor: active === f ? 'var(--color-surface)' : 'transparent',
                    color: active === f ? 'var(--color-text)' : 'var(--color-text-muted)',
                    boxShadow: active === f ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((l) => <ListingCard key={l.id} {...l} />)}
          </div>
        </div>
      </section>
    </>
  )
}
