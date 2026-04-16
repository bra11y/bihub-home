import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services } from '../../lib/demo-data'

const filters = ['Commercial', 'Property', 'House', 'Short', 'Apartments']

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('Property')

  return (
    <section
      aria-labelledby="services-heading"
      className="py-20"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl max-w-sm"
            style={{ color: 'var(--color-text)' }}
          >
            Expert Services for Buyers,
            Sellers, and Investors
          </h2>

          <div
            className="flex items-center gap-1 p-1 rounded-[var(--radius-sm)]"
            role="group"
            aria-label="Filter services by property type"
            style={{ backgroundColor: 'var(--color-surface-alt)' }}
          >
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className="px-3 py-1.5 text-xs font-medium rounded-[var(--radius-sm)] transition-all duration-200"
                style={{
                  backgroundColor: activeFilter === f ? 'var(--color-surface)' : 'transparent',
                  color: activeFilter === f ? 'var(--color-text)' : 'var(--color-text-muted)',
                  boxShadow: activeFilter === f ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                }}
                aria-pressed={activeFilter === f}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <article
              key={service.id}
              className="group rounded-[var(--radius-md)] overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              <div className="relative overflow-hidden" style={{ height: i === 1 ? '160px' : '200px' }}>
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
                >
                  {service.title}
                </h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {service.description}
                </p>
                <Link
                  to={service.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
                  style={{ color: 'var(--color-brand)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent-dark)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-brand)')}
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
