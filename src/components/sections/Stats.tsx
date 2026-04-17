import { stats } from '../../lib/demo-data'

export default function Stats() {
  return (
    <section aria-labelledby="stats-heading" style={{ backgroundColor: 'var(--color-bg)', padding: '5rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="section-two-col">

          {/* Left */}
          <div>
            <h2 id="stats-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--color-text)', marginBottom: '1.5rem', lineHeight: 1.15 }}>
              Your Trusted Real<br />Estate Advisors
            </h2>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: 240 }}>
              <img
                src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=700&q=80"
                alt="Modern luxury home exterior at dusk with warm lighting"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Right */}
          <div>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: 340, lineHeight: 1.7 }}>
              Discover the epitome of luxury living in this offering sweeping panoramic views from every room.
            </p>
            <div className="stat-grid">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: stat.dark ? 'var(--color-dark-surface)' : 'var(--color-surface)',
                    border: stat.dark ? 'none' : '1px solid var(--color-border)',
                  }}
                >
                  <p style={{
                    fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 700,
                    color: stat.dark ? 'var(--color-dark-text)' : 'var(--color-text)',
                    lineHeight: 1, marginBottom: '0.4rem',
                  }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: stat.dark ? 'rgba(240,237,228,0.65)' : 'var(--color-text-muted)' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
