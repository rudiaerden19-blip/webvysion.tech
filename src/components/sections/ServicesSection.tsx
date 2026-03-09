'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/data'

const colors = ['#4F8EF7', '#7C6EF0', '#22D3A5', '#F7804F', '#F7C94F']

export default function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="diensten" className="py-24 px-6 bg-[#0D1117]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-[#4F8EF7] uppercase tracking-widest mb-4">Wat we bouwen</p>
          <h2 className="text-4xl font-extrabold text-[#E8EDF5] mb-4">Development Services</h2>
          <p className="text-[#8899B0] max-w-xl mx-auto">
            WebVysion helpt bedrijven en startups met het bouwen van moderne software en websites.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group relative bg-[#0F1623] rounded-2xl border border-[#1A2332] hover:border-[#243447] transition-all duration-300 overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${colors[i % colors.length]}, transparent)` }}
              />

              {/* Preview afbeelding */}
              {'image' in service && service.image && (
                <div className="w-full h-48 overflow-hidden border-b border-[#1A2332]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="p-7">
                <h3 className="text-base font-bold text-[#E8EDF5] mb-2">{service.title}</h3>
                <p className="text-sm text-[#8899B0] leading-relaxed mb-5">{service.description}</p>

                <ul className="space-y-1.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: colors[i % colors.length] }} />
                      <span className="text-xs text-[#4A5E78]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative bg-gradient-to-br from-[#4F8EF7]/10 to-[#7C6EF0]/10 rounded-2xl border border-[#4F8EF7]/20 overflow-hidden flex flex-col justify-between"
          >
            {/* Afbeelding bovenaan */}
            <div className="w-full h-48 overflow-hidden border-b border-[#4F8EF7]/20">
              <Image
                src="/services/cta.png"
                alt="Start een project"
                width={600}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-7 flex flex-col justify-between flex-1">
              <div>
                <p className="text-2xl mb-4">✦</p>
                <h3 className="text-base font-bold text-[#E8EDF5] mb-2">Klaar om te starten?</h3>
                <p className="text-sm text-[#8899B0] leading-relaxed">
                  Vertel ons over jouw project en wij maken een voorstel op maat.
                </p>
              </div>
              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#4F8EF7] to-[#7C6EF0] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Start een project
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
