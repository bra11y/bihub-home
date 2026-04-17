import PageHero from '../components/ui/PageHero'
import { loanFeatures } from '../lib/demo-data'
import { Award, TrendingDown, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  award: Award,
  'trending-down': TrendingDown,
  'dollar-sign': DollarSign,
}

const loanTypes = [
  { name: 'Fixed Rate 30-Year', rate: '6.85%', apr: '6.92%', down: '3%',   note: 'Most popular option' },
  { name: 'Fixed Rate 15-Year', rate: '6.10%', apr: '6.20%', down: '3%',   note: 'Pay off faster' },
  { name: 'FHA Loan',           rate: '6.55%', apr: '7.20%', down: '3.5%', note: 'Great for first-time buyers' },
  { name: 'VA Loan',            rate: '6.25%', apr: '6.35%', down: '0%',   note: 'For eligible veterans' },
]

export default function HomeLoansPage() {
  return (
    <>
      <PageHero
        title="Home Loans Made Easy"
        subtitle="Competitive rates, expert guidance, and fast approvals. Our loan officers are here to help you find the right mortgage."
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1800&q=80"
        imageAlt="Home keys on a mortgage document representing a loan approval"
      />

      {/* Why us */}
      <section aria-labelledby="loan-features-heading" style={{ backgroundColor: 'var(--color-bg)', padding: '5rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-accent)', marginBottom: '0.75rem' }}>Why Choose Us</p>
          <h2 id="loan-features-heading" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)', color: 'var(--color-text)', marginBottom: '3rem' }}>
            Why Choose Bihub Home Loans?
          </h2>
          <div className="loans-grid">
            {loanFeatures.map((feature) => {
              const Icon = iconMap[feature.icon]
              return (
                <div key={feature.title} style={{ padding: '1.75rem', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-surface-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }} aria-hidden="true">
                    <Icon size={20} color="var(--color-accent)" />
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, fontFamily: 'var(--font-display)', color: 'var(--color-text)', marginBottom: '0.5rem' }}>{feature.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Rates table */}
      <section aria-labelledby="loan-rates-heading" style={{ backgroundColor: 'var(--color-surface-alt)', padding: '5rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 id="loan-rates-heading" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)', color: 'var(--color-text)', marginBottom: '2.5rem' }}>
            Today's Loan Pricing
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {loanTypes.map((loan) => (
              <div key={loan.name} style={{
                padding: '1.5rem 1.75rem', borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
              }}>
                <div>
                  <p style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: '0.4rem' }}>{loan.note}</p>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, fontFamily: 'var(--font-display)', color: 'var(--color-text)', marginBottom: '0.25rem' }}>{loan.name}</h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>APR {loan.apr} · Min. down {loan.down}</p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--color-brand)', lineHeight: 1 }}>{loan.rate}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>interest rate</p>
                </div>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:700px){.rates-grid{grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--color-dark-bg)', padding: '5rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', color: 'var(--color-dark-text)', marginBottom: '1.25rem' }}>
            Ready to Get Pre-Approved?
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(240,237,228,0.65)', maxWidth: 400, margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
            Talk to a loan officer today. No commitment, no hidden fees — just expert advice.
          </p>
          <Link to="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', padding: '0.875rem 2rem', fontSize: '0.875rem', fontWeight: 600, backgroundColor: 'var(--color-accent)', color: 'var(--color-dark-bg)', borderRadius: 'var(--radius-sm)', textDecoration: 'none', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}>
            Talk to a Loan Officer
          </Link>
        </div>
      </section>
    </>
  )
}
