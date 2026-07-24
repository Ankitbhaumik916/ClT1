import { HudBadge } from './HudBadge'

interface SectionHeadingProps {
  kicker: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

/**
 * One consistent section header used across every section so the kicker badge,
 * title, and optional subtitle share the same rhythm and alignment sitewide.
 */
export function SectionHeading({ kicker, title, subtitle, align = 'left' }: SectionHeadingProps) {
  return (
    <div
      className={`section-heading flex flex-col gap-4 ${
        align === 'center' ? 'items-center text-center' : 'items-start'
      }`}
    >
      <HudBadge label={kicker} />
      <h2 className="font-display font-light text-white text-[clamp(30px,3.6vw,44px)] leading-[1.12] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`measure text-white/60 font-body text-[15px] leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
