import FooterClient from './FooterClient'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <FooterClient />
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} WebVysion. All rights reserved.</p>
          <p className="text-xs text-slate-400">webvysion.tech</p>
        </div>
      </div>
    </footer>
  )
}
