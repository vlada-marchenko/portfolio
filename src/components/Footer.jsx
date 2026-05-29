export default function Footer() {
  return (
    <footer className="border-t border-border mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 font-mono text-xs flex flex-wrap items-center justify-between gap-2">
        <span className="text-muted">
          <span className="text-accent">$</span> echo "built with Next.js · TypeScript · Tailwind"
        </span>
        <span className="text-muted">© {new Date().getFullYear()} Vlada Marchenko</span>
      </div>
    </footer>
  )
}
