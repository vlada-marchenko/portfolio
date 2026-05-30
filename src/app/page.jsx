import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vlada Marchenko',
  jobTitle: 'Frontend Developer',
  description:
    'Frontend Developer specializing in React, Next.js, and TypeScript. I build production-ready web applications — from authentication systems and REST API integrations to full-stack dashboards with MongoDB backends. Available for remote B2B contracts.',
  email: 'vvvvadya44@gmail.com',
  url: 'https://vlada-marchenko.vercel.app',
  address: { '@type': 'PostalAddress', addressLocality: 'Hamburg', addressCountry: 'DE' },
  knowsAbout: [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'TanStack Query', 'Zustand',
    'Tailwind CSS', 'CSS Modules', 'HTML5', 'Node.js', 'Express', 'MongoDB',
    'REST APIs', 'JWT', 'Firebase Auth', 'Vitest', 'React Testing Library', 'Playwright',
    'Git', 'Figma', 'Vercel',
  ],
  sameAs: [
    'https://github.com/vlada-marchenko',
    'https://linkedin.com/in/vlada-marchenko',
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'GoIT Fullstack Development — Career Transition Program',
    description: '872 hours of project-based training in React, Next.js, TypeScript, Node.js, and MongoDB.',
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
