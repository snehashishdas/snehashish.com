import type { CSSProperties } from 'react'
import { SiteNav } from "@/components/site-nav"
import { ContactSection } from "@/components/contact-section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata = {
  title: "Community",
  description: "Community education, panel discussions, internships, workshops, and institutional initiatives by Snehashish Das",
  alternates: { canonical: "/community" },
}

// Theme grouping for panel discussions
const panelThemes = [
  {
    id: 'anti-caste',
    title: 'Anti-Caste Thought & Education',
    color: '#8B6239', // muted bronze
    talks: [
      {
        date: "January 17, 2023",
        role: "Panelist",
        title: "Legacy of Exclusion and Injustice in Higher Education",
        venue: "Ambedkar Study Circle, Atma Ram Sanatan Dharma College, University of Delhi",
      },
      {
        date: "April 21, 2021",
        role: "Web Speaker",
        title: "The Myth of Merit",
        venue: "Proseterity",
      },
      {
        date: "February 12, 2022",
        role: "Panelist",
        title: "Remembering Rohith Vemula",
        venue: "Ambedkar Students' Association, MSF, and Fraternity Movement, TISS Mumbai",
      },
      {
        date: "January 30, 2022",
        role: "Paper Presentation & Discussion",
        title: "Fracturing the Historical Continuity on Truth: Jotiba Phule in the Quest for Personhood of Shudras",
        venue: "OBC United",
      },
      {
        date: "April 8, 2019",
        role: "Panelist",
        title: "Student Discussion on Ambedkar Fortnight-19",
        venue: "Azim Premji University",
      },
      {
        date: "January 30, 2020",
        role: "Panelist",
        title: "Commemorating Rohith Vemula on His Birth Anniversary",
        venue: "Dissenting Voices of LSR, Lady Shri Ram College, University of Delhi",
      },
    ]
  },
  {
    id: 'sociology',
    title: 'Sociology, Politics & Representation',
    color: '#2D5016', // deep forest green
    talks: [
      {
        date: "March 27, 2026",
        role: "Panelist",
        title: "TK Oommen and Paradigm Shift in Indian Sociology",
        event: "Commemorating T.K. Oommen's Legacy: Revisiting Theory, Society and Change in Indian Sociology",
        venue: "Sociological Research Forum, Jawaharlal Nehru University",
      },
      {
        date: "November 13, 2022",
        role: "Panelist",
        title: "Post-Mandal Campuses: Knowledge, Politics, and Representation",
        venue: "Reservation Summit, Fraternity Movement, Kozhikode, Kerala",
      },
    ]
  },
  {
    id: 'literature',
    title: 'Literature, Art & Speculations',
    color: '#3D5A7D', // deep indigo
    talks: [
      {
        date: "January 10, 2025",
        role: "Panelist",
        title: "Anti-Caste Art, Fiction and Speculations",
        venue: "School of Arts & Aesthetics, Jawaharlal Nehru University",
      },
      {
        date: "January 5, 2025",
        role: "Panelist",
        title: "Book Launch: The Blaft Book of Anti-Caste SF",
        venue: "Community Library Project, South Extension, New Delhi",
      },
    ]
  },
  {
    id: 'gender',
    title: 'Gender, Sexuality & Representation',
    color: '#6B2737', // burgundy
    talks: [
      {
        date: "February 4, 2023",
        role: "Panelist",
        title: "LGBTQIA+ Community: Evictions from Socio-Literary Dignity",
        event: "3rd Dalit Literature Festival, Aryabhatta College, University of Delhi",
        venue: "Organized by Ambedkarwadi Lekhak Sangh & Aryabhatta College",
      },
      {
        date: "April 29, 2019",
        role: "Web Speaker",
        title: "Caste Bodies: Deconstructing Gender, Sex, and Sexuality",
        venue: "Point of View, Mumbai",
      },
      {
        date: "March 27, 2019",
        role: "Panelist",
        title: "Gender & Intersectionality",
        venue: "Parivartan—The Gender Forum, Kirori Mal College, University of Delhi",
      },
      {
        date: "October 24, 2018",
        role: "Panelist",
        title: "Who is the 'Me' in #MeToo: The Politics of Representation",
        venue: "Kalaalayam, Jamia Millia Islamia",
      },
      {
        date: "September 20, 2018",
        role: "Panelist",
        title: "Navigating Queer Identities in University Spaces",
        venue: "Women's Development Cell, Lady Shri Ram College, University of Delhi",
      },
      {
        date: "September 28, 2019",
        role: "Speaker",
        title: "Bahujan Mahila Sammelan",
        venue: "Bahujan Sahitya Sangh, Jawaharlal Nehru University",
      },
      {
        date: "January 3, 2020",
        role: "Guest Speaker",
        title: "Savitribai Phule's Birth Anniversary",
        venue: "Apna Radio 96.9 FM, Indian Institute of Mass Communication, New Delhi",
      },
    ]
  },
]

