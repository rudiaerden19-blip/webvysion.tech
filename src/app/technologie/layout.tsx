import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technologie | WebVysion — Next.js, React Native, Supabase & meer',
  description: 'WebVysion werkt met Next.js, TypeScript, React Native, Supabase, Firebase, Vercel en meer. Moderne, bewezen technologieën voor snelle en schaalbare software.',
  openGraph: {
    title: 'Technologie Stack | WebVysion',
    description: 'Onze technologie stack: Next.js, TypeScript, React Native, Tailwind CSS, Supabase en meer.',
    url: 'https://webvysion.tech/technologie',
  },
}

export default function TechnologieLayout({ children }: { children: React.ReactNode }) {
  return children
}
