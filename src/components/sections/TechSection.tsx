'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { technologies } from '@/lib/data'
import { useLang } from '@/context/LanguageContext'
import t from '@/lib/translations'

export default function TechSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLang()
  const tr = t[lang].tech

  return (
    <section id="technologie" className="py-24 px-6 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">{tr.label}</p>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">{tr.title}</h2>
          <p className="text-slate-500 max-w-xl mx-auto">{tr.description}</p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, i) => {
            const techWithImage = tech as typeof tech & { image?: string }
            return (
              <motion.div key={tech.name} initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: i * 0.05, duration: 0.4 }} whileHover={{ y: -4, transition: { duration: 0.2 } }} className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-slate-200 shadow-[0_12px_40px_-6px_rgba(0,0,0,0.22)] hover:shadow-[0_20px_50px_-6px_rgba(0,0,0,0.28)] hover:border-slate-300 transition-all duration-200 cursor-default">
                <div className="w-full h-16 rounded-xl overflow-hidden flex items-center justify-center bg-slate-50 group-hover:bg-slate-100 transition-colors shrink-0">
                  {techWithImage.image ? (
                    <Image src={techWithImage.image as string} alt={tech.name} width={64} height={64} className="w-full h-full object-contain p-2" />
                  ) : (
                    <span className="text-2xl">{tech.icon}</span>
                  )}
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold text-slate-800 leading-tight">{tech.name}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{tech.category}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
