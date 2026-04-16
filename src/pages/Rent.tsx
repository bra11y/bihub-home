import PageHero from '../components/ui/PageHero'
import ListingCard from '../components/ui/ListingCard'
import { listings } from '../lib/demo-data'
import { Search, Shield, Clock, Headphones } from 'lucide-react'

const rentListings = listings.filter((l) => l.type === 'rent')

const benefits = [
  { icon: Shield, title: 'Verified Listings', desc: 'Every rental is verified and screened so you rent with confidence.' },
  { icon: Clock, title: 'Flexible Leases', desc: 'Month-to-month and long-term lease options to fit your lifestyle.' },
  { icon: Headphones, title: '24/7 Support', desc: 'Our team is always available to help you before, during, and after you move.' },
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

      <section className="py-16" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div
            className="flex flex-col sm:flex-row gap-3 p-3 rounded-[var(--radius-md)]"
            style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            role="search"
            aria-label="Search rentals"
          >
            <label htmlFor="rent-search" className="sr-only">Search rental location</label>
            <div className="flex-1 flex items-center gap-2 px-3">
              <Search size={16} style={{ color: 'var(--color-text-muted)' }} aria-hidden="true" />
              <input
                id="rent-search"
                type="text"
                placeholder="City, neighbourhood, or address"
                className="flex-1 py-2 text-sm bg-transparent outline-none"
                style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}
              />
            </div>
            <button
              type="button"
              className="px-6 py-2.5 text-sm font-medium rounded-[var(--radius-sm)] transition-colors"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-dark-bg)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section aria-labelledby="rent-listings-heading" className="py-16" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 id="rent-listings-heading" className="text-3xl mb-8" style={{ color: 'var(--color-text)' }}>
            Available Rentals
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rentListings.map((l) => <ListingCard key={l.id} {...l} />)}
          </div>
        </div>
      </section>

      <section aria-labelledby="rent-benefits-heading" className="py-16" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 id="rent-benefits-heading" className="text-3xl mb-10" style={{ color: 'var(--color-text)' }}>
            Why Rent With Bihub Homes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-start">
                <div
                  className="w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
                  aria-hidden="true"
                >
                  <Icon size={20} style={{ color: 'var(--color-accent)' }} />
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
