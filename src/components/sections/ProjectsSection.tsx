'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'

export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projecten" className="py-24 px-6 bg-[#0D1117]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-[#4F8EF7] uppercase tracking-widest mb-4">Portfolio</p>
          <h2 className="text-4xl font-extrabold text-[#E8EDF5] mb-4">Onze projecten</h2>
          <p className="text-[#8899B0] max-w-xl mx-auto">
            Echte softwareproducten gebouwd voor echte klanten — van mobile apps tot complete SaaS platforms.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative bg-[#0F1623] rounded-2xl border border-[#1A2332] p-7 hover:border-[#243447] transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at top left, ${project.color}10, transparent 70%)` }}
              />

              {/* Top */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
                >
                  {project.emoji}
                </div>
                <div className="flex flex-wrap gap-1.5 max-w-[55%] justify-end">
                  {project.tech.slice(0, 2).map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-[#141D2B] border border-[#1A2332] text-xs text-[#8899B0]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-[#E8EDF5] mb-1.5 group-hover:text-white transition-colors">
                {project.name}
              </h3>
              <p className="text-xs font-medium mb-3" style={{ color: project.color }}>
                {project.tagline}
              </p>
              <p className="text-sm text-[#8899B0] leading-relaxed line-clamp-3 mb-5">
                {project.description}
              </p>

              {/* Features preview */}
              <div className="space-y-1.5 mb-5">
                {project.features.slice(0, 3).map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: project.color }} />
                    <span className="text-xs text-[#4A5E78]">{f}</span>
                  </div>
                ))}
                {project.features.length > 3 && (
                  <span className="text-xs text-[#4A5E78] pl-3.5">+{project.features.length - 3} meer</span>
                )}
              </div>

              {/* Bezoek project knop */}
              {'url' in project && project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg border transition-all"
                  style={{
                    color: project.color,
                    borderColor: `${project.color}40`,
                    background: `${project.color}0D`,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={13} />
                  Bezoek project
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/projecten"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#1A2332] text-[#8899B0] text-sm font-medium hover:text-[#E8EDF5] hover:border-[#243447] hover:bg-[#0F1623] transition-all"
          >
            Alle projecten bekijken
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
