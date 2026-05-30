import SectionHeader from './SectionHeader'

const projects = [
  {
    name: 'stream-vibe',
    desc: 'Full-featured streaming UI with TMDB API integration, dynamic routing for movies and series, swipeable hero carousel, genre toggles, and Formik/Yup form. Mobile-first across 4 breakpoints (375–1920px). Added 30+ unit tests with React Testing Library/Vitest and 19 Playwright e2e tests. Image lazy-loading cut initial load time by 40%.',
    stack: ['Next.js', 'TypeScript', 'TanStack Query', 'Playwright'],
    live: 'https://movie-streaming-lemon.vercel.app',
    code: 'https://github.com/vlada-marchenko/movie_streaming',
  },
  {
    name: 'e-pharmacy',
    desc: 'Independently designed and built a full-stack pharmacy system. JWT auth with token refresh and auto-logout, inventory CRUD with image upload, revenue analytics with sales tracking and low-stock alerts. Statistics page built with Next.js intercepting route modals. Express/MongoDB backend on Render. 5 dashboard modules, responsive across mobile, tablet, and desktop.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
    live: 'https://pharmacy-ten-woad.vercel.app',
    code: 'https://github.com/vlada-marchenko/pharmacy',
    backend: 'https://github.com/vlada-marchenko/pharmacy_backend',
  },
  {
    name: 'read-journey',
    desc: 'Reading tracker SPA with 4 pages — recommended books, personal library, active reading session, and progress statistics. Real-time circular progress charts, session flow management with start/stop/finish states, and form validation across 2 auth forms with Yup.',
    stack: ['React', 'TypeScript', 'CSS Modules', 'Axios'],
    live: 'https://read-journey-pied.vercel.app',
    code: 'https://github.com/vlada-marchenko/read_journey',
  },
  {
    name: 'leleka',
    desc: 'Pregnancy tracker built across a cross-functional team of 13 through agile collaboration. Implemented the journey page state cards and the private week endpoint on the Express backend. After launch, independently diagnosed and restored a broken production deployment: resolved cross-domain auth failures (CORS config, sameSite cookies, httpOnly token constraints) and traced an infinite loading spinner to an unhandled promise rejection. Shipped with zero data loss.',
    stack: ['Next.js', 'Zustand', 'TanStack Query', 'MongoDB'],
    live: 'https://project-stork-front-six.vercel.app',
    code: 'https://github.com/vlada-marchenko/project-stork-front',
    backend: 'https://github.com/vlada-marchenko/backend-project-stork',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-10 py-24 max-w-7xl mx-auto">
      <SectionHeader number="03" title="projects" comment="things I have built" />

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group rounded-md border border-border bg-panel overflow-hidden hover:border-accent/50 hover:shadow-[0_0_24px_rgba(203,166,247,0.10)] transition-all duration-300"
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-surface font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red"></span>
                <span className="w-2 h-2 rounded-full bg-accent3"></span>
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                <span className="ml-2 text-muted">~/projects/{p.name}</span>
              </div>
              <span className="text-muted">main</span>
            </div>

            <div className="p-5 font-mono">
              <h3 className="text-text text-lg mb-2">
                <span className="text-accent">$</span> open{' '}
                <span className="group-hover:text-accent transition-colors">{p.name}</span>
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2 py-1 rounded border border-border text-accent2"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm">
                <a href={p.live} target="_blank" rel="noreferrer" className="text-accent hover:underline decoration-dotted underline-offset-4">
                  → live
                </a>
                <a href={p.code} target="_blank" rel="noreferrer" className="text-muted hover:text-text">
                  → frontend
                </a>
                {p.backend && (
                  <a href={p.backend} target="_blank" rel="noreferrer" className="text-muted hover:text-text">
                    → backend
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
