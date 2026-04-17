import PageHero from '../components/ui/PageHero'
import { Link } from 'react-router-dom'
import { TrendingUp, Users, FileText, CheckCircle } from 'lucide-react'

const steps = [
  { icon: TrendingUp,   title: 'Get a Free Valuation', desc: 'We analyse comparable sales and market trends to price your home competitively.' },
  { icon: Users,        title: 'Meet Your Agent',       desc: 'A dedicated agent guides you — staging, listing, negotiations.' },
  { icon: FileText,     title: 'List and Market',       desc: 'Professional photography, virtual tours, and placement on top listing sites.' },
  { icon: CheckCircle,  title: 'Close with Confidence', desc: 'We handle offers, paperwork, and closing so you walk away stress-free.' },
]

export default function Sell() {
  return (
    <>
      <PageHero
        title="Sell Your Home Faster"
        subtitle="Get the best price for your property. Our experienced agents and data-driven strategy deliver results that exceed expectations."
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80"
        imageAlt="For sale sign in front of a beautiful home"
      />

      {/* Steps */}
      <section aria-labelledby="sell-steps-heading" style={{ backgroundColor: 'var(--color-bg)', padding: '5rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="section-two-col" style={{ marginBottom: '4rem' }}>
            <div>
              <h2 id="sell-steps-heading" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)', color: 'var(--color-text)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
                Selling Made Simple
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.8, maxWidth: 420 }}>
                We understand selling your home is one of the biggest decisions you'll make. Our process is designed to be transparent, efficient, and rewarding.
              </p>
            </div>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: 300 }}>
              <img
                src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=700&q=80"
                alt="Bright staged living room ready for sale"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="listings-grid">
            {steps.map(({ icon: Icon, title, desc }) => (
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
      <section aria-labelledby="sell-cta-heading" style={{ backgroundColor: 'var(--color-dark-bg)', padding: '5rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 id="sell-cta-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', color: 'var(--color-dark-text)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            Ready to List Your Home?
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(240,237,228,0.65)', marginBottom: '2.5rem', maxWidth: 400, margin: '0 auto 2.5rem' }}>
            Get a free no-obligation market analysis and talk to one of our expert agents today.
          </p>
          <Link
            to="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', padding: '0.875rem 2rem', fontSize: '0.875rem', fontWeight: 600, backgroundColor: 'var(--color-accent)', color: 'var(--color-dark-bg)', borderRadius: 'var(--radius-sm)', textDecoration: 'none', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
          >
            Get a Free Valuation
          </Link>
        </div>
      </section>
    </>
  )
}
