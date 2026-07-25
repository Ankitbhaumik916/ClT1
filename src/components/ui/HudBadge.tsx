interface HudBadgeProps {
  label: string
  variant?: 'default' | 'amber' | 'green' | 'violet'
}

/**
 * Minimal tag pill. In the black-and-white system all variants render
 * monochrome; `variant` only drives the small status dot so state stays
 * readable without introducing colour.
 */
export function HudBadge({ label, variant = 'default' }: HudBadgeProps) {
  const showDot = variant !== 'default'

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,0,0,0.12)] bg-white px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-black/70">
      {showDot && <span className="h-1.5 w-1.5 rounded-full bg-black/45" />}
      {label.replace(/_/g, ' ')}
    </span>
  )
}
