'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projecten', label: 'Projecten' },
  { href: '/technologie', label: 'Technologie' },
  { href: '/diensten', label: 'Diensten' },
  { href: '/contact', label: 'Contact' },
]

const languages = [
  { code: 'nl', label: 'Ned', flag: '🇳🇱' },
  { code: 'fr', label: 'Frans', flag: '🇫🇷' },
  { code: 'de', label: 'Duits', flag: '🇩🇪' },
  { code: 'en', label: 'Engels', flag: '🇬🇧' },
]

function LanguageSwitcher() {
  const [active, setActive] = useState(languages[0])
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#1A2332] bg-[#0F1623] hover:border-[#243447] hover:bg-[#141D2B] transition-all text-sm text-[#E8EDF5]"
      >
        <span>{active.flag}</span>
        <span className="font-medium text-xs">{active.label}</span>
        <ChevronDown size={12} className={`text-[#4A5E78] transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-36 bg-[#0F1623] border border-[#1A2332] rounded-xl overflow-hidden shadow-xl shadow-black/40 z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => { setActive(lang); setOpen(false) }}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm transition-colors ${
                  active.code === lang.code
                    ? 'bg-[#1A2332] text-[#E8EDF5]'
                    : 'text-[#8899B0] hover:bg-[#141D2B] hover:text-[#E8EDF5]'
                }`}
              >
                <span className="text-base">{lang.flag}</span>
                <span className="font-medium">{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileLangPicker() {
  const [active, setActive] = useState('nl')
  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setActive(lang.code)}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
            active === lang.code
              ? 'bg-[#1A2332] border-[#4F8EF7] text-[#E8EDF5]'
              : 'bg-[#0F1623] border-[#1A2332] text-[#8899B0]'
          }`}
        >
          <span>{lang.flag}</span>
          <span>{lang.label}</span>
        </button>
      ))}
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#080C14]/90 backdrop-blur-xl border-b border-[#1A2332]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Image src="/logo.png" alt="WebVysion" width={32} height={32} className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-[#E8EDF5] text-lg tracking-tight">WebVysion</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === link.href
                  ? 'text-[#E8EDF5] bg-[#1A2332]'
                  : 'text-[#8899B0] hover:text-[#E8EDF5] hover:bg-[#0F1623]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + taal */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#4F8EF7] to-[#7C6EF0] text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
          >
            Start een project
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-[#8899B0] hover:text-[#E8EDF5] hover:bg-[#0F1623] transition-colors"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0D1117] border-b border-[#1A2332] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    pathname === link.href
                      ? 'text-[#E8EDF5] bg-[#1A2332]'
                      : 'text-[#8899B0] hover:text-[#E8EDF5]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-4 py-3 rounded-lg bg-gradient-to-r from-[#4F8EF7] to-[#7C6EF0] text-white text-sm font-semibold text-center"
              >
                Start een project
              </Link>
              {/* Talen als rij op mobiel */}
              <div className="mt-3 pt-3 border-t border-[#1A2332]">
                <p className="text-xs text-[#4A5E78] mb-2 px-1">Taal</p>
                <MobileLangPicker />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
