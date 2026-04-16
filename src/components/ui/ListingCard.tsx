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
      className="group rounded-[var(--radius-md)] overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
      }}
    >
      <div className="relative overflow-hidden" style={{ height: '200px' }}>
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-[var(--radius-sm)]"
          style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-dark-bg)' }}
        >
          {price}
        </div>
      </div>
      <div className="p-5">
        <h3
          className="text-base font-semibold mb-1"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
        >
          {title}
        </h3>
        <p className="text-xs mb-4" style={{ color: 'var(--color-text-muted)' }}>{location}</p>
        <div className="flex items-center gap-4 pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
          <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--color-text-muted)' }}>
            <Bed size={13} aria-hidden="true" /> {beds} beds
          </span>
          <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--color-text-muted)' }}>
            <Bath size={13} aria-hidden="true" /> {baths} baths
          </span>
          <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--color-text-muted)' }}>
            <Maximize size={13} aria-hidden="true" /> {sqft} sqft
          </span>
        </div>
      </div>
    </article>
  )
}
