'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ContactSection } from '@/components/contact-section'
import { SearchHeroButton } from '@/components/site-search'
import { heroBio, phdDissertation, interests, journey, reflectionQuote } from '@/lib/content/home'

const navLinks = [
  { href: '/publications', label: 'Publications' },
  { href: '/research', label: 'Research' },
  { href: '/podcasts', label: 'Podcasts' },
  { href: '/community', label: 'Community' },
]

export default function Home() {
  const [researchExpanded, setResearchExpanded] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* ============================================================
          HERO
          Mobile: full-screen cover page (portrait + overlay).
          Desktop: 50/50 portrait + biography title page.
      ============================================================ */}

      {/* --- Mobile cover page (book / catalogue cover) --- */}
      <section className="relative h-[100svh] w-full overflow-hidden md:hidden">
        <Image
          src="/hero-portrait.jpg"
          alt="Portrait of Snehashish Das"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/25 to-foreground/5"
          aria-hidden="true"
        />
        <style>{`
          @keyframes heroFadeUp {
            from { opacity: 0; transform: translateY(18px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .hero-role-line {
            animation: heroFadeUp 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;
          }
          .hero-title-block {
            animation: heroFadeUp 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.38s both;
          }
          .hero-scroll-indicator {
            animation: heroFadeUp 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.62s both;
          }
        `}</style>
        <div className="absolute inset-x-0 bottom-0 p-7 pb-10 flex flex-col items-start gap-4">
          <div className="hero-role-line">
            <p className="type-eyebrow !text-background/70">Sociologist · Writer · Researcher</p>
          </div>
          <div className="hero-title-block">
            <h1 className="font-serif text-[clamp(2.75rem,12vw,3.75rem)] leading-[1.04] tracking-tight text-background">
              Snehashish Das
            </h1>
          </div>
          <div className="hero-scroll-indicator flex flex-col items-start gap-1 text-background/55 pt-1" aria-hidden="true">
            <span className="text-[0.625rem] uppercase tracking-[0.2em]">Scroll</span>
            <span className="h-7 w-px bg-background/40" />
          </div>
        </div>
      </section>

      {/* --- Mobile biography + navigation (below the cover) --- */}
      <section className="bg-foreground px-7 py-16 text-background md:hidden">
        <div className="space-y-9">
          <div className="h-px w-16 bg-background/30" aria-hidden="true" />
          <p className="text-[0.975rem] leading-[1.75] text-background/80">{heroBio}</p>
          <nav aria-label="Sections" className="flex flex-wrap gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="btn-hero">
                {link.label}
              </Link>
            ))}
            <SearchHeroButton />
          </nav>
        </div>
      </section>

      {/* --- Desktop 50/50 hero --- */}
      <section className="relative hidden min-h-screen md:flex">
        {/* Portrait — 50%, full height, subject preserved (center) */}
        <div className="relative min-h-screen w-1/2 bg-foreground/5">
          <Image
            src="/hero-portrait.jpg"
            alt="Portrait of Snehashish Das"
            fill
            priority
            quality={92}
            sizes="50vw"
            className="object-cover object-center"
          />
        </div>

        {/* Biography title page — 50% */}
        <div className="flex w-1/2 flex-col justify-center bg-foreground px-12 text-background lg:px-16 xl:px-20">
          <div className="mx-auto w-full max-w-[34rem] space-y-10">
            <div className="space-y-6">
              <p className="type-eyebrow !text-background/60">Sociologist · Writer · Researcher</p>
              <h1 className="font-serif text-[clamp(3rem,4.6vw,4.75rem)] leading-[1.02] tracking-tight text-background">
                Snehashish Das
              </h1>
              <div className="h-px w-16 bg-background/30" aria-hidden="true" />
            </div>

            <p className="measure text-base leading-[1.75] text-background/75">{heroBio}</p>

            <nav aria-label="Sections" className="flex flex-wrap gap-3 pt-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="btn-hero">
                  {link.label}
                </Link>
              ))}
              <SearchHeroButton />
            </nav>
          </div>
        </div>
      </section>

      {/*
        PhD Dissertation Details
        CONTENT CORRECTION — text content replaced only.
        Layout, typography, spacing, hierarchy, and expand/collapse structure
        are preserved exactly as in the approved design.
      */}
      <section id="phd-dissertation" className="py-24 md:py-32 bg-background border-t border-border">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-12 tracking-wide">
            PhD Dissertation Details
          </h2>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-foreground/60 mb-3 tracking-wide">
                {phdDissertation.thesisLabel}
              </p>
              <h3 className="font-serif text-2xl text-foreground mb-6 leading-snug">
                {phdDissertation.thesisTitle}
              </h3>

              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  {phdDissertation.summary}
                </p>

                {!researchExpanded && (
                  <button
                    onClick={() => setResearchExpanded(true)}
                    aria-expanded={researchExpanded}
                    aria-controls="phd-dissertation-details"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-80 transition-opacity mt-2"
                  >
                    Continue Reading →
                  </button>
                )}

                {researchExpanded && (
                  <>
                    <div id="phd-dissertation-details" className="pt-6 border-t border-border/50 space-y-8">
                      {phdDissertation.sections.map((section) => (
                        <div key={section.heading}>
                          <h4 className="font-serif text-lg text-foreground mb-4 tracking-wide uppercase text-sm">
                            {section.heading}
                          </h4>
                          <p>{section.body}</p>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setResearchExpanded(false)}
                      aria-expanded={researchExpanded}
                      aria-controls="phd-dissertation-details"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-80 transition-opacity mt-4"
                    >
                      Hide
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Interest */}
      <section id="areas-of-interest" className="bg-background py-24 md:py-32">
        <div className="mx-auto w-full max-w-4xl px-6 md:px-12">
          <h2 className="mb-12 font-serif text-2xl tracking-wide text-foreground md:text-3xl">
            Areas of Interest
          </h2>
          <div className="flex flex-wrap gap-3">
            {interests.map((inquiry) => (
              <span
                key={inquiry}
                className="inline-block cursor-default rounded-sm border border-border/60 bg-background px-4 py-2 text-sm text-foreground transition-colors duration-200 hover:border-accent/50 hover:bg-accent/5"
              >
                {inquiry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Journey */}
      <section id="academic-journey" className="border-t border-border bg-background py-24 md:py-32">
        <div className="mx-auto w-full max-w-4xl px-6 md:px-12">
          <h2 className="mb-12 font-serif text-2xl tracking-wide text-foreground md:text-3xl">
            Academic Journey
          </h2>
          <div className="relative">
            <div className="absolute bottom-0 left-0 top-2 w-px bg-border/50" aria-hidden="true" />
            <div className="space-y-12">
              {journey.map((item, i) => (
                <div key={i} className="relative pl-6">
                  <div
                    className="absolute left-0 top-2 size-2 -translate-x-[3px] rounded-full bg-foreground/30"
                    aria-hidden="true"
                  />
                  <p className="type-meta mb-1">{item.years}</p>
                  <h3 className="mb-1 font-serif text-lg text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reflection Quote */}
      <section id="reflection-quote" className="border-t border-foreground bg-foreground/98 py-32 text-background md:py-40">
        <div className="mx-auto w-full max-w-3xl px-6 md:px-12">
          <blockquote className="space-y-8 text-center">
            <p className="font-serif leading-tight text-background text-[clamp(2rem,5vw,3.5rem)]">
              {`“${reflectionQuote.line1}`}
              <br />
              {`${reflectionQuote.line2}”`}
            </p>
            <p className="text-sm tracking-wider text-background/70 md:text-base">{`— ${reflectionQuote.attribution}`}</p>
          </blockquote>
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
