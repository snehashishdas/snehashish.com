'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ContactSection } from '@/components/contact-section'

export default function Home() {
  const [researchExpanded, setResearchExpanded] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - 50/50 Split with Extended Biography */}
      <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Mobile: Portrait on Top */}
        <div className="md:hidden w-full h-72 relative bg-foreground/5 flex-shrink-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_00000000246c71f8a387a9cb2338f77e~2.png-8q5RkMchccPwHuWc3Gpmqsb8d2qNWJ.jpeg"
            alt="Snehashish Das"
            fill
            className="object-contain"
            priority
            quality={95}
          />
        </div>

        {/* Left: Portrait - Desktop Only (45-48% width) */}
        <div className="hidden md:flex md:w-5/12 relative bg-foreground/5">
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_00000000246c71f8a387a9cb2338f77e~2.png-8q5RkMchccPwHuWc3Gpmqsb8d2qNWJ.jpeg"
              alt="Snehashish Das"
              fill
              className="object-cover"
              priority
              quality={95}
            />
          </div>
        </div>

        {/* Right: Dark Overlay Panel with Text (52-55% width) */}
        <div className="w-full md:w-7/12 bg-foreground/95 text-background flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 md:py-0">
          <div className="space-y-10 max-w-xl">
            {/* Name - Full Width, No Line Break */}
            <div>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-background mb-6 leading-tight tracking-tight">
                Snehashish Das
              </h1>
              <p className="text-base md:text-lg text-background/80 font-light tracking-wide">
                Sociologist · Writer · Researcher
              </p>
            </div>

            {/* Bio - Extended */}
            <div className="space-y-6 text-background/75 leading-relaxed text-sm md:text-base">
              <p>
                Snehashish Das is a doctoral candidate in Sociology at Jawaharlal Nehru University (JNU). Their work explores anti-caste movements, folk histories, folk cultures, religion, and subversive masculinities in Western Odisha, India. Alongside academic research, they write for public platforms and engage with anti-caste creative and literary practices.
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap gap-3 pt-4 text-sm md:text-base">
              <Link href="/research" className="px-4 py-2 text-background border border-background/60 rounded-sm hover:border-background hover:bg-background/10 transition-all duration-200 font-medium">
                Research
              </Link>
              <Link href="/publications" className="px-4 py-2 text-background border border-background/60 rounded-sm hover:border-background hover:bg-background/10 transition-all duration-200 font-medium">
                Publications
              </Link>
              <Link href="/podcasts" className="px-4 py-2 text-background border border-background/60 rounded-sm hover:border-background hover:bg-background/10 transition-all duration-200 font-medium">
                Podcasts
              </Link>
              <Link href="/community" className="px-4 py-2 text-background border border-background/60 rounded-sm hover:border-background hover:bg-background/10 transition-all duration-200 font-medium">
                Community
              </Link>
            </nav>
          </div>
        </div>
      </section>

      {/* PhD Dissertation Details */}
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
                  This doctoral project examines anti-caste movements in Western Odisha through ethnographic fieldwork conducted among the Ganda community in Kurul village and Malgodampada urban-slum, Balangir district. It investigates how anti-caste movements function not merely as political formations but as pedagogical spaces through which ideas of emancipation, personhood, gender, and social transformation are historically produced and transmitted.
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
                          This research develops arguments for a sociology of becoming by studying anti-caste movements as sites where emancipatory practices are learned, transmitted, contested, and transformed across generations. The movement is approached as a pedagogical space that generates possibilities for both social and gender emancipation.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-serif text-lg text-foreground mb-4 tracking-wide uppercase text-sm">
                          Reconstructing Probable Pasts
                        </h4>
                        <p>
                          The project develops theoretical and methodological frameworks for reconstructing what are termed "probable pasts" through folk myths, ritual narratives, oral traditions, and performance practices. These narratives are situated within a historical ontology to examine how marginalized communities negotiate questions of caste, gender, memory, and collective identity.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-serif text-lg text-foreground mb-4 tracking-wide uppercase text-sm">
                          Performance, Gender & Anti-Caste Culture
                        </h4>
                        <p>
                          Drawing on folk songs, two theatrical performances, and a possession ritual, the research develops a grounded understanding of gender within anti-caste cultures. Particular attention is given to the emancipatory possibilities these cultural forms generate, as well as the contradictions and limits they contain.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-serif text-lg text-foreground mb-4 tracking-wide uppercase text-sm">
                          Critique of Masculinity Studies
                        </h4>
                        <p>
                          The project critiques approaches that generalize masculinity as a universal or ahistorical category. It examines how some studies inadvertently create fixed and racialized subjects through overly deterministic frameworks. In contrast, the research conceptualizes gender and masculinity as historically evolving categories and explores their transformation through anti-caste movements.
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
      <section className="py-24 md:py-32 bg-background">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-12 tracking-wide">
            Areas of Interest
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              'Methodology of Social Sciences & Sociology',
              'Cultural Sociology',
              'Gender Studies & Queer Theory',
              'Ambedkarian Perspective',
              'Anti-Caste Movements',
              'Folk Culture',
              'Religion Studies',
              'Historical Methods',
              'Performance Studies',
            ].map((inquiry) => (
              <span
                key={inquiry}
                className="inline-block px-4 py-2 text-sm text-foreground border border-border/60 rounded-sm bg-background hover:border-accent/50 hover:bg-accent/5 transition-colors duration-200 cursor-default"
              >
                {inquiry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Journey Timeline */}
      <section className="py-24 md:py-32 bg-background border-t border-border">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-12 tracking-wide">
            Academic Journey
          </h2>

          <div className="relative">
            <div className="absolute left-0 top-2 bottom-0 w-px bg-border/50" aria-hidden="true" />

            <div className="space-y-12">
              {[
                {
                  years: '2020–2026',
                  title: 'PhD in Sociology',
                  institution: 'Centre for the Study of Social Systems (CSSS), School of Social Sciences (SSS), Jawaharlal Nehru University',
                },
                {
                  years: '2018–2020',
                  title: 'MA in Sociology',
                  institution: 'Centre for the Study of Social Systems (CSSS), School of Social Sciences (SSS), Jawaharlal Nehru University',
                },
                {
                  years: '2015–2018',
                  title: 'BA in Social Sciences',
                  institution: 'Tata Institute of Social Sciences, Guwahati',
                },
              ].map((item, i) => (
                <div key={i} className="relative pl-6">
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-foreground/30 -translate-x-[3px]" aria-hidden="true" />
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    {item.years}
                  </p>
                  <h3 className="font-serif text-lg text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reflection Quote */}
      <section className="py-32 md:py-40 bg-foreground/98 text-background border-t border-foreground">
        <div className="w-full max-w-3xl mx-auto px-6 md:px-12">
          <blockquote className="text-center space-y-8">
            <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-background leading-tight">
              "If caste remains, liberation cannot.
              <br />
              If liberation emerges, caste cannot remain."
            </p>
            <p className="text-sm md:text-base text-background/70 tracking-wider">
              — Bhima Bhoi
            </p>
          </blockquote>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-background border-t border-border">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
          <p className="text-xs text-muted-foreground tracking-widest">
            © Snehashish Das
          </p>
        </div>
      </footer>
    </div>
  )
}
