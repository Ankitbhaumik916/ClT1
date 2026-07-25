interface SectionHeadingProps {
  kicker: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

/**
 * Consistent section header for the minimal system:
 * a small dot + kicker label above a light-weight display title.
 */
export function SectionHeading({ kicker, title, subtitle, align = 'left' }: SectionHeadingProps) {
  return (
    <div
      className={`section-heading flex flex-col ${
        align === 'center' ? 'items-center text-center' : 'items-start'
      }`}
    >
      <div className="flex items-center gap-2.5">
        <span className="h-2 w-2 shrink-0 rounded-full bg-black" />
        <span className="text-[13px] text-black/55">{kicker.replace(/_/g, ' ')}</span>
      </div>

      <h2
        className="mt-4 font-light text-black"
        style={{
          fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p className={`measure mt-4 text-[15px] leading-relaxed text-black/55 ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
