export default function SectionHeader({ number, title, comment }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 font-mono">
        <span className="text-accent/60 text-sm">{number}.</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-text">{title}</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4"></div>
      </div>
      {comment && (
        <p className="font-mono text-sm text-muted mt-2 ml-8">
          <span className="text-accent/50">{'//'}</span> {comment}
        </p>
      )}
    </div>
  )
}
