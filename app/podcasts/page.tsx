import type { CSSProperties } from 'react'
import { SiteNav } from "@/components/site-nav"
import { ContactSection } from "@/components/contact-section"
import Image from "next/image"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { conversations } from "@/lib/content/podcasts"

export const metadata = {
  title: "Podcasts & Conversations",
  description: "Curated podcast conversations exploring themes of caste, queerness, social movements, and anti-caste thought.",
  alternates: { canonical: "/podcasts" },
}

export default function PodcastsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background" style={{ ['--page-accent' as keyof CSSProperties]: 'var(--color-research-forest)' } as CSSProperties}>
      <SiteNav />
      <div className="h-[3px] w-full bg-page-accent" aria-hidden="true" />

      <main className="flex-1">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
          {/* Page Title */}
          <div className="py-28 md:py-40">
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground">
              Podcasts & Conversations
            </h1>
          </div>

          {/* Featured Conversations */}
          <section id="featured-conversations" className="pb-28 md:pb-40">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-16 tracking-wide">
              Featured Conversations
            </h2>

            <div className="space-y-24 md:space-y-32">
              {conversations.map((conversation, idx) => (
                <article key={conversation.id} id={`conversation-${conversation.id}`} className="space-y-8">
                  {/* Conversation Grid: Image + Content */}
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start ${idx % 2 === 1 ? 'md:grid-cols-2 md:[&>:first-child]:order-2 md:[&>:nth-child(2)]:order-1' : ''}`}>
                    {/* Image */}
                    <div className="relative w-full aspect-square rounded-sm overflow-hidden bg-foreground/5 flex items-center justify-center">
                      <Image
                        src={conversation.image}
                        alt={conversation.title}
                        fill
                        className="object-contain"
                        quality={90}
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-6 md:space-y-8 flex flex-col justify-start">
                      {/* Primary Title */}
                      <div>
                        <h3 className="font-serif text-3xl md:text-4xl text-foreground leading-snug mb-4">
                          {conversation.title}
                        </h3>

                        {/* Series Name */}
                        <p className="text-base md:text-lg text-foreground/75 font-light">
                          {conversation.series}
                        </p>
                      </div>

                      {/* Host & Metadata */}
                      <div className="space-y-2">
                        <p className="text-sm text-foreground/70">
                          Hosted by {conversation.host}
                        </p>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground">
                          Episode {conversation.episodeNumber} • {conversation.date}
                        </p>
                      </div>

                      {/* Description */}
                      <div>
                        <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
                          {conversation.description}
                        </p>
                      </div>

                      {/* Listen Button */}
                      <div className="pt-2">
                        <a
                          href={conversation.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-rule text-sm"
                        >
                          Listen Now
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>

                      {/* Academic Citation Accordion */}
                      <div className="pt-4">
                        <Accordion type="single" collapsible>
                          <AccordionItem 
                            value={`citation-${conversation.id}`}
                            className="border border-border/40 rounded-sm px-4 py-3 hover:border-foreground/20 transition-colors"
                          >
                            <AccordionTrigger className="py-0 hover:no-underline">
                              <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                                Academic Citation
                              </p>
                            </AccordionTrigger>
                            <AccordionContent className="pt-4 pb-0">
                              <p className="text-xs md:text-sm text-foreground/75 leading-relaxed">
                                {conversation.citation}
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </div>

                  {/* Divider between conversations */}
                  {idx < conversations.length - 1 && (
                    <div className="border-t border-border/40" />
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <ContactSection />
        </div>
      </main>
    </div>
  )
}
