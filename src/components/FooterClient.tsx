'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Linkedin, Mail } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'
import t from '@/lib/translations'

export default function FooterClient() {
  const { lang } = useLang()
  const tr = t[lang].footer
  const navTr = t[lang].nav

  const navLinks = [
    { href: '/', label: navTr.home },
    { href: '/projecten', label: navTr.projects },
    { href: '/technologie', label: navTr.technology },
    { href: '/diensten', label: navTr.services },
    { href: '/contact', label: navTr.contact },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      <div className="md:col-span-1">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
            <Image src="/logo.png" alt="WebVysion" width={32} height={32} className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-slate-900 text-lg">WebVysion</span>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{tr.tagline}</p>
        <div className="flex items-center gap-3 mt-5">
          <a href="mailto:rudiaerden19@gmail.com" className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-[#2563EB] hover:border-blue-200 transition-all">
            <Mail size={17} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61586754135685" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-[#2563EB] hover:border-blue-200 transition-all">
            <Facebook size={17} />
          </a>
          <a href="https://www.linkedin.com/in/vysion-it-7a158b3b2/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-[#2563EB] hover:border-blue-200 transition-all">
            <Linkedin size={17} />
          </a>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">{tr.nav}</p>
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm text-slate-500 hover:text-slate-900 transition-colors">{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">{tr.services}</p>
        <ul className="space-y-2">
          {t[lang].services.items.map((s: { title: string }) => (
            <li key={s.title}>
              <Link href="/diensten" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">{s.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">{tr.platforms}</p>
        <ul className="space-y-2">
          {[
            { label: 'vysionhoreca.com', url: 'https://www.vysionhoreca.com' },
            { label: 'webvysion.tech', url: 'https://www.webvysion.tech' },
            { label: 'vysionapps.io', url: 'https://www.vysionapps.io' },
            { label: 'voxapp.tech', url: 'https://www.voxapp.tech' },
            { label: 'appvysion.com', url: 'https://www.appvysion.com' },
          ].map((site) => (
            <li key={site.label}>
              <a href={site.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#2563EB] hover:text-[#1D4ED8] transition-colors">{site.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
