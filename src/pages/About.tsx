import PageHero from '../components/ui/PageHero'
import { stats } from '../lib/demo-data'
import StatCard from '../components/ui/StatCard'

const team = [
  { name: 'Marcus Reed', role: 'CEO & Co-Founder', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80', alt: 'Marcus Reed, CEO' },
  { name: 'Lena Chow', role: 'Head of Sales', image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=300&q=80', alt: 'Lena Chow, Head of Sales' },
  { name: 'David Osei', role: 'Lead Loan Officer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80', alt: 'David Osei, Lead Loan Officer' },
  { name: 'Sofia Marte', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80', alt: 'Sofia Marte, Head of Design' },
]

export default function About() {
  return (
    <>
      <PageHero
        title="About Bihub Homes"
        subtitle="We are a team of passionate real estate professionals dedicated to making property ownership accessible, transparent, and rewarding for everyone."
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80"
        imageAlt="Team of real estate professionals discussing a property"
      />

      <section aria-labelledby="mission-heading" className="py-20" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="mission-heading" className="text-4xl mb-6" style={{ color: 'var(--color-text)' }}>
                Our Mission
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--color-text-muted)' }}>
                Bihub Homes was founded on a simple belief: finding and owning a home should be a joyful experience, not a stressful one. We combine deep market expertise with cutting-edge technology to guide every client through their real estate journey.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                From first-time buyers to seasoned investors, we tailor our services to deliver results that exceed expectations — every time.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} dark={stat.dark} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="team" aria-labelledby="team-heading" className="py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 id="team-heading" className="text-4xl mb-10" style={{ color: 'var(--color-text)' }}>
            Meet the Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-[var(--radius-md)] overflow-hidden"
                style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              >
                <div style={{ height: '220px' }}>
                  <img src={member.image} alt={member.alt} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>{member.name}</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
