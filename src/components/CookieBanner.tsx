'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLang } from '@/context/LanguageContext'

const text = {
  nl: {
    title: '🍪 Wij gebruiken cookies',
    desc: 'Wij gebruiken cookies om uw ervaring te verbeteren en het websiteverkeer te analyseren. Door op "Accepteren" te klikken, gaat u akkoord met ons cookiebeleid.',
    accept: 'Accepteren',
    decline: 'Weigeren',
    more: 'Meer info',
  },
  fr: {
    title: '🍪 Nous utilisons des cookies',
    desc: 'Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic. En cliquant sur "Accepter", vous acceptez notre politique de cookies.',
    accept: 'Accepter',
    decline: 'Refuser',
    more: 'En savoir plus',
  },
  de: {
    title: '🍪 Wir verwenden Cookies',
    desc: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und den Website-Verkehr zu analysieren. Mit "Akzeptieren" stimmen Sie unserer Cookie-Richtlinie zu.',
    accept: 'Akzeptieren',
    decline: 'Ablehnen',
    more: 'Mehr erfahren',
  },
  en: {
    title: '🍪 We use cookies',
    desc: 'We use cookies to improve your experience and analyse website traffic. By clicking "Accept", you agree to our cookie policy.',
    accept: 'Accept',
    decline: 'Decline',
    more: 'Learn more',
  },
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const { lang } = useLang()
  const tr = text[lang as keyof typeof text] ?? text.nl

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4" style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}>
      <div className="bg-white rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.35)] max-w-md w-full p-8">
        <h3 className="text-lg font-bold text-slate-900 mb-3">{tr.title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-6">{tr.desc}</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={accept}
            className="flex-1 px-5 py-3 rounded-xl bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1D4ED8] transition-colors"
          >
            {tr.accept}
          </button>
          <button
            onClick={decline}
            className="flex-1 px-5 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 transition-colors"
          >
            {tr.decline}
          </button>
        </div>
        <p className="text-center mt-4">
          <Link href="/cookies" className="text-xs text-[#2563EB] hover:underline" onClick={decline}>
            {tr.more}
          </Link>
        </p>
      </div>
    </div>
  )
}
