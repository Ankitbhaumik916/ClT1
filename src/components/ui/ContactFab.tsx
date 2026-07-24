import { Mail } from 'lucide-react'

/**
 * Floating "Contact" pill fixed to the bottom-right of the viewport.
 * Sits above the mobile bottom tab bar so the two never collide.
 */
export function ContactFab() {
  return (
    <a
      href="#contact"
      onClick={(e) => {
        e.preventDefault()
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }}
      className="fixed bottom-20 right-4 z-50 flex items-center gap-2 rounded-full border border-teal-bright/40 px-5 py-3 font-mono text-[13px] tracking-wide text-teal-bright shadow-[0_8px_30px_rgba(0,0,0,0.45)] transition-all hover:bg-teal-bright/20 hover:shadow-[0_0_28px_rgba(239,206,150,0.35)] md:bottom-6 md:right-6"
      style={{
        background: 'rgba(239,206,150,0.12)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <Mail className="h-4 w-4" />
      Contact
    </a>
  )
}
