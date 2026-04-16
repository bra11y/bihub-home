import { useState } from 'react'
import { Search, MapPin, ChevronDown } from 'lucide-react'

const tabs = ['Architecture', 'House', 'Commercial']

export default function Hero() {
  const [activeTab, setActiveTab] = useState('Architecture')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1800&q=80"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(15, 35, 24, 0.55)' }}
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center pt-28 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <div className="max-w-xl">
            <h1
              id="hero-heading"
              className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
              style={{ color: '#ffffff' }}
            >
              We Build
              <br />
              <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>Community</em>
            </h1>
            <p className="text-base md:text-lg mb-8 max-w-md" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Welcome to a world where luxury meets lifestyle. Our properties offer you more than just a home — they give you a life.
            </p>

            <div
              className="rounded-[var(--radius-md)] p-2 flex flex-col sm:flex-row gap-2"
              style={{ backgroundColor: 'var(--color-surface)' }}
              role="search"
              aria-label="Property search"
            >
              <label htmlFor="hero-search" className="sr-only">Search for a property location</label>
              <div className="flex-1 flex items-center gap-2 px-3">
                <MapPin size={16} style={{ color: 'var(--color-text-muted)' }} aria-hidden="true" />
                <input
                  id="hero-search"
                  type="text"
                  placeholder="Search for the price you're looking for"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 py-2 text-sm bg-transparent outline-none"
                  style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-[var(--radius-sm)] transition-colors"
                  style={{ color: 'var(--color-text-muted)', backgroundColor: 'var(--color-surface-alt)' }}
                >
                  Price <ChevronDown size={12} />
                </button>
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-[var(--radius-sm)] transition-colors"
                  style={{ color: 'var(--color-text-muted)', backgroundColor: 'var(--color-surface-alt)' }}
                >
                  Property <ChevronDown size={12} />
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-[var(--radius-sm)] transition-colors"
                  style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-dark-bg)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
                  aria-label="Search properties"
                >
                  <Search size={15} aria-hidden="true" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full pb-0">
        <div
          className="rounded-t-[var(--radius-md)] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-dark-bg)' }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest opacity-70 mb-0.5">Budget-Friendly</p>
            <p className="text-sm font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
              Find a home that suits your budget
            </p>
          </div>
          <a
            href="/listings"
            className="text-xs font-semibold underline underline-offset-2 whitespace-nowrap"
            style={{ color: 'var(--color-dark-bg)' }}
          >
            View Listings →
          </a>
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
        <div
          className="flex gap-0 border-b"
          role="tablist"
          aria-label="Property type filter"
          style={{ borderColor: 'rgba(255,255,255,0.2)' }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              type="button"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className="px-5 py-3 text-xs font-semibold uppercase tracking-widest transition-all duration-200"
              style={{
                color: activeTab === tab ? 'var(--color-accent)' : 'rgba(255,255,255,0.55)',
                borderBottom: activeTab === tab ? '2px solid var(--color-accent)' : '2px solid transparent',
                background: 'none',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
