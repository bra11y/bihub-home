export default function TrustedPartners() {
  return (
    <section
      aria-labelledby="partners-heading"
      className="py-20"
      style={{ backgroundColor: 'var(--color-surface-alt)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-14">
          <div>
            <h2
              id="partners-heading"
              className="text-4xl md:text-5xl"
              style={{ color: 'var(--color-text)' }}
            >
              Trusted Partner in
              <br />
              <em style={{ fontStyle: 'italic' }}>Exceptional</em>
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Your Trusted Ally in Property Investment: With extensive expertise and deep market insights, we guide you in making informed real estate decisions that perfectly align with your investment goals.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-8 md:gap-16">
          {['Indigo Realty Group', 'Home Properties', 'Premier Estates', 'Atlas Real Estate'].map((name) => (
            <div
              key={name}
              className="flex items-center gap-2 opacity-50 transition-opacity duration-200 hover:opacity-80"
            >
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center text-xs font-bold"
                style={{ backgroundColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
                aria-hidden="true"
              >
                {name[0]}
              </div>
              <span
                className="text-sm font-semibold tracking-tight"
                style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-display)' }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
