import StatCard from '../ui/StatCard'
import { stats } from '../../lib/demo-data'

export default function Stats() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="py-20"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="stats-heading"
              className="text-4xl md:text-5xl mb-5"
              style={{ color: 'var(--color-text)' }}
            >
              Your Trusted Real
              <br />
              Estate Advisors
            </h2>
            <div className="relative rounded-[var(--radius-lg)] overflow-hidden" style={{ height: '220px' }}>
              <img
                src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=700&q=80"
                alt="Modern luxury home exterior at dusk with warm interior lighting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-base mb-8 max-w-sm" style={{ color: 'var(--color-text-muted)' }}>
              Discover the epitome of luxury living in this offering sweeping panoramic views from every room.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} dark={stat.dark} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
