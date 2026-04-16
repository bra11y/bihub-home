import { Link } from 'react-router-dom'
import { Award, TrendingDown, DollarSign, ArrowRight } from 'lucide-react'
import { loanFeatures } from '../../lib/demo-data'

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  award: Award,
  'trending-down': TrendingDown,
  'dollar-sign': DollarSign,
}

export default function HomeLoans() {
  return (
    <section
      aria-labelledby="loans-heading"
      className="py-20"
      style={{ backgroundColor: 'var(--color-surface-alt)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-lg mx-auto mb-14">
          <h2
            id="loans-heading"
            className="text-4xl md:text-5xl mb-4"
            style={{ color: 'var(--color-text)' }}
          >
            Why Bihub Homes
            <br />
            Home Loans?
          </h2>
          <p className="text-base" style={{ color: 'var(--color-text-muted)' }}>
            Getting home is a journey. Our loan officers are here to help you stay on budget and on schedule.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {loanFeatures.map((feature) => {
            const Icon = iconMap[feature.icon]
            return (
              <div key={feature.title} className="flex flex-col items-start">
                <div
                  className="w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
                  aria-hidden="true"
                >
                  <Icon size={20} style={{ color: 'var(--color-accent)' }} />
                </div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link
            to="/home-loans"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
            style={{ color: 'var(--color-brand)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent-dark)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-brand)')}
          >
            See all Loan Pricing <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
