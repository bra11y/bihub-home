import PageHero from '../components/ui/PageHero'
import ListingCard from '../components/ui/ListingCard'
import { listings } from '../lib/demo-data'
import { Search } from 'lucide-react'

const buyListings = listings.filter((l) => l.type === 'buy')

const steps = [
  { num: '01', title: 'Get Pre-Approved', desc: 'Work with our loan officers to understand your budget and get pre-approval fast.' },
  { num: '02', title: 'Browse Listings', desc: 'Search thousands of properties filtered to your needs, location, and budget.' },
  { num: '03', title: 'Tour Your Favorites', desc: 'Schedule in-person or virtual tours with our experienced agents.' },
  { num: '04', title: 'Close the Deal', desc: 'We handle the paperwork and negotiations so you close with confidence.' },
]

export default function Buy() {
  return (
    <>
      <PageHero
        title="Find Your Dream Home"
        subtitle="Browse thousands of properties across the country. From cozy starter homes to luxury estates — your perfect home is waiting."
        image="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1800&q=80"
        imageAlt="Spacious family home with green lawn and blue sky"
      />

      {/* Search bar */}
      <section style={{ backgroundColor: 'var(--color-surface-alt)', padding: '2.5rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div
            role="search" aria-label="Search homes for sale"
            style={{ display: 'flex', gap: '0.5rem', padding: '0.375rem', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}
          >
            <label htmlFor="buy-search" className="sr-only">Search by location</label>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 0.75rem' }}>
              <Search size={15} color="var(--color-text-muted)" aria-hidden="true" />
              <input
                id="buy-search" type="text"
                placeholder="City, neighbourhood, or address"
                style={{ flex: 1, border: 'none', outline: 'none', fontSize: '0.875rem', fontFamily: 'var(--font-body)', color: 'var(--color-text)', background: 'transparent', padding: '0.5rem 0' }}
              />
            </div>
            <button
              type="button"
              style={{ padding: '0.625rem 1.5rem', fontSize: '0.875rem', fontWeight: 600, backgroundColor: 'var(--color-accent)', color: 'var(--color-dark-bg)', border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section aria-labelledby="buy-listings-heading" style={{ backgroundColor: 'var(--color-bg)', padding: '5rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 id="buy-listings-heading" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)', color: 'var(--color-text)', marginBottom: '2rem' }}>
            Homes For Sale
          </h2>
          <div className="listings-grid">
            {buyListings.map((l) => <ListingCard key={l.id} {...l} />)}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section aria-labelledby="buy-steps-heading" style={{ backgroundColor: 'var(--color-surface-alt)', padding: '5rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 id="buy-steps-heading" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)', color: 'var(--color-text)', marginBottom: '3rem' }}>
            How Buying Works
          </h2>
          <div className="listings-grid">
            {steps.map((s) => (
              <div key={s.num} style={{ padding: '1.75rem', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-border)', lineHeight: 1, marginBottom: '1rem' }}>{s.num}</p>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, fontFamily: 'var(--font-display)', color: 'var(--color-text)', marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
