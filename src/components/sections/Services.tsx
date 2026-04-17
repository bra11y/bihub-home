import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services } from '../../lib/demo-data'

const filters = ['Commercial', 'Property', 'House', 'Short', 'Apartments']

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('Property')

  return (
    <section aria-labelledby="services-heading" style={{ backgroundColor: 'var(--color-bg)', padding: '5rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <h2 id="services-heading" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)', color: 'var(--color-text)', maxWidth: 380, lineHeight: 1.2 }}>
            Expert Services for Buyers,<br />Sellers, and Investors
          </h2>

          <div
            role="group"
            aria-label="Filter by property type"
            style={{ display: 'flex', gap: '0.25rem', padding: '0.25rem', backgroundColor: 'var(--color-surface-alt)', borderRadius: 'var(--radius-sm)' }}
          >
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={activeFilter === f}
                onClick={() => setActiveFilter(f)}
                style={{
                  padding: '0.375rem 0.75rem', fontSize: '0.78rem', fontWeight: 500,
                  borderRadius: 'var(--radius-sm)', border: 'none', cursor: 'pointer', transition: 'all 0.15s',
                  backgroundColor: activeFilter === f ? 'var(--color-surface)' : 'transparent',
                  color: activeFilter === f ? 'var(--color-text)' : 'var(--color-text-muted)',
                  boxShadow: activeFilter === f ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="services-grid">
          {services.map((service) => (
            <article
              key={service.id}
              style={{
                backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)', overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.09)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ height: 200, overflow: 'hidden' }}>
                <img src={service.image} alt={service.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: '1rem' }}>
                  {service.description}
                </p>
                <Link
                  to={service.href}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-brand)', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent-dark)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-brand)')}
                >
                  View Details <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
