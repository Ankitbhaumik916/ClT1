import { motion } from 'framer-motion'
import { HudBadge } from '../ui/HudBadge'
import { SectionHeading } from '../ui/SectionHeading'

interface ExperienceEntry {
  title: string
  badge: string
  organization: string
  date?: string
  description: string[]
}

export function Experience() {
  const experiences: ExperienceEntry[] = [
    {
      title: 'Research Intern',
      badge: 'RESEARCH_INTERN',
      organization: 'SRMIST, Chennai',
      date: '2022 – Present',
      description: [
        '• Laboratory-based molecular biology experiments and microbial assays',
        '• Therapeutic research approaches and biotechnological applications',
        '• Lead researcher: Essential Oils vs Candida albicans (paper under review)',
      ],
    },
    {
      title: 'Column Chromatography Education',
      badge: 'VOLUNTEER_EDUCATOR',
      organization: 'RARIORA Initiative',
      description: ['Column Chromatography Education for High School Students'],
    },
    {
      title: 'Certifications',
      badge: 'CERTIFIED',
      organization: 'Professional Credentials',
      description: ['C Programming  ·  Bioinformatics'],
    },
  ]

  return (
    <section id="experience" className="section-block bg-white">
      <div className="section-shell">
        <SectionHeading kicker="Experience log" title="Experience" />
      </div>

      {/* Horizontal scroll-snap timeline */}
      <div className="section-shell">
        <div className="-mx-2 snap-x snap-mandatory overflow-x-auto px-2 pb-4">
          <div className="flex min-w-max gap-5">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex w-[300px] shrink-0 snap-start flex-col sm:w-[340px]"
              >
                {/* Year sits above the node (aligned with card content padding) */}
                <div className="mb-2 pl-6 text-[12px] font-medium text-black/55 sm:pl-8">
                  {exp.date ?? ' '}
                </div>

                {/* Tick-mark connector line + node */}
                <div className="relative mb-5 h-6" aria-hidden="true">
                  <div
                    className="absolute inset-x-0 bottom-0 h-3"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(to right, rgba(0,0,0,0.18) 0 1px, transparent 1px 12px)',
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-px bg-black/15" />
                  <div className="absolute bottom-[-4px] left-6 h-2.5 w-2.5 rounded-full bg-black sm:left-8" />
                </div>

                <div className="flex flex-1 flex-col rounded-2xl border border-[rgba(0,0,0,0.12)] bg-white p-6 transition-all duration-300 hover:border-[rgba(0,0,0,0.28)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] sm:p-8">
                  <div className="mb-5">
                    <HudBadge label={exp.badge} />
                  </div>

                  <h3 className="text-[19px] font-medium leading-snug tracking-tight text-black">
                    {exp.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] text-black/55">{exp.organization}</p>

                  <div className="mt-5 space-y-2.5">
                    {exp.description.map((item, i) => (
                      <p key={i} className="text-[14px] leading-relaxed text-black/60">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
