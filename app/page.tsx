'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ContactSection } from '@/components/contact-section'

const navLinks = [
  { href: '/research', label: 'Research' },
  { href: '/publications', label: 'Publications' },
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

export default function Home() {
  const [researchExpanded, setResearchExpanded] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero — portrait + dark biography panel */}
      <section className="relative flex min-h-screen flex-col overflow-hidden md:flex-row">
        {/* Portrait: top on mobile, left column on desktop. Single optimized asset. */}
        <div className="relative h-80 w-full flex-shrink-0 bg-foreground/5 sm:h-96 md:h-auto md:min-h-screen md:w-5/12">
          <Image
            src="/hero-portrait.jpg"
            alt="Portrait of Snehashish Das"
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw, 42vw"
            className="object-contain object-center md:object-cover"
          />
        </div>

        {/* Biography panel */}
        <div className="flex w-full flex-col justify-center bg-foreground/95 px-6 py-16 text-background md:w-7/12 md:px-12 md:py-0 lg:px-16">
          <div className="max-w-xl space-y-10">
            <div>
              <h1 className="mb-6 font-serif leading-[1.04] tracking-tight text-background text-[clamp(2.75rem,7vw,5.25rem)]">
                Snehashish Das
              </h1>
              <p className="text-base font-light tracking-wide text-background/80 md:text-lg">
                Sociologist · Writer · Researcher
              </p>
            </div>

            <div className="space-y-6 text-sm leading-relaxed text-background/75 md:text-base">
              <p>
                Snehashish Das is a doctoral candidate in Sociology at Jawaharlal Nehru University (JNU), New Delhi, India. Their work explores anti-caste movements, folk histories, folk cultures, religion, and subversive masculinities in Western Odisha, India. Alongside academic research, they write for public platforms and engage with anti-caste creative and literary practices. On a side note, Snehashish loves to explore, cook, and experiment with different cultural cuisines, which this website does not elaborate upon.
              </p>
            </div>

            <nav aria-label="Sections" className="flex flex-wrap gap-3 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-sm border border-background/40 px-4 py-2.5 text-sm font-medium tracking-wide text-background transition-all duration-200 hover:border-background hover:bg-background/10"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/*
        PhD Dissertation Details
        CONTENT CORRECTION 2 — text content replaced only.
        Layout, typography, spacing, hierarchy, and expand/collapse structure
        are intentionally preserved exactly as in the approved design.
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
                  This doctoral project examines anti-caste movements in Western Odisha through fieldwork conducted among, primarily, Ganda (Scheduled Caste) community in Kurul village and Malgodampada urban-slum, Balangir district in 2024. It investigates how anti-caste movements function not merely as political formations but as pedagogical spaces through which ideas of emancipation, personhood, gender, and social transformation are historically produced and transmitted.
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
                          This research develops arguments for a sociology of becoming by studying anti-caste movements as sites where emancipatory practices are produced, learned, transmitted, contested, and transformed across generations. The movement is approached as a pedagogical space, where subversion is thought and practised, that generates possibilities for both emancipation in general, and gender emancipation in particular.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-serif text-lg text-foreground mb-4 tracking-wide uppercase text-sm">
                          Reconstructing Probable Pasts
                        </h4>
                        <p>
                          The project develops rationale, and theoretical and methodological frameworks for reconstructing what are termed “probable pasts” through folk myths, ritual narratives, oral traditions, and performance practices. These narratives are situated within the historical ontology of communities’ ‘self’, and it examines how marginalized communities use ‘probable pasts’ to negotiate contemporary understandings of community-self, caste, and gender.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-serif text-lg text-foreground mb-4 tracking-wide uppercase text-sm">
                          Folk Culture, Performance & Gender
                        </h4>
                        <p>
                          Drawing on folk songs, two theatrical performances, and a possession ritual, the research develops a grounded understanding of gender within anti-caste folk cultures. Particular attention is given to the emancipatory possibilities these cultural forms generate, as well as the contradictions, paradoxes and limits they contain.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-serif text-lg text-foreground mb-4 tracking-wide uppercase text-sm">
                          Critique of Gender & Masculinity Studies
                        </h4>
                        <p>
                          This project critiques that even certain idiographic studies risk making positive laws in their study of caste and gender, and in return creating racialised subjects. This research understands the limits of gender and masculinities studies, and discourses, that generalizes masculinity or treat it as ahistorical or historically fixed. In contrast, the research conceptualises studying gender emancipation through anti-caste movements, where it understands gender and masculinities as historically evolving categories.
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
