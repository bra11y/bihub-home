import PageHero from '../components/ui/PageHero'
import ListingCard from '../components/ui/ListingCard'
import { listings } from '../lib/demo-data'
import { Search, Shield, Clock, Headphones } from 'lucide-react'

const rentListings = listings.filter((l) => l.type === 'rent')

const benefits = [
  { icon: Shield,      title: 'Verified Listings',  desc: 'Every rental is verified and screened so you rent with confidence.' },
  { icon: Clock,       title: 'Flexible Leases',    desc: 'Month-to-month and long-term lease options to fit your lifestyle.' },
  { icon: Headphones,  title: '24/7 Support',       desc: 'Our team is always available to help you before, during, and after you move.' },
]

export default function Rent() {
  return (
    <>
      <PageHero
        title="Find Your Perfect Rental"
        subtitle="Discover rental properties in top neighbourhoods. Transparent pricing, verified listings, and seamless move-in."
        image="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1800&q=80"
        imageAlt="Modern apartment interior with open floor plan and city views"
      />

      {/* Search */}
      <section style={{ backgroundColor: 'var(--color-surface-alt)', padding: '2.5rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div
            role="search" aria-label="Search rentals"
            style={{ display: 'flex', gap: '0.5rem', padding: '0.375rem', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}
          >
            <label htmlFor="rent-search" className="sr-only">Search rental location</label>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 0.75rem' }}>
              <Search size={15} color="var(--color-text-muted)" aria-hidden="true" />
              <input id="rent-search" type="text" placeholder="City, neighbourhood, or address"
                style={{ flex: 1, border: 'none', outline: 'none', fontSize: '0.875rem', fontFamily: 'var(--font-body)', color: 'var(--color-text)', background: 'transparent', padding: '0.5rem 0' }} />
            </div>
            <button type="button"
              style={{ padding: '0.625rem 1.5rem', fontSize: '0.875rem', fontWeight: 600, backgroundColor: 'var(--color-accent)', color: 'var(--color-dark-bg)', border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}>
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section aria-labelledby="rent-listings-heading" style={{ backgroundColor: 'var(--color-bg)', padding: '5rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 id="rent-listings-heading" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)', color: 'var(--color-text)', marginBottom: '2rem' }}>
            Available Rentals
          </h2>
          <div className="listings-grid">
            {rentListings.map((l) => <ListingCard key={l.id} {...l} />)}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section aria-labelledby="rent-benefits-heading" style={{ backgroundColor: 'var(--color-surface-alt)', padding: '5rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 id="rent-benefits-heading" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)', color: 'var(--color-text)', marginBottom: '3rem' }}>
            Why Rent With Bihub Homes
          </h2>
          <div className="loans-grid">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title}>
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }} aria-hidden="true">
                  <Icon size={20} color="var(--color-accent)" />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, fontFamily: 'var(--font-display)', color: 'var(--color-text)', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
