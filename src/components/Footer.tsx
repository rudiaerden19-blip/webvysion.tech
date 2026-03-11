import FooterClient from './FooterClient'
import BackToTopButton from './BackToTopButton'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200" style={{ backgroundColor: '#cacaca' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <FooterClient />
        {/* Certifications bar */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 flex-wrap">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Certifications</span>
            <div className="flex items-center gap-1 text-slate-500 text-xs">
              <span className="text-slate-400">›</span>
              <span className="font-medium">ISO/IEC 27001:2022</span>
            </div>
            <div className="flex items-center gap-1 text-slate-500 text-xs">
              <span className="text-slate-400">›</span>
              <span className="font-medium">ISO 9001:2015</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            {/* IAF */}
            <img src="/logo-iaf.svg" alt="IAF International Accreditation Forum" className="h-12 w-12 object-contain" />
            {/* CERTiS */}
            <img src="/logo-certis.svg" alt="CERTiS Certification Institute" className="h-10 object-contain" />
            {/* ESQ */}
            <img src="/logo-esq.svg" alt="ESQ Your Certification Partner" className="h-10 object-contain" />
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} WebVysion. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-400">webvysion.tech</p>
            <BackToTopButton />
          </div>
        </div>
      </div>
    </footer>
  )
}
