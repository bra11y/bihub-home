const partners = ['Indigo Realty Group', 'Home Properties', 'Premier Estates', 'Atlas Real Estate']

export default function TrustedPartners() {
  return (
    <section aria-labelledby="partners-heading" style={{ backgroundColor: 'var(--color-surface-alt)', padding: '5rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>

        <div className="section-two-col" style={{ marginBottom: '3.5rem' }}>
          <h2 id="partners-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--color-text)', lineHeight: 1.15 }}>
            Trusted Partner in<br />
            <em style={{ fontStyle: 'italic' }}>Exceptional</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
            Your Trusted Ally in Property Investment: With extensive expertise and deep market insights, we guide you in making informed real estate decisions that perfectly align with your investment goals.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem' }}>
          {partners.map((name) => (
            <div
              key={name}
              style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', opacity: 0.5, transition: 'opacity 0.2s', cursor: 'default' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}
            >
              <div style={{ width: 32, height: 32, borderRadius: 6, backgroundColor: 'var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }} aria-hidden="true">
                {name[0]}
              </div>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, fontFamily: 'var(--font-display)', color: 'var(--color-text-muted)' }}>
                {name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
