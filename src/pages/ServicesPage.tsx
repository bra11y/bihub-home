import PageHero from '../components/ui/PageHero'
import { Link } from 'react-router-dom'
import { services } from '../lib/demo-data'
import { ArrowRight, Home, BarChart2, Key, Building2 } from 'lucide-react'

const extras = [
  { icon: Building2,  title: 'Commercial Real Estate', desc: 'Office spaces, retail, and industrial properties for businesses of all sizes.' },
  { icon: BarChart2,  title: 'Investment Advisory',    desc: 'Data-driven market insights to help you build a profitable property portfolio.' },
  { icon: Key,        title: 'Property Management',    desc: 'End-to-end management for landlords — we handle tenants, maintenance, and more.' },
  { icon: Home,       title: 'Relocation Services',    desc: 'Smooth transitions for individuals and families moving to a new city or country.' },
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

      {/* Core services */}
      <section aria-labelledby="core-services-heading" style={{ backgroundColor: 'var(--color-bg)', padding: '5rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-accent)', marginBottom: '0.75rem' }}>What We Do</p>
          <h2 id="core-services-heading" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)', color: 'var(--color-text)', marginBottom: '3rem' }}>
            Core Services
          </h2>
          <div className="services-grid">
            {services.map((service) => (
              <article
                key={service.id}
                style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', transition: 'transform 0.3s, box-shadow 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.09)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ height: 200, overflow: 'hidden' }}>
                  <img src={service.image} alt={service.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>{service.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: '1rem' }}>{service.description}</p>
                  <Link to={service.href}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-brand)', textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent-dark)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-brand)')}>
                    Learn More <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Extra services */}
      <section aria-labelledby="extra-services-heading" style={{ backgroundColor: 'var(--color-surface-alt)', padding: '5rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 id="extra-services-heading" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)', color: 'var(--color-text)', marginBottom: '3rem' }}>
            Additional Services
          </h2>
          <div className="listings-grid">
            {extras.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ padding: '1.75rem', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-surface-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }} aria-hidden="true">
                  <Icon size={20} color="var(--color-accent)" />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, fontFamily: 'var(--font-display)', color: 'var(--color-text)', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--color-brand)', padding: '4rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: '#fff', marginBottom: '0.5rem' }}>Ready to get started?</h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Talk to our team today — no commitment required.</p>
          </div>
          <Link to="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', padding: '0.875rem 2rem', fontSize: '0.875rem', fontWeight: 600, backgroundColor: 'var(--color-accent)', color: 'var(--color-dark-bg)', borderRadius: 'var(--radius-sm)', textDecoration: 'none', transition: 'background 0.2s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}>
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
