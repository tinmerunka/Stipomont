interface Props {
  overline?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeader({ overline, title, subtitle, centered = true }: Props) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {overline && (
        <p className="text-xs font-semibold tracking-widest uppercase text-stipo-accent mb-3 font-sans">
          {overline}
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold text-stipo-text tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-stipo-muted text-lg leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
