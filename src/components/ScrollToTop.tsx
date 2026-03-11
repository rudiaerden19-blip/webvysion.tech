'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToTop() {
  const pathname = usePathname()

  // Disable browser scroll restoration globally
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'
      }
    }
  }, [])

  // Scroll to top on every route change AND on first mount
  useEffect(() => {
    const scrollToTop = () => {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      window.scrollTo(0, 0)
    }
    // Run immediately
    scrollToTop()
    // Also run after a short delay to catch any async rendering
    const t = setTimeout(scrollToTop, 50)
    return () => clearTimeout(t)
  }, [pathname])

  return null
}
