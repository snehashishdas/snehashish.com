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

export const metadata = {
  title: "Podcasts & Conversations",
  description: "Curated podcast conversations exploring themes of caste, queerness, social movements, and anti-caste thought.",
  alternates: { canonical: "/podcasts" },
}

const conversations = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/podcast%201-OsNMZadcIUbVMlPrUoo7Gdv7Gegdzl.jpg",
    title: "Queerness and Storytelling in India",
    series: "Queerness and Storytelling in India",
    seriesType: "Podcast Series",
    host: "Rajorshi Das",
    episodeNumber: "36",
    date: "September 22, 2024",
    description: "Snehashish Das offers a critique of Western universalism and asks \"us\" to consider why we want to fit Indian icons like Bhimrao Ambedkar and Savitribai Phule into Western categories. They discuss the role of poetry by Kabir as well as interlocutors in their \"field\" to rethink ideas of gender, queerness, desire and subversion. They make a case for hope by referring to how Begumpura exists in the present, and shares their thoughts on appropriation.",
    link: "https://redcircle.com/shows/queerness-and-storytelling-in-india/ep/5135de1f-f43d-49ec-b35e-6284640fcd88",
    citation: "Das, S. (Contributor), & Das, R. (Host). (2024, September 22). \"Episode 36 with Scholar and Writer, Snehashish Das\" [Audio podcast episode]. In Queerness and Storytelling in India. Rajorshi Das.",
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/podcast%202-6gjlbPkQHhDErZ2pw2eCo0OGqC1lXG.jpeg",
    title: "The Spark for a Movement",
    series: "Lights | Camera | Azadi",
    seriesType: "Podcast Series",
    host: "Vandit Jain",
    episodeNumber: "42",
    date: "July 2, 2021",
    description: "Snehashish Das is an Ambedkarite, Ph.D. scholar at JNU, and activist at BAPSA. In this episode, we take a deep dive into understanding the conditions of a movement, how a revolution is slowly built, and the counter-forces to a revolution. The conversation also reflects on Snehashish's journey from a school run by the RSS to JNU, the vocabulary of the Bahujan movement, and its religious context. It further discusses the role of social media in shaping contemporary movements and their future trajectories.",
    link: "https://lightscameraazadi.com/podcast/42-revolution-and-counter-revolution-with-snehashish-das/",
    citation: "Das, S. (Contributor), & Jain, V. (Host). (2021, July 2). \"The Spark for a Movement with Snehashish Das\" (No. 42) [Audio podcast episode]. In Lights | Camera | Azadi. Vandit Jain.",
  },
]

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
          <section className="pb-28 md:pb-40">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-16 tracking-wide">
              Featured Conversations
            </h2>

            <div className="space-y-24 md:space-y-32">
              {conversations.map((conversation, idx) => (
                <article key={conversation.id} className="space-y-8">
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
