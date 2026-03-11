'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { useLang } from '@/context/LanguageContext'
import t from '@/lib/translations'

const slides = [
  '/about-saas.png',
  '/about-slide1.png',
  '/about-slide2.png',
  '/about-slide3.png',
  '/about-slide4.png',
]

function FlipCarousel() {
  const [current, setCurrent] = useState(0)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      // Swap image at 180° (halfway) — card faces away, swap is invisible
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length)
      }, 1000)
      // Full 360° rotation
      setRotation((r) => r + 360)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ perspective: '1200px', width: '100%', aspectRatio: '4/3' }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transition: 'transform 2s linear',
          transform: `rotateY(${rotation}deg)`,
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 0 40px 15px rgba(0,0,0,0.30)',
        }}
      >
        <Image
          src={slides[current]}
          alt="WebVysion portfolio"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const { lang } = useLang()
  const tr = t[lang].about

  return (
    <section id="over-ons" className="py-32 px-6 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: "easeOut" }}>
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-widest mb-6">{tr.label}</p>
            <h2 className="text-5xl font-extrabold text-slate-900 leading-tight mb-10">
              {tr.title.split('WebVysion')[0]}
              <span className="text-[#2563EB]">WebVysion</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-7">{tr.p1}</p>
            <p className="text-lg text-slate-500 leading-relaxed mb-7">{tr.p2}</p>
            <p className="text-lg text-slate-500 leading-relaxed">{tr.p3}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex items-start justify-center pt-0 lg:pt-[90px] w-full"
          >
            <div className="w-[90%]">
              <FlipCarousel />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
