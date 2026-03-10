import FooterClient from './FooterClient'

export default function Footer() {
  return (
    <footer className="border-t border-[#1A2332] bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <FooterClient />
        <div className="mt-10 pt-6 border-t border-[#1A2332] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#4A5E78]">© {new Date().getFullYear()} WebVysion. All rights reserved.</p>
          <p className="text-xs text-[#4A5E78]">webvysion.tech</p>
        </div>
      </div>
    </footer>
  )
}
