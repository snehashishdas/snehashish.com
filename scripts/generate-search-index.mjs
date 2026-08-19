// Generates lib/search-index.generated.ts directly from the content modules
// under lib/content/*.ts — the exact same data each page imports and
// renders. There is no separate, manually maintained search database:
// whatever you edit in lib/content/*.ts (or in the archive/theme/etc.
// arrays there) is what search will find, automatically, the next time the
// site is built or the dev server starts.
//
// This script is invoked automatically from next.config.mjs on every
// `next build`, `next dev`, and `next start`, so there is nothing to run
// by hand after an ordinary content edit.

import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

import * as home from '../lib/content/home'
import * as publications from '../lib/content/publications'
import * as research from '../lib/content/research'
import * as podcasts from '../lib/content/podcasts'
import * as community from '../lib/content/community'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @typedef {{ id: string, page: string, url: string, anchor?: string, heading: string, text: string }} SearchEntry */

/** @type {SearchEntry[]} */
const entries = []

let counter = 0
function nextId(prefix) {
  counter += 1
  return `${prefix}-${counter}`
}

/** Joins arbitrary field values (strings, arrays of strings, undefined) into one searchable blob. */
function joinFields(...fields) {
  return fields
    .flat(2)
    .filter((v) => typeof v === 'string' && v.trim().length > 0)
    .join(' ')
}

// ───────────────────────────── Home (lib/content/home.ts) ─────────────────────────────

entries.push({
  id: nextId('home-bio'),
  page: 'Home',
  url: '/',
  heading: 'Snehashish Das — Sociologist, Writer, Researcher',
  text: joinFields(home.heroBio, home.researchInterestsNote),
})

entries.push({
  id: nextId('home-phd'),
  page: 'Home',
  url: '/',
  anchor: 'phd-dissertation',
  heading: home.phdDissertation.thesisTitle,
  text: joinFields(home.phdDissertation.thesisLabel, home.phdDissertation.summary),
})

for (const section of home.phdDissertation.sections) {
  entries.push({
    id: nextId('home-phd-section'),
    page: 'Home',
    url: '/',
    anchor: 'phd-dissertation',
    heading: section.heading,
    text: section.body,
  })
}

entries.push({
  id: nextId('home-interests'),
  page: 'Home',
  url: '/',
  anchor: 'areas-of-interest',
  heading: 'Areas of Interest',
  text: joinFields(home.interests),
})

entries.push({
  id: nextId('home-journey'),
  page: 'Home',
  url: '/',
  anchor: 'academic-journey',
  heading: 'Academic Journey',
  text: joinFields(home.journey.map((j) => joinFields(j.years, j.title, j.institution))),
})

entries.push({
  id: nextId('home-quote'),
  page: 'Home',
  url: '/',
  anchor: 'reflection-quote',
  heading: `“${home.reflectionQuote.line1} ${home.reflectionQuote.line2}” — ${home.reflectionQuote.attribution}`,
  text: joinFields(home.reflectionQuote.line1, home.reflectionQuote.line2, home.reflectionQuote.attribution),
})

// ───────────────────────────── Publications (lib/content/publications.ts) ─────────────────────────────

for (const a of publications.researchArticles) {
  entries.push({
    id: nextId('pub-article'),
    page: 'Publications',
    url: '/publications',
    anchor: 'research-articles',
    heading: a.title,
    text: joinFields(a.author, a.journal, a.volume, a.issue, a.year, a.pages, a.abstract),
  })
}

for (const r of publications.bookReviews) {
  entries.push({
    id: nextId('pub-review'),
    page: 'Publications',
    url: '/publications',
    anchor: 'book-reviews',
    heading: r.title,
    text: joinFields(r.journal, r.volume, r.issue, r.year),
  })
}

for (const w of publications.creativeWorks) {
  entries.push({
    id: nextId('pub-creative'),
    page: 'Publications',
    url: '/publications',
    anchor: 'creative-works',
    heading: w.title,
    text: joinFields(w.type, w.published, w.editors, w.year, w.isbn),
  })
}

for (const [year, list] of Object.entries(publications.publicScholarshipByYear)) {
  for (const article of list) {
    entries.push({
      id: nextId('pub-scholarship'),
      page: 'Publications',
      url: '/publications',
      anchor: 'public-scholarship',
      heading: article.title,
      text: joinFields(article.publication, year),
    })
  }
}

// ───────────────────────────── Research (lib/content/research.ts) ─────────────────────────────

entries.push({
  id: nextId('research-intro'),
  page: 'Research',
  url: '/research',
  heading: 'Research & Academic Engagement',
  text: research.introText,
})

for (const theme of research.researchThemes) {
  entries.push({
    id: nextId('research-theme'),
    page: 'Research',
    url: '/research',
    anchor: theme.id,
    heading: theme.title,
    text: joinFields(
      theme.description,
      theme.presentations?.map((p) => joinFields(p.title, p.conference, p.institution, p.date)),
    ),
  })
}

