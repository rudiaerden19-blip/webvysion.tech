'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, ArrowRight, CheckCircle } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'
import t from '@/lib/translations'

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
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
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-xs font-semibold text-[#4F8EF7] uppercase tracking-widest mb-4">{tr.label}</p>
          <h2 className="text-4xl font-extrabold text-[#E8EDF5] mb-4">{tr.title}</h2>
          <p className="text-[#8899B0] max-w-lg mx-auto">{tr.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-2 space-y-5">
            <div className="bg-[#0F1623] rounded-2xl border border-[#1A2332] p-6">
              <p className="text-sm font-semibold text-[#E8EDF5] mb-5">{tr.directContact}</p>
              <div className="space-y-4">
                <a href="mailto:rudiaerden19@gmail.com" className="group flex items-center gap-3 text-[#8899B0] hover:text-[#E8EDF5] transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-[#141D2B] flex items-center justify-center group-hover:bg-[#1A2332] transition-colors"><Mail size={16} className="text-[#4F8EF7]" /></div>
                  <div><p className="text-xs text-[#4A5E78]">Email</p><p className="text-sm font-medium">rudiaerden19@gmail.com</p></div>
                </a>
                <a href="https://github.com/rudiaerden19-blip" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-[#8899B0] hover:text-[#E8EDF5] transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-[#141D2B] flex items-center justify-center group-hover:bg-[#1A2332] transition-colors"><Github size={16} className="text-[#4F8EF7]" /></div>
                  <div><p className="text-xs text-[#4A5E78]">GitHub</p><p className="text-sm font-medium">github.com/rudiaerden19-blip</p></div>
                </a>
                <a href="https://www.linkedin.com/in/vysion-it-7a158b3b2/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-[#8899B0] hover:text-[#E8EDF5] transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-[#141D2B] flex items-center justify-center group-hover:bg-[#1A2332] transition-colors"><Linkedin size={16} className="text-[#4F8EF7]" /></div>
                  <div><p className="text-xs text-[#4A5E78]">LinkedIn</p><p className="text-sm font-medium">linkedin.com/in/vysion-it</p></div>
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#4F8EF7]/10 to-[#7C6EF0]/10 rounded-2xl border border-[#4F8EF7]/20 p-6">
              <p className="text-sm font-semibold text-[#E8EDF5] mb-3">{tr.locationTitle}</p>
              <p className="text-xs text-[#8899B0] leading-relaxed mb-4">{tr.locationDesc}</p>
              <div className="space-y-1.5 text-xs text-[#8899B0]">
                <p className="text-[#E8EDF5] font-medium">Vysion IT</p>
                <p>Siberiëstraat 24</p>
                <p>3900 Pelt (industrieterrein Nolim)</p>
                <a href="tel:+32492129383" className="flex items-center gap-1.5 hover:text-[#4F8EF7] transition-colors mt-2"><span>📞</span><span>+32 492 12 93 83</span></a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }} className="lg:col-span-3">
            <div className="bg-[#0F1623] rounded-2xl border border-[#1A2332] p-7">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle size={48} className="text-[#4F8EF7] mb-4" />
                  <h3 className="text-lg font-bold text-[#E8EDF5] mb-2">{tr.thankYou}</h3>
                  <p className="text-sm text-[#8899B0]">{tr.thankYouDesc}</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-sm text-[#4F8EF7] hover:underline">{tr.newMessage}</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-medium text-[#8899B0] mb-2">{tr.nameLabel}</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={tr.namePlaceholder} className="w-full bg-[#141D2B] border border-[#1A2332] rounded-xl px-4 py-3 text-sm text-[#E8EDF5] placeholder-[#4A5E78] focus:outline-none focus:border-[#4F8EF7] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#8899B0] mb-2">{tr.emailLabel}</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={tr.emailPlaceholder} className="w-full bg-[#141D2B] border border-[#1A2332] rounded-xl px-4 py-3 text-sm text-[#E8EDF5] placeholder-[#4A5E78] focus:outline-none focus:border-[#4F8EF7] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#8899B0] mb-2">{tr.projectLabel}</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={tr.projectPlaceholder} className="w-full bg-[#141D2B] border border-[#1A2332] rounded-xl px-4 py-3 text-sm text-[#E8EDF5] placeholder-[#4A5E78] focus:outline-none focus:border-[#4F8EF7] transition-colors resize-none" />
                  </div>
                  <button type="submit" className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#4F8EF7] to-[#7C6EF0] text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20">
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
