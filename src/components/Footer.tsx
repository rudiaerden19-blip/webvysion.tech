import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[#1A2332] bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                <Image src="/logo.png" alt="WebVysion" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-[#E8EDF5] text-lg">WebVysion</span>
            </div>
            <p className="text-[#8899B0] text-sm leading-relaxed max-w-xs">
              Onafhankelijk development team uit België. Wij bouwen complete softwareproducten van idee tot werkend systeem.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="mailto:rudiaerden19@gmail.com" className="p-2 rounded-lg bg-[#141D2B] text-[#8899B0] hover:text-[#4F8EF7] hover:bg-[#1A2332] transition-all">
                <Mail size={17} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61586754135685" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[#141D2B] text-[#8899B0] hover:text-[#4F8EF7] hover:bg-[#1A2332] transition-all">
                <Facebook size={17} />
              </a>
              <a href="https://www.linkedin.com/in/vysion-it-7a158b3b2/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[#141D2B] text-[#8899B0] hover:text-[#4F8EF7] hover:bg-[#1A2332] transition-all">
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

          {/* Onze platforms */}
          <div>
            <p className="text-xs font-semibold text-[#4A5E78] uppercase tracking-widest mb-4">Onze platforms</p>
            <ul className="space-y-2">
              {[
                { label: 'vysionhoreca.com', url: 'https://www.vysionhoreca.com' },
                { label: 'webvysion.tech', url: 'https://www.webvysion.tech' },
                { label: 'vysionapps.io', url: 'https://www.vysionapps.io' },
                { label: 'voxapp.tech', url: 'https://www.voxapp.tech' },
                { label: 'appvysion.com', url: 'https://www.appvysion.com' },
              ].map((site) => (
                <li key={site.label}>
                  <a href={site.url} target="_blank" rel="noopener noreferrer"
                    className="text-sm font-medium bg-gradient-to-r from-[#4F8EF7] to-[#7C6EF0] bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                    {site.label}
                  </a>
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
