import SectionHeader from './SectionHeader'

const projects = [
  {
    name: 'stream-vibe',
    desc: 'Movie streaming UI with TMDB API, dynamic routing, swipeable carousel, and 30+ unit tests + 19 e2e tests. Image lazy-loading cut initial load by 40%.',
    stack: ['Next.js', 'TypeScript', 'TanStack Query', 'Playwright'],
    live: '#',
    code: '#',
  },
  {
    name: 'e-pharmacy',
    desc: 'Full-stack pharmacy management system — JWT auth, inventory CRUD with image upload, revenue analytics, and an Express/MongoDB backend deployed on Render.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
    live: '#',
    code: '#',
  },
  {
    name: 'read-journey',
    desc: 'Reading tracker SPA with real-time circular progress charts, session flow management, and form validation across 4 pages.',
    stack: ['React', 'TypeScript', 'CSS Modules', 'Axios'],
    live: '#',
    code: '#',
  },
  {
    name: 'leleka',
    desc: 'Pregnancy tracker built with a cross-functional team of 13. Independently restored a broken production deployment within 14 hours — CORS, cookies, and a promise rejection.',
    stack: ['Next.js', 'Zustand', 'TanStack Query', 'MongoDB'],
    live: '#',
    code: '#',
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
                <a
                  href={p.live}
                  className="text-accent hover:underline decoration-dotted underline-offset-4"
                >
                  → live
                </a>
                <a
                  href={p.code}
                  className="text-muted hover:text-text"
                >
                  → source
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
