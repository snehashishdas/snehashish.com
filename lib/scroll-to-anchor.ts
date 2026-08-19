const HIGHLIGHT_CLASS = 'search-anchor-highlight'

/**
 * Finds the element with the given id, expands any collapsed
 * accordions/toggles inside it (anything exposing `aria-expanded="false"`),
 * scrolls it into view below the sticky header, and briefly highlights it.
 *
 * Generic on purpose: it works for any current or future section that uses
 * an aria-expanded toggle, without page-specific wiring.
 */
export function scrollToAnchor(id: string | undefined, attempt = 0): void {
  if (!id) return
  const target = document.getElementById(id)

  if (!target) {
    // The target page may still be rendering (e.g. right after a route change).
    if (attempt < 20) {
      window.setTimeout(() => scrollToAnchor(id, attempt + 1), 50)
    }
    return
  }

  let passes = 0
  const expandPass = () => {
    const collapsed = target.querySelectorAll('[aria-expanded="false"]')
    collapsed.forEach((el) => {
      if (el instanceof HTMLElement) el.click()
    })
    passes += 1
    if (passes < 3) {
      window.setTimeout(expandPass, 70)
    } else {
      finish()
    }
  }

  const finish = () => {
    const header = document.querySelector('header.sticky') as HTMLElement | null
    const offset = (header?.offsetHeight ?? 0) + 16
    const rect = target.getBoundingClientRect()
    const top = rect.top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })

    target.classList.add(HIGHLIGHT_CLASS)
    window.setTimeout(() => target.classList.remove(HIGHLIGHT_CLASS), 2200)
  }

  expandPass()
}
