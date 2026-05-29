import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-10 py-24 max-w-7xl mx-auto">
      <SectionHeader number="01" title="about-me" comment="who am I" />

      <div className="grid md:grid-cols-3 gap-8 font-mono">
        <div className="md:col-span-2 space-y-4 text-text leading-relaxed">
          <p>
            <span className="text-muted">/**</span>
          </p>
          <p className="pl-2 border-l-2 border-accent/20 ml-1">
            <span className="text-muted"> * </span>
            I'm Vlada — a Frontend Developer based in Hamburg, specialising in
            React, Next.js, and TypeScript. I build production-ready web
            applications, from authentication systems and REST API integrations
            to full-stack dashboards backed by MongoDB.
          </p>
          <p className="pl-2 border-l-2 border-accent/20 ml-1">
            <span className="text-muted"> * </span>
            I take projects from Figma spec to deployed product — writing clean,
            tested code independently. I self-taught testing beyond the
            curriculum: unit tests with Vitest & React Testing Library, and e2e
            with Playwright.
          </p>
          <p className="pl-2 border-l-2 border-accent/20 ml-1">
            <span className="text-muted"> * </span>
            Previously a Night Auditor at 25hours Hotel, where I learned to
            diagnose and fix problems autonomously under pressure. That mindset
            transferred directly to debugging production incidents at 2 a.m.
          </p>
          <p><span className="text-muted"> */</span></p>
        </div>

        <aside className="rounded-md border border-border bg-panel p-5 font-mono text-sm space-y-3 h-fit">
          <div className="text-muted mb-2">// quick-info</div>
          <Row k="status" v="open to B2B" vClass="text-accent" />
          <Row k="based" v="'Hamburg, DE'" vClass="text-accent3" />
          <Row k="focus" v="'frontend'" vClass="text-accent3" />
          <Row k="testing" v="'Vitest, Playwright'" vClass="text-accent3" />
          <Row k="languages" v="4 spoken" vClass="text-accent2" />
        </aside>
      </div>
    </section>
  )
}

function Row({ k, v, vClass }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-accent2">{k}</span>
      <span className={vClass}>{v}</span>
    </div>
  )
}
