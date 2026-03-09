'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' as const } }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-radial from-[rgba(79,142,247,0.1)] to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-[rgba(124,110,240,0.07)] to-transparent rounded-full blur-3xl" />
      </div>

      {/* Floating card decorations — verborgen op mobile, zichtbaar vanaf tablet */}
      <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden">
        {/* Kaart linksboven — kleiner op tablet, vol op desktop */}
        <motion.div
          className="absolute top-[12%] left-[3%] lg:left-[6%] w-36 lg:w-48 h-20 lg:h-24 rounded-2xl border border-[#1E3050] bg-[#0B1422]/60 backdrop-blur-sm shadow-lg shadow-blue-900/10"
          animate={{ y: [0, -14, 0], x: [0, 6, 0], rotate: [0, 1, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="p-3 lg:p-4">
            <div className="w-5 h-1.5 rounded-full bg-[#4F8EF7]/40 mb-2" />
            <div className="w-12 lg:w-16 h-1.5 rounded-full bg-[#1E3050] mb-1.5" />
            <div className="w-8 lg:w-10 h-1.5 rounded-full bg-[#1E3050]" />
          </div>
        </motion.div>

        {/* Kaart rechtsonder */}
        <motion.div
          className="absolute bottom-[18%] right-[3%] lg:right-[7%] w-36 lg:w-44 h-18 lg:h-20 rounded-2xl border border-[#221E4A] bg-[#0D0B1E]/60 backdrop-blur-sm shadow-lg shadow-purple-900/10"
          animate={{ y: [0, 12, 0], x: [0, -8, 0], rotate: [0, -1, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        >
          <div className="p-3 lg:p-4">
            <div className="w-5 h-1.5 rounded-full bg-[#7C6EF0]/40 mb-2" />
            <div className="w-10 lg:w-14 h-1.5 rounded-full bg-[#221E4A] mb-1.5" />
            <div className="w-7 lg:w-8 h-1.5 rounded-full bg-[#221E4A]" />
          </div>
        </motion.div>

        {/* Klein badge rechtsboven — alleen op desktop */}
        <motion.div
          className="hidden lg:flex absolute top-[22%] right-[9%] w-32 h-10 rounded-xl border border-[#1E3050] bg-[#0B1422]/70 backdrop-blur-sm items-center gap-2 px-3"
          animate={{ y: [0, -10, 0], x: [0, -4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        >
          <div className="w-2 h-2 rounded-full bg-[#4F8EF7]/60 shrink-0" />
          <div className="flex flex-col gap-1">
            <div className="w-14 h-1 rounded-full bg-[#1E3050]" />
            <div className="w-10 h-1 rounded-full bg-[#1E3050]" />
          </div>
        </motion.div>

        {/* Klein badge linksonder — alleen op desktop */}
        <motion.div
          className="hidden lg:flex absolute bottom-[28%] left-[8%] w-28 h-10 rounded-xl border border-[#221E4A] bg-[#0D0B1E]/70 backdrop-blur-sm items-center gap-2 px-3"
          animate={{ y: [0, 8, 0], x: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
        >
          <div className="w-2 h-2 rounded-full bg-[#7C6EF0]/60 shrink-0" />
          <div className="flex flex-col gap-1">
            <div className="w-12 h-1 rounded-full bg-[#221E4A]" />
            <div className="w-8 h-1 rounded-full bg-[#221E4A]" />
          </div>
        </motion.div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F1623] border border-[#1A2332] text-xs text-[#8899B0] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#4F8EF7] animate-pulse-slow" />
          Development team · België · 13+ jaar ervaring
        </motion.div>

        {/* Title */}
        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="show"
          className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
        >
          <span className="text-[#E8EDF5]">Web</span>
          <span className="bg-gradient-to-r from-[#4F8EF7] to-[#7C6EF0] bg-clip-text text-transparent">Vysion</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="show"
          className="text-lg sm:text-xl text-[#8899B0] font-medium mb-4 tracking-wide"
        >
          Full-Stack Development Team
          <span className="text-[#4A5E78] mx-2">·</span>
          <span className="text-[#4F8EF7]">SaaS Platforms</span>
          <span className="text-[#4A5E78] mx-2">•</span>
          <span className="text-[#7C6EF0]">Apps</span>
          <span className="text-[#4A5E78] mx-2">•</span>
          Custom Websites
        </motion.p>

        {/* Description */}
        <motion.p custom={3} variants={fadeUp} initial="hidden" animate="show"
          className="text-base text-[#4A5E78] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          WebVysion is een development team gespecialiseerd in het bouwen van moderne softwareoplossingen.
          Met meer dan 13 jaar ervaring ontwikkelen wij SaaS platforms, mobiele applicaties, realtime systemen
          en professionele maatwerk websites.
        </motion.p>

        {/* CTA buttons */}
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/projecten"
            className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#4F8EF7] to-[#7C6EF0] text-white font-semibold text-sm hover:opacity-90 transition-all shadow-xl shadow-blue-500/20"
          >
            Bekijk projecten
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F1623] border border-[#1A2332] text-[#E8EDF5] font-semibold text-sm hover:border-[#243447] hover:bg-[#141D2B] transition-all"
          >
            Start een project
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="show"
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { value: '13+', label: 'Jaar ervaring' },
            { value: '124+', label: 'Projecten opgeleverd' },
            { value: '100%', label: 'Custom software' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-extrabold text-[#E8EDF5] mb-1">{stat.value}</div>
              <div className="text-xs text-[#4A5E78]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#4A5E78]"
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  )
}
