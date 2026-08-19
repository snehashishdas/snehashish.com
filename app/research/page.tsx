import type { CSSProperties } from 'react'
import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { ContactSection } from '@/components/contact-section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  introText,
  researchThemes,
  teachingExperience,
  fieldExperiences,
  professionalActivities,
} from '@/lib/content/research'

export const metadata: Metadata = {
  title: 'Research & Academic Engagement',
  description:
    'Conference presentations, teaching, fieldwork, and professional activities of Snehashish Das across caste, anti-caste movements, religion, gender, and sociological theory.',
  alternates: { canonical: '/research' },
}

export default function ResearchPage() {
  return (
    <>
      <SiteNav />
      <div className="min-h-screen bg-background" style={{ ['--page-accent' as keyof CSSProperties]: 'var(--color-research-bronze)' } as CSSProperties}>
      <div className="h-[3px] w-full bg-page-accent" aria-hidden="true" />
        {/* Hero Section */}
      <section className="py-24 md:py-32 bg-background border-b border-border">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-12 tracking-tight">
            Research & Academic Engagement
          </h1>

          <div className="space-y-6 text-foreground/80 leading-relaxed text-base md:text-lg max-w-3xl">
            <p>
              {introText}
            </p>
          </div>
        </div>
      </section>

      {/* Conference Presentations - Research Themes */}
      <section id="conference-presentations" className="py-28 md:py-40 bg-background border-b border-border">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-16 tracking-wide">
            Conference Presentations
          </h2>

          <Accordion type="single" collapsible className="space-y-6">
            {researchThemes.map((theme) => (
              <AccordionItem 
                key={theme.id} 
                value={theme.id}
                id={theme.id}
                className="border border-border/40 rounded-sm px-6 md:px-8 py-6 md:py-8 hover:border-foreground/20 transition-colors duration-200"
              >
                <AccordionTrigger className="py-0 hover:no-underline group">
                  <h3 className="font-serif text-lg md:text-xl text-foreground text-left leading-snug group-hover:text-foreground/80 transition-colors">
                    {theme.title}
                  </h3>
                </AccordionTrigger>

                <AccordionContent className="pt-8 pb-0 space-y-8">
                  <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
                    {theme.description}
                  </p>

                  {theme.presentations && theme.presentations.length > 0 && (
                    <div className="border-t border-border/20 pt-8 space-y-8">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                        Presentations
                      </p>
                      <ul className="space-y-8">
                        {theme.presentations.map((presentation, idx) => (
                          <li key={idx} className="space-y-3">
                            <p className="font-serif text-base md:text-lg text-foreground leading-snug">
                              {presentation.title}
                            </p>
                            <div className="pl-4 border-l-2 border-border/30 space-y-1 text-xs md:text-sm">
                              <p className="text-foreground/70">{presentation.conference}</p>
                              <p className="text-foreground/70">{presentation.institution}</p>
                              <p className="uppercase tracking-widest text-muted-foreground mt-2">{presentation.date}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Teaching Experience */}
      <section id="teaching-experiences" className="py-28 md:py-40 bg-background border-b border-border">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-16 tracking-wide">
            Teaching Experiences
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {teachingExperience.map((teaching, idx) => (
              <AccordionItem 
                key={idx}
                value={`teaching-${idx}`}
                className="border border-border/40 rounded-sm px-6 md:px-8 py-4 md:py-5 hover:border-foreground/20 transition-colors duration-200"
              >
                <AccordionTrigger className="py-0 hover:no-underline group">
                  <div className="text-left space-y-1">
                    {/* Line 1: Role */}
                    <p className="text-sm md:text-base text-foreground">
                      {teaching.role}
                    </p>
                    
                    {/* Line 2: Course Title */}
                    <p className="text-xs md:text-sm text-foreground/75">
                      {teaching.course.split('(')[0].trim()}
                    </p>
                    
                    {/* Line 3: CSSS, JNU (compact) */}
                    <p className="text-xs text-muted-foreground">
                      {teaching.department}, {teaching.institution}
                    </p>
                    
                    {/* Line 4: Year */}
                    <p className="text-xs text-muted-foreground">
                      {teaching.period}
                    </p>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pt-6 pb-0 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
                      Course Code & Title
                    </p>
                    <p className="text-sm md:text-base text-foreground">
                      {teaching.course}
                    </p>
                  </div>

                  {teaching.courseAnchor && (
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
                        Course Anchor
                      </p>
                      <p className="text-sm md:text-base text-foreground">
                        {teaching.courseAnchor}
                      </p>
                    </div>
                  )}

                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
                      Institution
                    </p>
                    <div className="space-y-1 text-sm md:text-base text-foreground/75">
                      <p>{teaching.department}</p>
                      <p>{teaching.school}</p>
                      <p>{teaching.institution}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Research & Field Experiences */}
      <section id="research-field-experiences" className="py-28 md:py-40 bg-background border-b border-border">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-16 tracking-wide">
            Research & Field Experiences
          </h2>

          <Accordion type="single" collapsible className="space-y-6">
            {fieldExperiences.map((experience, idx) => (
              <AccordionItem 
                key={idx}
                value={`field-${idx}`}
                className="border border-border/40 rounded-sm px-6 md:px-8 py-6 md:py-8 hover:border-foreground/20 transition-colors duration-200"
              >
                <AccordionTrigger className="py-0 hover:no-underline group">
                  <div className="text-left">
                    <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-foreground/80 transition-colors mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {experience.year} {experience.location && `• ${experience.location}`} {experience.locations && `• ${experience.locations.join(' & ')}`}
                    </p>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pt-8 pb-0 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
                      {experience.type}
                    </p>
                  </div>

                  {experience.fieldSites && (
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
                        Field Sites
                      </p>
                      <ul className="space-y-1 text-sm md:text-base text-foreground/75">
                        {experience.fieldSites.map((site, i) => (
                          <li key={i}>{site}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {experience.role && (
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
                        Role
                      </p>
                      <p className="text-sm md:text-base text-foreground/75">
                        {experience.role}
                      </p>
                    </div>
                  )}

                  {experience.supervisedBy && (
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
                        Supervised By
                      </p>
                      <ul className="space-y-1 text-sm md:text-base text-foreground/75">
                        {experience.supervisedBy.map((person, i) => (
                          <li key={i}>{person}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {experience.guidedBy && (
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
                        Guided By
                      </p>
                      <p className="text-sm md:text-base text-foreground/75">
                        {experience.guidedBy}
                      </p>
                    </div>
                  )}

                  {experience.focus && (
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
                        Research Focus
                      </p>
                      <ul className="space-y-1 text-sm md:text-base text-foreground/75">
                        {experience.focus.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Professional Activities */}
      <section id="professional-activities" className="py-28 md:py-40 bg-background border-b border-border">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-16 tracking-wide">
            Professional Activities
          </h2>

          <Accordion type="single" collapsible className="space-y-6">
            {professionalActivities.map((activity) => (
              <AccordionItem 
                key={activity.id}
                value={activity.id}
                id={activity.id}
                className="border border-border/40 rounded-sm px-6 md:px-8 py-6 md:py-8 hover:border-foreground/20 transition-colors duration-200"
              >
                <AccordionTrigger className="py-0 hover:no-underline group">
                  <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-foreground/80 transition-colors">
                    {activity.title}
                  </h3>
                </AccordionTrigger>

                <AccordionContent className="pt-8 pb-0 space-y-6">
                  {activity.content.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <p className="text-sm md:text-base text-foreground font-medium">
                        {item.label}
                      </p>
                      <div className="space-y-1 text-sm text-foreground/75">
                        {item.details && (
                          <p>{item.details}</p>
                        )}
                        {item.issn && (
                          <p>{item.issn}</p>
                        )}
                        {item.date && (
                          <p className="uppercase tracking-widest text-muted-foreground text-xs mt-2">{item.date}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

        {/* Contact */}
        <ContactSection />
      </div>
    </>
  )
}
