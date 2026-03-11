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
    <section id="over-ons" className="py-32 px-6 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: "easeOut" }}>
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-widest mb-6">{tr.label}</p>
            <h2 className="text-5xl font-extrabold text-slate-900 leading-tight mb-10">
              {tr.title.split('WebVysion')[0]}
              <span className="text-[#2563EB]">WebVysion</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-7">{tr.p1}</p>
            <p className="text-lg text-slate-500 leading-relaxed mb-7">{tr.p2}</p>
            <p className="text-lg text-slate-500 leading-relaxed">{tr.p3}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex items-center justify-center py-16 px-8 bg-slate-100 rounded-3xl"
          >
            <div className="relative w-full">
              {/* bewegende schaduw achter het vlak */}
              <motion.div
                animate={{
                  opacity: [0.45, 0.22, 0.45],
                  scaleX: [1, 0.78, 1],
                  scaleY: [1, 0.7, 1],
                  y: [0, 12, 0],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-x-6 -bottom-6 h-16 rounded-full bg-slate-500 blur-2xl"
              />
              {/* stilstaand vlak */}
              <div className="relative w-full rounded-2xl overflow-hidden">
                <Image src="/about-saas.png" alt="SaaS development" width={720} height={480} className="w-full h-auto object-cover" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
