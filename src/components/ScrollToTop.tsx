'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function ScrollToTop() {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    // Detect page refresh — if so, redirect to home
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
    const isReload = nav?.type === 'reload'

    if (isReload && pathname !== '/') {
      router.replace('/')
    } else {
      window.scrollTo(0, 0)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
