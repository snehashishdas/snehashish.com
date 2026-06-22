import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const siteUrl = 'https://snehashishdas.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Snehashish Das',
    template: '%s | Snehashish Das',
  },
  description:
    'Academic portfolio of Snehashish Das — Sociologist, Writer, and Researcher working on anti-caste movements, folk cultures, religion, and gender in Western Odisha, India.',
  generator: undefined,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    siteName: 'Snehashish Das',
    title: 'Snehashish Das',
    description:
      'Sociologist, Writer, and Researcher working on anti-caste movements, folk cultures, religion, and gender in Western Odisha, India.',
    url: siteUrl,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Snehashish Das',
    description:
      'Sociologist, Writer, and Researcher working on anti-caste movements, folk cultures, religion, and gender in Western Odisha, India.',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Snehashish Das',
  url: siteUrl,
  jobTitle: 'Doctoral Candidate in Sociology',
  affiliation: {
    '@type': 'CollegeOrUniversity',
    name: 'Jawaharlal Nehru University',
  },
  knowsAbout: [
    'Anti-Caste Movements',
    'Cultural Sociology',
    'Gender Studies',
    'Folk Culture',
    'Religion Studies',
    'Historical Methods',
  ],
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'ORCID',
    value: '0009-0008-6092-1457',
  },
  sameAs: [
    'https://orcid.org/0009-0008-6092-1457',
    'https://www.linkedin.com/in/snehashish-das-283401187',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="min-h-screen font-sans antialiased">
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
