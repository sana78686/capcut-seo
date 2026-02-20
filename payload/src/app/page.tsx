import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>CapCut SEO – Payload CMS</h1>
      <p>This Next.js app runs Payload. Your frontend (Vue / Nuxt) is separate.</p>
      <p>
        <Link href="/admin">Open Payload Admin →</Link>
      </p>
    </main>
  )
}
