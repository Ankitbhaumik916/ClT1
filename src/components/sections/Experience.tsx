import { motion } from 'framer-motion'
import { HudBadge } from '../ui/HudBadge'
import { SectionHeading } from '../ui/SectionHeading'
import { GlassCard } from '../ui/GlassCard'

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
    <section id="experience" className="section-block">
      <div className="section-shell">
        <SectionHeading kicker="EXPERIENCE_LOG" title="Experience" />
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
                {/* Year sits above the node */}
                <div className="mb-2 pl-6 font-mono text-[12px] text-teal-bright">
                  {exp.date ?? ' '}
                </div>

                {/* Ruler-motif connector line with tick marks + node */}
                <div className="relative mb-5 h-6" aria-hidden="true">
                  <div
                    className="absolute inset-x-0 bottom-0 h-3"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(to right, rgba(239,206,150,0.30) 0 1px, transparent 1px 12px)',
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-px bg-teal-bright/25" />
                  <div
                    className="absolute bottom-[-5px] left-6 h-2.5 w-2.5 rounded-full bg-teal-bright"
                    style={{ boxShadow: '0 0 10px rgba(239,206,150,0.7)' }}
                  />
                </div>

                <GlassCard className="flex flex-1 flex-col p-6">
                  <div className="mb-4">
                    <HudBadge label={exp.badge} />
                  </div>

                  <h3 className="font-display text-[19px] leading-snug text-white">{exp.title}</h3>
                  <p className="mt-1.5 font-mono text-[13px] text-teal-bright">{exp.organization}</p>

                  <div className="mt-4 space-y-2.5">
                    {exp.description.map((item, i) => (
                      <p key={i} className="text-[14px] leading-relaxed text-white/70 font-body">
                        {item}
                      </p>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
