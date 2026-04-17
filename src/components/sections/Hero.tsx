import { useState } from 'react'
import { Search, MapPin, ChevronDown } from 'lucide-react'

const tabs = ['Architecture', 'House', 'Commercial']

export default function Hero() {
  const [activeTab, setActiveTab] = useState('Architecture')

  return (
    <section aria-labelledby="hero-heading" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1800&q=80"
          alt="" aria-hidden="true"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,35,24,0.58)' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '8rem', paddingBottom: '3rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>
          <div style={{ maxWidth: 560 }}>
            <h1
              id="hero-heading"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', lineHeight: 1.05, color: '#fff', marginBottom: '1.25rem' }}
            >
              We Build
              <br />
              <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>Community</em>
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', marginBottom: '2rem', maxWidth: 420, lineHeight: 1.7 }}>
              Welcome to a world where luxury meets lifestyle. Our properties offer you more than just a home — they give you a life.
            </p>

            {/* Search bar */}
            <div
              role="search"
              aria-label="Property search"
              style={{
                background: 'var(--color-surface)', borderRadius: 'var(--radius-md)',
                padding: '0.375rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 0.75rem', flex: 1, minWidth: 180 }}>
                <MapPin size={15} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} aria-hidden="true" />
                <label htmlFor="hero-search" className="sr-only">Search location</label>
                <input
                  id="hero-search"
                  type="text"
                  placeholder="Search for the price you're looking for"
                  style={{
                    flex: 1, border: 'none', outline: 'none', fontSize: '0.875rem',
                    fontFamily: 'var(--font-body)', color: 'var(--color-text)',
                    background: 'transparent', padding: '0.5rem 0',
                  }}
                />
              </div>
              <div style={{ display: 'flex', gap: '0.375rem', alignItems: 'center', flexWrap: 'wrap' }}>
                {['Price', 'Property'].map((f) => (
                  <button
                    key={f}
                    type="button"
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.25rem',
                      padding: '0.5rem 0.875rem', fontSize: '0.8rem', fontWeight: 500,
                      background: 'var(--color-surface-alt)', border: 'none',
                      borderRadius: 'var(--radius-sm)', color: 'var(--color-text-muted)', cursor: 'pointer',
                    }}
                  >
                    {f} <ChevronDown size={12} />
                  </button>
                ))}
                <button
                  type="submit"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.375rem',
                    padding: '0.625rem 1.25rem', fontSize: '0.875rem', fontWeight: 600,
                    background: 'var(--color-accent)', border: 'none', borderRadius: 'var(--radius-sm)',
                    color: 'var(--color-dark-bg)', cursor: 'pointer', transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-accent-dark)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-accent)')}
                  aria-label="Search properties"
                >
                  <Search size={14} aria-hidden="true" /> Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{
            background: 'var(--color-accent)', borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
            padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
          }}>
            <div>
              <p style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(15,35,24,0.6)', marginBottom: '0.2rem' }}>Budget-Friendly</p>
              <p style={{ fontSize: '0.9rem', fontWeight: 600, fontFamily: 'var(--font-display)', color: 'var(--color-dark-bg)' }}>Find a home that suits your budget</p>
            </div>
            <a href="/listings" style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-dark-bg)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              View Listings →
            </a>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ position: 'relative', zIndex: 1, borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex' }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.875rem 1.25rem', fontSize: '0.75rem', fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: '0.1em', background: 'none', border: 'none',
                borderBottom: activeTab === tab ? '2px solid var(--color-accent)' : '2px solid transparent',
                color: activeTab === tab ? 'var(--color-accent)' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer', transition: 'color 0.2s',
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
