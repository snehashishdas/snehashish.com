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
  researchArticles,
  bookReviews,
  creativeWorks,
  publicScholarshipByYear,
} from "@/lib/content/publications"

export const metadata = {
  title: "Publications",
  description: "Journal publications, creative works, and public scholarship by Snehashish Das.",
  alternates: { canonical: "/publications" },
}

export default function PublicationsPage() {
  const years = Object.keys(publicScholarshipByYear)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <div className="min-h-screen flex flex-col" style={{ ['--page-accent' as keyof CSSProperties]: 'var(--color-research-indigo)' } as CSSProperties}>
      <SiteNav />
      <div className="h-[3px] w-full bg-page-accent" aria-hidden="true" />

      <main className="flex-1">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
          {/* Page Title */}
          <header className="py-20 md:py-28 border-b border-border">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight">
              Publications
            </h1>
          </header>

          {/* SECTION 1: Journal Publications */}
          <section className="py-28 md:py-40 border-b border-border">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-16 tracking-wide">
              Journal Publications
            </h2>

            <Accordion type="single" collapsible className="space-y-6">
              {/* Subsection A: Research Articles */}
              <div id="research-articles">
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-6">
                  Research Articles
                </h3>
                <div className="space-y-6">
                  {researchArticles.map((article, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`research-${idx}`}
                      className="border border-border/40 rounded-sm px-6 md:px-8 py-6 md:py-8 hover:border-foreground/20 transition-colors duration-200"
                    >
                      <AccordionTrigger className="py-0 hover:no-underline group">
                        <div className="text-left">
                          <h4 className="font-serif text-lg md:text-xl text-foreground group-hover:text-foreground/80 transition-colors mb-2 leading-snug">
                            {article.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {article.journal
                              ? article.volume
                                ? article.year
                                  ? `${article.author} · ${article.journal}, ${article.volume}(${article.issue}), ${article.year}`
                                  : `${article.author} · ${article.journal}, ${article.volume}(${article.issue})`
                                : `${article.author} · ${article.journal}`
                              : article.author}
                          </p>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="pt-8 pb-0 space-y-6">
                        <div>
                          {article.journal && article.volume && article.year && article.pages && (
                            <p className="text-sm md:text-base text-foreground/75 leading-relaxed mb-6">
                              <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Citation:</span>{" "}
                              {article.author}. "{article.title}." <em>{article.journal}</em> {article.volume}, no. {article.issue} ({article.year}): {article.pages}.
                            </p>
                          )}

                          {/* Abstract Accordion */}
                          <Accordion type="single" collapsible>
                            <AccordionItem
                              value="abstract"
                              className="border border-border/30 px-4 md:px-6 py-4"
                            >
                              <AccordionTrigger className="py-0 hover:no-underline text-sm md:text-base">
                                <span className="text-foreground font-medium">Abstract</span>
                              </AccordionTrigger>
                              <AccordionContent className="pt-6 pb-0">
                                <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
                                  {article.abstract}
                                </p>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </div>

                        <div className="flex gap-3 pt-2">
                          <a
                            href={article.doi ?? article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="chip-link"
                          >
                            {article.doi ? "DOI" : "View Publication"}
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </div>
              </div>

              {/* Subsection B: Book Reviews */}
              <div id="book-reviews" className="pt-8 md:pt-12">
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-6">
                  Book Reviews
                </h3>
                <div className="space-y-6">
                  {bookReviews.map((review, idx) => (
                    <div
                      key={idx}
                      className="border border-border/40 rounded-sm px-6 md:px-8 py-6 md:py-8 hover:border-foreground/20 transition-colors duration-200"
                    >
                      <h4 className="font-serif text-lg md:text-xl text-foreground mb-2 leading-snug">
                        {review.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        <em>{review.journal}</em> {review.volume}({review.issue}), {review.year}
                      </p>
                      <a
                        href={review.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="chip-link"
                      >
                        DOI
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </Accordion>
          </section>

          {/* SECTION 2: Creative Works */}
          <section id="creative-works" className="py-28 md:py-40 border-b border-border">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-16 tracking-wide">
              Creative Works
            </h2>

            <div className="space-y-8">
              {creativeWorks.map((work, idx) => (
                <div
                  key={idx}
                  className="border border-border/40 rounded-sm px-6 md:px-8 py-8 md:py-10 hover:border-foreground/20 transition-colors duration-200"
                >
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
                      {work.type} · {work.year}
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 leading-snug">
                      {work.title}
                    </h3>
                  </div>

                  <div className="space-y-3 text-sm md:text-base text-foreground/75 mb-6">
                    <p>
                      <span className="font-medium">Published in:</span> <em>{work.published}</em>
                    </p>
                    <p>
                      <span className="font-medium">Edited by:</span> {work.editors.join(", ")}
                    </p>
                    {work.isbn && (
                      <p>
                        <span className="font-medium">ISBN:</span> {work.isbn.join(", ")}
                      </p>
                    )}
                  </div>

                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chip-link"
                  >
                    View Publication
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: Public Scholarship */}
          <section id="public-scholarship" className="py-28 md:py-40 border-b border-border">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-16 tracking-wide">
              Public Scholarship
            </h2>

            <Accordion type="single" collapsible className="space-y-6">
              {years.map((year) => (
                <AccordionItem
                  key={year}
                  value={`year-${year}`}
                  className="border border-border/40 rounded-sm px-6 md:px-8 py-6 md:py-8"
                >
                  <AccordionTrigger className="py-0 hover:no-underline group flex-col items-start gap-4">
                    <div className="text-left">
                      <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-foreground/80 transition-colors mb-3">
                        {year}
                      </h3>
                      <div className="space-y-2">
                        {publicScholarshipByYear[year].map((article, idx) => (
                          <div key={idx} className="space-y-1">
                            <p className="font-serif text-base md:text-lg text-foreground leading-snug">
                              {article.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <em>— {article.publication}</em>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pt-8 pb-0">
                    <div className="space-y-8">
                      {publicScholarshipByYear[year].map((article, idx) => (
                        <div key={idx} className="space-y-3">
                          <a
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-serif text-base md:text-lg text-foreground hover:text-foreground/70 transition-colors block leading-snug"
                          >
                            {article.title}
                          </a>
                          <p className="text-sm text-muted-foreground">
                            <em>{article.publication}</em>
                          </p>
                          <a
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="chip-link"
                          >
                            Read Article
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Contact Section */}
          <ContactSection />
        </div>
      </main>
    </div>
  )
}
