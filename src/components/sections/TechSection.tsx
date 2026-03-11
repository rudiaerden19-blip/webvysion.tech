'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { technologies } from '@/lib/data'
import { useLang } from '@/context/LanguageContext'
import t from '@/lib/translations'

export default function TechSection() {
  const gridRef = useRef<HTMLDivElement>(null)
  const { lang } = useLang()
  const tr = t[lang].tech

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const topCards = Array.from(grid.querySelectorAll<HTMLElement>('.tc-top'))
    const bottomCards = Array.from(grid.querySelectorAll<HTMLElement>('.tc-bottom'))

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          topCards.forEach((card, i) => {
            setTimeout(() => card.classList.add('tc-show'), i * 600)
          })
          ;[...bottomCards].reverse().forEach((card, i) => {
            setTimeout(() => card.classList.add('tc-show'), i * 600)
          })
          observer.disconnect()
        }
      })
    }, { threshold: 0.4 })

    observer.observe(grid)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="technologie" className="py-24 px-6" style={{ backgroundColor: '#e3e3e3' }}>
      <style>{`
        .tc-card {
          opacity: 0;
          transition: opacity 2s cubic-bezier(.22,1,.36,1), transform 2s cubic-bezier(.22,1,.36,1);
        }
        .tc-top  { transform: translateX(-80px); }
        .tc-bottom { transform: translateX(80px); }
        .tc-show { opacity: 1 !important; transform: translateX(0) !important; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">{tr.label}</p>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">{tr.title}</h2>
          <p className="text-slate-500 max-w-xl mx-auto">{tr.description}</p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, i) => {
            const techWithImage = tech as typeof tech & { image?: string }
            const isTop = i < 6

            return (
              <div
                key={tech.name}
                className={`tc-card ${isTop ? 'tc-top' : 'tc-bottom'} group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-slate-200 shadow-[0_12px_60px_rgba(0,0,0,0.40)] hover:shadow-[0_24px_80px_rgba(0,0,0,0.40)] hover:border-slate-300 cursor-default`}
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="w-full h-16 rounded-xl overflow-hidden flex items-center justify-center bg-slate-50 group-hover:bg-slate-100 transition-colors shrink-0">
                  {techWithImage.image ? (
                    <Image src={techWithImage.image as string} alt={tech.name} width={64} height={64} className="w-full h-full object-contain p-2" />
                  ) : (
                    <span className="text-2xl">{tech.icon}</span>
                  )}
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold text-slate-800 leading-tight">{tech.name}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{tech.category}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
