import type { CSSProperties } from 'react'
import { SiteNav } from "@/components/site-nav"
import { ContactSection } from "@/components/contact-section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  panelThemes,
  communityEducationIntro,
  collaborators,
  communityEducationPrograms,
  institutionalActivities,
  archiveEntries,
} from "@/lib/content/community"

export const metadata = {
  title: "Community",
  description: "Community education, panel discussions, internships, workshops, and institutional initiatives by Snehashish Das",
  alternates: { canonical: "/community" },
}

const workshops = [
  {
    role: 'Rapporteur',
    title: 'Eastern Himalayan Naturenomics Forum',
    details: 'Organized by the Balipara Foundation, Guwahati, Assam (2nd–3rd November 2017)',
  },
  {
    role: 'Participant',
    title: 'Workshop on "Gender and Sexuality, Sexual Health, Sexual Violence and Related Laws"',
    details: 'Conducted by the Foundation for Social Transformation, Guwahati (18th–19th March 2017)',
  },
  {
    role: 'Participant & Volunteer',
    title: '6th National Convention of Right to Food Campaign',
    details: 'Held in Ranchi (23rd–25th September 2016)',
  },
]

const internships = [
  {
    organization: 'National Alliance of People\'s Movements (NAPM), New Delhi',
    date: 'December 2016',
    focus: 'Housing rights and anti-eviction advocacy',
    role: 'Supported the Kathputli Colony resistance movement against forced demolition',
  },
  {
    organization: 'Ashirvad NGO, East Sikkim',
    date: 'May 2016 (3 days)',
    focus: 'Socioeconomic-cultural study of Pakyong district communities',
    role: 'Conducted field research on livelihoods and local traditions',
  },
  {
    organization: 'Gandhi Youth Camp, Puri, Odisha',
    date: 'March 2015 (5-day residential programme)',
    focus: 'Grassroots development training through fieldwork',
    organizers: 'Gandhi Bichar Abhiyan & Gandhi Peace Centre',
    venue: 'Gopabandhu Daridra Narayan Seva Sangh, Sakhigopal',
  },
]

