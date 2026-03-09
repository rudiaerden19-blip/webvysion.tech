import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[#1A2332] bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F8EF7] to-[#7C6EF0] flex items-center justify-center text-white font-bold text-sm">
                W
              </div>
              <span className="font-bold text-[#E8EDF5] text-lg">WebVysion</span>
            </div>
            <p className="text-[#8899B0] text-sm leading-relaxed max-w-xs">
              Onafhankelijk development team uit België. Wij bouwen complete softwareproducten van idee tot werkend systeem.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="mailto:hello@webvysion.tech" className="p-2 rounded-lg bg-[#141D2B] text-[#8899B0] hover:text-[#4F8EF7] hover:bg-[#1A2332] transition-all">
                <Mail size={17} />
              </a>
              <a href="https://github.com/webvysion" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[#141D2B] text-[#8899B0] hover:text-[#4F8EF7] hover:bg-[#1A2332] transition-all">
                <Github size={17} />
              </a>
              <a href="https://linkedin.com/company/webvysion" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[#141D2B] text-[#8899B0] hover:text-[#4F8EF7] hover:bg-[#1A2332] transition-all">
                <Linkedin size={17} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold text-[#4A5E78] uppercase tracking-widest mb-4">Navigatie</p>
            <ul className="space-y-2">
              {['/', '/projecten', '/technologie', '/diensten', '/contact'].map((href, i) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[#8899B0] hover:text-[#E8EDF5] transition-colors">
                    {['Home', 'Projecten', 'Technologie', 'Diensten', 'Contact'][i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold text-[#4A5E78] uppercase tracking-widest mb-4">Diensten</p>
            <ul className="space-y-2">
              {['SaaS Development', 'Web Applications', 'Mobile Apps', 'Custom Websites', 'Startup MVP'].map((s) => (
                <li key={s}>
                  <Link href="/diensten" className="text-sm text-[#8899B0] hover:text-[#E8EDF5] transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#1A2332] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#4A5E78]">© {new Date().getFullYear()} WebVysion. Alle rechten voorbehouden.</p>
          <p className="text-xs text-[#4A5E78]">webvysion.tech</p>
        </div>
      </div>
    </footer>
  )
}
