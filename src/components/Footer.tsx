import FooterClient from './FooterClient'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
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
          <div className="flex items-center gap-4">
            {/* IAF */}
            <div className="flex flex-col items-center justify-center w-10 h-10 rounded-full border border-slate-300 text-slate-500">
              <span className="text-[8px] font-bold leading-none">IAF</span>
              <span className="text-[5px] leading-none tracking-tight">MEMBER</span>
            </div>
            {/* CERTiS */}
            <div className="flex flex-col items-center justify-center w-10 h-10 rounded-full border border-slate-300 text-slate-500">
              <span className="text-[6px] font-bold leading-none">CERT</span>
              <span className="text-[6px] font-bold leading-none text-blue-400">iS</span>
            </div>
            {/* ESQ */}
            <div className="flex flex-col items-center justify-center w-10 h-10 rounded-full border border-slate-300 text-slate-500">
              <span className="text-[9px] font-bold leading-none">ESQ</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} WebVysion. All rights reserved.</p>
          <p className="text-xs text-slate-400">webvysion.tech</p>
        </div>
      </div>
    </footer>
  )
}
