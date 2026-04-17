import { Bed, Bath, Maximize } from 'lucide-react'

interface ListingCardProps {
  title: string
  location: string
  price: string
  beds: number
  baths: number
  sqft: string
  image: string
  alt: string
  type: string
}

export default function ListingCard({ title, location, price, beds, baths, sqft, image, alt }: ListingCardProps) {
  return (
    <article
      style={{
        backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)', overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.10)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
        <img src={image} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
        <div style={{
          position: 'absolute', top: 12, left: 12,
          padding: '0.25rem 0.625rem', fontSize: '0.78rem', fontWeight: 700,
          backgroundColor: 'var(--color-accent)', color: 'var(--color-dark-bg)',
          borderRadius: 'var(--radius-sm)',
        }}>
          {price}
        </div>
      </div>

      <div style={{ padding: '1.25rem' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.25rem' }}>
          {title}
        </h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>{location}</p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
          {[
            { icon: Bed,      label: `${beds} beds` },
            { icon: Bath,     label: `${baths} baths` },
            { icon: Maximize, label: `${sqft} sqft` },
          ].map(({ icon: Icon, label }) => (
            <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
              <Icon size={13} aria-hidden="true" /> {label}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
