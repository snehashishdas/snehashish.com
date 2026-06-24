import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const siteUrl = 'https://snehashish.com'
const siteName = 'Snehashish Das'
const siteDescription =
  'Sociologist, Writer, Researcher, and PhD Scholar at Jawaharlal Nehru University. Research interests include caste, social movements, anti-caste thought, African American studies, Buddhism, recognition, redistribution, and social theory.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,

  // No generator tag — removes all template/V0 fingerprints
  generator: undefined,

  keywords: [
    'Snehashish Das',
    'Sociologist',
    'Writer',
    'Researcher',
    'PhD Scholar',
    'Jawaharlal Nehru University',
    'JNU',
    'Anti-Caste',
    'Caste Studies',
    'Social Movements',
    'African American Studies',
    'Buddhism',
    'Recognition',
    'Redistribution',
    'Social Theory',
    'Ambedkar',
    'Western Odisha',
    'Folk Culture',
    'Gender Studies',
  ],

  authors: [{ name: 'Snehashish Das', url: siteUrl }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    siteName,
    title: siteName,
    description:
      'Sociologist, Writer, Researcher, and PhD Scholar at Jawaharlal Nehru University.',
    url: siteUrl,
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Snehashish Das — Sociologist, Writer, Researcher',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description:
      'Sociologist, Writer, Researcher, and PhD Scholar at Jawaharlal Nehru University.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Snehashish Das — Sociologist, Writer, Researcher',
      },
    ],
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/icon.svg', color: '#c9a84c' },
    ],
  },

  manifest: '/site.webmanifest',
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Snehashish Das',
  url: siteUrl,
  jobTitle: ['Sociologist', 'Writer', 'Researcher', 'PhD Scholar'],
  affiliation: {
    '@type': 'CollegeOrUniversity',
    name: 'Jawaharlal Nehru University',
    url: 'https://www.jnu.ac.in',
  },
  description: siteDescription,
  knowsAbout: [
    'Caste',
    'Anti-Caste Movements',
    'Social Movements',
    'African American Studies',
    'Buddhism',
    'Recognition',
    'Redistribution',
    'Social Theory',
    'Cultural Sociology',
    'Gender Studies',
    'Folk Culture',
    'Historical Methods',
    'Ambedkarian Thought',
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

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  author: {
    '@type': 'Person',
    name: 'Snehashish Das',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta name="theme-color" content="#0f1117" />
      </head>
      <body className="min-h-screen font-sans antialiased">
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
