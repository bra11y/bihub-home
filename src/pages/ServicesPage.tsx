import PageHero from '../components/ui/PageHero'
import { Link } from 'react-router-dom'
import { services } from '../lib/demo-data'
import { ArrowRight, Home, BarChart2, Key, Building2 } from 'lucide-react'

const extras = [
  { icon: Building2, title: 'Commercial Real Estate', desc: 'Office spaces, retail, and industrial properties for businesses of all sizes.' },
  { icon: BarChart2, title: 'Investment Advisory', desc: 'Data-driven market insights to help you build a profitable property portfolio.' },
  { icon: Key, title: 'Property Management', desc: 'End-to-end management for landlords — we handle tenants, maintenance, and more.' },
  { icon: Home, title: 'Relocation Services', desc: 'Smooth transitions for individuals and families moving to a new city or country.' },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="End-to-end real estate solutions for buyers, sellers, renters, and investors. One partner for every stage of your journey."
        image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1800&q=80"
        imageAlt="Aerial view of a luxury residential community"
      />

      <section aria-labelledby="core-services-heading" className="py-20" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 id="core-services-heading" className="text-4xl mb-10" style={{ color: 'var(--color-text)' }}>
            Core Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <article
                key={service.id}
                className="group rounded-[var(--radius-md)] overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              >
                <div className="overflow-hidden" style={{ height: '200px' }}>
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>{service.title}</h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{service.description}</p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
                    style={{ color: 'var(--color-brand)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent-dark)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-brand)')}
                  >
                    Learn More <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="extra-services-heading" className="py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 id="extra-services-heading" className="text-4xl mb-10" style={{ color: 'var(--color-text)' }}>
            Additional Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {extras.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-[var(--radius-md)]"
                style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              >
                <div
                  className="w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--color-surface-alt)' }}
                  aria-hidden="true"
                >
                  <Icon size={20} style={{ color: 'var(--color-accent)' }} />
                </div>
                <h3 className="text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
