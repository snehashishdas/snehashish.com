export function ContactSection() {
  const items = [
    {
      label: 'Email',
      value: 'mx.snehashish@gmail.com',
      href: 'mailto:mx.snehashish@gmail.com',
      external: false,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
      fill: false,
    },
    {
      label: 'ORCID',
      value: '0009-0008-6092-1457',
      href: 'https://orcid.org/0009-0008-6092-1457',
      external: true,
      icon: (
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.645 0 1.169.524 1.169 1.169s-.524 1.169-1.169 1.169-1.169-.524-1.169-1.169.524-1.169 1.169-1.169zm8.262 11.262H14V10.5c0-.827-.014-1.889-.915-1.889-.917 0-1.056.716-1.056 1.456v2.593h-1.031V9.098h.99v.775h.014c.138-.262.475-1.056 1.296-1.056 1.385 0 1.641.911 1.641 2.098v2.825zm-9.262-7.35h-1.031V9.098h1.031v6.592zm15.938-14.906h-1.031v6.592h1.031V4.694zm0-2.45c0 .644-.522 1.166-1.166 1.166-.644 0-1.166-.522-1.166-1.166 0-.644.522-1.166 1.166-1.166.644 0 1.166.522 1.166 1.166z" />
      ),
      fill: true,
    },
    {
      label: 'LinkedIn',
      value: 'Snehashish Das',
      href: 'https://www.linkedin.com/in/snehashish-das-283401187',
      external: true,
      icon: (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      ),
      fill: true,
    },
  ]

  return (
    <section className="border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-12">
        <h2 className="type-section-title mb-14 md:mb-16">Get in Touch</h2>

        <div className="flex flex-col gap-10 md:flex-row md:flex-wrap md:gap-x-16 md:gap-y-10">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="group flex items-start gap-4 py-1 transition-opacity hover:opacity-100"
            >
              <svg
                className="mt-0.5 size-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-accent"
                fill={item.fill ? 'currentColor' : 'none'}
                stroke={item.fill ? undefined : 'currentColor'}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {item.icon}
              </svg>
              <span className="flex flex-col">
                <span className="type-eyebrow">{item.label}</span>
                <span className="mt-1.5 text-sm text-foreground transition-colors group-hover:text-accent md:text-base">
                  {item.value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
