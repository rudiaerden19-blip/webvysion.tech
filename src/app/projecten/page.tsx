'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'
import { useLang } from '@/context/LanguageContext'
import t from '@/lib/translations'

function StackCard({ project, i, total, pd, tr, lang }: {
  project: typeof projects[0]
  i: number
  total: number
  pd: { name: string; tagline: string; description: string; features: string[] } | undefined
  tr: { label: string; title: string; description: string; visit: string; code: string; features: string }
  lang: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.90])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.55])

  const isLast = i === total - 1

  return (
    <div
      ref={ref}
      style={{
        position: 'sticky',
        top: `${100 + i * 22}px`,
        zIndex: i + 1,
        paddingBottom: '24px',
      }}
    >
      <motion.div
        style={isLast ? {} : { scale, opacity }}
        className="bg-white rounded-2xl border border-slate-200 shadow-[0_12px_60px_rgba(0,0,0,0.40)] hover:shadow-[0_24px_80px_rgba(0,0,0,0.40)] hover:border-slate-300 p-8 transition-shadow duration-300"
      >
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 rounded-2xl shrink-0 overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center">
                {'image' in project && project.image ? (
                  <Image src={project.image as string} alt={pd?.name ?? project.name} width={80} height={80} className="w-full h-full object-contain" />
                ) : (
                  <span className="flex items-center justify-center w-full h-full text-3xl">{project.emoji}</span>
                )}
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">{pd?.name ?? project.name}</h2>
                <p className="text-sm font-semibold text-[#2563EB] mt-0.5">{pd?.tagline ?? project.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">{pd?.description ?? project.description}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {project.tech.map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-full bg-slate-100 text-xs text-slate-600 font-medium">{tech}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-5">
              {'url' in project && project.url && (
                <a href={project.url as string} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-blue-200 bg-blue-50 text-[#2563EB] hover:bg-blue-100 transition-all">
                  <ExternalLink size={15} />{tr.visit}
                </a>
              )}
              {'github' in project && project.github && (
                <a href={project.github as string} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                  {tr.code}
                </a>
              )}
            </div>
          </div>
          <div className="lg:w-64 shrink-0">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{tr.features}</p>
            <ul className="space-y-2">
              {(pd?.features ?? project.features).map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-[#2563EB]" />
                  <span className="text-sm text-slate-500">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectenPage() {
  const { lang } = useLang()
  const tr = t[lang].projectsPage

  return (
    <div className="min-h-screen bg-white pt-24 pb-40 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">{tr.label}</p>
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4">{tr.title}</h1>
          <p className="text-slate-500 max-w-xl mx-auto">{tr.description}</p>
        </motion.div>

        <div>
          {projects.map((project, i) => {
            const pd = t[lang].projectData[i]
            return (
              <StackCard
                key={project.id}
                project={project}
                i={i}
                total={projects.length}
                pd={pd}
                tr={tr}
                lang={lang}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
