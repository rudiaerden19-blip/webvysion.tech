'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle } from 'lucide-react'

const expertise = [
  'SaaS platforms & cloud architectuur',
  'Mobiele applicaties (iOS & Android)',
  'Realtime systemen & dashboards',
  'Bedrijfssoftware op maat',
  'Maatwerk websites',
  'Startup MVP development',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="over-ons" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold text-[#4F8EF7] uppercase tracking-widest mb-4">Over ons</p>
            <h2 className="text-4xl font-extrabold text-[#E8EDF5] leading-tight mb-6">
              Over{' '}
              <span className="bg-gradient-to-r from-[#4F8EF7] to-[#7C6EF0] bg-clip-text text-transparent">
                WebVysion
              </span>
            </h2>
            <p className="text-[#8899B0] leading-relaxed mb-5">
              WebVysion is een onafhankelijk development team uit België met meer dan 13 jaar ervaring in softwareontwikkeling.
              Wij ontwikkelen complete digitale oplossingen voor bedrijven, organisaties en startups.
            </p>
            <p className="text-[#8899B0] leading-relaxed mb-5">
              Ons team specialiseert zich in het bouwen van schaalbare software, SaaS platforms en maatwerk applicaties.
              Wij combineren technische expertise met praktische ervaring om betrouwbare en professionele software te bouwen.
            </p>
            <p className="text-[#8899B0] leading-relaxed">
              Van eerste concept tot werkend systeem — wij begeleiden het volledige proces.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <div className="bg-[#0F1623] rounded-2xl border border-[#1A2332] p-8">
              <p className="text-sm font-semibold text-[#E8EDF5] mb-6">Onze expertise</p>
              <div className="grid grid-cols-1 gap-3">
                {expertise.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={16} className="text-[#4F8EF7] shrink-0" />
                    <span className="text-sm text-[#8899B0]">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#1A2332] grid grid-cols-3 gap-4">
                {[
                  { v: '13+', l: 'Jaar' },
                  { v: '324+', l: 'Projecten' },
                  { v: '🇧🇪', l: 'België' },
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
