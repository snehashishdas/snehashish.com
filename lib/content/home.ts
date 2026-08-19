// Content for the Home page. The page component renders directly from
// these exports, and the search index is generated from this same file
// (see scripts/generate-search-index.mjs), so editing content here is all
// that's needed to keep both the page and search in sync.

export const heroBio =
  'Snehashish Das is a doctoral candidate in Sociology at Jawaharlal Nehru University (JNU), New Delhi, India. Their work explores anti-caste movements, folk histories, folk cultures, religion, and subversive masculinities in Western Odisha, India. Alongside academic research, they write for public platforms and engage with anti-caste creative and literary practices. On a side note, Snehashish loves to explore, cook, and experiment with different cultural cuisines, which this website does not elaborate upon.'

// Kept in sync with the metadata description in app/layout.tsx — included
// here as well so it's part of the searchable body text of the homepage.
export const researchInterestsNote =
  'Research interests include caste, social movements, anti-caste thought, African American studies, Buddhism, recognition, redistribution, and social theory.'

export const phdDissertation = {
  thesisLabel: 'Thesis Title:',
  thesisTitle:
    'The Deformation of Masculinities, and the Anti-Caste Movement in the Western Regions of Odisha',
  summary:
    'This doctoral project examines anti-caste movement in Western Odisha through fieldwork conducted among, primarily, the Ganda (Scheduled Caste) community in Kurul village and Malgodampada urban-slum, Balangir district in 2024. It investigates how anti-caste movement functions as pedagogical spaces through which ideas of emancipation, personhood, gender and social transformation are historically produced and transmitted.',
  sections: [
    {
      heading: 'Becoming & Emancipation',
      body: 'This research develops arguments for a sociology of becoming by studying anti-caste movement as a site where emancipatory practices are produced, learned, transmitted, contested, and transformed across generations. The movement is approached as a pedagogical space, where subversion is thought about and practised, that begets possibilities for emancipation in general, and gender emancipation in particular.',
    },
    {
      heading: 'Reconstructing Probable Pasts',
      body: "The project develops rationale, and theoretical and methodological frameworks for reconstructing what are termed \"probable pasts\", and eliminating the caste-Hindu imposition of alternative past - through folk myths, ritual narratives, oral traditions, and performance practices. These narratives are situated within the historical ontology of communities' 'self', and it examines how marginalized communities use 'probable pasts' to negotiate contemporary understandings of community-self, caste, and gender.",
    },
    {
      heading: 'Folk Culture, Performance & Gender',
      body: 'Drawing on folk songs, two theatrical performances, and a possession ritual, the research develops a grounded understanding of gender within anti-caste folk cultures. This research studies the emancipatory possibilities these cultural forms generate, as well as the contradictions, paradoxes and limits they contain.',
    },
    {
      heading: 'Critique of Gender & Masculinity Studies',
      body: 'This project critiques that even certain idiographic studies risk making positive laws in their study of caste and gender, and in return creating racialised subjects. This research understands the limits of gender and masculinities studies, and discourses, that generalizes masculinity or treat it as ahistorical or historically fixed. In contrast, the research conceptualises studying gender emancipation through anti-caste movements, where it understands gender and masculinities as historically evolving categories. This research argues on how to move past intersectionality framework for studying caste and gender.',
    },
  ],
}

export const interests = [
  'Methodology of Social Sciences & Sociology',
  'Cultural Sociology',
  'Gender Studies & Queer Theory',
  'Ambedkarian Perspective',
  'Anti-Caste Movements',
  'Folk Culture',
  'Religion Studies',
  'Historical Methods',
  'Performance Studies',
]

export const journey = [
  {
    years: '2020–2026',
    title: 'PhD in Sociology',
    institution:
      'Centre for the Study of Social Systems (CSSS), School of Social Sciences (SSS), Jawaharlal Nehru University',
  },
  {
    years: '2018–2020',
    title: 'MA in Sociology',
    institution:
      'Centre for the Study of Social Systems (CSSS), School of Social Sciences (SSS), Jawaharlal Nehru University',
  },
  {
    years: '2015–2018',
    title: 'BA in Social Sciences',
    institution: 'Tata Institute of Social Sciences, Guwahati',
  },
]

export const reflectionQuote = {
  line1: 'If caste remains, liberation cannot.',
  line2: 'If liberation emerges, caste cannot remain.',
  attribution: 'Bhima Bhoi',
}
