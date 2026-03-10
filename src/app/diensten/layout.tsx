import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diensten | WebVysion — SaaS, Web & Mobile Development België',
  description: 'WebVysion biedt SaaS development, web applicaties, mobiele apps (iOS & Android), maatwerk websites en startup MVP development. Meer dan 13 jaar ervaring vanuit België.',
  keywords: ['SaaS development', 'web applicaties', 'mobiele apps iOS Android', 'maatwerk website', 'MVP startup', 'freelance developer België'],
  openGraph: {
    title: 'Diensten | WebVysion — SaaS, Web & Mobile Development',
    description: 'Van SaaS platform tot mobiele app — wij bouwen complete softwareproducten van idee tot werkend systeem. Freelance development team uit België.',
    url: 'https://webvysion.tech/diensten',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'WebVysion Diensten' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diensten | WebVysion',
    description: 'SaaS platforms, mobiele apps, maatwerk websites en MVP development vanuit België.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://webvysion.tech/diensten' },
}

export default function DienstenLayout({ children }: { children: React.ReactNode }) {
  return children
}
