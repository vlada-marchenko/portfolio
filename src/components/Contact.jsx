import SectionHeader from './SectionHeader'

export default function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-10 py-24 max-w-7xl mx-auto">
      <SectionHeader number="04" title="contact-me" comment="let's build something" />

      <div className="grid md:grid-cols-2 gap-8 font-mono">
        <div className="space-y-4 text-text leading-relaxed">
          <p className="text-muted">// available for remote B2B contracts</p>
          <p>
            I reply within a day — usually faster. If you have a project that
            needs clean, tested frontend work delivered from Figma to production,
            let's talk.
          </p>
          <p>
            <span className="text-accent4">const</span>{' '}
            <span className="text-accent3">email</span>{' '}
            <span className="text-text">=</span>{' '}
            <a
              href="mailto:vvvvadya44@gmail.com"
              className="text-accent hover:underline decoration-dotted underline-offset-4"
            >
              'vvvvadya44@gmail.com'
            </a>
          </p>
          <div className="flex gap-4 pt-2">
            <a href="https://github.com/vvvvadya" target="_blank" rel="noreferrer" className="text-muted hover:text-accent">github</a>
            <span className="text-border">/</span>
            <a href="https://linkedin.com/in/vlada-marchenko" target="_blank" rel="noreferrer" className="text-muted hover:text-accent2">linkedin</a>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); alert('Thanks! (wire this up to your form service)') }}
          className="rounded-md border border-border bg-panel p-5 space-y-3"
        >
          <div className="text-xs text-muted mb-2">// message.tsx</div>
          <Field label="_name" type="text" placeholder="your name" />
          <Field label="_email" type="email" placeholder="you@domain.com" />
          <Field label="_message" textarea placeholder="say hi..." />
          <button
            type="submit"
            className="mt-2 px-4 py-2 border border-accent/40 text-accent rounded hover:bg-accent/10 transition-colors text-sm"
          >
            $ submit-message
          </button>
        </form>
      </div>
    </section>
  )
}

function Field({ label, type = 'text', textarea, placeholder }) {
  const cls = "w-full bg-bg border border-border rounded px-3 py-2 text-sm text-text focus:outline-none focus:border-accent/60 transition-colors"
  return (
    <label className="block">
      <span className="block text-xs text-accent2 mb-1">{label}</span>
      {textarea
        ? <textarea rows="4" placeholder={placeholder} className={cls} />
        : <input type={type} placeholder={placeholder} className={cls} />}
    </label>
  )
}
