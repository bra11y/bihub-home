import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { galleryItems } from '../../lib/demo-data'

export default function PropertyGallery() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 280 : -280, behavior: 'smooth' })
  }

  return (
    <section aria-labelledby="gallery-heading" style={{ backgroundColor: 'var(--color-bg)', padding: '5rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <h2 id="gallery-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--color-text)', lineHeight: 1.15 }}>
              Your Trusted Real<br />Estate Advisors
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', maxWidth: 200, textAlign: 'right', display: 'none' }} className="gallery-desc">
              Discover the epitome of luxury living in this offering sweeping panoramic views.
            </p>
            {(['left', 'right'] as const).map((dir) => (
              <button
                key={dir}
                type="button"
                onClick={() => scroll(dir)}
                aria-label={`Scroll gallery ${dir}`}
                style={{
                  width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--color-border)',
                  background: 'var(--color-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: 'var(--color-text-muted)', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-brand)'; e.currentTarget.style.borderColor = 'var(--color-brand)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-surface)'; e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-muted)'; }}
              >
                {dir === 'left' ? <ChevronLeft size={17} /> : <ChevronRight size={17} />}
              </button>
            ))}
          </div>
        </div>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          role="list"
          aria-label="Property gallery"
          style={{
            display: 'flex', gap: '1rem', overflowX: 'auto',
            scrollbarWidth: 'none', paddingBottom: '0.5rem',
          }}
        >
          {galleryItems.map((item) => (
            <article
              key={item.id}
              role="listitem"
              style={{
                flexShrink: 0, width: 240,
                backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)', overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.09)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ height: 160, overflow: 'hidden' }}>
                <img src={item.image} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
              </div>
              <div style={{ padding: '1rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.4rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', lineHeight: 1.55, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
