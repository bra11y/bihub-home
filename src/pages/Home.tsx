import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import TrustedPartners from '../components/sections/TrustedPartners'
import Services from '../components/sections/Services'
import HomeLoans from '../components/sections/HomeLoans'
import PropertyGallery from '../components/sections/PropertyGallery'
import Testimonials from '../components/sections/Testimonials'
import ContactForm from '../components/sections/ContactForm'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <TrustedPartners />
      <Services />
      <HomeLoans />
      <PropertyGallery />
      <Testimonials />
      <ContactForm />
    </>
  )
}
