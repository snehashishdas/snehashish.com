import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { ContactSection } from '@/components/contact-section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: 'Research & Academic Engagement',
  description:
    'Conference presentations, teaching, fieldwork, and professional activities of Snehashish Das across caste, anti-caste movements, religion, gender, and sociological theory.',
  alternates: { canonical: '/research' },
}

const researchThemes = [
  {
    id: 'folk-culture',
    title: 'Folk Culture, Probable Pasts, Historical Reconstruction & Masculinities',
    description: 'These interwoven subjects of study are discussed in multiple papers presented on different platforms. These works examine, broadly, how anti-caste communities remember, reconstruct, and transmit historical consciousness through myths, oral traditions, ritual narratives, folk performances, and cultural practices. They investigate the relationship between historical ontology, anti-caste movements, emancipation, and gender (de)formation. Based on my PhD work, I develop theoretical and methodological frameworks for reconstructing "probable pasts" and for understanding masculinity as something historically evolving or being reinvented through the discourse of history.',
    presentations: [
      {
        title: 'Can Folk Myths Be Tools of Historical Reconstruction? A Study of the Ganda Community in Western Odisha',
        conference: 'ISA RC22 Mid-Term Conference',
        institution: 'South Asian University',
        date: 'February 5, 2026',
      },
      {
        title: 'Reconstructing the Buddhist Past from Folk Myths: A Study of the Ganda Anti-Caste Community in Western Odisha',
        conference: 'American Academy of Religion Annual Meeting',
        institution: 'Boston, USA',
        date: 'November 23, 2025',
      },
      {
        title: 'Citation of \'Probable Pasts\' as Performative Scripts for Masculinities: Problems in Reading Culture-Text in an Anti-Caste Community',
        conference: 'PhD Research Scholars\' Seminar',
        institution: 'Centre for the Study of Social Systems (CSSS), Jawaharlal Nehru University',
        date: 'December 18, 2024',
      },
    ],
  },
  {
    id: 'anti-caste-pedagogy',
    title: 'Anti-Caste Movement as Public Pedagogy & Emancipation',
    description: 'This research develops theoretical frameworks for understanding anti-caste movements as pedagogical spaces of becoming and emancipation. It examines how social movements, as means, through public pedagogy, lead people to strive for change. I argue that, even though movements pursue certain purposes and ends, they cannot be reduced to or understood completely teleologically. Based on my PhD work, I understand change or becoming philosophically and sociologically and engage with various debates regarding the study of causality, alongside structure-agency and movement.',
    presentations: [
      {
        title: 'Theoretical & Philosophical Framework for Studying Anti-Caste Movement',
        conference: 'Research Scholars\' Symposium',
        institution: 'Jawaharlal Nehru University',
        date: 'April 10, 2026',
      },
    ],
  },
  {
    id: 'ai-caste',
    title: 'AI, Caste and Anti-Caste Studies',
    description: 'This body of work explores how emerging forms of knowledge and technology, especially different AI models, operate within the existing paradigm of disinformation on caste and anti-caste studies. It examines how the reproduction of such disinformation, and the emergence of a new age of reinventing falsehood as truth, leads to problems in anti-caste studies and practice. This work deals with how knowledge production on caste and anti-caste studies is growing redundantly on the basis of false premises, which AI was expected to solve but has instead reinforced. I argue that AI is modelled to reproduce dominant human errors, agendas, and disinformation rather than verification and correction.',
    presentations: [
      {
        title: 'Artificial Intelligence and the Problem of Caste and Anti-Caste Studies',
        conference: 'Research Scholars\' Symposium',
        institution: 'Jawaharlal Nehru University',
        date: 'April 9, 2025',
      },
    ],
  },
  {
    id: 'indian-sociology',
    title: 'Indian Sociology and a Paradigm Shift',
    description: 'The social sciences are often considered not to possess a paradigm in the way the natural sciences do. This project examines a century of Indian sociology, identifying five major schools that have dominated the discipline and analysing how they collectively constitute a paradigm by forming a "Perspective from Above." It further investigates an emerging school—the "Perspective from Below"—through the works of A. Ayyappan, C. Parvathamma, Nandu Ram, T. K. Oommen, and Vivek Kumar, among others, which, though marginalised in dominant discourse, has been transforming the methodology of the discipline.',
    presentations: [
      {
        title: 'Different Shades of Sociology and a Hundred Years of Indian Sociology',
        conference: 'Research Scholars\' Symposium',
        institution: 'Centre for the Study of Social Systems (CSSS), Jawaharlal Nehru University',
        date: 'February 16, 2025',
      },
    ],
  },
  {
    id: 'religion-secularism',
    title: 'Religion, Secularism & the Case of the Hindu',
    description: 'A parallel theoretical project examining the Ambedkar-Gandhi debate on Hinduism and its tolerance of multiple truths. It further examines the philosophical foundations of anti-caste politics, which understands such tolerance as a disguised proliferation of inequality through appropriation and the diminution of truth value. This area examines the methodological complementarity between secularism and the Hindu. This work also deals with multiple philosophical and political debates around Indian secularism and the Uniform Civil Code, among others. This work proposes that India needs a constitutionally embedded and Buddhist-coded ideal of fraternity as an alternative framework, which should not be confused with secularism. This discussion leads to an examination of its implications for democracy, citizenship, and emancipation.',
    presentations: [
      {
        title: 'Religious Logics and Secular Anti-Logics: The Case of the Hindu',
        conference: 'ISA RC22 Mid-Term Conference',
        institution: 'South Asian University',
        date: 'February 6, 2026',
      },
      {
        title: 'Is the Hindu Secular?: Fraternity vis-à-vis the Crisis in Truth and Enslaved Subjecthood',
        conference: 'Graduate Symposium',
        institution: 'University of Toronto',
        date: 'April 20, 2023',
      },
      {
        title: 'The Ambedkar-Gandhi Debate on Secular Hinduism, and the Use of Philosophical Logic',
        conference: 'Research Scholars\' Seminar',
        institution: 'Jawaharlal Nehru University',
        date: 'April 10, 2023',
      },
      {
        title: 'The Secular and the Hindu: The Crisis in Philosophy and Technocratic Citizenship',
        conference: 'Inter-University Students\' Seminar',
        institution: 'Jamia Millia Islamia',
        date: 'February 15, 2023',
      },
    ],
  },
]

