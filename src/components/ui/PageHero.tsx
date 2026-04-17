interface PageHeroProps {
  title: string
  subtitle: string
  image: string
  imageAlt: string
}

export default function PageHero({ title, subtitle, image, imageAlt }: PageHeroProps) {
  return (
    <section style={{ position: 'relative', paddingTop: '10rem', paddingBottom: '5rem', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src={image} alt={imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,35,24,0.7)' }} />
      </div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#fff', marginBottom: '1.25rem', lineHeight: 1.1, maxWidth: 640 }}>
          {title}
        </h1>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.72)', maxWidth: 520, lineHeight: 1.75 }}>
          {subtitle}
        </p>
      </div>
    </section>
  )
}
