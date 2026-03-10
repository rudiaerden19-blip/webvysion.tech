import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projecten | WebVysion — SaaS, Mobile & Web Development',
  description: 'Bekijk onze gerealiseerde projecten: SafeLink, VoxApp, Internet Buddy, Restaurant POS en meer. Complete softwareproducten gebouwd voor echte klanten vanuit België.',
  keywords: ['SafeLink app', 'VoxApp AI', 'Internet Buddy', 'Restaurant POS', 'software projecten België', 'portfolio development'],
  openGraph: {
    title: 'Projecten | WebVysion — Gerealiseerde Software',
    description: 'Bekijk onze gerealiseerde softwareprojecten — van mobiele apps tot SaaS platforms, gebouwd voor echte klanten.',
    url: 'https://webvysion.tech/projecten',
    images: [{ url: '/logo.png', width: 489, height: 494, alt: 'WebVysion Projecten' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projecten | WebVysion',
    description: 'SafeLink, VoxApp, Internet Buddy en meer — gerealiseerde software door WebVysion.',
    images: ['/logo.png'],
  },
  alternates: { canonical: 'https://webvysion.tech/projecten' },
}

export default function ProjectenLayout({ children }: { children: React.ReactNode }) {
  return children
}
