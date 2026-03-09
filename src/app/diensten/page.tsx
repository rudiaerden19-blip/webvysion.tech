'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/data'

const colors = ['#4F8EF7', '#7C6EF0', '#22D3A5', '#F7804F', '#F7C94F']

export default function DienstenPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-[#4F8EF7] uppercase tracking-widest mb-4">Wat wij bouwen</p>
          <h1 className="text-5xl font-extrabold text-[#E8EDF5] mb-4">Development Services</h1>
          <p className="text-[#8899B0] max-w-xl mx-auto">
            Van SaaS platform tot mobiele app — wij bouwen complete softwareproducten van idee tot werkend systeem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative bg-[#0F1623] rounded-2xl border border-[#1A2332] hover:border-[#243447] transition-all overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${colors[i % colors.length]}, transparent)` }}
              />
              {'image' in service && service.image && (
                <div className="w-full h-48 overflow-hidden border-b border-[#1A2332]">
                  <Image
                    src={service.image as string}
                    alt={service.title}
                    width={600}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-8">
                <h2 className="text-xl font-bold text-[#E8EDF5] mb-3">{service.title}</h2>
                <p className="text-sm text-[#8899B0] leading-relaxed mb-6">{service.description}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: colors[i % colors.length] }} />
                      <span className="text-sm text-[#4A5E78]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gradient-to-br from-[#4F8EF7]/10 to-[#7C6EF0]/10 rounded-2xl border border-[#4F8EF7]/20 p-10 text-center"
        >
          <h2 className="text-2xl font-bold text-[#E8EDF5] mb-3">Klaar om te starten?</h2>
          <p className="text-[#8899B0] max-w-lg mx-auto mb-8">
            Vertel ons over jouw project en wij maken een voorstel op maat. Geen verplichtingen.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#4F8EF7] to-[#7C6EF0] text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
          >
            Start een project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
