'use client'

import * as React from 'react'
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Search as SearchIcon, X as CloseIcon } from 'lucide-react'
import { Dialog, DialogPortal, DialogOverlay, DialogTitle } from '@/components/ui/dialog'
import { search, buildSnippet, tokenize, exampleSearchTerms, type SearchResult } from '@/lib/search'
import { scrollToAnchor } from '@/lib/scroll-to-anchor'

// ─────────────────────────────────────────────────────────────────────────
// Context: lets any button anywhere on the site (nav, hero, below Contact)
// open the same search dialog.
// ─────────────────────────────────────────────────────────────────────────

type SiteSearchContextValue = {
  open: boolean
  openSearch: (initialQuery?: string) => void
  closeSearch: () => void
}

const SiteSearchContext = createContext<SiteSearchContextValue | null>(null)

export function useSiteSearch(): SiteSearchContextValue {
  const ctx = useContext(SiteSearchContext)
  if (!ctx) {
    throw new Error('useSiteSearch must be used within a SiteSearchProvider')
  }
  return ctx
}

export function SiteSearchProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [pendingQuery, setPendingQuery] = useState('')

  const openSearch = useCallback((initialQuery?: string) => {
    setPendingQuery(initialQuery ?? '')
    setOpen(true)
  }, [])
  const closeSearch = useCallback(() => setOpen(false), [])

  const value = useMemo(() => ({ open, openSearch, closeSearch }), [open, openSearch, closeSearch])

  return (
    <SiteSearchContext.Provider value={value}>
      {children}
      <SearchDialog open={open} onOpenChange={setOpen} initialQuery={pendingQuery} />
    </SiteSearchContext.Provider>
  )
}

// ─────────────────────────────────────────────────────────────────────────
// The dialog itself
// ─────────────────────────────────────────────────────────────────────────

