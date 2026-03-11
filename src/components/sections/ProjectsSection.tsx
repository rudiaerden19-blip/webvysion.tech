'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'
import { useLang } from '@/context/LanguageContext'
import t from '@/lib/translations'

function AutoPlayVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.defaultMuted = true
    const tryPlay = () => { video.play().catch(() => {}) }
    tryPlay()
    video.addEventListener('loadedmetadata', tryPlay, { once: true })
    video.addEventListener('canplay', tryPlay, { once: true })
    video.addEventListener('canplaythrough', tryPlay, { once: true })
    return () => {
      video.removeEventListener('loadedmetadata', tryPlay)
      video.removeEventListener('canplay', tryPlay)
      video.removeEventListener('canplaythrough', tryPlay)
    }
  }, [])
  return <video ref={videoRef} src={src} muted loop playsInline preload="none" className="w-full h-full object-cover" />
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLang()
  const tr = t[lang].projects

  return (
    <section id="projecten" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">{tr.label}</p>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">{tr.title}</h2>
          <p className="text-slate-500 max-w-xl mx-auto">{tr.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const pd = t[lang].projectData[i]
            return (
              <motion.div key={project.id} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }} whileHover={{ y: -3, transition: { duration: 0.2 } }} className="group bg-white rounded-2xl border border-slate-200 shadow-[0_32px_80px_-8px_rgba(0,0,0,0.40)] hover:shadow-[0_40px_90px_-8px_rgba(0,0,0,0.48)] hover:border-slate-300 p-7 transition-all duration-300 cursor-pointer">
                {'video' in project && project.video ? (
                  <div className="relative w-full h-64 rounded-xl overflow-hidden mb-5 border border-slate-100 bg-slate-50">
                    <AutoPlayVideo src={project.video as string} />
                  </div>
                ) : 'image' in project && project.image ? (
                  <div className="relative w-full h-64 rounded-xl overflow-hidden mb-5 border border-slate-100 bg-slate-50">
                    <Image src={project.image as string} alt={pd?.name ?? project.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ) : (
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-slate-50 border border-slate-100">{project.emoji}</div>
                  </div>
                )}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 2).map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-full bg-slate-100 text-xs text-slate-600 font-medium">{tech}</span>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">{pd?.name ?? project.name}</h3>
                <p className="text-xs font-semibold text-[#2563EB] mb-3">{pd?.tagline ?? project.tagline}</p>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-5">{pd?.description ?? project.description}</p>
                <div className="space-y-1.5 mb-5">
                  {(pd?.features ?? project.features).slice(0, 3).map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0 bg-[#2563EB]" />
                      <span className="text-xs text-slate-500">{f}</span>
                    </div>
                  ))}
                  {(pd?.features ?? project.features).length > 3 && <span className="text-xs text-slate-400 pl-3.5">+{(pd?.features ?? project.features).length - 3} {tr.more}</span>}
                </div>
                <div className="flex flex-wrap gap-2">
                  {'url' in project && project.url && (
                    <a href={project.url as string} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-all" onClick={(e) => e.stopPropagation()}>
                      <ExternalLink size={13} />{tr.visit}
                    </a>
                  )}
                  {'github' in project && project.github && (
                    <a href={project.github as string} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all" onClick={(e) => e.stopPropagation()}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                      {tr.code}
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5, duration: 0.5 }} className="text-center mt-10">
          <Link href="/projecten" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition-all">
            {tr.viewAll}<ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
