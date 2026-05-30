import { JetBrains_Mono, Inter } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jetbrains-mono',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

const BASE_URL = 'https://vlada-marchenko.vercel.app'

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Vlada Marchenko — Frontend Developer',
  description:
    'Frontend Developer specializing in React, Next.js, and TypeScript. I build production-ready web applications — full-stack dashboards, REST APIs, tested and shipped. Available for remote B2B contracts. Based in Hamburg, Germany.',
  authors: [{ name: 'Vlada Marchenko', url: BASE_URL }],
  keywords: [
    'Frontend Developer', 'React', 'Next.js', 'TypeScript', 'TanStack Query',
    'Zustand', 'Node.js', 'MongoDB', 'Vitest', 'Playwright', 'Hamburg', 'B2B',
  ],
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: 'Vlada Marchenko — Frontend Developer',
    description:
      'Frontend Developer specializing in React, Next.js, and TypeScript. Available for remote B2B contracts.',
    siteName: 'Vlada Marchenko Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Vlada Marchenko — Frontend Developer',
    description:
      'Frontend Developer specializing in React, Next.js, and TypeScript. Available for remote B2B contracts.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
