import PageHero from '../components/ui/PageHero'
import { TrendingUp, Users, FileText, CheckCircle } from 'lucide-react'

const steps = [
  { icon: TrendingUp, title: 'Get a Free Valuation', desc: 'We analyse comparable sales and market trends to price your home competitively.' },
  { icon: Users, title: 'Meet Your Agent', desc: 'A dedicated agent guides you through every step — staging, listing, negotiations.' },
  { icon: FileText, title: 'List and Market', desc: 'Professional photography, virtual tours, and placement on top listing sites.' },
  { icon: CheckCircle, title: 'Close with Confidence', desc: 'We handle offers, paperwork, and closing so you walk away stress-free.' },
]

export default function Sell() {
  return (
    <>
      <PageHero
        title="Sell Your Home Faster"
        subtitle="Get the best price for your property. Our experienced agents and data-driven strategy deliver results that exceed expectations."
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80"
        imageAlt="For sale real estate sign in front of a beautiful home"
      />

      <section aria-labelledby="sell-steps-heading" className="py-20" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 id="sell-steps-heading" className="text-4xl mb-5" style={{ color: 'var(--color-text)' }}>
                Selling Made Simple
              </h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                We understand selling your home is one of the biggest decisions you'll make. Our process is designed to be transparent, efficient, and rewarding.
              </p>
            </div>
            <div className="rounded-[var(--radius-lg)] overflow-hidden" style={{ height: '300px' }}>
              <img
                src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=700&q=80"
                alt="Bright, staged living room ready for sale"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ icon: Icon, title, desc }) => (
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

      <section aria-labelledby="sell-cta-heading" className="py-20" style={{ backgroundColor: 'var(--color-dark-bg)' }}>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2
            id="sell-cta-heading"
            className="text-4xl md:text-5xl mb-5"
            style={{ color: 'var(--color-dark-text)', fontFamily: 'var(--font-display)' }}
          >
            Ready to List Your Home?
          </h2>
          <p className="text-base mb-8 max-w-md mx-auto" style={{ color: 'rgba(240,237,228,0.65)' }}>
            Get a free no-obligation market analysis and talk to one of our expert agents today.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-sm font-semibold rounded-[var(--radius-sm)] transition-colors"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-dark-bg)' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
          >
            Get a Free Valuation
          </a>
        </div>
      </section>
    </>
  )
}
