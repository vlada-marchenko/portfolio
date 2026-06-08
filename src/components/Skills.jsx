import SectionHeader from './SectionHeader'

const groups = [
  {
    title: 'frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS Modules'],
  },
  {
    title: 'state & data',
    items: ['TanStack Query', 'Zustand', 'Axios', 'REST APIs', 'Firebase Auth', 'JWT'],
  },
  {
    title: 'testing',
    items: ['Vitest', 'React Testing Library', 'Playwright'],
  },
  {
    title: 'backend & tools',
    items: ['Node.js', 'Express', 'MongoDB', 'Git', 'Figma', 'Vercel'],
  },
  {
    title: 'ai tools',
    items: ['Claude', 'Claude Code', 'GitHub Copilot', 'Gemini'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="px-4 sm:px-6 lg:px-10 py-24 max-w-7xl mx-auto">
      <SectionHeader number="02" title="skills" comment="what I work with" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 font-mono">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded-md border border-border bg-panel p-5 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(203,166,247,0.08)] transition-all duration-300"
          >
            <div className="text-sm text-muted mb-3">
              <span className="text-accent4">const</span>{' '}
              <span className="text-accent3">{g.title.replace(/ /g, '_')}</span>{' '}
              <span className="text-text">= [</span>
            </div>
            <ul className="space-y-1 text-sm pl-4">
              {g.items.map((item) => (
                <li key={item} className="text-accent">
                  '{item}'<span className="text-text">,</span>
                </li>
              ))}
            </ul>
            <div className="text-sm text-text mt-2">]</div>
          </div>
        ))}
      </div>
    </section>
  )
}
