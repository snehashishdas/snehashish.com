'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/research', label: 'Research' },
    { href: '/publications', label: 'Publications' },
    { href: '/community', label: 'Community' },
    { href: '/podcasts', label: 'Podcasts' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex fixed top-0 w-full h-16 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="font-serif text-lg text-foreground hover:opacity-80 transition-opacity">
            Snehashish Das
          </Link>
          <div className="flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-foreground border-b-2 border-foreground pb-1'
                    : 'text-foreground/60 hover:text-foreground border-b-2 border-transparent pb-1'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile Header with Hamburger */}
      <header className="md:hidden fixed top-0 w-full h-14 bg-background/95 backdrop-blur-sm border-b border-border z-50 flex items-center justify-between px-6">
        <Link href="/" className="font-serif text-base text-foreground">
          SD
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-foreground hover:bg-foreground/5 rounded transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-14 z-40 bg-background border-b border-border">
          <nav className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-foreground border-l-2 border-foreground pl-3'
                    : 'text-foreground/60 hover:text-foreground border-l-2 border-transparent pl-3'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
