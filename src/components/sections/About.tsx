import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'

const focusAreas = [
  'Molecular Biology',
  'Bioinformatics',
  'Machine Learning',
  'Microbiology',
  'Antimicrobial Research',
]

export function About() {
  return (
    <section id="about" className="section-block">
      <div className="section-shell">
        <SectionHeading kicker="ABOUT_ME" title="Who I Am" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[280px_1fr] lg:gap-16"
        >
          {/* Profile + caption */}
          <div className="mx-auto flex w-full max-w-[280px] flex-col gap-5 lg:mx-0">
            <div
              className="aspect-square w-full overflow-hidden rounded-3xl border border-white/10"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              <div
                className="flex h-full w-full items-center justify-center"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <img
                  src="/profile.jpg"
                  alt="Dithhi Dasgupta"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <p className="font-display text-lg text-white">Dithhi Dasgupta</p>
              <p className="mt-1 font-mono text-[12px] text-teal-bright">Research Intern · SRMIST</p>
              <p className="mt-1 text-[13px] text-white/50">Chennai, Tamil Nadu, India</p>
            </div>
          </div>

          {/* Narrative + focus + education */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <p className="measure text-[16px] leading-[1.8] text-white/80 font-body">
                I'm a 3rd-year Biotechnology Engineering student at SRMIST, Chennai, currently working as
                a Research Intern under Dr. Satish Kumar&nbsp;R. My work bridges wet-lab molecular biology
                with computational tools — from microbial assays to machine-learning-based disease detection.
              </p>
              <p className="measure text-[16px] leading-[1.8] text-white/70 font-body">
                I'm driven by the intersection of life sciences and technology, and by research that moves
                from the bench to real therapeutic and diagnostic impact.
              </p>
            </div>

            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
                Focus areas
              </p>
              <div className="flex flex-wrap gap-2.5">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-teal-bright/25 bg-teal-bright/[0.08] px-4 py-1.5 text-[13px] text-white/85"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-white/8 pt-6 font-mono text-[13px] text-white/55">
              <span className="text-teal-bright">EDU</span>
              <span className="text-white/80">B.Tech Biotechnology</span>
              <span className="text-white/30">·</span>
              <span>SRMIST Chennai</span>
              <span className="text-white/30">·</span>
              <span>2022 – Present</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
