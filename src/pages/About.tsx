import PageHero from '../components/ui/PageHero'
import { stats } from '../lib/demo-data'

const team = [
  { name: 'Marcus Reed',  role: 'CEO & Co-Founder',    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80', alt: 'Marcus Reed, CEO' },
  { name: 'Lena Chow',    role: 'Head of Sales',        image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=300&q=80', alt: 'Lena Chow, Head of Sales' },
  { name: 'David Osei',   role: 'Lead Loan Officer',    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80', alt: 'David Osei, Lead Loan Officer' },
  { name: 'Sofia Marte',  role: 'Head of Design',       image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80', alt: 'Sofia Marte, Head of Design' },
]

export default function About() {
  return (
    <>
      <PageHero
        title="About Bihub Homes"
        subtitle="We are a team of passionate real estate professionals dedicated to making property ownership accessible, transparent, and rewarding for everyone."
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80"
        imageAlt="Modern luxury estate representing Bihub Homes"
      />

      {/* Mission */}
      <section aria-labelledby="mission-heading" style={{ backgroundColor: 'var(--color-bg)', padding: '5rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="section-two-col">
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-accent)', marginBottom: '0.75rem' }}>
                Our Mission
              </p>
              <h2 id="mission-heading" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)', color: 'var(--color-text)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
                Built on Trust,<br />Driven by Results
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Bihub Homes was founded on a simple belief: finding and owning a home should be a joyful experience, not a stressful one. We combine deep market expertise with cutting-edge technology to guide every client through their real estate journey.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
                From first-time buyers to seasoned investors, we tailor our services to deliver results that exceed expectations — every time.
              </p>
            </div>

            <div className="stat-grid">
              {stats.map((stat) => (
                <div key={stat.label} style={{
                  padding: '1.5rem', borderRadius: 'var(--radius-md)',
                  backgroundColor: stat.dark ? 'var(--color-dark-surface)' : 'var(--color-surface)',
                  border: stat.dark ? 'none' : '1px solid var(--color-border)',
                }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 700, color: stat.dark ? 'var(--color-dark-text)' : 'var(--color-text)', lineHeight: 1, marginBottom: '0.4rem' }}>
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
      </section>

      {/* Team */}
      <section id="team" aria-labelledby="team-heading" style={{ backgroundColor: 'var(--color-surface-alt)', padding: '5rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 id="team-heading" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)', color: 'var(--color-text)', marginBottom: '3rem' }}>
            Meet the Team
          </h2>
          <div className="listings-grid">
            {team.map((member) => (
              <div key={member.name} style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', transition: 'transform 0.3s, box-shadow 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.09)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ height: 240 }}>
                  <img src={member.image} alt={member.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <p style={{ fontSize: '1rem', fontWeight: 600, fontFamily: 'var(--font-display)', color: 'var(--color-text)', marginBottom: '0.25rem' }}>{member.name}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-heading" style={{ backgroundColor: 'var(--color-dark-bg)', padding: '5rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 id="values-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', color: 'var(--color-dark-text)', marginBottom: '1.25rem' }}>
            Guided by Our Values
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(240,237,228,0.65)', maxWidth: 520, margin: '0 auto 3rem', lineHeight: 1.8 }}>
            Integrity, transparency, and community are at the heart of everything we do.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', textAlign: 'left' }}>
            {[
              { title: 'Integrity',     desc: 'We do what we say. Honest advice, fair pricing, and clear communication every step of the way.' },
              { title: 'Transparency',  desc: 'No hidden fees, no surprises. We keep you informed throughout the entire process.' },
              { title: 'Community',     desc: 'We invest in the neighbourhoods we serve, building lasting relationships beyond the transaction.' },
            ].map((v) => (
              <div key={v.title} style={{ padding: '1.75rem', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(240,237,228,0.08)' }}>
                <p style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-accent)', marginBottom: '0.75rem' }}>{v.title}</p>
                <p style={{ fontSize: '0.875rem', color: 'rgba(240,237,228,0.65)', lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.values-cards{grid-template-columns:1fr!important}}`}</style>
      </section>
    </>
  )
}
