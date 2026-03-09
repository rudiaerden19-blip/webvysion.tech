'use client'

import { motion } from 'framer-motion'
import { technologies } from '@/lib/data'

export default function TechnologiePage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-[#4F8EF7] uppercase tracking-widest mb-4">Stack</p>
          <h1 className="text-5xl font-extrabold text-[#E8EDF5] mb-4">Technologie</h1>
          <p className="text-[#8899B0] max-w-xl mx-auto">
            Wij werken met moderne, bewezen technologieën voor snelle, schaalbare en onderhoudbare software.
          </p>
        </motion.div>

        {/* All technologies grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#0F1623] border border-[#1A2332] hover:border-[#243447] hover:bg-[#141D2B] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#141D2B] group-hover:bg-[#1A2332] flex items-center justify-center text-xl font-bold text-[#4F8EF7] transition-colors">
                {tech.icon}
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-[#E8EDF5]">{tech.name}</p>
                <p className="text-[10px] text-[#4A5E78] mt-0.5">{tech.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why this stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-br from-[#4F8EF7]/10 to-[#7C6EF0]/10 rounded-2xl border border-[#4F8EF7]/20 p-10 text-center"
        >
          <h2 className="text-2xl font-bold text-[#E8EDF5] mb-3">Waarom deze stack?</h2>
          <p className="text-[#8899B0] max-w-2xl mx-auto leading-relaxed">
            Wij kiezen bewust voor bewezen technologieën die snel zijn, goed schaalbaar en breed ondersteund worden.
            Next.js en TypeScript geven ons type-veilige, performante applicaties. Supabase en Firebase bieden
            realtime backends zonder infrastructuurhoofdpijn. React Native laat ons iOS én Android bedienen
            vanuit één codebase.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
