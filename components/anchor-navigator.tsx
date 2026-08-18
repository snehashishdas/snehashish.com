'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { scrollToAnchor } from '@/lib/scroll-to-anchor'

/**
 * Handles deep-linking into a specific section of a page when the page is
 * loaded (or re-loaded) with a URL hash already present — e.g. a shared
 * search-result link, a bookmark, or browser back/forward.
 *
 * Same-page navigation triggered from within the app (the search dialog)
 * calls `scrollToAnchor` directly, since client-side route changes don't
 * always fire a `hashchange` event.
 */
export function AnchorNavigator() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash
    if (hash && hash.length > 1) {
      scrollToAnchor(decodeURIComponent(hash.slice(1)))
    }

    function onHashChange() {
      const h = window.location.hash
      if (h && h.length > 1) scrollToAnchor(decodeURIComponent(h.slice(1)))
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [pathname])

  return null
}
