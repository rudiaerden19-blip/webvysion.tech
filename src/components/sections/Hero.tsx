'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'
import t from '@/lib/translations'

function CountUp({ target, suffix = '', duration = 1500 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])
  return <span ref={ref}>{count}{suffix}</span>
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' as const } }),
}

export default function Hero() {
  const { lang } = useLang()
  const tr = t[lang].hero

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-radial from-blue-50 to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-100 text-sm text-blue-700 font-medium mb-10">
          <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
          {tr.badge}
        </motion.div>

        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="show" className="text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-tight mb-8 text-slate-900">
          Web<span className="text-[#2563EB]">Vysion</span>
        </motion.h1>

        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="show" className="text-sm sm:text-2xl text-slate-500 font-medium mb-6 tracking-wide flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4">
          <span>{tr.tagline}</span>
          <span className="text-slate-300 hidden sm:inline">·</span>
          <span className="text-slate-700 font-semibold">SaaS Platforms</span>
          <span className="text-slate-300 hidden sm:inline">·</span>
          <span className="text-slate-700 font-semibold">Apps</span>
          <span className="text-slate-300 hidden sm:inline">·</span>
          <span className="text-slate-700 font-semibold">Custom Websites</span>
        </motion.p>

        <motion.p custom={3} variants={fadeUp} initial="hidden" animate="show" className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-14 px-4">
          {tr.description}
        </motion.p>

        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show" className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link href="/projecten" className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-[#2563EB] text-white font-semibold text-base hover:bg-[#1D4ED8] transition-colors shadow-sm shadow-blue-200">
            {tr.cta1}<ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact" className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-base hover:border-slate-300 hover:bg-slate-50 transition-all">
            {tr.cta2}
          </Link>
        </motion.div>

        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="show" className="mt-24 grid grid-cols-3 gap-10 max-w-xl mx-auto">
          {[
            { target: 13, suffix: '+', label: tr.stat1 },
            { target: 324, suffix: '+', label: tr.stat2 },
            { target: 100, suffix: '%', label: tr.stat3 },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-extrabold text-slate-900 mb-2">
                <CountUp target={stat.target} suffix={stat.suffix} duration={1200} />
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 8, 0] }} transition={{ delay: 1.5, duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-300">
        <ChevronDown size={20} />
      </motion.div>
    </section>
  )
}
