'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ContactSection } from '@/components/contact-section'

const navLinks = [
  { href: '/publications', label: 'Publications' },
  { href: '/research', label: 'Research' },
  { href: '/podcasts', label: 'Podcasts' },
  { href: '/community', label: 'Community' },
]

const interests = [
  'Methodology of Social Sciences & Sociology',
  'Cultural Sociology',
  'Gender Studies & Queer Theory',
  'Ambedkarian Perspective',
  'Anti-Caste Movements',
  'Folk Culture',
  'Religion Studies',
  'Historical Methods',
  'Performance Studies',
]

const journey = [
  {
    years: '2020–2026',
    title: 'PhD in Sociology',
    institution:
      'Centre for the Study of Social Systems (CSSS), School of Social Sciences (SSS), Jawaharlal Nehru University',
  },
  {
    years: '2018–2020',
    title: 'MA in Sociology',
    institution:
      'Centre for the Study of Social Systems (CSSS), School of Social Sciences (SSS), Jawaharlal Nehru University',
  },
  {
    years: '2015–2018',
    title: 'BA in Social Sciences',
    institution: 'Tata Institute of Social Sciences, Guwahati',
  },
]

const BIO =
  'Snehashish Das is a doctoral candidate in Sociology at Jawaharlal Nehru University (JNU), New Delhi, India. Their work explores anti-caste movements, folk histories, folk cultures, religion, and subversive masculinities in Western Odisha, India. Alongside academic research, they write for public platforms and engage with anti-caste creative and literary practices. On a side note, Snehashish loves to explore, cook, and experiment with different cultural cuisines, which this website does not elaborate upon.'

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
          <p className="text-[0.975rem] leading-[1.75] text-background/80">{BIO}</p>
          <nav aria-label="Sections" className="flex flex-wrap gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="btn-hero">
                {link.label}
              </Link>
            ))}
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

            <p className="measure text-base leading-[1.75] text-background/75">{BIO}</p>

            <nav aria-label="Sections" className="flex flex-wrap gap-3 pt-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="btn-hero">
                  {link.label}
                </Link>
              ))}
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
      <section className="py-24 md:py-32 bg-background border-t border-border">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-12 tracking-wide">
            PhD Dissertation Details
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-6 leading-snug">
                The Deformation of Masculinities, and the Anti-Caste Movement in the Western Regions of Odisha
              </h3>

              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  This doctoral project examines anti-caste movements in Western Odisha through fieldwork conducted primarily among the Ganda (Scheduled Caste) community in Kurul village and the Malgodampada urban slum in the Balangir district in 2024. It investigates how anti-caste movements function not merely as political formations but as pedagogical spaces through which ideas of emancipation, personhood, gender, and social transformation are historically produced and transmitted.
                </p>

                {!researchExpanded && (
                  <button
                    onClick={() => setResearchExpanded(true)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-80 transition-opacity mt-2"
                  >
                    Continue Reading →
                  </button>
                )}

                {researchExpanded && (
                  <>
                    <div className="pt-6 border-t border-border/50 space-y-8">
                      <div>
                        <h4 className="font-serif text-lg text-foreground mb-4 tracking-wide uppercase text-sm">
                          Becoming & Emancipation
                        </h4>
                        <p>
                          This research develops arguments for a sociology of becoming by studying anti-caste movements as sites where emancipatory practices are produced, learned, transmitted, contested, and transformed across generations. The movement is approached as a pedagogical space where subversion is thought and practised, generating possibilities for both emancipation in general and gender emancipation in particular.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-serif text-lg text-foreground mb-4 tracking-wide uppercase text-sm">
                          Reconstructing Probable Pasts
                        </h4>
                        <p>
                          The project develops a rationale and the theoretical and methodological frameworks for reconstructing what are termed “probable pasts” through folk myths, ritual narratives, oral traditions, and performance practices. These narratives are situated within the historical ontology of the communities’ ‘self’, and the project examines how marginalized communities use ‘probable pasts’ to negotiate contemporary understandings of community-self, caste, and gender.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-serif text-lg text-foreground mb-4 tracking-wide uppercase text-sm">
                          Folk Culture, Performance & Gender
                        </h4>
                        <p>
                          Drawing on folk songs, two theatrical performances, and a possession ritual, the research develops a grounded understanding of gender within anti-caste folk cultures. Particular attention is given to the emancipatory possibilities these cultural forms generate, as well as the contradictions, paradoxes, and limits they contain.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-serif text-lg text-foreground mb-4 tracking-wide uppercase text-sm">
                          Critique of Gender & Masculinity Studies
                        </h4>
                        <p>
                          This project argues that even certain idiographic studies risk making positive laws in their study of caste and gender, and in turn creating racialised subjects. This research understands the limits of gender and masculinities studies and discourses that generalize masculinity or treat it as ahistorical or historically fixed. In contrast, the research conceptualizes the study of gender emancipation through anti-caste movements, framing gender and masculinities as historically evolving categories.
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setResearchExpanded(false)}
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
      <section className="bg-background py-24 md:py-32">
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
      <section className="border-t border-border bg-background py-24 md:py-32">
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
      <section className="border-t border-foreground bg-foreground/98 py-32 text-background md:py-40">
        <div className="mx-auto w-full max-w-3xl px-6 md:px-12">
          <blockquote className="space-y-8 text-center">
            <p className="font-serif leading-tight text-background text-[clamp(2rem,5vw,3.5rem)]">
              “If caste remains, liberation cannot.
              <br />
              If liberation emerges, caste cannot remain.”
            </p>
            <p className="text-sm tracking-wider text-background/70 md:text-base">— Bhima Bhoi</p>
          </blockquote>
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
