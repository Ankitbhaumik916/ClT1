import { motion } from 'framer-motion'
import { HudBadge } from '../ui/HudBadge'
import { TerminalText } from '../ui/TerminalText'
import { GoldRuler } from '../ui/GoldRuler'

/** Single-row bottom ticker: ROLE · FOCUS · BASED IN · CGPA · PROJECTS · AWARDS */
const glanceItems = [
  { label: 'Role', value: 'Biotechnology Engineer' },
  { label: 'Focus', value: 'Molecular Biology · ML' },
  { label: 'Based in', value: 'Chennai, India' },
  { label: 'CGPA', value: '8.37' },
  { label: 'Projects', value: '3' },
  { label: 'Awards', value: '2' },
]

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col">
      {/* ---- Main area: identity confined to the left third, vertically centered ---- */}
      <div className="flex flex-1 items-center pt-20 pb-10">
        <div className="section-shell w-full">
          <div className="grid w-full gap-8 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-start justify-center gap-6 lg:col-span-1"
            >
              <HudBadge label="BIOTECH_ENGINEER" />

              <h1
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 'clamp(44px, 5vw, 68px)',
                  fontWeight: 300,
                  lineHeight: 1.03,
                  letterSpacing: '-0.02em',
                  color: 'white',
                }}
              >
                Dithhi
                <br />
                Dasgupta
              </h1>

              <p
                className="font-mono text-teal-bright"
                style={{ fontSize: 'clamp(13px, 1.5vw, 16px)', minHeight: '1.6em' }}
              >
                <TerminalText text="Biotechnology Engineer & Research Enthusiast" delay={900} />
              </p>

              <p className="text-[15px] leading-relaxed text-white/65">
                Bridging wet-lab molecular biology with computational tools — from microbial assays to
                machine-learning-based disease detection.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="rounded-full border border-teal-bright/40 bg-teal-bright/10 px-6 py-3 font-mono text-[13px] tracking-wide text-teal-bright transition-all hover:bg-teal-bright/20 hover:shadow-[0_0_24px_rgba(239,206,150,0.3)]"
                >
                  View Research
                </button>
                <button
                  type="button"
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/in/dithhi-dasgupta-21b16834a?utm_source=share_via&utm_content=profile&utm_medium=member_android',
                      '_blank'
                    )
                  }
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-mono text-[13px] tracking-wide text-white transition-colors hover:bg-white/10"
                >
                  LinkedIn
                </button>
              </div>
            </motion.div>

            {/* Right two-thirds intentionally open so the DNA video reads through */}
            <div className="hidden lg:col-span-2 lg:block" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* ---- Bottom: ruler directly above the full-width AT A GLANCE ticker ---- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="w-full"
      >
        <GoldRuler />

        <div
          className="w-full border-t border-white/10"
          style={{
            background: 'rgba(10,10,10,0.5)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <div className="flex items-stretch overflow-x-auto">
            {glanceItems.map((item) => (
              <div
                key={item.label}
                className="flex min-w-[150px] flex-1 flex-col gap-1.5 border-l border-white/10 px-5 py-4 first:border-l-0 sm:px-6"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-teal-bright/75">
                  {item.label}
                </span>
                <span className="whitespace-nowrap text-[14px] font-medium text-white/90">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
