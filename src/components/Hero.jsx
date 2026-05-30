export default function Hero() {
  return (
    <section id="home" className="relative px-4 sm:px-6 lg:px-10 pt-20 pb-32 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: intro */}
        <div className="space-y-6 animate-fadeUp">
          <p className="text-muted font-mono text-sm">Hi all. I am</p>
          <h1 className="font-mono font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-text">
            Vlada
            <br />
            <span className="text-accent">Marchenko</span>
          </h1>
          <p className="font-mono text-xl text-accent2">&gt; Frontend Developer</p>

          <div className="pt-6 font-mono text-sm text-muted leading-relaxed space-y-1">
            <p><span className="text-muted">{'//'}</span> available for remote B2B contracts & employment</p>
            <p><span className="text-muted">{'//'}</span> check out my work on GitHub</p>
            <p>
              <span className="text-accent4">const</span>{' '}
              <span className="text-accent3">githubLink</span>{' '}
              <span className="text-text">=</span>{' '}
              <a
                href="https://github.com/vlada-marchenko"
                target="_blank"
                rel="noreferrer"
                className="text-accent2 underline decoration-dotted underline-offset-4 hover:text-accent"
              >
                "https://github.com/vlada-marchenko"
              </a>
            </p>
          </div>
        </div>

        {/* Right: code window */}
        <div className="relative animate-fadeUp" style={{ animationDelay: '0.15s' }}>
          <div className="rounded-lg border border-border bg-panel shadow-2xl shadow-black/50 overflow-hidden">
            {/* window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface">
              <span className="w-3 h-3 rounded-full bg-red"></span>
              <span className="w-3 h-3 rounded-full bg-accent3"></span>
              <span className="w-3 h-3 rounded-full bg-accent"></span>
              <span className="ml-3 font-mono text-xs text-muted">portfolio.tsx</span>
            </div>
            {/* code */}
            <pre className="p-5 font-mono text-[13px] leading-relaxed overflow-x-auto">
<code>
<span className="text-muted">  1  </span><span className="text-accent4">const</span> <span className="text-accent3">developer</span> <span className="text-text">= {'{'}</span>{'\n'}
<span className="text-muted">  2  </span>  <span className="text-accent2">name</span><span className="text-text">:</span> <span className="text-accent">'Vlada Marchenko'</span><span className="text-text">,</span>{'\n'}
<span className="text-muted">  3  </span>  <span className="text-accent2">role</span><span className="text-text">:</span> <span className="text-accent">'Frontend Developer'</span><span className="text-text">,</span>{'\n'}
<span className="text-muted">  4  </span>  <span className="text-accent2">location</span><span className="text-text">:</span> <span className="text-accent">'Hamburg, Germany 🇩🇪'</span><span className="text-text">,</span>{'\n'}
<span className="text-muted">  5  </span>  <span className="text-accent2">stack</span><span className="text-text">: [</span>{'\n'}
<span className="text-muted">  6  </span>    <span className="text-accent">'React'</span><span className="text-text">,</span> <span className="text-accent">'Next.js'</span><span className="text-text">,</span>{'\n'}
<span className="text-muted">  7  </span>    <span className="text-accent">'TypeScript'</span><span className="text-text">,</span> <span className="text-accent">'Node.js'</span>{'\n'}
<span className="text-muted">  8  </span>  <span className="text-text">],</span>{'\n'}
<span className="text-muted">  9  </span>  <span className="text-accent2">available</span><span className="text-text">:</span> <span className="text-accent3">true</span><span className="text-text">,</span>{'\n'}
<span className="text-muted"> 10  </span><span className="text-text">{'}'}</span>{'\n'}
<span className="text-muted"> 11  </span>{'\n'}
<span className="text-muted"> 12  </span><span className="text-muted">// clean code · tested · shipped</span>{'\n'}
<span className="text-muted"> 13  </span><span className="text-text">{'>'}</span> <span className="inline-block w-2 h-4 bg-accent align-middle animate-blink"></span>
</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
