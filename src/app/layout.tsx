import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'WebVysion | Full-Stack SaaS Development',
  description: 'Development team gespecialiseerd in SaaS platforms, mobiele applicaties en maatwerk websites. Meer dan 13 jaar ervaring in softwareontwikkeling.',
  keywords: ['SaaS development', 'web development', 'mobile apps', 'freelance developer', 'Belgium', 'WebVysion'],
  authors: [{ name: 'WebVysion' }],
  openGraph: {
    title: 'WebVysion | Full-Stack SaaS Development',
    description: 'Development team gespecialiseerd in SaaS platforms, mobiele applicaties en maatwerk websites.',
    url: 'https://webvysion.tech',
    siteName: 'WebVysion',
    locale: 'nl_BE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebVysion | Full-Stack SaaS Development',
    description: 'Development team gespecialiseerd in SaaS platforms, mobiele applicaties en maatwerk websites.',
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://webvysion.tech'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className="bg-[#080C14] text-[#E8EDF5] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
