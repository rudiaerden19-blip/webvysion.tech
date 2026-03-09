import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diensten | WebVysion — SaaS, Mobile & Web Development',
  description: 'WebVysion biedt SaaS development, web applicaties, mobiele apps, maatwerk websites en startup MVP development. Meer dan 13 jaar ervaring vanuit België.',
  openGraph: {
    title: 'Diensten | WebVysion',
    description: 'Van SaaS platform tot mobiele app — wij bouwen complete softwareproducten van idee tot werkend systeem.',
    url: 'https://webvysion.tech/diensten',
  },
}

export default function DienstenLayout({ children }: { children: React.ReactNode }) {
  return children
}
