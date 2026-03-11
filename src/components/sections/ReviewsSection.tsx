'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/context/LanguageContext'
import t from '@/lib/translations'

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#2563EB">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const { lang } = useLang()
  const tr = t[lang].reviews

  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#e3e3e3' }} ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">{tr.label}</p>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">{tr.title}</h2>
          <p className="text-slate-500 max-w-xl mx-auto">{tr.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tr.items.map((review: { name: string; role: string; text: string }, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-[0_12px_60px_rgba(0,0,0,0.40)] p-7 flex flex-col"
            >
              <StarRating />
              <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-6">"{review.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{review.name}</p>
                  <p className="text-xs text-slate-400">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
