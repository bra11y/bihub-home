import { Link } from 'react-router-dom'
import { Award, TrendingDown, DollarSign, ArrowRight } from 'lucide-react'
import { loanFeatures } from '../../lib/demo-data'

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  award: Award,
  'trending-down': TrendingDown,
  'dollar-sign': DollarSign,
}

export default function HomeLoans() {
  return (
    <section aria-labelledby="loans-heading" style={{ backgroundColor: 'var(--color-surface-alt)', padding: '5rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>

        <div style={{ textAlign: 'center', maxWidth: 480, margin: '0 auto 3.5rem' }}>
          <h2 id="loans-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--color-text)', lineHeight: 1.15, marginBottom: '1rem' }}>
            Why Bihub Homes<br />Home Loans?
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
            Getting home is a journey. Our loan officers are here to help you stay on budget and on schedule.
          </p>
        </div>

        <div className="loans-grid">
          {loanFeatures.map((feature) => {
            const Icon = iconMap[feature.icon]
            return (
              <div key={feature.title}>
                <div style={{
                  width: 48, height: 48, borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem',
                }} aria-hidden="true">
                  <Icon size={20} color="var(--color-accent)" />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, fontFamily: 'var(--font-display)', color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            to="/home-loans"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-brand)', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent-dark)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-brand)')}
          >
            See all Loan Pricing <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
