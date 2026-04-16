interface PageHeroProps {
  title: string
  subtitle: string
  image: string
  imageAlt: string
}

export default function PageHero({ title, subtitle, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 35, 24, 0.68)' }} />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <h1 className="text-5xl md:text-6xl mb-5" style={{ color: '#ffffff' }}>{title}</h1>
        <p className="text-base max-w-lg" style={{ color: 'rgba(255,255,255,0.75)' }}>{subtitle}</p>
      </div>
    </section>
  )
}
