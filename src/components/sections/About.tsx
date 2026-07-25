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
    <section id="about" className="section-block bg-white">
      <div className="section-shell">
        <SectionHeading kicker="About me" title="Who I Am" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[280px_1fr] lg:gap-16"
        >
          {/* Profile + caption */}
          <div className="mx-auto flex w-full max-w-[280px] flex-col gap-5 lg:mx-0">
            <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.12)] bg-[#F4F4F6]">
              <img
                src="/profile.jpg"
                alt="Dithhi Dasgupta"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-[17px] font-medium tracking-tight text-black">Dithhi Dasgupta</p>
              <p className="mt-1 text-[13px] text-black/55">Research Intern · SRMIST</p>
              <p className="mt-0.5 text-[13px] text-black/40">Chennai, Tamil Nadu, India</p>
            </div>
          </div>

          {/* Narrative + focus + education */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <p className="measure text-[16px] leading-[1.8] text-black/70">
                I'm a 3rd-year Biotechnology Engineering student at SRMIST, Chennai, currently working as
                a Research Intern under Dr. Satish Kumar&nbsp;R. My work bridges wet-lab molecular biology
                with computational tools — from microbial assays to machine-learning-based disease detection.
              </p>
              <p className="measure text-[16px] leading-[1.8] text-black/55">
                I'm driven by the intersection of life sciences and technology, and by research that moves
                from the bench to real therapeutic and diagnostic impact.
              </p>
            </div>

            <div>
              <p className="mb-3 text-[13px] text-black/55">Focus areas</p>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-[rgba(0,0,0,0.12)] bg-white px-4 py-2 text-[11px] font-medium text-black/70"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-[rgba(0,0,0,0.12)] pt-6 text-[13px] text-black/55">
              <span className="font-medium text-black">Education</span>
              <span className="text-black/70">B.Tech Biotechnology</span>
              <span className="text-black/25">·</span>
              <span>SRMIST Chennai</span>
              <span className="text-black/25">·</span>
              <span>2022 – Present</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
