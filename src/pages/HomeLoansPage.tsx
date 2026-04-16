import PageHero from '../components/ui/PageHero'
import { loanFeatures } from '../lib/demo-data'
import { Award, TrendingDown, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  award: Award,
  'trending-down': TrendingDown,
  'dollar-sign': DollarSign,
}

const loanTypes = [
  { name: 'Fixed Rate 30-Year', rate: '6.85%', apr: '6.92%', down: '3%', note: 'Most popular option' },
  { name: 'Fixed Rate 15-Year', rate: '6.10%', apr: '6.20%', down: '3%', note: 'Pay off faster' },
  { name: 'FHA Loan', rate: '6.55%', apr: '7.20%', down: '3.5%', note: 'Great for first-time buyers' },
  { name: 'VA Loan', rate: '6.25%', apr: '6.35%', down: '0%', note: 'For eligible veterans' },
]

export default function HomeLoansPage() {
  return (
    <>
      <PageHero
        title="Home Loans Made Easy"
        subtitle="Competitive rates, expert guidance, and fast approvals. Our loan officers are here to help you find the right mortgage for your situation."
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1800&q=80"
        imageAlt="Home keys on a mortgage document representing a loan approval"
      />

      <section aria-labelledby="loan-features-heading" className="py-20" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 id="loan-features-heading" className="text-4xl mb-10" style={{ color: 'var(--color-text)' }}>
            Why Choose Bihub Home Loans?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {loanFeatures.map((feature) => {
              const Icon = iconMap[feature.icon]
              return (
                <div
                  key={feature.title}
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
                  <h3 className="text-base font-semibold mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>{feature.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="loan-rates-heading" className="py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 id="loan-rates-heading" className="text-4xl mb-10" style={{ color: 'var(--color-text)' }}>
            Today's Loan Pricing
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {loanTypes.map((loan) => (
              <div
                key={loan.name}
                className="p-6 rounded-[var(--radius-md)] flex items-start justify-between gap-4"
                style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              >
                <div>
                  <p className="text-xs font-semibold mb-1" style={{ color: 'var(--color-accent)' }}>{loan.note}</p>
                  <h3 className="text-base font-semibold mb-1" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>{loan.name}</h3>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>APR {loan.apr} · Min. down {loan.down}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand)' }}>{loan.rate}</p>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>interest rate</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'var(--color-dark-bg)' }}>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2
            className="text-4xl mb-5"
            style={{ color: 'var(--color-dark-text)', fontFamily: 'var(--font-display)' }}
          >
            Ready to Get Pre-Approved?
          </h2>
          <p className="text-base mb-8 max-w-md mx-auto" style={{ color: 'rgba(240,237,228,0.65)' }}>
            Talk to a loan officer today. No commitment, no hidden fees — just expert advice.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 text-sm font-semibold rounded-[var(--radius-sm)] transition-colors"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-dark-bg)' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
          >
            Talk to a Loan Officer
          </Link>
        </div>
      </section>
    </>
  )
}
