import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, X } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

const navItems = ['About', 'Projects', 'Experience', 'Skills', 'Achievements', 'Contact']

/** Brand mark: two rounded rectangles rotated -35deg */
function LogoMark() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <g transform="rotate(-35 13 13)">
        <rect x="6" y="2" width="5.5" height="22" rx="2.75" fill="#000000" />
        <rect x="14.5" y="7" width="5.5" height="12" rx="2.75" fill="#000000" />
      </g>
    </svg>
  )
}

/** 4-dot grid mark for the right-hand pill button */
function GridDots() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <circle cx="3.5" cy="3.5" r="1.6" fill="#ffffff" />
      <circle cx="8.5" cy="3.5" r="1.6" fill="#ffffff" />
      <circle cx="3.5" cy="8.5" r="1.6" fill="#ffffff" />
      <circle cx="8.5" cy="8.5" r="1.6" fill="#ffffff" />
    </svg>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-start justify-between p-4 md:px-8 md:py-6"
    >
      {/* ---------- Left cluster ---------- */}
      <div className="pointer-events-auto flex items-center gap-2 md:gap-3">
        {/* Logo + brand */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2"
          aria-label="Back to top"
        >
          <LogoMark />
          <span className="hidden text-[15px] font-medium tracking-tight text-black md:inline">
            Dithhi Dasgupta
          </span>
        </button>

        {/* Menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          className="flex items-center gap-2 rounded-full bg-black py-1.5 pl-1.5 pr-3.5 transition-opacity hover:opacity-85"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white md:h-8 md:w-8">
            {isOpen ? (
              <X size={12} strokeWidth={3} className="text-black" />
            ) : (
              <Plus size={12} strokeWidth={3} className="text-black" />
            )}
          </span>
          <span className="text-[11px] font-medium text-white">Menu</span>
        </button>

        {/* Tag pill */}
        <div className="hidden items-center gap-2 rounded-full bg-[#F4F4F6] px-4 py-2 md:flex">
          <span className="text-[11px] font-medium text-black/70">Molecular Biology</span>
          <span className="h-1 w-1 rounded-full bg-black/25" />
          <span className="text-[11px] font-medium text-black/70">Bioinformatics</span>
        </div>
      </div>

      {/* ---------- Right cluster ---------- */}
      <div className="pointer-events-auto flex items-center">
        <button
          type="button"
          onClick={() => scrollToSection('projects')}
          className="flex items-center gap-2 rounded-full bg-[#F4F4F6] py-1.5 pl-1.5 pr-1.5 transition-opacity hover:opacity-85 md:pr-4"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black md:h-8 md:w-8">
            <GridDots />
          </span>
          <span className="hidden text-[11px] font-medium text-black/70 md:inline">
            Research Portfolio
          </span>
        </button>
      </div>

      {/* ---------- Menu dropdown ---------- */}
      {isOpen && (
        <div
          id="nav-menu"
          className="pointer-events-auto absolute left-4 top-[68px] w-[220px] rounded-2xl border border-black/10 bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.12)] md:left-8 md:top-[84px]"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.toLowerCase())
              }}
              className="block rounded-xl px-3 py-2.5 text-[13px] font-medium text-black/70 transition-colors hover:bg-[#F4F4F6] hover:text-black"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  )
}
