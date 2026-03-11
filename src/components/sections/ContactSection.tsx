'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, ArrowRight, CheckCircle } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'
import t from '@/lib/translations'

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const { lang } = useLang()
  const tr = t[lang].contact

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`${tr.subjectPrefix} ${form.name}`)
    const body = encodeURIComponent(`Naam: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:rudiaerden19@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">{tr.label}</p>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">{tr.title}</h2>
          <p className="text-slate-500 max-w-lg mx-auto">{tr.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto" style={{ perspective: '1200px' }}>
          <div className="lg:col-span-2 space-y-5">
            <motion.div initial={{ opacity: 0, rotateY: -90 }} animate={inView ? { opacity: 1, rotateY: 0 } : {}} transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} style={{ transformStyle: 'preserve-3d' }} className="bg-white rounded-2xl border border-slate-200 shadow-[0_12px_60px_rgba(0,0,0,0.40)] p-6">
              <p className="text-sm font-semibold text-slate-900 mb-5">{tr.directContact}</p>
              <div className="space-y-4">
                <a href="mailto:rudiaerden19@gmail.com" className="group flex items-center gap-3 text-slate-500 hover:text-slate-900 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                    <Mail size={16} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Email</p>
                    <p className="text-sm font-medium">rudiaerden19@gmail.com</p>
                  </div>
                </a>
                <a href="https://github.com/rudiaerden19-blip" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-slate-500 hover:text-slate-900 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                    <Github size={16} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">GitHub</p>
                    <p className="text-sm font-medium">github.com/rudiaerden19-blip</p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/vysion-it-7a158b3b2/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-slate-500 hover:text-slate-900 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                    <Linkedin size={16} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">LinkedIn</p>
                    <p className="text-sm font-medium">linkedin.com/in/vysion-it</p>
                  </div>
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, rotateY: -90 }} animate={inView ? { opacity: 1, rotateY: 0 } : {}} transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }} style={{ transformStyle: 'preserve-3d' }} className="bg-white rounded-2xl border border-slate-200 shadow-[0_12px_60px_rgba(0,0,0,0.40)] p-6">
              <p className="text-sm font-semibold text-slate-900 mb-3">{tr.locationTitle}</p>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">{tr.locationDesc}</p>
              <div className="space-y-1.5 text-xs text-slate-500">
                <p className="text-slate-800 font-semibold">Vysion IT</p>
                <p>Siberiëstraat 24</p>
                <p>3900 Pelt (industrieterrein Nolim)</p>
                <a href="tel:+32492129383" className="flex items-center gap-1.5 hover:text-[#2563EB] transition-colors mt-2">
                  <span>📞</span><span>+32 492 12 93 83</span>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, rotateY: 90 }} animate={inView ? { opacity: 1, rotateY: 0 } : {}} transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }} style={{ transformStyle: 'preserve-3d' }} className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_12px_60px_rgba(0,0,0,0.40)] p-7">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle size={48} className="text-[#2563EB] mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{tr.thankYou}</h3>
                  <p className="text-sm text-slate-500">{tr.thankYouDesc}</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-sm text-[#2563EB] hover:underline">{tr.newMessage}</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-2">{tr.nameLabel}</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={tr.namePlaceholder} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-2">{tr.emailLabel}</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={tr.emailPlaceholder} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-2">{tr.projectLabel}</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={tr.projectPlaceholder} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors resize-none" />
                  </div>
                  <button type="submit" className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] text-white font-semibold text-sm hover:bg-[#1D4ED8] transition-colors shadow-sm">
                    {tr.submit}<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
