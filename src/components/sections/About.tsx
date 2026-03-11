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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

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
            className="flex items-start justify-center"
          >
            {/* tablet-rand: dunne opstaande rand met licht/schaduw */}
            <div
              className="relative w-[90%] aspect-[4/3] rounded-2xl p-[6px]"
              style={{
                background: 'linear-gradient(160deg, #c8d0da 0%, #a0aab8 40%, #7a8494 70%, #5a6275 100%)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.45), 0 8px 20px rgba(0,0,0,0.25), inset 0 1px 1px rgba(255,255,255,0.5)',
              }}
            >
              {/* foto vlak */}
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image src="/about-saas.png" alt="SaaS development" fill className="object-cover" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
