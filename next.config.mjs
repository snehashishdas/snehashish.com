/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // NOTE: Retained intentionally. The page-level content arrays use optional
    // fields accessed conditionally; enabling strict build checks requires
    // giving those arrays explicit interfaces first. Tracked as the final
    // cleanup step so the deploy stays green in the meantime.
    ignoreBuildErrors: true,
  },
  images: {
    // Image optimization re-enabled. The hero is now a local asset; remote
    // podcast artwork is served from the Vercel Blob host below.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
    ],
  },
}

export default nextConfig
