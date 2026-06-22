import { SiteNav } from "@/components/site-nav"
import { ContactSection } from "@/components/contact-section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata = {
  title: "Publications",
  description: "Journal publications, creative works, and public scholarship by Snehashish Das.",
  alternates: { canonical: "/publications" },
}

export default function PublicationsPage() {
  const researchArticles = [
    {
      title: "Fracturing the Historical Continuity on Truth: Jotiba Phule in the Quest for Personhood of Shudras",
      author: "Snehashish Das",
      journal: "CASTE: A Global Journal on Social Exclusion",
      volume: "2",
      issue: "1",
      year: "2021",
      pages: "30–46",
      doi: "https://doi.org/10.26812/caste.v2i1.265",
      abstract: "Anti-caste traditions in India work to understand and examine the idea of personhood which the majority in India is deprived of by virtue of being born in the lower rungs of the caste hierarchy. This paper examines the historical continuity in Brahminism and the rupture Jotiba Phule presents to it through his art and activism which serves to disturb the regular flow of singular continuity of what is perceived as history and historiography. Jotiba's quest is for finding the essence / personhood of, what Butler calls, a 'precarious subject' and recognizing that precarious subject – the Shudra, as a subject of history. But the personhood of this precarious subject is never a complete personhood. Therefore, Jotiba attempts to unveil the path towards achieving complete personhood which is embedded in reaffirming the lost or concealed truth – by discontinuing the historical flow of the social structure of caste and establishing a new subject rising out of crisis in social structure in history. I have chosen two works from Jotiba's works as new methodological tools for history writing and historical criticism, and made hermeneutical and phenomenological readings of both. The works are his poem Kulambin (a peasant woman), and the Satyashodhak (truth-seeker) marriage as the public performance of protest, as they are both the essential and the mundane to his life, which exemplifies the truth Jotiba followed and established an organization, Satyashodhak Samaj (Society of Truth Seekers), as a testament to it.",
    },
  ]

  const bookReviews = [
    {
      title: "Stan Swamy, I Am Not a Silent Spectator: Why Truth Has Become So Bitter, Dissent So Intolerable, Justice So Out of Reach",
      journal: "Social Change",
      volume: "53",
      issue: "4",
      year: "2023",
      doi: "https://doi.org/10.1177/00490857231203426",
    },
    {
      title: "Vivek Kumar, Decoding Ambedkar: Ideas of Nation and Nation Building",
      journal: "International Sociology",
      volume: "40",
      issue: "5",
      year: "2025",
      doi: "https://doi.org/10.1177/02685809251395395",
    },
  ]

  const creativeWorks = [
    {
      type: "Speculative Fiction",
      title: "Death Of A Giant In A Godless Country",
      published: "The Blaft Book of Anti-Caste SF",
      editors: ["R. T. Samuel", "Rakesh K.", "Rashmi R. D."],
      year: "2024",
      isbn: ["9789380636726", "9789380636733"],
      link: "https://www.blaft.com/products/the-blaft-book-of-anti-caste-sf",
    },
    {
      type: "Poem",
      title: "Everyone Says",
      published: "The World That Belongs To Us: An Anthology of Queer Poetry from South Asia",
      editors: ["Aditi Angiras", "Akhil Katyal"],
      year: "2020",
      isbn: ["9353574579", "9789353574574"],
      link: "https://harpercollins.co.in/product/the-world-that-belongs-to-us/",
    },
  ]

  const publicScholarshipByYear: Record<number, Array<{
    title: string
    publication: string
    link: string
  }>> = {
    2025: [
      {
        title: "A Masala Khichdi Called Dhadak 2",
        publication: "Round Table India",
        link: "https://www.roundtableindia.co.in/a-masala-khichdi-called-dhadak-2/",
      },
    ],
    2023: [
      {
        title: "Ambedkarite Questions for Neeraj Ghaywan's The Heart Skipped A Beat",
        publication: "Round Table India",
        link: "https://www.roundtableindia.co.in/ambedkarite-questions-for-neeraj-ghaywans-the-heart-skipped-a-beat/",
      },
      {
        title: "Dalit Policing and Policing Dalits: A Shift in Hindi Cinema",
        publication: "Round Table India",
        link: "https://www.roundtableindia.co.in/dalit-policing-and-policing-dalits-a-shift-in-hindi-films/",
      },
      {
        title: "Dhondiba's Challenge: Restaging Gulamgiri",
        publication: "Proseterity",
        link: "https://www.proseterity.com/dhondiba-s-challenge",
      },
    ],
    2022: [
      {
        title: "Caste Hindu Nationalism and Trans Citizenship",
        publication: "Mavelinadu",
        link: "https://mavelinaducollective.com/caste-hindu-nationalism-trans-citizenship-snehashish-das/",
      },
    ],
    2021: [
      {
        title: "Memories of the Father of Our Movements, Father Stan Swamy",
        publication: "Economic & Political Weekly",
        link: "https://www.epw.in/journal/2021/29/postscript/memories-father-our-movements-father-stan-swamy.html",
      },
      {
        title: "Educators for All Time: Jotiba, Savitri and Fatima",
        publication: "Aura",
        link: "https://auramag.in/educators-for-all-time-jotiba-savitri-and-fatima/",
      },
    ],
    2020: [
      {
        title: "The Essence of Jyotiba Phule's Revolution Lay in His Rationality",
        publication: "The Wire",
        link: "https://thewire.in/caste/jyotiba-phule-philosophy",
      },
      {
        title: "A Universal Mother and the Secular Others",
        publication: "Maktoob",
        link: "#",
      },
    ],
    2018: [
      {
        title: "#InjusTISS: The TISS Student Struggle Against Cutting Financial Aid for SC, ST and OBC Students",
        publication: "Feminism in India",
        link: "https://feminisminindia.com/2018/03/01/injustiss-tiss-student-struggle/",
      },
    ],
    2016: [
      {
        title: "JNU Row Brought Up the Politics Behind Defining Nationalism and Its (Mis)Uses",
        publication: "Youth Ki Awaaz",
        link: "https://www.youthkiawaaz.com/2016/03/definitions-of-nationalism/",
      },
      {
        title: "Why I Think Sanskritisation Can't Fight Caste Discrimination in Society",
        publication: "Youth Ki Awaaz",
        link: "https://www.youthkiawaaz.com/2016/07/critique-of-sanskritisation-cannot-end-caste-discrimination/",
      },
    ],
  }

  const years = Object.keys(publicScholarshipByYear)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

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
              <div>
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
                            {article.author} · {article.journal}, {article.volume}({article.issue}), {article.year}
                          </p>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="pt-8 pb-0 space-y-6">
                        <div>
                          <p className="text-sm md:text-base text-foreground/75 leading-relaxed mb-6">
                            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Citation:</span>{" "}
                            {article.author}. "{article.title}." <em>{article.journal}</em> {article.volume}, no. {article.issue} ({article.year}): {article.pages}.
                          </p>

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
                            href={article.doi}
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
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </div>
              </div>

              {/* Subsection B: Book Reviews */}
              <div className="pt-8 md:pt-12">
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
          <section className="py-28 md:py-40 border-b border-border">
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
          <section className="py-28 md:py-40 border-b border-border">
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
