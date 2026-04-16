import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { galleryItems } from '../../lib/demo-data'

export default function PropertyGallery() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' })
  }

  return (
    <section
      aria-labelledby="gallery-heading"
      className="py-20"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2
              id="gallery-heading"
              className="text-4xl md:text-5xl"
              style={{ color: 'var(--color-text)' }}
            >
              Your Trusted Real
              <br />
              Estate Advisors
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm mr-4 hidden md:block max-w-xs text-right" style={{ color: 'var(--color-text-muted)' }}>
              Discover the epitome of luxury living in this offering sweeping panoramic views from every room.
            </p>
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-brand)'
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.borderColor = 'var(--color-brand)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = 'var(--color-text-muted)'
                e.currentTarget.style.borderColor = 'var(--color-border)'
              }}
              aria-label="Scroll gallery left"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-brand)'
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.borderColor = 'var(--color-brand)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = 'var(--color-text-muted)'
                e.currentTarget.style.borderColor = 'var(--color-border)'
              }}
              aria-label="Scroll gallery right"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          role="list"
          aria-label="Property gallery"
        >
          {galleryItems.map((item) => (
            <article
              key={item.id}
              role="listitem"
              className="flex-none w-64 group rounded-[var(--radius-md)] overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              <div className="relative overflow-hidden" style={{ height: '180px' }}>
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3
                  className="text-sm font-semibold mb-1.5"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
                >
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>
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
