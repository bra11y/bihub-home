import { Star } from 'lucide-react'
import { testimonials } from '../../lib/demo-data'

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" style={{ backgroundColor: 'var(--color-surface-alt)', padding: '5rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>

        <div style={{ textAlign: 'center', marginBottom: '0.75rem' }}>
          <h2 id="testimonials-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--color-text)', lineHeight: 1.2 }}>
            See what our customers<br />are saying
          </h2>
        </div>
        <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
          More than{' '}
          <strong style={{ color: 'var(--color-text)' }}>700 million+ people</strong>
          {' '}have tried the application and given their opinion
        </p>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <article
              key={t.id}
              style={{
                backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)', padding: '1.25rem',
                display: 'flex', flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <img src={t.image} alt={t.alt} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} width={40} height={40} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)' }}>{t.name}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{t.role}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', flexShrink: 0 }}>
                  <Star size={12} fill="var(--color-accent)" color="var(--color-accent)" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text)' }}>{t.rating}</span>
                </div>
              </div>
              <p style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', lineHeight: 1.7, flex: 1 }}>
                "{t.text}"
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
