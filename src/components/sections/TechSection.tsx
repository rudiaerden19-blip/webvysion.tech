'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { technologies } from '@/lib/data'

export default function TechSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="technologie" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-[#4F8EF7] uppercase tracking-widest mb-4">Stack</p>
          <h2 className="text-4xl font-extrabold text-[#E8EDF5] mb-4">Technologie</h2>
          <p className="text-[#8899B0] max-w-xl mx-auto">
            Wij werken met moderne, bewezen technologieën voor snelle en schaalbare software.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, i) => {
            const techWithImage = tech as typeof tech & { image?: string }
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#0F1623] border border-[#1A2332] hover:border-[#243447] hover:bg-[#141D2B] transition-all duration-200 cursor-default"
              >
                <div className="w-full h-16 rounded-xl overflow-hidden flex items-center justify-center bg-[#141D2B] group-hover:bg-[#1A2332] transition-colors shrink-0">
                  {techWithImage.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={techWithImage.image}
                      alt={tech.name}
                      className="w-full h-full object-contain p-2"
                    />
                  ) : (
                    <span className="text-2xl">{tech.icon}</span>
                  )}
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold text-[#E8EDF5] leading-tight">{tech.name}</p>
                  <p className="text-[10px] text-[#4A5E78] mt-0.5">{tech.category}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
