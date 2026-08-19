import { searchIndex, type SearchEntry } from '@/lib/search-index.generated'

export type SearchResult = {
  entry: SearchEntry
  score: number
  /** Index into entry.text where the best match window starts (for snippet building). */
  matchIndex: number
}

export type SnippetPart = {
  text: string
  match: boolean
}

const SNIPPET_RADIUS = 90 // characters of context shown on each side of a match

function normalize(value: string): string {
  return value.toLowerCase().trim()
}

/** Splits a query into individual lowercase tokens, ignoring empty fragments. */
export function tokenize(query: string): string[] {
  return normalize(query)
    .split(/\s+/)
    .map((t) => t.trim())
    .filter(Boolean)
}

/**
 * Searches the static index for entries matching every token in the query
 * (case-insensitive, partial-word matches allowed). Results are ranked by a
 * simple relevance score: matches in the heading score highest, followed by
 * how early and how often the terms appear in the body text.
 */
export function search(query: string, limit = 30): SearchResult[] {
  const tokens = tokenize(query)
  if (tokens.length === 0) return []

  const results: SearchResult[] = []

  for (const entry of searchIndex) {
    const heading = normalize(entry.heading)
    const page = normalize(entry.page)
    const text = normalize(entry.text)
    const haystack = `${heading} ${page} ${text}`

    // Every token must appear somewhere in the entry for it to count as a match.
    const allTokensMatch = tokens.every((token) => haystack.includes(token))
    if (!allTokensMatch) continue

    let score = 0
    let firstBodyIndex = -1

    for (const token of tokens) {
      if (heading.includes(token)) score += 50
      const bodyIndex = text.indexOf(token)
      if (bodyIndex !== -1) {
        score += 10
        // Earlier matches are slightly more relevant.
        score += Math.max(0, 10 - Math.floor(bodyIndex / 40))
        if (firstBodyIndex === -1 || bodyIndex < firstBodyIndex) {
          firstBodyIndex = bodyIndex
        }
      }
    }

    // Slight boost for shorter, denser entries (the match is a bigger share of the text).
    score += Math.max(0, 20 - Math.floor(text.length / 200))

    results.push({
      entry,
      score,
      matchIndex: firstBodyIndex === -1 ? 0 : firstBodyIndex,
    })
  }

  results.sort((a, b) => b.score - a.score)
  return results.slice(0, limit)
}

/**
 * Builds a highlighted snippet of body text centred on the first match,
 * split into plain/matched segments so the UI can render the matched
 * portions distinctly.
 */
export function buildSnippet(entry: SearchEntry, matchIndex: number, tokens: string[]): SnippetPart[] {
  const text = entry.text
  const start = Math.max(0, matchIndex - SNIPPET_RADIUS)
  const end = Math.min(text.length, matchIndex + SNIPPET_RADIUS)
  let excerpt = text.slice(start, end)

  const prefix = start > 0 ? '…' : ''
  const suffix = end < text.length ? '…' : ''
  excerpt = `${prefix}${excerpt}${suffix}`

  if (tokens.length === 0) return [{ text: excerpt, match: false }]

  // Build a single regex that matches any of the query tokens, case-insensitively.
  const escaped = tokens
    .filter(Boolean)
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .sort((a, b) => b.length - a.length) // longer tokens first so they win overlaps
  if (escaped.length === 0) return [{ text: excerpt, match: false }]

  const regex = new RegExp(`(${escaped.join('|')})`, 'gi')
  const parts: SnippetPart[] = []
  let lastIndex = 0
  let m: RegExpExecArray | null

  while ((m = regex.exec(excerpt)) !== null) {
    if (m.index > lastIndex) {
      parts.push({ text: excerpt.slice(lastIndex, m.index), match: false })
    }
    parts.push({ text: m[0], match: true })
    lastIndex = m.index + m[0].length
    if (m.index === regex.lastIndex) regex.lastIndex++ // avoid infinite loop on zero-length match
  }
  if (lastIndex < excerpt.length) {
    parts.push({ text: excerpt.slice(lastIndex), match: false })
  }

  return parts.length > 0 ? parts : [{ text: excerpt, match: false }]
}

/** A small set of example terms shown as a starting point / no-results suggestion. */
export const exampleSearchTerms = [
  'Ambedkar',
  'Phule',
  'Buddhism',
  'Balangir',
  'publications',
  'fieldwork',
  'JNU',
]
