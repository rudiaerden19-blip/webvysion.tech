import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import { LanguageProvider } from '@/context/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://webvysion.tech/#organization',
      name: 'WebVysion',
      url: 'https://webvysion.tech',
      logo: 'https://webvysion.tech/logo.png',
      description: 'Onafhankelijk development team uit België gespecialiseerd in SaaS platforms, mobiele applicaties en maatwerk websites. Meer dan 13 jaar ervaring.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'BE',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'info@webvysion.tech',
        availableLanguage: ['Dutch', 'French', 'English', 'German'],
      },
      sameAs: [
        'https://www.facebook.com/profile.php?id=61586754135685',
        'https://www.linkedin.com/company/webvysion',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://webvysion.tech/#website',
      url: 'https://webvysion.tech',
      name: 'WebVysion',
      publisher: { '@id': 'https://webvysion.tech/#organization' },
      inLanguage: ['nl-BE', 'fr-BE', 'de', 'en'],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://webvysion.tech/#service',
      name: 'WebVysion — Full-Stack SaaS & Web Development',
      url: 'https://webvysion.tech',
      provider: { '@id': 'https://webvysion.tech/#organization' },
      serviceType: ['SaaS Development', 'Web Development', 'Mobile App Development', 'MVP Development'],
      areaServed: { '@type': 'Country', name: 'Belgium' },
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://webvysion.tech'),
  title: {
    default: 'WebVysion | Full-Stack SaaS & Web Development — België',
    template: '%s | WebVysion',
  },
  description: 'WebVysion is een onafhankelijk development team uit België met 13+ jaar ervaring. Wij bouwen SaaS platforms, mobiele apps, maatwerk websites en MVP producten voor bedrijven en startups.',
  keywords: [
    'SaaS development België', 'web development Belgium', 'mobile app development',
    'Next.js developer Belgium', 'React Native developer', 'maatwerk software België',
    'software developer Belgie', 'MVP startup development', 'website laten maken',
    'WebVysion', 'software development team Belgium',
  ],
  authors: [{ name: 'WebVysion', url: 'https://webvysion.tech' }],
  creator: 'WebVysion',
  publisher: 'WebVysion',
  verification: {
    google: 'Stdv7JKUyFOrU8jY6t4Q-IsMDG5vCBAvzosQlrAZV5I',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
  openGraph: {
    title: 'WebVysion | Full-Stack SaaS & Web Development — België',
    description: 'Onafhankelijk development team uit België. SaaS platforms, mobiele apps en maatwerk websites. 13+ jaar ervaring.',
    url: 'https://webvysion.tech',
    siteName: 'WebVysion',
    locale: 'nl_BE',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 489,
        height: 494,
        alt: 'WebVysion — Full-Stack Development Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebVysion | Full-Stack SaaS & Web Development',
    description: 'Onafhankelijk development team uit België. SaaS, mobiele apps en maatwerk websites.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://webvysion.tech',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-white text-slate-900 antialiased overflow-x-hidden`}>
        <LanguageProvider>
          <ScrollToTop />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
