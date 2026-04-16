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

      <section className="py-16" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div
            className="flex flex-col sm:flex-row gap-3 p-3 rounded-[var(--radius-md)]"
            style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            role="search"
            aria-label="Search homes for sale"
          >
            <label htmlFor="buy-search" className="sr-only">Search by location</label>
            <div className="flex-1 flex items-center gap-2 px-3">
              <Search size={16} style={{ color: 'var(--color-text-muted)' }} aria-hidden="true" />
              <input
                id="buy-search"
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

      <section aria-labelledby="buy-listings-heading" className="py-16" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <h2
            id="buy-listings-heading"
            className="text-3xl mb-8"
            style={{ color: 'var(--color-text)' }}
          >
            Homes For Sale
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {buyListings.map((l) => <ListingCard key={l.id} {...l} />)}
          </div>
        </div>
      </section>

      <section aria-labelledby="buy-steps-heading" className="py-16" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 id="buy-steps-heading" className="text-3xl mb-10" style={{ color: 'var(--color-text)' }}>
            How Buying Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num}>
                <p className="text-4xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-border)' }}>{s.num}</p>
                <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--color-text)' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
