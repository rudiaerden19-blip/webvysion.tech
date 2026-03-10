import ContactSection from '@/components/sections/ContactSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | WebVysion — Start een project',
  description: 'Neem contact op met WebVysion voor freelance development projecten. Wij bouwen SaaS platforms, mobiele apps en maatwerk websites voor bedrijven en startups in België en internationaal.',
  openGraph: {
    title: 'Contact | WebVysion — Start een project',
    description: 'Vertel ons over jouw project en wij maken een voorstel op maat. Beschikbaar voor lokale en internationale freelance opdrachten.',
    url: 'https://webvysion.tech/contact',
    images: [{ url: '/logo.png', width: 489, height: 494, alt: 'WebVysion Contact' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | WebVysion',
    description: 'Start een project met WebVysion — freelance development team uit België.',
    images: ['/logo.png'],
  },
  alternates: { canonical: 'https://webvysion.tech/contact' },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      <ContactSection />
    </div>
  )
}
