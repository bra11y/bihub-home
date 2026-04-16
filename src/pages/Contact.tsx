import ContactForm from '../components/sections/ContactForm'
import PageHero from '../components/ui/PageHero'

export default function Contact() {
  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="Have questions? We're here to help. Reach out to our team and we'll get back to you within 24 hours."
        image="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1800&q=80"
        imageAlt="Welcoming home exterior with open front door"
      />
      <ContactForm />
    </>
  )
}
