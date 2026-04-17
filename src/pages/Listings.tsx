import { useState } from 'react'
import PageHero from '../components/ui/PageHero'
import ListingCard from '../components/ui/ListingCard'
import { listings } from '../lib/demo-data'

const filters = ['All', 'Buy', 'Rent']

export default function Listings() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? listings : listings.filter((l) => l.type === active.toLowerCase())

  return (
    <>
      <PageHero
        title="All Properties"
        subtitle="Browse our full catalogue of homes for sale and rent. Updated daily with the latest listings."
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80"
        imageAlt="Aerial view of a luxury residential neighbourhood"
      />

      <section aria-labelledby="listings-heading" style={{ backgroundColor: 'var(--color-bg)', padding: '5rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Header + filter */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 id="listings-heading" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)', color: 'var(--color-text)' }}>
              {filtered.length} Properties
            </h2>
            <div
              role="group" aria-label="Filter by type"
              style={{ display: 'flex', gap: '0.25rem', padding: '0.25rem', backgroundColor: 'var(--color-surface-alt)', borderRadius: 'var(--radius-sm)' }}
            >
              {filters.map((f) => (
                <button
                  key={f} type="button" aria-pressed={active === f}
                  onClick={() => setActive(f)}
                  style={{
                    padding: '0.5rem 1rem', fontSize: '0.825rem', fontWeight: 500,
                    borderRadius: 'var(--radius-sm)', border: 'none', cursor: 'pointer', transition: 'all 0.15s',
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

          <div className="listings-grid">
            {filtered.map((l) => <ListingCard key={l.id} {...l} />)}
          </div>
        </div>
      </section>
    </>
  )
}