function SearchDialog({
  open,
  onOpenChange,
  initialQuery,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialQuery: string
}) {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState(initialQuery)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (open) {
      setQuery(initialQuery)
      setActiveIndex(0)
      // Focus the input once the dialog has mounted.
      const t = window.setTimeout(() => inputRef.current?.focus(), 30)
      return () => window.clearTimeout(t)
    }
  }, [open, initialQuery])

  const tokens = useMemo(() => tokenize(query), [query])
  const results: SearchResult[] = useMemo(() => search(query), [query])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  const goToResult = useCallback(
    (result: SearchResult) => {
      const { entry } = result
      const targetHash = entry.anchor ? `#${entry.anchor}` : ''
      const href = `${entry.url}${targetHash}`

      onOpenChange(false)
      router.push(href)
      // Cover both same-page hash updates (which Next's router won't emit a
      // hashchange event for) and cross-page navigation (give the new page
      // a moment to render before we look for the anchor).
      window.setTimeout(() => scrollToAnchor(entry.anchor), 120)
    },
    [router, onOpenChange],
  )

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, Math.max(results.length - 1, 0)))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const result = results[activeIndex]
      if (result) goToResult(result)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal data-slot="dialog-portal">
        <DialogOverlay />
        <DialogPrimitive.Content
          data-slot="dialog-content"
          onOpenAutoFocus={(e) => {
            e.preventDefault()
            inputRef.current?.focus()
          }}
          className="fixed left-1/2 top-[8vh] z-50 w-full max-w-[calc(100%-2rem)] -translate-x-1/2 sm:max-w-xl
            rounded-sm border border-border bg-background shadow-lg
            data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0
            data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-150"
        >
          <DialogTitle className="sr-only">Search the website</DialogTitle>

          <div className="flex items-center gap-3 border-b border-border px-5 py-4">
            <SearchIcon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <input
              ref={inputRef}
              type="search"
              role="combobox"
              aria-expanded={results.length > 0}
              aria-controls="site-search-results"
              aria-activedescendant={results[activeIndex] ? `site-search-result-${activeIndex}` : undefined}
              aria-autocomplete="list"
              aria-label="Search the website"
              placeholder="Search publications, research, talks, people, topics…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent font-sans text-sm text-foreground placeholder:text-muted-foreground outline-none md:text-base"
            />
            <DialogPrimitive.Close
              aria-label="Close search"
              className="rounded-xs p-1 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none"
            >
              <CloseIcon className="size-4" />
            </DialogPrimitive.Close>
          </div>

          <div
            id="site-search-results"
            role="listbox"
            aria-label="Search results"
            className="max-h-[60vh] overflow-y-auto px-2 py-2 md:max-h-[65vh]"
          >
            {query.trim().length === 0 && (
              <div className="px-3 py-6">
                <p className="type-meta mb-3">Try searching for</p>
                <div className="flex flex-wrap gap-2">
                  {exampleSearchTerms.map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setQuery(term)}
                      className="rounded-sm border border-border/60 px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent/50 hover:bg-accent/5"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {query.trim().length > 0 && results.length === 0 && (
              <div className="px-3 py-8 text-center">
                <p className="text-sm text-foreground md:text-base">
                  No results found for “{query.trim()}”.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try a different word or spelling, or one of these topics:
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {exampleSearchTerms.map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setQuery(term)}
                      className="rounded-sm border border-border/60 px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent/50 hover:bg-accent/5"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {results.map((result, idx) => {
              const parts = buildSnippet(result.entry, result.matchIndex, tokens)
              const active = idx === activeIndex
              return (
                <button
                  key={result.entry.id}
                  id={`site-search-result-${idx}`}
                  role="option"
                  aria-selected={active}
                  type="button"
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => goToResult(result)}
                  className={`block w-full rounded-sm px-3 py-3 text-left transition-colors ${
                    active ? 'bg-accent/8' : 'hover:bg-accent/5'
                  }`}
                >
                  <span className="type-eyebrow">{result.entry.page}</span>
                  <span className="mt-1 block font-serif text-base text-foreground md:text-lg">
                    {result.entry.heading}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                    {parts.map((part, i) =>
                      part.match ? (
                        <mark
                          key={i}
                          className="rounded-[2px] bg-transparent font-semibold text-accent"
                        >
                          {part.text}
                        </mark>
                      ) : (
                        <React.Fragment key={i}>{part.text}</React.Fragment>
                      ),
                    )}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="border-t border-border px-5 py-3 text-xs text-muted-foreground">
            <span className="hidden sm:inline">↑↓ to navigate · Enter to open · Esc to close</span>
            <span className="sm:hidden">Tap a result to open it</span>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  )
}

// ─────────────────────────────────────────────────────────────────────────
// Trigger variants
// ─────────────────────────────────────────────────────────────────────────

/** Icon + label search trigger for the desktop primary nav. */
export function SearchNavButton({ className = '' }: { className?: string }) {
  const { openSearch } = useSiteSearch()
  return (
    <button
      type="button"
      onClick={() => openSearch()}
      aria-label="Search the website"
      className={`inline-flex items-center gap-1.5 text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground ${className}`}
    >
      <SearchIcon className="size-4" aria-hidden="true" />
      <span>Search</span>
    </button>
  )
}

/** Full-width row variant for the mobile nav panel. */
export function SearchNavRow({ className = '' }: { className?: string }) {
  const { openSearch } = useSiteSearch()
  return (
    <button
      type="button"
      onClick={() => openSearch()}
      aria-label="Search the website"
      className={`flex items-center gap-2 border-l-2 border-transparent py-3 pl-4 text-base tracking-wide text-muted-foreground transition-colors hover:text-foreground ${className}`}
    >
      <SearchIcon className="size-4" aria-hidden="true" />
      <span>Search</span>
    </button>
  )
}

/** Outlined button styled like the homepage hero navigation links. */
export function SearchHeroButton({ className = '' }: { className?: string }) {
  const { openSearch } = useSiteSearch()
  return (
    <button
      type="button"
      onClick={() => openSearch()}
      aria-label="Search the website"
      className={`btn-hero inline-flex items-center gap-2 ${className}`}
    >
      <SearchIcon className="size-4" aria-hidden="true" />
      <span>Search</span>
    </button>
  )
}

/** Prominent inline search entry point placed immediately below the Contact section. */
export function SiteSearchInline() {
  const { openSearch } = useSiteSearch()

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openSearch()
    }
  }

  return (
    <section aria-labelledby="site-search-inline-heading" className="border-t border-border bg-background py-16 md:py-20">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-12">
        <p id="site-search-inline-heading" className="type-eyebrow mb-4">
          Search
        </p>
        <button
          type="button"
          onClick={() => openSearch()}
          onKeyDown={handleKeyDown}
          aria-label="Search the entire website"
          className="group flex w-full items-center gap-4 rounded-sm border border-border/60 bg-background px-5 py-4 text-left transition-colors hover:border-accent/50 hover:bg-accent/5 md:px-6 md:py-5"
        >
          <SearchIcon
            className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent"
            aria-hidden="true"
          />
          <span className="flex flex-col">
            <span className="text-sm text-foreground transition-colors group-hover:text-accent md:text-base">
              Search the website
            </span>
            <span className="mt-1 text-sm text-muted-foreground">
              Find publications, research, talks, people, and topics across the whole site.
            </span>
          </span>
        </button>
      </div>
    </section>
  )
}
