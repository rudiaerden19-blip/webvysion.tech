'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'

export default function ProjectenPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-[#4F8EF7] uppercase tracking-widest mb-4">Portfolio</p>
          <h1 className="text-5xl font-extrabold text-[#E8EDF5] mb-4">Onze projecten</h1>
          <p className="text-[#8899B0] max-w-xl mx-auto">
            Complete softwareproducten gebouwd voor echte klanten — van mobile apps tot SaaS platforms.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group relative bg-[#0F1623] rounded-2xl border border-[#1A2332] p-8 hover:border-[#243447] transition-all duration-300 overflow-hidden"
            >
              {/* Accent line */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl opacity-60"
                style={{ backgroundColor: project.color }}
              />

              <div className="pl-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Left */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                        style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
                      >
                        {project.emoji}
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-[#E8EDF5]">{project.name}</h2>
                        <p className="text-sm font-medium mt-0.5" style={{ color: project.color }}>
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-[#8899B0] leading-relaxed">{project.description}</p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1.5 rounded-full bg-[#141D2B] border border-[#1A2332] text-xs text-[#8899B0]">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Bezoek project knop */}
                    {'url' in project && project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-5 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all hover:opacity-80"
                        style={{
                          color: project.color,
                          borderColor: `${project.color}40`,
                          background: `${project.color}0D`,
                        }}
                      >
                        <ExternalLink size={15} />
                        Bezoek project
                      </a>
                    )}
                  </div>

                  {/* Right: features */}
                  <div className="lg:w-64 shrink-0">
                    <p className="text-xs font-semibold text-[#4A5E78] uppercase tracking-wider mb-3">Functies</p>
                    <ul className="space-y-2">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: project.color }} />
                          <span className="text-sm text-[#8899B0]">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
