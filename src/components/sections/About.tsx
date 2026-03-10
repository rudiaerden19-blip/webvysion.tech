'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'
import t from '@/lib/translations'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const { lang } = useLang()
  const tr = t[lang].about

  return (
    <section id="over-ons" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: "easeOut" }}>
            <p className="text-xs font-semibold text-[#4F8EF7] uppercase tracking-widest mb-4">{tr.label}</p>
            <h2 className="text-4xl font-extrabold text-[#E8EDF5] leading-tight mb-6">
              {tr.title.split('WebVysion')[0]}
              <span className="bg-gradient-to-r from-[#4F8EF7] to-[#7C6EF0] bg-clip-text text-transparent">WebVysion</span>
            </h2>
            <p className="text-[#8899B0] leading-relaxed mb-5">{tr.p1}</p>
            <p className="text-[#8899B0] leading-relaxed mb-5">{tr.p2}</p>
            <p className="text-[#8899B0] leading-relaxed">{tr.p3}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}>
            <div className="bg-[#0F1623] rounded-2xl border border-[#1A2332] p-8">
              <p className="text-sm font-semibold text-[#E8EDF5] mb-6">{tr.expertiseTitle}</p>
              <div className="grid grid-cols-1 gap-3">
                {tr.expertise.map((item: string, i: number) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-[#4F8EF7] shrink-0" />
                    <span className="text-sm text-[#8899B0]">{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-[#1A2332] grid grid-cols-3 gap-4">
                {[
                  { v: '13+', l: tr.statYear },
                  { v: '324+', l: tr.statProjects },
                  { v: '🇧🇪', l: tr.statCountry },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="text-xl font-extrabold text-[#E8EDF5]">{s.v}</div>
                    <div className="text-xs text-[#4A5E78] mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
