'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 overflow-hidden"
                        style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
                      >
                        {'image' in project && project.image ? (
                          <Image src={project.image} alt={project.name} width={56} height={56} className="w-full h-full object-cover rounded-2xl" />
                        ) : (
                          project.emoji
                        )}
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

                    {/* Knoppen */}
                    <div className="flex flex-wrap gap-3 mt-5">
                      {'url' in project && project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all hover:opacity-80"
                          style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}0D` }}
                        >
                          <ExternalLink size={15} />
                          Bezoek project
                        </a>
                      )}
                      {'github' in project && project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-[#1A2332] bg-[#0F1623] text-[#8899B0] hover:text-[#E8EDF5] hover:border-[#243447] transition-all"
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                          Bekijk code
                        </a>
                      )}
                    </div>
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
