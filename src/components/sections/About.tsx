'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'
import t from '@/lib/translations'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const { lang } = useLang()
  const tr = t[lang].about

  return (
    <section id="over-ons" className="py-24 px-6 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: "easeOut" }}>
            <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">{tr.label}</p>
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              {tr.title.split('WebVysion')[0]}
              <span className="text-[#2563EB]">WebVysion</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-5">{tr.p1}</p>
            <p className="text-slate-500 leading-relaxed mb-5">{tr.p2}</p>
            <p className="text-slate-500 leading-relaxed">{tr.p3}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}>
            <div className="relative bg-white rounded-2xl border border-slate-200 shadow-[0_32px_80px_-8px_rgba(0,0,0,0.40)] overflow-hidden">
              <div className="relative w-full h-56 overflow-hidden">
                <Image src="/about-saas.png" alt="SaaS development" fill className="object-cover" />
              </div>
              <div className="p-8 relative">
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.85) 50%, transparent 70%)',
                  backgroundSize: '200% 100%',
                }}
                animate={{ backgroundPosition: ['-100% 0', '200% 0'] }}
                transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
              />
              <p className="text-sm font-semibold text-slate-900 mb-6">{tr.expertiseTitle}</p>
              <div className="grid grid-cols-1 gap-3">
                {tr.expertise.map((item: string, i: number) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-[#2563EB] shrink-0" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-3 gap-4">
                {[
                  { v: '13+', l: tr.statYear },
                  { v: '324+', l: tr.statProjects },
                  { v: '🇧🇪', l: tr.statCountry },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="text-xl font-extrabold text-slate-900">{s.v}</div>
                    <div className="text-xs text-slate-400 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
