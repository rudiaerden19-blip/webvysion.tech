'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'

function AutoPlayVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true

    const tryPlay = () => {
      video.play().catch(() => {})
    }

    if (video.readyState >= 3) {
      tryPlay()
    } else {
      video.addEventListener('canplay', tryPlay, { once: true })
    }

    return () => {
      video.removeEventListener('canplay', tryPlay)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="auto"
      className="w-full h-full object-cover"
    />
  )
}

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

              {/* Preview media */}
              {'video' in project && project.video ? (
                <div className="relative w-full h-72 rounded-xl overflow-hidden mb-5 border border-[#1A2332] bg-[#0A0F1A]">
                  <AutoPlayVideo src={project.video as string} />
                </div>
              ) : 'image' in project && project.image ? (
                <div className="relative w-full h-72 rounded-xl overflow-hidden mb-5 border border-[#1A2332] bg-[#0A0F1A]">
                  <Image src={project.image} alt={project.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                </div>
              ) : (
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}>
                    {project.emoji}
                  </div>
                </div>
              )}

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.slice(0, 2).map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full bg-[#141D2B] border border-[#1A2332] text-xs text-[#8899B0]">
                    {t}
                  </span>
                ))}
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

              {/* Knoppen */}
              <div className="flex flex-wrap gap-2">
                {'url' in project && project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg border transition-all"
                    style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}0D` }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={13} />
                    Bezoek project
                  </a>
                )}
                {'github' in project && project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg border border-[#1A2332] bg-[#0F1623] text-[#8899B0] hover:text-[#E8EDF5] hover:border-[#243447] transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    Bekijk code
                  </a>
                )}
              </div>
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