const communityEducationPrograms = [
  {
    year: '2018',
    role: 'Program Coordinator & Volunteer Teacher',
    program: 'Sahpathi 2018',
    period: 'June–July 2018',
    locations: 'Gumla, Latehar, and Lohardaga districts, Jharkhand; Sarguja district, Chhattisgarh',
    partnerOrganizations: 'Department of Welfare, Government of Jharkhand; Department of Tribal & SC Development, Government of Chhattisgarh',
    additionalRole: 'Concurrent teaching at Jobhipat School, Gumla',
    documents: [
      { title: 'Jharkhand Chapter Report', year: '2018', file: '/documents/Sahpathi 2018 Jharkhand.pdf' },
      { title: 'Chhattisgarh Chapter Report', year: '2018', file: '/documents/Sahpathi 2018 Chhattisgarh.pdf' },
    ],
  },
  {
    year: '2017',
    role: 'Volunteer Teacher',
    program: 'Sahpathi 2017',
    period: 'June–July 2017',
    institution: 'Jobhipat Residential School (Adivasi School), Gumla, Jharkhand',
    partnerOrganizations: 'Department of Welfare, Government of Jharkhand',
    documents: [
      { title: 'Sahpathi Project Report', year: '2017', file: '/documents/Sahpathi 2017- Report Final.pdf' },
    ],
  },
  {
    year: '2016',
    role: 'Volunteer Teacher',
    program: 'Road Teachers Programme 2016',
    period: 'June–July 2016',
    institution: 'Jobhipat Residential School (Adivasi School), Gumla, Jharkhand',
    partnerOrganizations: 'Department of Welfare, Government of Jharkhand',
    documents: [
      { title: 'Road Teachers Programme Report', year: '2016', file: '/documents/Road Teachers 2016 FINAL.pdf' },
    ],
  },
]

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

const institutionalActivities = {
  eventManagement: [
    {
      role: 'Program Coordinator',
      title: 'Spegel Social Fest',
      organization: 'TISS Guwahati',
      details: 'Conducted workshops on social entrepreneurship, political cartooning, and applied theatre (2016–2017)',
    },
    {
      role: 'Lead Curator',
      title: 'The Resistance Week',
      organization: 'TISS Guwahati',
      details: 'Organized a week-long program featuring documentary screenings, panel discussions, and art exhibitions (Dec 2017)',
    },
    {
      role: 'Blood Donation Drive Organizer',
      title: 'Blood Donation Drive',
      organization: 'TISS Guwahati',
      date: '2016',
    },
    {
      role: 'Freshers\' Welcome Program Coordinator',
      title: 'Freshers\' Welcome Programme',
      organization: 'TISS Guwahati',
      date: '2017',
    },
  ],
  institutional: [
    {
      role: 'Co-Founding Member',
      title: 'Tubelight—The Alegre World',
      details: 'Theatre Collective, TISS Guwahati',
    },
    {
      role: 'Co-Founding Member',
      title: 'Intuition Study Circle',
      details: 'Discussion forum, TISS Guwahati',
    },
    {
      role: 'Dining Hall Committee Representative',
      organization: 'TISS Guwahati',
      date: '2016–2017',
    },
  ],
  community: [
    {
      role: 'Youth Red Cross Volunteer',
      organization: 'BJB Junior College',
      date: '2013–2015',
      details: 'Organized awareness programs and developmental initiatives',
    },
    {
      role: 'Camp Documentation Lead',
      title: 'International Children\'s Camp',
      date: '2015',
      details: 'Partnered with National Youth Project, Antarbharati and BJEM School, Bhubaneswar; documented a 5-day residential program',
    },
    {
      role: 'Theatre Practitioner',
      details: 'Wrote, directed, and acted in the Odia play Kabata Kholile Pila Dina at BJB Junior College, Bhubaneswar (2014)',
    },
    {
      role: 'Theatre Practitioner',
      details: 'Acted in the Hindi street play Ek Khwab Aaya at Jawaharlal Nehru University (2021)',
    },
    {
      role: 'Theatre Practitioner',
      details: 'Wrote and directed the Hindi street play Dronacharya Ka Angutha at Jawaharlal Nehru University (2023)',
    },
  ],
}

const collaborators = ['Jean Drèze', 'Reetika Khera', 'Apurva Bamezai', 'Aakash Ranjan', 'Rahee S G']

