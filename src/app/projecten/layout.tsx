import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projecten | WebVysion — SaaS, Mobile & Web Development',
  description: 'Bekijk onze gerealiseerde projecten: SafeLink, VoxApp, Internet Buddy, Restaurant POS en meer. Complete softwareproducten gebouwd voor echte klanten.',
  openGraph: {
    title: 'Projecten | WebVysion',
    description: 'Bekijk onze gerealiseerde softwareprojecten — van mobiele apps tot SaaS platforms.',
    url: 'https://webvysion.tech/projecten',
  },
}

export default function ProjectenLayout({ children }: { children: React.ReactNode }) {
  return children
}
