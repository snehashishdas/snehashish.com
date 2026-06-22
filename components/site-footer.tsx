import Link from 'next/link'

const navItems = [
  { href: '/research', label: 'Research' },
  { href: '/publications', label: 'Publications' },
  { href: '/podcasts', label: 'Podcasts' },
  { href: '/community', label: 'Community' },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-4xl px-6 py-14 md:px-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="font-serif text-base tracking-tight text-foreground transition-colors hover:text-accent"
          >
            Snehashish Das
          </Link>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="type-meta mt-10 md:mt-12">© {year} · Snehashish Das</p>
      </div>
    </footer>
  )
}
