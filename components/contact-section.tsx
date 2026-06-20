import Link from 'next/link'

export function ContactSection() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-16 tracking-wide">
          Get in Touch
        </h2>

        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          {/* Email */}
          <a
            href="mailto:mx.snehashish@gmail.com"
            className="group flex items-start gap-4 hover:opacity-80 transition-opacity"
          >
            <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Email</p>
              <p className="text-sm md:text-base text-foreground mt-1">mx.snehashish@gmail.com</p>
            </div>
          </a>

          {/* ORCID */}
          <a
            href="https://orcid.org/0009-0008-6092-1457"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 hover:opacity-80 transition-opacity"
          >
            <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.645 0 1.169.524 1.169 1.169s-.524 1.169-1.169 1.169-1.169-.524-1.169-1.169.524-1.169 1.169-1.169zm8.262 11.262H14V10.5c0-.827-.014-1.889-.915-1.889-.917 0-1.056.716-1.056 1.456v2.593h-1.031V9.098h.99v.775h.014c.138-.262.475-1.056 1.296-1.056 1.385 0 1.641.911 1.641 2.098v2.825zm-9.262-7.35h-1.031V9.098h1.031v6.592zm15.938-14.906h-1.031v6.592h1.031V4.694zm0-2.45c0 .644-.522 1.166-1.166 1.166-.644 0-1.166-.522-1.166-1.166 0-.644.522-1.166 1.166-1.166.644 0 1.166.522 1.166 1.166z" />
            </svg>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">ORCID</p>
              <p className="text-sm md:text-base text-foreground mt-1">0009-0008-6092-1457</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/snehashish-das-283401187"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 hover:opacity-80 transition-opacity"
          >
            <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">LinkedIn</p>
              <p className="text-sm md:text-base text-foreground mt-1">Snehashish Das</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
