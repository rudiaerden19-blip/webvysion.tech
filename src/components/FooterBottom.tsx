'use client'

import Link from 'next/link'
import { useLang } from '@/context/LanguageContext'
import t from '@/lib/translations'

export default function FooterBottom() {
  const { lang } = useLang()
  const tr = t[lang].footer

  return (
    <div className="flex items-center gap-4 flex-wrap">
      <p className="text-xs text-slate-400">© {new Date().getFullYear()} WebVysion. All rights reserved.</p>
      <Link href="/privacy" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">{tr.privacy}</Link>
      <Link href="/cookies" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">{tr.cookiePolicy}</Link>
    </div>
  )
}
