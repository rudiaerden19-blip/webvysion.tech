'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'
import { useLang } from '@/context/LanguageContext'
import t from '@/lib/translations'

export default function ProjectenPage() {
  const { lang } = useLang()
  const tr = t[lang].projectsPage
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLDivElement>('.stack-card')
    if (!cards) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cards.forEach((c) => c.classList.remove('active'))
          entry.target.classList.add('active')
        }
      })
    }, { threshold: 0.6 })

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ margin: 0, background: '#e3e3e3', fontFamily: 'system-ui' }}>
      <style>{`
        .stack-card {
          position: sticky;
          top: 120px;
          background: white;
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 120px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.15);
          transition: transform .4s ease, box-shadow .4s ease;
        }
        .stack-card:nth-child(1){z-index:1;}
        .stack-card:nth-child(2){z-index:2;}
        .stack-card:nth-child(3){z-index:3;}
        .stack-card:nth-child(4){z-index:4;}
        .stack-card:nth-child(5){z-index:5;}
        .stack-card.active {
          transform: translateY(-8px);
          box-shadow: 0 35px 80px rgba(0,0,0,0.18);
        }
      `}</style>

      <div style={{ paddingTop: '120px', paddingBottom: '120vh', width: '100%', maxWidth: '1100px', margin: 'auto', paddingLeft: '24px', paddingRight: '24px', position: 'relative', boxSizing: 'border-box' }} ref={sectionRef}>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{ fontSize: '11px', fontWeight: 600, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>{tr.label}</p>
          <h1 style={{ fontSize: '48px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>{tr.title}</h1>
          <p style={{ color: '#64748b', maxWidth: '520px', margin: '0 auto' }}>{tr.description}</p>
        </motion.div>

        {projects.map((project, i) => {
          const pd = t[lang].projectData[i]
          return (
            <div key={project.id} className="stack-card">
              <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                    <div style={{ width: '72px', height: '72px', borderRadius: '14px', overflow: 'hidden', background: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {'image' in project && project.image ? (
                        <Image src={project.image as string} alt={pd?.name ?? project.name} width={72} height={72} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      ) : (
                        <span style={{ fontSize: '28px' }}>{project.emoji}</span>
                      )}
                    </div>
                    <div>
                      <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0F172A', margin: 0, marginBottom: '4px' }}>{pd?.name ?? project.name}</h2>
                      <p style={{ fontSize: '13px', fontWeight: 600, color: '#2563EB', margin: 0 }}>{pd?.tagline ?? project.tagline}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7, marginBottom: '20px' }}>{pd?.description ?? project.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                    {project.tech.map((tech) => (
                      <span key={tech} style={{ padding: '5px 12px', borderRadius: '999px', background: '#f1f5f9', fontSize: '12px', color: '#475569', fontWeight: 500 }}>{tech}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {'url' in project && project.url && (
                      <a href={project.url as string} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 16px', borderRadius: '10px', fontSize: '13px', fontWeight: 600, border: '1px solid #bfdbfe', background: '#eff6ff', color: '#2563EB', textDecoration: 'none' }}>
                        <ExternalLink size={14} />{tr.visit}
                      </a>
                    )}
                    {'github' in project && project.github && (
                      <a href={project.github as string} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 16px', borderRadius: '10px', fontSize: '13px', fontWeight: 600, border: '1px solid #e2e8f0', background: 'white', color: '#475569', textDecoration: 'none' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                        {tr.code}
                      </a>
                    )}
                  </div>
                </div>
                <div style={{ width: '240px', flexShrink: 0 }}>
                  <p style={{ fontSize: '11px', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px', marginTop: 0 }}>{tr.features}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {(pd?.features ?? project.features).map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563EB', flexShrink: 0, marginTop: '6px' }} />
                        <span style={{ fontSize: '13px', color: '#64748b' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
