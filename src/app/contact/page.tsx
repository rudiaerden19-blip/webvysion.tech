import ContactSection from '@/components/sections/ContactSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | WebVysion',
  description: 'Neem contact op met WebVysion voor freelance development projecten.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      <ContactSection />
    </div>
  )
}