for (const t of research.teachingExperience) {
  entries.push({
    id: nextId('research-teaching'),
    page: 'Research',
    url: '/research',
    anchor: 'teaching-experiences',
    heading: joinFields(t.role, t.course),
    text: joinFields(t.role, t.course, t.courseAnchor, t.department, t.school, t.institution, t.period),
  })
}

for (const e of research.fieldExperiences) {
  entries.push({
    id: nextId('research-field'),
    page: 'Research',
    url: '/research',
    anchor: 'research-field-experiences',
    heading: e.title,
    text: joinFields(
      e.type, e.year, e.location, e.locations, e.fieldSites, e.role, e.institution,
      e.supervisedBy, e.guidedBy, e.focus,
    ),
  })
}

for (const activity of research.professionalActivities) {
  entries.push({
    id: nextId('research-activity'),
    page: 'Research',
    url: '/research',
    anchor: activity.id,
    heading: activity.title,
    text: joinFields(activity.content.map((c) => joinFields(c.label, c.details, c.issn, c.date))),
  })
}

// ───────────────────────────── Podcasts (lib/content/podcasts.ts) ─────────────────────────────

for (const c of podcasts.conversations) {
  entries.push({
    id: nextId('podcast'),
    page: 'Podcasts',
    url: '/podcasts',
    anchor: `conversation-${c.id}`,
    heading: c.title,
    text: joinFields(c.series, c.host, c.episodeNumber, c.date, c.description, c.citation),
  })
}

// ───────────────────────────── Community (lib/content/community.ts) ─────────────────────────────

for (const theme of community.panelThemes) {
  entries.push({
    id: nextId('community-panel'),
    page: 'Community',
    url: '/community',
    anchor: theme.id,
    heading: theme.title,
    text: joinFields(
      theme.talks.map((t) => joinFields(t.title, t.role, t.venue, t.event, t.date)),
    ),
  })
}

entries.push({
  id: nextId('community-education-intro'),
  page: 'Community',
  url: '/community',
  anchor: 'community-education',
  heading: 'Community Education & Teaching Initiatives',
  text: joinFields(community.communityEducationIntro, 'Programme Collaborators:', community.collaborators),
})

for (const program of community.communityEducationPrograms) {
  entries.push({
    id: nextId('community-program'),
    page: 'Community',
    url: '/community',
    anchor: 'community-education',
    heading: program.program,
    text: joinFields(
      program.role, program.period, program.locations, program.institution,
      program.partnerOrganizations, program.additionalRole,
      program.documents?.map((d) => joinFields(d.title, d.year)),
    ),
  })
}

const institutionalSections = [
  { key: 'eventManagement', anchor: 'event-management' },
  { key: 'institutional', anchor: 'institutional' },
  { key: 'community', anchor: 'community-engagement' },
]

for (const { key, anchor } of institutionalSections) {
  for (const item of community.institutionalActivities[key]) {
    entries.push({
      id: nextId('community-activity'),
      page: 'Community',
      url: '/community',
      anchor,
      heading: joinFields(item.title, item.role) || item.role,
      text: joinFields(item.role, item.title, item.organization, item.date, item.details),
    })
  }
}

for (const entry of community.archiveEntries) {
  const detailsText =
    typeof entry.details === 'string'
      ? entry.details
      : joinFields(entry.details.map((d) => joinFields(d.label, d.value)))

  entries.push({
    id: nextId('community-archive'),
    page: 'Community',
    url: '/community',
    anchor: entry.id,
    heading: entry.title,
    text: joinFields(entry.role, entry.meta, detailsText),
  })
}

// ───────────────────────────── Contact ─────────────────────────────
// The Contact section (components/contact-section.tsx) is intentionally
// static, hand-maintained content — it is out of scope for edits — so it is
// represented here as a small, stable entry rather than read from a content
// module. If Contact's copy ever changes, update this block to match.

entries.push({
  id: 'contact',
  page: 'Contact',
  url: '/',
  anchor: 'contact',
  heading: 'Get in Touch',
  text: 'Email: mx.snehashish@gmail.com. ORCID: 0009-0008-6092-1457. LinkedIn: Snehashish Das.',
})

// ───────────────────────────── Write output ─────────────────────────────

const outPath = path.join(__dirname, '..', 'lib', 'search-index.generated.ts')

const header = `// AUTO-GENERATED FILE — do not edit by hand.
//
// Generated by scripts/generate-search-index.mjs from the content modules
// in lib/content/*.ts. It is regenerated automatically every time the site
// is built or the dev server starts (see next.config.mjs), so it always
// reflects the site's current, actual content.

export type SearchEntry = {
  id: string
  page: string
  url: string
  anchor?: string
  heading: string
  text: string
}

export const searchIndex: SearchEntry[] = ${JSON.stringify(entries, null, 2)}
`

writeFileSync(outPath, header, 'utf-8')
console.log(`[search-index] generated ${entries.length} entries -> ${path.relative(process.cwd(), outPath)}`)