// Helper: render document links (reused from communityEducationPrograms)
function DocumentLinks({ documents }: { documents: { title: string; year: string; file: string }[] }) {
  return (
    <div className="border-t border-border/40 pt-4 mt-2">
      <p className="type-meta mb-3">Documentation</p>
      <ul className="space-y-4">
        {documents.map((doc) => (
          <li key={doc.file} className="flex items-start gap-3">
            <svg
              className="mt-0.5 size-[18px] flex-shrink-0 text-muted-foreground"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 3v4a1 1 0 001 1h4M14 3H7a1 1 0 00-1 1v16a1 1 0 001 1h10a1 1 0 001-1V8M14 3l4 5"
              />
            </svg>
            <div className="min-w-0">
              <p className="text-sm md:text-base text-foreground/85">
                {doc.title}{' '}
                <span className="text-muted-foreground">(PDF)</span>
              </p>
              <p className="type-meta mt-1">Year: {doc.year}</p>
              <div className="mt-2.5 flex flex-wrap items-center gap-x-6 gap-y-2">
                <a
                  href={encodeURI(doc.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-rule text-sm"
                >
                  View Report
                </a>
                <a
                  href={encodeURI(doc.file)}
                  download
                  className="link-rule text-sm"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function CommunityPage() {
  // ── Unified archive: all entries from Advocacy / Training / Workshops / Conventions / Internships
  // Sorted most-recent → oldest. Year groups are derived from the imported archiveEntries array.

  // Sort most-recent → oldest
  const sortedEntries = [...archiveEntries].sort((a, b) => b.year - a.year)

  // Group by year
  const entriesByYear = sortedEntries.reduce<Record<number, typeof archiveEntries>>((acc, entry) => {
    if (!acc[entry.year]) acc[entry.year] = []
    acc[entry.year].push(entry)
    return acc
  }, {})

  const years = Object.keys(entriesByYear)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <div className="min-h-screen flex flex-col bg-background" style={{ ['--page-accent' as keyof CSSProperties]: 'var(--color-research-charcoal)' } as CSSProperties}>
      <SiteNav />
      <div className="h-[3px] w-full bg-page-accent" aria-hidden="true" />

      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
          {/* Page Title & Subtitle */}
          <div className="mb-20">
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-4">
              Community
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Community education, public engagement, and institutional initiatives
            </p>
          </div>

          {/* SECTION 1: Invited Panel Discussions and Talks */}
          <section id="panel-discussions" className="mb-28 md:mb-40">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-16 tracking-wide">
              Invited Panel Discussions and Talks (Selected)
            </h2>

            <Accordion type="single" collapsible className="space-y-6">
              {panelThemes.map((theme) => (
                <AccordionItem
                  key={theme.id}
                  value={theme.id}
                  id={theme.id}
                  className="border border-border/40 rounded-sm px-6 md:px-8 py-6 md:py-8"
                  style={{
                    borderLeftWidth: '4px',
                    borderLeftColor: theme.color,
                  }}
                >
                  <AccordionTrigger className="py-0 hover:no-underline group">
                    <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-foreground/80 transition-colors text-left">
                      {theme.title}
                    </h3>
                  </AccordionTrigger>

                  <AccordionContent className="pt-8 pb-0 space-y-6">
                    {theme.talks.map((talk, idx) => (
                      <div key={idx} className="pb-6 border-b border-border/20 last:border-0 last:pb-0">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
                          {talk.date}
                        </p>
                        <p className="text-xs font-medium mb-1" style={{ color: theme.color }}>
                          {talk.role}
                        </p>
                        <h4 className="font-serif text-base md:text-lg text-foreground mb-2">
                          "{talk.title}"
                        </h4>
                        {(talk as any).event && (
                          <p className="text-sm text-muted-foreground mb-1">
                            {(talk as any).event}
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground italic">
                          {talk.venue}
                        </p>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* SECTION 2: Community Education & Teaching Initiatives */}
          <section id="community-education" className="mb-28 md:mb-40 border-t border-border pt-28 md:pt-40">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 tracking-wide">
              Community Education & Teaching Initiatives
            </h2>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-12 max-w-3xl">
              {communityEducationIntro}
            </p>

            {/* Collaborators */}
            <div className="mb-12">
              <p className="text-sm md:text-base text-foreground/75">
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Programme Collaborators:</span> {collaborators.join(', ')} and Others
              </p>
            </div>

            {/* Programs */}
            <Accordion type="single" collapsible className="space-y-6">
              {communityEducationPrograms.map((program, idx) => (
                <AccordionItem
                  key={idx}
                  value={`ce-${idx}`}
                  className="border border-border/40 rounded-sm px-6 md:px-8 py-6 md:py-8 border-l-4"
                  style={{ borderLeftColor: '#6B2737' }}
                >
                  <AccordionTrigger className="py-0 hover:no-underline group">
                    <div className="text-left">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-1">
                        {program.role}
                      </p>
                      <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-foreground/80 transition-colors">
                        {program.program}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {program.period}
                      </p>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pt-8 pb-0 space-y-4">
                    {program.locations && (
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
                          Locations
                        </p>
                        <p className="text-sm md:text-base text-foreground/75">
                          {program.locations}
                        </p>
                      </div>
                    )}

                    {program.institution && (
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
                          Institution
                        </p>
                        <p className="text-sm md:text-base text-foreground/75">
                          {program.institution}
                        </p>
                      </div>
                    )}

                    {program.partnerOrganizations && (
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
                          Partner Organizations
                        </p>
                        <p className="text-sm md:text-base text-foreground/75">
                          {program.partnerOrganizations}
                        </p>
                      </div>
                    )}

                    {program.additionalRole && (
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
                          Additional Role
                        </p>
                        <p className="text-sm md:text-base text-foreground/75">
                          {program.additionalRole}
                        </p>
                      </div>
                    )}

                    {program.documents && (
                      <DocumentLinks documents={program.documents} />
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* SECTION 3: Advocacy, Training, Workshops & Conventions — unified archive */}
          <section id="advocacy-training-workshops" className="mb-28 md:mb-40 border-t border-border pt-28 md:pt-40">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-16 tracking-wide">
              Advocacy, Training, Workshops & Conventions
            </h2>

            <div className="space-y-0">
              {years.map((year, yearIdx) => (
                <div key={year} className={yearIdx > 0 ? 'mt-8' : ''}>
                  {/* Year divider — subtle, non-dominant */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="font-sans text-[0.6rem] font-semibold tracking-[0.22em] uppercase text-muted-foreground/60 tabular-nums select-none"
                    >
                      {year}
                    </span>
                    <span className="flex-1 h-px bg-border/30" aria-hidden="true" />
                  </div>

                  {/* Per-year accordion — each year is its own Accordion instance */}
                  <Accordion type="single" collapsible className="space-y-6">
                    {entriesByYear[year].map((entry) => (
                      <AccordionItem
                        key={entry.id}
                        value={entry.id}
                        id={entry.id}
                        className="border border-border/40 rounded-sm px-6 md:px-8 py-6 md:py-8"
                      >
                        <AccordionTrigger className="py-0 hover:no-underline group">
                          <div className="text-left">
                            <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-1">
                              {entry.role}
                            </p>
                            <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-foreground/80 transition-colors">
                              {entry.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {entry.meta}
                            </p>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-8 pb-0">
                          {typeof entry.details === 'string' ? (
                            <p className="text-sm md:text-base text-foreground/75">{entry.details}</p>
                          ) : (
                            <div className="space-y-3">
                              {entry.details.map((d) => (
                                <div key={d.label}>
                                  <p className="type-meta mb-1">{d.label}</p>
                                  <p className="text-sm md:text-base text-foreground/75">{d.value}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: Diary's Entries, don't ask */}
          <section id="diarys-entries" className="border-t border-border pt-28 md:pt-40">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-16 tracking-wide">
              Diary's Entries, don't ask
            </h2>

            <Accordion type="single" collapsible className="space-y-2">
              {/* Event Management & Programming */}
              <AccordionItem
                value="event-management"
                id="event-management"
                className="border border-border/40 rounded-sm px-5 md:px-7 py-4 md:py-5"
              >
                <AccordionTrigger className="py-0 hover:no-underline group">
                  <h3 className="font-serif text-base md:text-lg text-foreground group-hover:text-foreground/80 transition-colors text-left">
                    Event Management & Programming
                  </h3>
                </AccordionTrigger>

                <AccordionContent className="pt-5 pb-0 space-y-5">
                  {institutionalActivities.eventManagement.map((item, idx) => (
                    <div key={idx} className="pb-5 border-b border-border/20 last:border-0 last:pb-0">
                      <p className="text-xs font-medium mb-1" style={{ color: '#5C4A6B' }}>
                        {item.role}
                      </p>
                      <p className="text-sm md:text-base text-foreground mb-1">
                        {item.title}{item.organization ? ` — ${item.organization}` : ''}
                      </p>
                      {item.date && (
                        <p className="type-meta">
                          {item.date}
                        </p>
                      )}
                      {item.details && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.details}
                        </p>
                      )}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>

              {/* Institutional Initiatives */}
              <AccordionItem
                value="institutional"
                id="institutional"
                className="border border-border/40 rounded-sm px-5 md:px-7 py-4 md:py-5"
              >
                <AccordionTrigger className="py-0 hover:no-underline group">
                  <h3 className="font-serif text-base md:text-lg text-foreground group-hover:text-foreground/80 transition-colors text-left">
                    Institutional Initiatives
                  </h3>
                </AccordionTrigger>

                <AccordionContent className="pt-5 pb-0 space-y-5">
                  {institutionalActivities.institutional.map((item, idx) => (
                    <div key={idx} className="pb-5 border-b border-border/20 last:border-0 last:pb-0">
                      <p className="text-xs font-medium mb-1" style={{ color: '#5C4A6B' }}>
                        {item.role}
                      </p>
                      <p className="text-sm md:text-base text-foreground">
                        {item.title}{item.details ? ` — ${item.details}` : ''}
                      </p>
                      {item.organization && (
                        <p className="type-meta mt-1">
                          {item.organization}{item.date ? ` · ${item.date}` : ''}
                        </p>
                      )}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>

              {/* Community Engagement */}
              <AccordionItem
                value="community-engagement"
                id="community-engagement"
                className="border border-border/40 rounded-sm px-5 md:px-7 py-4 md:py-5"
              >
                <AccordionTrigger className="py-0 hover:no-underline group">
                  <h3 className="font-serif text-base md:text-lg text-foreground group-hover:text-foreground/80 transition-colors text-left">
                    Community Engagement
                  </h3>
                </AccordionTrigger>

                <AccordionContent className="pt-5 pb-0 space-y-5">
                  {institutionalActivities.community.map((item, idx) => (
                    <div key={idx} className="pb-5 border-b border-border/20 last:border-0 last:pb-0">
                      <p className="text-xs font-medium mb-1" style={{ color: '#5C4A6B' }}>
                        {item.role}
                      </p>
                      {item.title && (
                        <p className="text-sm md:text-base text-foreground mb-1">
                          {item.title}
                        </p>
                      )}
                      {item.organization && (
                        <p className="type-meta">
                          {item.organization}{item.date ? ` · ${item.date}` : ''}
                        </p>
                      )}
                      {item.details && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.details}
                        </p>
                      )}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* SECTION 5: Contact */}
          <ContactSection />
        </div>
      </main>
    </div>
  )
}
