'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'
import { useLang } from '@/context/LanguageContext'
import t from '@/lib/translations'

export default function ProjectenPage() {
  const { lang } = useLang()
  const tr = t[lang].projectsPage

  return (
    <>
      <style>{`
        .stack-wrapper {
          max-width: 1100px;
          margin: auto;
          padding-top: 100px;
          padding-bottom: 60px;
          padding-left: 16px;
          padding-right: 16px;
          box-sizing: border-box;
        }
        .stack-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .project-card {
          position: sticky;
          top: 120px;
          background: #fff;
          border-radius: 20px;
          padding: clamp(20px, 4vw, 48px);
          margin-bottom: 140px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.15);
        }
        .project-card:nth-child(2){z-index:1;}
        .project-card:nth-child(3){z-index:2;}
        .project-card:nth-child(4){z-index:3;}
        .project-card:nth-child(5){z-index:4;}
        .project-card:nth-child(6){z-index:5;}
      `}</style>

      <div style={{ background: '#e3e3e3', minHeight: '100vh' }}>
        <section className="stack-wrapper">

          <div className="stack-header">
            <p style={{ fontSize: '11px', fontWeight: 600, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>{tr.label}</p>
            <h1 style={{ fontSize: '48px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>{tr.title}</h1>
            <p style={{ color: '#64748b', maxWidth: '520px', margin: '0 auto' }}>{tr.description}</p>
          </div>

          {projects.map((project, i) => {
            const pd = t[lang].projectData[i]
            return (
              <div key={project.id} className="project-card">
                <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: '300px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                      <div style={{ width: '80px', height: '80px', borderRadius: '16px', overflow: 'hidden', background: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {'image' in project && project.image ? (
                          <Image src={project.image as string} alt={pd?.name ?? project.name} width={80} height={80} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        ) : (
                          <span style={{ fontSize: '32px' }}>{project.emoji}</span>
                        )}
                      </div>
                      <div>
                        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0F172A', margin: 0, marginBottom: '6px' }}>{pd?.name ?? project.name}</h2>
                        <p style={{ fontSize: '14px', fontWeight: 600, color: '#2563EB', margin: 0 }}>{pd?.tagline ?? project.tagline}</p>
                      </div>
                    </div>
                    <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.8, marginBottom: '24px' }}>{pd?.description ?? project.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                      {project.tech.map((tech) => (
                        <span key={tech} style={{ padding: '6px 14px', borderRadius: '999px', background: '#f1f5f9', fontSize: '13px', color: '#475569', fontWeight: 500 }}>{tech}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      {'url' in project && project.url && (
                        <a href={project.url as string} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '10px 20px', borderRadius: '10px', fontSize: '14px', fontWeight: 600, border: '1px solid #bfdbfe', background: '#eff6ff', color: '#2563EB', textDecoration: 'none' }}>
                          <ExternalLink size={15} />{tr.visit}
                        </a>
                      )}
                      {'github' in project && project.github && (
                        <a href={project.github as string} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '10px 20px', borderRadius: '10px', fontSize: '14px', fontWeight: 600, border: '1px solid #e2e8f0', background: 'white', color: '#475569', textDecoration: 'none' }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                          {tr.code}
                        </a>
                      )}
                    </div>
                  </div>
                  <div style={{ width: '260px', flexShrink: 0 }}>
                    <p style={{ fontSize: '11px', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', marginTop: 0 }}>{tr.features}</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {(pd?.features ?? project.features).map((f) => (
                        <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563EB', flexShrink: 0, marginTop: '7px' }} />
                          <span style={{ fontSize: '14px', color: '#64748b' }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </section>
      </div>
    </>
  )
}
