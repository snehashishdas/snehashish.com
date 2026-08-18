// Static search index for the site-wide search feature.
//
// Each entry represents a real, findable unit of content on the website
// (a biography paragraph, a publication, a talk, a research theme, etc.)
// so that searching returns the visitor to the exact section that contains
// the match. This file is the single source the search UI reads from —
// it is derived directly from the text that already exists on each page,
// not a small hand-picked keyword list.
//
// `anchor` (when present) refers to an `id` that exists somewhere on the
// destination page. The generic <AnchorNavigator> component (see
// components/anchor-navigator.tsx) expands any collapsed accordion/section
// under that id and scrolls it into view.

export type SearchEntry = {
  /** Stable unique id for the entry itself. */
  id: string
  /** Human-readable page name, shown as a small label on each result. */
  page: string
  /** Path of the page this entry lives on. */
  url: string
  /** Optional in-page anchor id to deep-link and scroll to. */
  anchor?: string
  /** Title shown for the result. */
  heading: string
  /** Full searchable text body for this entry (also used to build the snippet). */
  text: string
}

export const searchIndex: SearchEntry[] = [
  // ───────────────────────────── Home ─────────────────────────────
  {
    id: 'home-bio',
    page: 'Home',
    url: '/',
    heading: 'Snehashish Das — Sociologist, Writer, Researcher',
    text: 'Snehashish Das is a doctoral candidate in Sociology at Jawaharlal Nehru University (JNU), New Delhi, India. Their work explores anti-caste movements, folk histories, folk cultures, religion, and subversive masculinities in Western Odisha, India. Alongside academic research, they write for public platforms and engage with anti-caste creative and literary practices. Research interests include caste, social movements, anti-caste thought, African American studies, Buddhism, recognition, redistribution, and social theory. On a side note, Snehashish loves to explore, cook, and experiment with different cultural cuisines, which this website does not elaborate upon.',
  },
  {
    id: 'home-phd-dissertation',
    page: 'Home',
    url: '/',
    anchor: 'phd-dissertation',
    heading: 'PhD Dissertation: The Deformation of Masculinities, and the Anti-Caste Movement in the Western Regions of Odisha',
    text: 'Thesis Title: The Deformation of Masculinities, and the Anti-Caste Movement in the Western Regions of Odisha. This doctoral project examines anti-caste movement in Western Odisha through fieldwork conducted among, primarily, the Ganda (Scheduled Caste) community in Kurul village and Malgodampada urban-slum, Balangir district in 2024. It investigates how anti-caste movement functions as pedagogical spaces through which ideas of emancipation, personhood, gender and social transformation are historically produced and transmitted.',
  },
  {
    id: 'home-phd-becoming-emancipation',
    page: 'Home',
    url: '/',
    anchor: 'phd-dissertation',
    heading: 'Becoming & Emancipation',
    text: 'This research develops arguments for a sociology of becoming by studying anti-caste movement as a site where emancipatory practices are produced, learned, transmitted, contested, and transformed across generations. The movement is approached as a pedagogical space, where subversion is thought about and practised, that begets possibilities for emancipation in general, and gender emancipation in particular.',
  },
  {
    id: 'home-phd-probable-pasts',
    page: 'Home',
    url: '/',
    anchor: 'phd-dissertation',
    heading: 'Reconstructing Probable Pasts',
    text: 'The project develops rationale, and theoretical and methodological frameworks for reconstructing what are termed "probable pasts", and eliminating the caste-Hindu imposition of alternative past - through folk myths, ritual narratives, oral traditions, and performance practices. These narratives are situated within the historical ontology of communities\' self, and it examines how marginalized communities use probable pasts to negotiate contemporary understandings of community-self, caste, and gender.',
  },
  {
    id: 'home-phd-folk-culture-gender',
    page: 'Home',
    url: '/',
    anchor: 'phd-dissertation',
    heading: 'Folk Culture, Performance & Gender',
    text: 'Drawing on folk songs, two theatrical performances, and a possession ritual, the research develops a grounded understanding of gender within anti-caste folk cultures. This research studies the emancipatory possibilities these cultural forms generate, as well as the contradictions, paradoxes and limits they contain.',
  },
  {
    id: 'home-phd-critique-gender-masculinity',
    page: 'Home',
    url: '/',
    anchor: 'phd-dissertation',
    heading: 'Critique of Gender & Masculinity Studies',
    text: 'This project critiques that even certain idiographic studies risk making positive laws in their study of caste and gender, and in return creating racialised subjects. This research understands the limits of gender and masculinities studies, and discourses, that generalizes masculinity or treat it as ahistorical or historically fixed. In contrast, the research conceptualises studying gender emancipation through anti-caste movements, where it understands gender and masculinities as historically evolving categories. This research argues on how to move past intersectionality framework for studying caste and gender.',
  },
  {
    id: 'home-areas-of-interest',
    page: 'Home',
    url: '/',
    anchor: 'areas-of-interest',
    heading: 'Areas of Interest',
    text: 'Methodology of Social Sciences & Sociology, Cultural Sociology, Gender Studies & Queer Theory, Ambedkarian Perspective, Anti-Caste Movements, Folk Culture, Religion Studies, Historical Methods, Performance Studies.',
  },
  {
    id: 'home-academic-journey',
    page: 'Home',
    url: '/',
    anchor: 'academic-journey',
    heading: 'Academic Journey',
    text: 'PhD in Sociology, 2020–2026, Centre for the Study of Social Systems (CSSS), School of Social Sciences (SSS), Jawaharlal Nehru University. MA in Sociology, 2018–2020, Centre for the Study of Social Systems (CSSS), School of Social Sciences (SSS), Jawaharlal Nehru University. BA in Social Sciences, 2015–2018, Tata Institute of Social Sciences, Guwahati.',
  },
  {
    id: 'home-reflection-quote',
    page: 'Home',
    url: '/',
    anchor: 'reflection-quote',
    heading: '"If caste remains, liberation cannot. If liberation emerges, caste cannot remain." — Bhima Bhoi',
    text: 'If caste remains, liberation cannot. If liberation emerges, caste cannot remain. Bhima Bhoi.',
  },

  // ───────────────────────────── Publications ─────────────────────────────
  {
    id: 'pub-article-phule',
    page: 'Publications',
    url: '/publications',
    anchor: 'research-articles',
    heading: 'Fracturing the Historical Continuity on Truth: Jotiba Phule in the Quest for Personhood of Shudras',
    text: 'Snehashish Das. CASTE: A Global Journal on Social Exclusion, volume 2, issue 1, 2021, pages 30–46. Anti-caste traditions in India work to understand and examine the idea of personhood which the majority in India is deprived of by virtue of being born in the lower rungs of the caste hierarchy. This paper examines the historical continuity in Brahminism and the rupture Jotiba Phule presents to it through his art and activism. Jotiba Phule quest is for finding the essence and personhood of a precarious subject, the Shudra, as a subject of history. The works discussed are his poem Kulambin (a peasant woman), and the Satyashodhak (truth-seeker) marriage as a public performance of protest, and the organization Satyashodhak Samaj (Society of Truth Seekers).',
  },
  {
    id: 'pub-article-queerness',
    page: 'Publications',
    url: '/publications',
    anchor: 'research-articles',
    heading: 'CAST(E)ING QUEERNESS',
    text: 'Snehashish Das. International Journal of Advance and Applied Research, volume 8, issue 1, 2020. This paper examines the relationship between caste and queerness in India, arguing that caste is not merely an intersecting identity but a constitutive force that shapes queer lives, identities, and political possibilities. Drawing on the writings of Bahujan, queer and trans scholars and activists, it explores how caste and heteropatriarchy operate through institutions such as family, marriage, and the state to regulate gender and sexuality. It interrogates caste privilege within queer movements, homonormativity, and the myth of castelessness, arguing that queer liberation requires an explicit commitment to anti-caste politics.',
  },
  {
    id: 'pub-review-stan-swamy',
    page: 'Publications',
    url: '/publications',
    anchor: 'book-reviews',
    heading: 'Book Review: Stan Swamy, I Am Not a Silent Spectator',
    text: 'Stan Swamy, I Am Not a Silent Spectator: Why Truth Has Become So Bitter, Dissent So Intolerable, Justice So Out of Reach. Social Change, volume 53, issue 4, 2023. Book review by Snehashish Das.',
  },
  {
    id: 'pub-review-decoding-ambedkar',
    page: 'Publications',
    url: '/publications',
    anchor: 'book-reviews',
    heading: 'Book Review: Vivek Kumar, Decoding Ambedkar: Ideas of Nation and Nation Building',
    text: 'Vivek Kumar, Decoding Ambedkar: Ideas of Nation and Nation Building. International Sociology, volume 40, issue 5, 2025. Book review by Snehashish Das.',
  },
  {
    id: 'pub-creative-giant',
    page: 'Publications',
    url: '/publications',
    anchor: 'creative-works',
    heading: 'Death Of A Giant In A Godless Country',
    text: 'Speculative Fiction, 2024. Published in The Blaft Book of Anti-Caste SF, edited by R. T. Samuel, Rakesh K., Rashmi R. D. ISBN 9789380636726, 9789380636733.',
  },
  {
    id: 'pub-creative-everyone-says',
    page: 'Publications',
    url: '/publications',
    anchor: 'creative-works',
    heading: 'Everyone Says (Poem)',
    text: 'Poem, 2020. Published in The World That Belongs To Us: An Anthology of Queer Poetry from South Asia, edited by Aditi Angiras and Akhil Katyal. ISBN 9353574579, 9789353574574.',
  },
  {
    id: 'pub-scholarship-2025',
    page: 'Publications',
    url: '/publications',
    anchor: 'public-scholarship',
    heading: 'Public Scholarship 2025',
    text: 'A Masala Khichdi Called Dhadak 2, Round Table India, 2025.',
  },
  {
    id: 'pub-scholarship-2023',
    page: 'Publications',
    url: '/publications',
    anchor: 'public-scholarship',
    heading: 'Public Scholarship 2023',
    text: 'Ambedkarite Questions for Neeraj Ghaywan\'s The Heart Skipped A Beat, Round Table India, 2023. Dalit Policing and Policing Dalits: A Shift in Hindi Cinema, Round Table India, 2023. Dhondiba\'s Challenge: Restaging Gulamgiri, Proseterity, 2023.',
  },
  {
    id: 'pub-scholarship-2022',
    page: 'Publications',
    url: '/publications',
    anchor: 'public-scholarship',
    heading: 'Public Scholarship 2022',
    text: 'Caste Hindu Nationalism and Trans Citizenship, Mavelinadu, 2022.',
  },
  {
    id: 'pub-scholarship-2021',
    page: 'Publications',
    url: '/publications',
    anchor: 'public-scholarship',
    heading: 'Public Scholarship 2021',
    text: 'Memories of the Father of Our Movements, Father Stan Swamy, Economic & Political Weekly, 2021. Educators for All Time: Jotiba, Savitri and Fatima, Aura, 2021.',
  },
  {
    id: 'pub-scholarship-2020',
    page: 'Publications',
    url: '/publications',
    anchor: 'public-scholarship',
    heading: 'Public Scholarship 2020',
    text: 'The Essence of Jyotiba Phule\'s Revolution Lay in His Rationality, The Wire, 2020. A Universal Mother and the Secular Others, Maktoob, 2020.',
  },
  {
    id: 'pub-scholarship-2018',
    page: 'Publications',
    url: '/publications',
    anchor: 'public-scholarship',
    heading: 'Public Scholarship 2018',
    text: '#InjusTISS: The TISS Student Struggle Against Cutting Financial Aid for SC, ST and OBC Students, Feminism in India, 2018.',
  },
  {
    id: 'pub-scholarship-2016',
    page: 'Publications',
    url: '/publications',
    anchor: 'public-scholarship',
    heading: 'Public Scholarship 2016',
    text: 'JNU Row Brought Up the Politics Behind Defining Nationalism and Its (Mis)Uses, Youth Ki Awaaz, 2016. Why I Think Sanskritisation Can\'t Fight Caste Discrimination in Society, Youth Ki Awaaz, 2016.',
  },

  // ───────────────────────────── Research ─────────────────────────────
  {
    id: 'research-intro',
    page: 'Research',
    url: '/research',
    heading: 'Research & Academic Engagement',
    text: 'My research engages questions of caste, anti-caste movements, religion, gender, historical reconstruction, and sociological theory. The projects presented represent interconnected strands of inquiry developed through fieldwork, theoretical reflection, teaching, and academic engagement.',
  },
  {
    id: 'research-theme-folk-culture',
    page: 'Research',
    url: '/research',
    anchor: 'folk-culture',
    heading: 'Folk Culture, Probable Pasts, Historical Reconstruction & Masculinities',
    text: 'These interwoven subjects of study are discussed in multiple papers presented on different platforms. These works examine how anti-caste communities remember, reconstruct, and transmit historical consciousness through myths, oral traditions, ritual narratives, folk performances, and cultural practices, and the relationship between historical ontology, anti-caste movements, emancipation, and gender (de)formation. Presentations: Can Folk Myths Be Tools of Historical Reconstruction? A Study of the Ganda Community in Western Odisha, ISA RC22 Mid-Term Conference, South Asian University, February 5, 2026. Reconstructing the Buddhist Past from Folk Myths: A Study of the Ganda Anti-Caste Community in Western Odisha, American Academy of Religion Annual Meeting, Boston, USA, November 23, 2025. Citation of Probable Pasts as Performative Scripts for Masculinities: Problems in Reading Culture-Text in an Anti-Caste Community, PhD Research Scholars\' Seminar, Centre for the Study of Social Systems (CSSS), Jawaharlal Nehru University, December 18, 2024.',
  },
  {
    id: 'research-theme-anti-caste-pedagogy',
    page: 'Research',
    url: '/research',
    anchor: 'anti-caste-pedagogy',
    heading: 'Anti-Caste Movement as Public Pedagogy & Emancipation',
    text: 'This research develops theoretical frameworks for understanding anti-caste movements as pedagogical spaces of becoming and emancipation, examining how social movements lead people to strive for change through public pedagogy. Presentation: Theoretical & Philosophical Framework for Studying Anti-Caste Movement, Research Scholars\' Symposium, Jawaharlal Nehru University, April 10, 2026.',
  },
  {
    id: 'research-theme-ai-caste',
    page: 'Research',
    url: '/research',
    anchor: 'ai-caste',
    heading: 'AI, Caste and Anti-Caste Studies',
    text: 'This body of work explores how emerging forms of knowledge and technology, especially different AI models, operate within the existing paradigm of disinformation on caste and anti-caste studies, arguing that AI is modelled to reproduce dominant human errors, agendas, and disinformation rather than verification and correction. Presentation: Artificial Intelligence and the Problem of Caste and Anti-Caste Studies, Research Scholars\' Symposium, Jawaharlal Nehru University, April 9, 2025.',
  },
  {
    id: 'research-theme-indian-sociology',
    page: 'Research',
    url: '/research',
    anchor: 'indian-sociology',
    heading: 'Indian Sociology and a Paradigm Shift',
    text: 'This project examines a century of Indian sociology, identifying five major schools that constitute a "Perspective from Above," and an emerging "Perspective from Below" through the works of A. Ayyappan, C. Parvathamma, Nandu Ram, T. K. Oommen, and Vivek Kumar. Presentation: Different Shades of Sociology and a Hundred Years of Indian Sociology, Research Scholars\' Symposium, Centre for the Study of Social Systems (CSSS), Jawaharlal Nehru University, February 16, 2025.',
  },
  {
    id: 'research-theme-religion-secularism',
    page: 'Research',
    url: '/research',
    anchor: 'religion-secularism',
    heading: 'Religion, Secularism & the Case of the Hindu',
    text: 'A theoretical project examining the Ambedkar-Gandhi debate on Hinduism and its tolerance of multiple truths, and the philosophical foundations of anti-caste politics. Proposes that India needs a constitutionally embedded and Buddhist-coded ideal of fraternity, distinct from secularism. Presentations: Religious Logics and Secular Anti-Logics: The Case of the Hindu, ISA RC22 Mid-Term Conference, South Asian University, February 6, 2026. Is the Hindu Secular?: Fraternity vis-à-vis the Crisis in Truth and Enslaved Subjecthood, Graduate Symposium, University of Toronto, April 20, 2023. The Ambedkar-Gandhi Debate on Secular Hinduism, and the Use of Philosophical Logic, Research Scholars\' Seminar, Jawaharlal Nehru University, April 10, 2023. The Secular and the Hindu: The Crisis in Philosophy and Technocratic Citizenship, Inter-University Students\' Seminar, Jamia Millia Islamia, February 15, 2023.',
  },
  {
    id: 'research-teaching',
    page: 'Research',
    url: '/research',
    anchor: 'teaching-experiences',
    heading: 'Teaching Experiences',
    text: 'Teaching Assistant, Methodology of Social Sciences (SS451N), course anchor Prof. Vivek Kumar, Centre for the Study of Social Systems (CSSS), School of Social Sciences (SSS), Jawaharlal Nehru University, 2022–2023. Remedial Class Teacher, Methodology of Social Sciences (SS451N), Centre for the Study of Social Systems (CSSS), School of Social Sciences (SSS), Jawaharlal Nehru University, 2023.',
  },
  {
    id: 'research-field-thesis',
    page: 'Research',
    url: '/research',
    anchor: 'research-field-experiences',
    heading: 'Doctoral Fieldwork: The Deformation of Masculinities, and the Anti-Caste Movement in the Western Regions of Odisha',
    text: 'Doctoral Fieldwork, 2024, Balangir, Odisha. Field sites: Kurul Village, Malgodampada Urban Slum. Focus: Anti-Caste Movement, Deformation of Masculinities.',
  },
  {
    id: 'research-field-nfsa',
    page: 'Research',
    url: '/research',
    anchor: 'research-field-experiences',
    heading: 'National Food Security Act Survey',
    text: 'Field Research & Data Collection, 2016. Sundargarh District, Odisha and Balangir District, Odisha. Role: Field Volunteer for Data Collection and Evaluation. Supervised by Prof. Jean Drèze and Prof. Reetika Khera. Focus: Evaluation of the National Food Security Act Through Field-Based Survey Research.',
  },
  {
    id: 'research-field-caseing-queers',
    page: 'Research',
    url: '/research',
    anchor: 'research-field-experiences',
    heading: 'Cast(e)ing Queers — Undergraduate Dissertation',
    text: 'Undergraduate Dissertation, 2018, Tata Institute of Social Sciences, Guwahati. Guided by Dr. Santhosh M. R. Focus: Intersectional Analysis of Caste and Queer Identities.',
  },
  {
    id: 'research-memberships',
    page: 'Research',
    url: '/research',
    anchor: 'memberships',
    heading: 'Memberships',
    text: 'American Academy of Religion, Student Membership, April 10, 2025 – April 30, 2027.',
  },
  {
    id: 'research-awards',
    page: 'Research',
    url: '/research',
    anchor: 'awards',
    heading: 'Awards & Qualifications',
    text: 'Qualified UGC-NET (Lectureship), December 2019.',
  },
  {
    id: 'research-peer-review',
    page: 'Research',
    url: '/research',
    anchor: 'peer-review',
    heading: 'Peer Reviewing Experience',
    text: 'ShodhKosh: Journal of Visual and Performing Arts, a UGC-CARE Listed Journal, ISSN 2582-7472, October 2023.',
  },

  // ───────────────────────────── Podcasts ─────────────────────────────
  {
    id: 'podcast-queerness-storytelling',
    page: 'Podcasts',
    url: '/podcasts',
    anchor: 'conversation-1',
    heading: 'Queerness and Storytelling in India',
    text: 'Podcast Series: Queerness and Storytelling in India, hosted by Rajorshi Das, Episode 36, September 22, 2024. Snehashish Das offers a critique of Western universalism and asks why we want to fit Indian icons like Bhimrao Ambedkar and Savitribai Phule into Western categories. They discuss the role of poetry by Kabir and interlocutors in their field to rethink ideas of gender, queerness, desire and subversion, making a case for hope by referring to how Begumpura exists in the present, and sharing thoughts on appropriation.',
  },
  {
    id: 'podcast-spark-movement',
    page: 'Podcasts',
    url: '/podcasts',
    anchor: 'conversation-2',
    heading: 'The Spark for a Movement',
    text: 'Podcast Series: Lights | Camera | Azadi, hosted by Vandit Jain, Episode 42, July 2, 2021. Snehashish Das is an Ambedkarite, PhD scholar at JNU, and activist at BAPSA. This episode is a deep dive into understanding the conditions of a movement, how a revolution is slowly built, and the counter-forces to a revolution, reflecting on Snehashish\'s journey from a school run by the RSS to JNU, the vocabulary of the Bahujan movement and its religious context, and the role of social media in shaping contemporary movements.',
  },

  // ───────────────────────────── Community ─────────────────────────────
  {
    id: 'community-panel-anti-caste',
    page: 'Community',
    url: '/community',
    anchor: 'anti-caste',
    heading: 'Panel Discussions: Anti-Caste Thought & Education',
    text: 'Legacy of Exclusion and Injustice in Higher Education, Panelist, Ambedkar Study Circle, Atma Ram Sanatan Dharma College, University of Delhi, January 17, 2023. The Myth of Merit, Web Speaker, Proseterity, April 21, 2021. Remembering Rohith Vemula, Panelist, Ambedkar Students\' Association, MSF, and Fraternity Movement, TISS Mumbai, February 12, 2022. Fracturing the Historical Continuity on Truth: Jotiba Phule in the Quest for Personhood of Shudras, Paper Presentation & Discussion, OBC United, January 30, 2022. Student Discussion on Ambedkar Fortnight-19, Panelist, Azim Premji University, April 8, 2019. Commemorating Rohith Vemula on His Birth Anniversary, Panelist, Dissenting Voices of LSR, Lady Shri Ram College, University of Delhi, January 30, 2020.',
  },
  {
    id: 'community-panel-sociology',
    page: 'Community',
    url: '/community',
    anchor: 'sociology',
    heading: 'Panel Discussions: Sociology, Politics & Representation',
    text: 'TK Oommen and Paradigm Shift in Indian Sociology, Panelist, Commemorating T.K. Oommen\'s Legacy: Revisiting Theory, Society and Change in Indian Sociology, Sociological Research Forum, Jawaharlal Nehru University, March 27, 2026. Post-Mandal Campuses: Knowledge, Politics, and Representation, Panelist, Reservation Summit, Fraternity Movement, Kozhikode, Kerala, November 13, 2022.',
  },
  {
    id: 'community-panel-literature',
    page: 'Community',
    url: '/community',
    anchor: 'literature',
    heading: 'Panel Discussions: Literature, Art & Speculations',
    text: 'Anti-Caste Art, Fiction and Speculations, Panelist, School of Arts & Aesthetics, Jawaharlal Nehru University, January 10, 2025. Book Launch: The Blaft Book of Anti-Caste SF, Panelist, Community Library Project, South Extension, New Delhi, January 5, 2025.',
  },
  {
    id: 'community-panel-gender',
    page: 'Community',
    url: '/community',
    anchor: 'gender',
    heading: 'Panel Discussions: Gender, Sexuality & Representation',
    text: 'LGBTQIA+ Community: Evictions from Socio-Literary Dignity, Panelist, 3rd Dalit Literature Festival, Aryabhatta College, University of Delhi, organized by Ambedkarwadi Lekhak Sangh & Aryabhatta College, February 4, 2023. Caste Bodies: Deconstructing Gender, Sex, and Sexuality, Web Speaker, Point of View, Mumbai, April 29, 2019. Gender & Intersectionality, Panelist, Parivartan—The Gender Forum, Kirori Mal College, University of Delhi, March 27, 2019. Who is the "Me" in #MeToo: The Politics of Representation, Panelist, Kalaalayam, Jamia Millia Islamia, October 24, 2018. Navigating Queer Identities in University Spaces, Panelist, Women\'s Development Cell, Lady Shri Ram College, University of Delhi, September 20, 2018. Bahujan Mahila Sammelan, Speaker, Bahujan Sahitya Sangh, Jawaharlal Nehru University, September 28, 2019. Savitribai Phule\'s Birth Anniversary, Guest Speaker, Apna Radio 96.9 FM, Indian Institute of Mass Communication, New Delhi, January 3, 2020.',
  },
  {
    id: 'community-education',
    page: 'Community',
    url: '/community',
    anchor: 'community-education',
    heading: 'Community Education & Teaching Initiatives',
    text: 'Between 2016 and 2018, participated in and coordinated community-based educational initiatives in Jharkhand and Chhattisgarh, working with residential schools, state institutions, and grassroots educational programmes, and with schools with students from Particularly Vulnerable Tribal Group (PVTG) backgrounds. Programme collaborators: Jean Drèze, Reetika Khera, Apurva Bamezai, Aakash Ranjan, Rahee S G and others. Sahpathi 2018, Program Coordinator & Volunteer Teacher, June–July 2018, Gumla, Latehar, and Lohardaga districts, Jharkhand; Sarguja district, Chhattisgarh, with the Department of Welfare, Government of Jharkhand and Department of Tribal & SC Development, Government of Chhattisgarh; concurrent teaching at Jobhipat School, Gumla. Sahpathi 2017, Volunteer Teacher, June–July 2017, Jobhipat Residential School (Adivasi School), Gumla, Jharkhand. Road Teachers Programme 2016, Volunteer Teacher, June–July 2016, Jobhipat Residential School (Adivasi School), Gumla, Jharkhand.',
  },
  {
    id: 'community-archive-napm',
    page: 'Community',
    url: '/community',
    anchor: 'internship-napm',
    heading: 'National Alliance of People\'s Movements (NAPM), New Delhi',
    text: 'Field Intern, December 2016, New Delhi. Focus: Housing rights and anti-eviction advocacy. Supported the Kathputli Colony resistance movement against forced demolition.',
  },
  {
    id: 'community-archive-rtf',
    page: 'Community',
    url: '/community',
    anchor: 'workshop-rtf',
    heading: '6th National Convention of Right to Food Campaign',
    text: 'Participant & Volunteer, 23rd–25th September 2016, Ranchi.',
  },
  {
    id: 'community-archive-ashirvad',
    page: 'Community',
    url: '/community',
    anchor: 'internship-ashirvad',
    heading: 'Ashirvad NGO, East Sikkim',
    text: 'Experiential Learning, May 2016 (3 days), East Sikkim. Focus: Socioeconomic-cultural study of Pakyong district communities. Learn about livelihoods and local traditions.',
  },
  {
    id: 'community-archive-gandhi',
    page: 'Community',
    url: '/community',
    anchor: 'internship-gandhi',
    heading: 'Gandhi Youth Camp, Puri, Odisha',
    text: 'Participant, March 2015 (5-day residential programme), Puri, Odisha. Focus: Grassroots development training through fieldwork. Organizers: Gandhi Bichar Abhiyan & Gandhi Peace Centre. Venue: Gopabandhu Daridra Narayan Seva Sangh, Sakhigopal.',
  },
  {
    id: 'community-archive-gender-sexuality',
    page: 'Community',
    url: '/community',
    anchor: 'workshop-gender-sexuality',
    heading: 'Workshop on Gender and Sexuality, Sexual Health, Sexual Violence and Related Laws',
    text: 'Participant, 18th–19th March 2017, Guwahati. Conducted by the Foundation for Social Transformation, Guwahati.',
  },
  {
    id: 'community-archive-himalayan',
    page: 'Community',
    url: '/community',
    anchor: 'workshop-himalayan',
    heading: 'Eastern Himalayan Naturenomics Forum',
    text: 'Rapporteur, 2nd–3rd November 2017, Guwahati, Assam. Organized by the Balipara Foundation.',
  },
  {
    id: 'community-diary-event-management',
    page: 'Community',
    url: '/community',
    anchor: 'event-management',
    heading: 'Event Management & Programming',
    text: 'Program Coordinator, Spegel Social Fest, TISS Guwahati, workshops on social entrepreneurship, political cartooning, and applied theatre, 2016–2017. Lead Curator, The Resistance Week, TISS Guwahati, documentary screenings, panel discussions, and art exhibitions, December 2017. Blood Donation Drive Organizer, TISS Guwahati, 2016. Freshers\' Welcome Program Coordinator, TISS Guwahati, 2017.',
  },
  {
    id: 'community-diary-institutional',
    page: 'Community',
    url: '/community',
    anchor: 'institutional',
    heading: 'Institutional Initiatives',
    text: 'Co-Founding Member, Tubelight—The Alegre World, Theatre Collective, TISS Guwahati. Co-Founding Member, Intuition Study Circle, Discussion forum, TISS Guwahati. Dining Hall Committee Representative, TISS Guwahati, 2016–2017.',
  },
  {
    id: 'community-diary-engagement',
    page: 'Community',
    url: '/community',
    anchor: 'community-engagement',
    heading: 'Community Engagement',
    text: 'Youth Red Cross Volunteer, BJB Junior College, 2013–2015, awareness programs and developmental initiatives. Camp Documentation Lead, International Children\'s Camp, 2015, with National Youth Project, Antarbharati and BJEM School, Bhubaneswar. Theatre Practitioner: wrote, directed, and acted in the Odia play Kabata Kholile Pila Dina at BJB Junior College, Bhubaneswar, 2014. Theatre Practitioner: acted in the Hindi street play Ek Khwab Aaya at Jawaharlal Nehru University, 2021. Theatre Practitioner: wrote and directed the Hindi street play Dronacharya Ka Angutha at Jawaharlal Nehru University, 2023.',
  },

  // ───────────────────────────── Contact (shared, appears on every page) ─────────────────────────────
  {
    id: 'contact',
    page: 'Contact',
    url: '/',
    anchor: 'contact',
    heading: 'Get in Touch',
    text: 'Email: mx.snehashish@gmail.com. ORCID: 0009-0008-6092-1457. LinkedIn: Snehashish Das.',
  },
]
