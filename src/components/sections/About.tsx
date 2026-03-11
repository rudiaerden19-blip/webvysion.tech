'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
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

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }} className="flex items-center justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-[0_32px_80px_-8px_rgba(0,0,0,0.40)]">
              <Image src="/about-saas.png" alt="SaaS development" width={480} height={320} className="w-full h-auto object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