// ─── Unified archive entries for "Advocacy, Training, Workshops & Conventions"
// All entries sorted most-recent → oldest. Year is extracted from each entry
// for grouping. Content is unchanged; only structure and sort order are new.
type ArchiveEntry = {
  year: number
  id: string
  title: string
  role: string
  meta: string // date · location
  details: React.ReactNode
}

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
  // Sorted most-recent → oldest. Year groups are derived from this array.
  const archiveEntries: ArchiveEntry[] = [
    // 2016 — Gandhi Youth Camp (March 2015 but filed under 2015; year below)
    // internship-napm — December 2016
    {
      year: 2016,
      id: 'internship-napm',
      title: 'National Alliance of People\'s Movements (NAPM), New Delhi',
      role: 'Field Intern',
      meta: 'December 2016 · New Delhi',
      details: (
        <div className="space-y-3">
          <div>
            <p className="type-meta mb-1">Focus</p>
            <p className="text-sm md:text-base text-foreground/75">Housing rights and anti-eviction advocacy</p>
          </div>
          <div>
            <p className="type-meta mb-1">Role</p>
            <p className="text-sm md:text-base text-foreground/75">Supported the Kathputli Colony resistance movement against forced demolition</p>
          </div>
        </div>
      ),
    },
    // workshop-rtf — September 2016
    {
      year: 2016,
      id: 'workshop-rtf',
      title: '6th National Convention of Right to Food Campaign',
      role: 'Participant & Volunteer',
      meta: '23rd–25th September 2016 · Ranchi',
      details: (
        <p className="text-sm md:text-base text-foreground/75">Held in Ranchi (23rd–25th September 2016)</p>
      ),
    },
    // internship-ashirvad — May 2016
    {
      year: 2016,
      id: 'internship-ashirvad',
      title: 'Ashirvad NGO, East Sikkim',
      role: 'Experiential Learning',
      meta: 'May 2016 (3 days) · East Sikkim',
      details: (
        <div className="space-y-3">
          <div>
            <p className="type-meta mb-1">Focus</p>
            <p className="text-sm md:text-base text-foreground/75">Socioeconomic-cultural study of Pakyong district communities</p>
          </div>
          <div>
            <p className="type-meta mb-1">Role</p>
            <p className="text-sm md:text-base text-foreground/75">Learn about livelihoods and local traditions</p>
          </div>
        </div>
      ),
    },
    // internship-gandhi — March 2015
    {
      year: 2015,
      id: 'internship-gandhi',
      title: 'Gandhi Youth Camp, Puri, Odisha',
      role: 'Participant',
      meta: 'March 2015 (5-day residential programme) · Puri, Odisha',
      details: (
        <div className="space-y-3">
          <div>
            <p className="type-meta mb-1">Focus</p>
            <p className="text-sm md:text-base text-foreground/75">Grassroots development training through fieldwork</p>
          </div>
          <div>
            <p className="type-meta mb-1">Organizers</p>
            <p className="text-sm md:text-base text-foreground/75">Gandhi Bichar Abhiyan & Gandhi Peace Centre</p>
          </div>
          <div>
            <p className="type-meta mb-1">Venue</p>
            <p className="text-sm md:text-base text-foreground/75">Gopabandhu Daridra Narayan Seva Sangh, Sakhigopal</p>
          </div>
        </div>
      ),
    },
    // workshop-gender-sexuality — March 2017
    {
      year: 2017,
      id: 'workshop-gender-sexuality',
      title: 'Workshop on "Gender and Sexuality, Sexual Health, Sexual Violence and Related Laws"',
      role: 'Participant',
      meta: '18th–19th March 2017 · Guwahati',
      details: (
        <p className="text-sm md:text-base text-foreground/75">Conducted by the Foundation for Social Transformation, Guwahati (18th–19th March 2017)</p>
      ),
    },
    // workshop-himalayan — November 2017
    {
      year: 2017,
      id: 'workshop-himalayan',
      title: 'Eastern Himalayan Naturenomics Forum',
      role: 'Rapporteur',
      meta: '2nd–3rd November 2017 · Guwahati, Assam',
      details: (
        <p className="text-sm md:text-base text-foreground/75">Organized by the Balipara Foundation, Guwahati, Assam (2nd–3rd November 2017)</p>
      ),
    },
  ]

  // Sort most-recent → oldest
  const sortedEntries = [...archiveEntries].sort((a, b) => b.year - a.year)

  // Group by year
  const entriesByYear = sortedEntries.reduce<Record<number, ArchiveEntry[]>>((acc, entry) => {
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
          <section className="mb-28 md:mb-40">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-16 tracking-wide">
              Invited Panel Discussions and Talks (Selected)
            </h2>

            <Accordion type="single" collapsible className="space-y-6">
              {panelThemes.map((theme) => (
                <AccordionItem
                  key={theme.id}
                  value={theme.id}
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
          <section className="mb-28 md:mb-40 border-t border-border pt-28 md:pt-40">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 tracking-wide">
              Community Education & Teaching Initiatives
            </h2>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-12 max-w-3xl">
              Between 2016 and 2018, I participated in and coordinated community-based educational initiatives in Jharkhand and Chhattisgarh, working with residential schools, state institutions, and grassroots educational programmes, working with schools with students from Particularly Vulnerable Tribal Group (PVTG) backgrounds.
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
          <section className="mb-28 md:mb-40 border-t border-border pt-28 md:pt-40">
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
                          {entry.details}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: Diary's Entries, don't ask */}
          <section className="border-t border-border pt-28 md:pt-40">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-16 tracking-wide">
              Diary's Entries, don't ask
            </h2>

            <Accordion type="single" collapsible className="space-y-2">
              {/* Event Management & Programming */}
              <AccordionItem
                value="event-management"
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
