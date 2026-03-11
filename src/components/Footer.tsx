import FooterClient from './FooterClient'
import FooterBottom from './FooterBottom'
import BackToTopButton from './BackToTopButton'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200" style={{ backgroundColor: '#cacaca' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <FooterClient />
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <FooterBottom />
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-400">webvysion.tech</p>
            <BackToTopButton />
          </div>
        </div>
      </div>
    </footer>
  )
}
