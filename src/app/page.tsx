import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ScrollingWords from '@/components/ScrollingWords'
import TechSection from '@/components/sections/TechSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ContactSection from '@/components/sections/ContactSection'
import ReviewsSection from '@/components/sections/ReviewsSection'

export const metadata: Metadata = {
  title: 'WebVysion | Full-Stack SaaS & Web Development — België',
  description: 'WebVysion is een onafhankelijk development team uit België met 13+ jaar ervaring. Wij bouwen SaaS platforms, mobiele apps (iOS & Android), maatwerk websites en MVP producten van idee tot werkend systeem.',
  alternates: { canonical: 'https://webvysion.tech' },
  openGraph: {
    title: 'WebVysion | Full-Stack SaaS & Web Development — België',
    description: 'Onafhankelijk development team uit België. 13+ jaar ervaring in SaaS, mobile apps en maatwerk software.',
    url: 'https://webvysion.tech',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'WebVysion Development Team' }],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsSection />
      <ScrollingWords />
      <TechSection />
      <ServicesSection />
      <ContactSection />
      <ReviewsSection />
    </>
  )
}
