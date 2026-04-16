import { Star } from 'lucide-react'
import { testimonials } from '../../lib/demo-data'

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-20"
      style={{ backgroundColor: 'var(--color-surface-alt)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-lg mx-auto mb-4">
          <h2
            id="testimonials-heading"
            className="text-4xl md:text-5xl"
            style={{ color: 'var(--color-text)' }}
          >
            See what our customers
            are saying
          </h2>
        </div>
        <div className="text-center mb-12">
          <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
            More than{' '}
            <span className="font-semibold" style={{ color: 'var(--color-text)' }}>700 million+ people</span>
            {' '}have tried the application and given their opinion
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="flex flex-col p-5 rounded-[var(--radius-md)]"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.image}
                  alt={t.alt}
                  className="w-10 h-10 rounded-full object-cover"
                  width={40}
                  height={40}
                />
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>{t.name}</p>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{t.role}</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <Star size={12} fill="var(--color-accent)" style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                  <span className="text-xs font-medium" style={{ color: 'var(--color-text)' }}>{t.rating}</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-text-muted)' }}>
                "{t.text}"
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