const teachingExperience = [
  {
    role: 'Teaching Assistant',
    course: 'Methodology of Social Sciences (SS451N)',
    courseAnchor: 'Prof. Vivek Kumar',
    department: 'Centre for the Study of Social Systems (CSSS)',
    school: 'School of Social Sciences (SSS)',
    institution: 'Jawaharlal Nehru University',
    period: '2022–2023',
  },
  {
    role: 'Remedial Class Teacher',
    course: 'Methodology of Social Sciences (SS451N)',
    department: 'Centre for the Study of Social Systems (CSSS)',
    school: 'School of Social Sciences (SSS)',
    institution: 'Jawaharlal Nehru University',
    period: '2023',
  },
]

const fieldExperiences = [
  {
    title: 'The Deformation of Masculinities, and the Anti-Caste Movement in the Western Regions of Odisha',
    type: 'Doctoral Fieldwork',
    year: '2024',
    location: 'Balangir, Odisha',
    fieldSites: ['Kurul Village', 'Malgodampada Urban Slum'],
    focus: ['Anti-Caste Movement', 'Deformation of Masculinities'],
  },
  {
    title: 'National Food Security Act Survey',
    type: 'Field Research & Data Collection',
    year: '2016',
    locations: ['Sundargarh District, Odisha', 'Balangir District, Odisha'],
    role: 'Field Volunteer for Data Collection and Evaluation',
    supervisedBy: ['Prof. Jean Drèze', 'Prof. Reetika Khera'],
    focus: ['Evaluation of the National Food Security Act Through Field-Based Survey Research'],
  },
  {
    title: 'Cast(e)ing Queers',
    type: 'Undergraduate Dissertation',
    year: '2018',
    institution: 'Tata Institute of Social Sciences, Guwahati',
    guidedBy: 'Dr. Santhosh M. R.',
    focus: ['Intersectional Analysis of Caste and Queer Identities'],
  },
]

const professionalActivities = [
  {
    id: 'memberships',
    title: 'Memberships',
    content: [
      {
        label: 'American Academy of Religion',
        details: 'Student Membership',
        date: 'April 10, 2025 – April 30, 2027',
      },
    ],
  },
  {
    id: 'awards',
    title: 'Awards & Qualifications',
    content: [
      {
        label: 'Qualified UGC-NET (Lectureship)',
        date: 'December 2019',
      },
    ],
  },
  {
    id: 'peer-review',
    title: 'Peer Reviewing Experience',
    content: [
      {
        label: 'ShodhKosh: Journal of Visual and Performing Arts',
        details: 'A UGC-CARE Listed Journal',
        issn: 'ISSN: 2582-7472',
        date: 'October 2023',
      },
    ],
  },
]

export default function ResearchPage() {
  return (
    <>
      <SiteNav />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
      <section className="py-24 md:py-32 bg-background border-b border-border">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-12 tracking-tight">
            Research & Academic Engagement
          </h1>

          <div className="space-y-6 text-foreground/80 leading-relaxed text-base md:text-lg max-w-3xl">
            <p>
              My research engages questions of caste, anti-caste movements, religion, gender, historical reconstruction, and sociological theory. The projects presented below represent interconnected strands of inquiry developed through fieldwork, theoretical reflection, teaching, and academic engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Conference Presentations - Research Themes */}
      <section className="py-28 md:py-40 bg-background border-b border-border">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-16 tracking-wide">
            Conference Presentations
          </h2>

          <Accordion type="single" collapsible className="space-y-6">
            {researchThemes.map((theme) => (
              <AccordionItem 
                key={theme.id} 
                value={theme.id}
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
      <section className="py-28 md:py-40 bg-background border-b border-border">
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
      <section className="py-28 md:py-40 bg-background border-b border-border">
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
      <section className="py-28 md:py-40 bg-background border-b border-border">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-16 tracking-wide">
            Professional Activities
          </h2>

          <Accordion type="single" collapsible className="space-y-6">
            {professionalActivities.map((activity) => (
              <AccordionItem 
                key={activity.id}
                value={activity.id}
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
