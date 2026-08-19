// Content for the Community page. The page component renders directly from
// these exports, and the search index is generated from this same file
// (see scripts/generate-search-index.mjs).

export const panelThemes = [
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

export const communityEducationIntro =
  'Between 2016 and 2018, I participated in and coordinated community-based educational initiatives in Jharkhand and Chhattisgarh, working with residential schools, state institutions, and grassroots educational programmes, working with schools with students from Particularly Vulnerable Tribal Group (PVTG) backgrounds.'

export const collaborators = ['Jean Drèze', 'Reetika Khera', 'Apurva Bamezai', 'Aakash Ranjan', 'Rahee S G']

export const communityEducationPrograms = [
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

export const institutionalActivities = {
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

// ─── Unified archive entries for "Advocacy, Training, Workshops & Conventions"
// `details` is plain data (a single paragraph, or a list of labelled fields)
// rather than JSX, so this file stays plain data that both the page and the
// search-index generator can read directly.
export type ArchiveEntryDetail = { label: string; value: string }

export type ArchiveEntry = {
  year: number
  id: string
  title: string
  role: string
  meta: string // date · location
  details: string | ArchiveEntryDetail[]
}

export const archiveEntries: ArchiveEntry[] = [
  {
    year: 2016,
    id: 'internship-napm',
    title: 'National Alliance of People\'s Movements (NAPM), New Delhi',
    role: 'Field Intern',
    meta: 'December 2016 · New Delhi',
    details: [
      { label: 'Focus', value: 'Housing rights and anti-eviction advocacy' },
      { label: 'Role', value: 'Supported the Kathputli Colony resistance movement against forced demolition' },
    ],
  },
  {
    year: 2016,
    id: 'workshop-rtf',
    title: '6th National Convention of Right to Food Campaign',
    role: 'Participant & Volunteer',
    meta: '23rd–25th September 2016 · Ranchi',
    details: 'Held in Ranchi (23rd–25th September 2016)',
  },
  {
    year: 2016,
    id: 'internship-ashirvad',
    title: 'Ashirvad NGO, East Sikkim',
    role: 'Experiential Learning',
    meta: 'May 2016 (3 days) · East Sikkim',
    details: [
      { label: 'Focus', value: 'Socioeconomic-cultural study of Pakyong district communities' },
      { label: 'Role', value: 'Learn about livelihoods and local traditions' },
    ],
  },
  {
    year: 2015,
    id: 'internship-gandhi',
    title: 'Gandhi Youth Camp, Puri, Odisha',
    role: 'Participant',
    meta: 'March 2015 (5-day residential programme) · Puri, Odisha',
    details: [
      { label: 'Focus', value: 'Grassroots development training through fieldwork' },
      { label: 'Organizers', value: 'Gandhi Bichar Abhiyan & Gandhi Peace Centre' },
      { label: 'Venue', value: 'Gopabandhu Daridra Narayan Seva Sangh, Sakhigopal' },
    ],
  },
  {
    year: 2017,
    id: 'workshop-gender-sexuality',
    title: 'Workshop on "Gender and Sexuality, Sexual Health, Sexual Violence and Related Laws"',
    role: 'Participant',
    meta: '18th–19th March 2017 · Guwahati',
    details: 'Conducted by the Foundation for Social Transformation, Guwahati (18th–19th March 2017)',
  },
  {
    year: 2017,
    id: 'workshop-himalayan',
    title: 'Eastern Himalayan Naturenomics Forum',
    role: 'Rapporteur',
    meta: '2nd–3rd November 2017 · Guwahati, Assam',
    details: 'Organized by the Balipara Foundation, Guwahati, Assam (2nd–3rd November 2017)',
  },
]
