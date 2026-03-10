import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technologie | WebVysion — Next.js, React Native, Supabase & meer',
  description: 'WebVysion werkt met Next.js, TypeScript, React Native, Supabase, Firebase en Vercel. Moderne, bewezen technologieën voor snelle, schaalbare en onderhoudbare software.',
  keywords: ['Next.js developer', 'TypeScript', 'React Native', 'Supabase', 'Firebase', 'Vercel', 'Tailwind CSS', 'tech stack België'],
  openGraph: {
    title: 'Tech Stack | WebVysion — Next.js, React Native & meer',
    description: 'Onze technologie stack: Next.js, TypeScript, React Native, Tailwind CSS, Supabase, Firebase en Vercel voor moderne, schaalbare software.',
    url: 'https://webvysion.tech/technologie',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'WebVysion Tech Stack' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Stack | WebVysion',
    description: 'Next.js, TypeScript, React Native, Supabase en meer — de technologieën die WebVysion gebruikt.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://webvysion.tech/technologie' },
}

export default function TechnologieLayout({ children }: { children: React.ReactNode }) {
  return children
}
