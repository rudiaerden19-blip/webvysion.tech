'use client'

import { motion } from 'framer-motion'

export default function BreathingBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Blob 1 — blauw linksboven */}
      <motion.div
        className="absolute -top-40 -left-40 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(79,142,247,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 1, 0.6],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Blob 2 — paars rechtsonder */}
      <motion.div
        className="absolute -bottom-40 -right-40 w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(124,110,240,0.10) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.9, 0.5],
          x: [0, -25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Blob 3 — subtiel midden */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(79,142,247,0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />
    </div>
  )
}
