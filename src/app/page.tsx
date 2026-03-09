import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import ProjectsSection from '@/components/sections/ProjectsSection'
import TechSection from '@/components/sections/TechSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsSection />
      <TechSection />
      <ServicesSection />
      <ContactSection />
    </>
  )
}
