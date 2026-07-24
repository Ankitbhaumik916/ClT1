import { useState } from 'react'
import { User, FlaskConical, Briefcase, Cpu, Trophy, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'About', icon: User },
  { label: 'Projects', icon: FlaskConical },
  { label: 'Experience', icon: Briefcase },
  { label: 'Skills', icon: Cpu },
  { label: 'Achievements', icon: Trophy },
]

const panelStyle = {
  background: 'rgba(10,10,10,0.62)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
} as const

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  const Logo = (
    <button
      type="button"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setIsOpen(false)
      }}
      className="flex items-center gap-2.5"
      aria-label="Back to top"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-teal-bright/30 bg-teal-bright/10 font-display text-sm font-semibold text-teal-bright">
        DD
      </span>
      <span className="font-display text-sm font-medium tracking-wide text-white/90">
        Dithhi Dasgupta
      </span>
    </button>
  )

  return (
    <>
      {/* ---------- Desktop: fixed vertical sidebar ---------- */}
      <aside
        className="fixed left-0 top-0 z-50 hidden h-screen w-[220px] flex-col border-r border-white/10 px-5 py-6 md:flex"
        style={panelStyle}
      >
        <div className="mb-10">{Logo}</div>

        <nav className="flex flex-col gap-1">
          {navItems.map(({ label, icon: Icon }) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(label.toLowerCase())
              }}
              className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-white/65 transition-colors hover:bg-white/5 hover:text-teal-bright"
            >
              <Icon className="h-[18px] w-[18px] shrink-0 text-white/45 transition-colors group-hover:text-teal-bright" />
              {label}
            </a>
          ))}
        </nav>

        <div className="mt-auto font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
          [ PORTFOLIO ]
        </div>
      </aside>

      {/* ---------- Mobile: top bar with logo + hamburger ---------- */}
      <div
        className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-white/10 px-4 py-3 md:hidden"
        style={panelStyle}
      >
        {Logo}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 text-white"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-drawer"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ---------- Mobile: hamburger drawer ---------- */}
      {isOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-x-0 top-[57px] z-40 border-b border-white/10 p-4 md:hidden"
          style={{ ...panelStyle, background: 'rgba(10,10,10,0.92)' }}
        >
          <nav className="flex flex-col gap-1">
            {navItems.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(label.toLowerCase())
                }}
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-teal-bright"
              >
                <Icon className="h-[18px] w-[18px] text-white/45" />
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* ---------- Mobile: bottom tab bar (collapsed sidebar) ---------- */}
      <nav
        className="fixed inset-x-0 bottom-0 z-50 flex items-stretch justify-around border-t border-white/10 md:hidden"
        style={panelStyle}
        aria-label="Section navigation"
      >
        {navItems.map(({ label, icon: Icon }) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection(label.toLowerCase())
            }}
            className="flex flex-1 flex-col items-center gap-1 px-1 py-2.5 text-white/60 transition-colors hover:text-teal-bright"
          >
            <Icon className="h-[18px] w-[18px]" />
            <span className="text-[9px] font-medium leading-none">{label}</span>
          </a>
        ))}
      </nav>
    </>
  )
}
