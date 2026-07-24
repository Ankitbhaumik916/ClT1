import { motion } from 'framer-motion'
import { HudBadge } from '../ui/HudBadge'
import { SectionHeading } from '../ui/SectionHeading'

interface Project {
  title: string
  description: string
  status: 'UNDER_REVIEW' | 'COMPLETED' | 'IN_PROGRESS'
  tags: string[]
  statusVariant: 'amber' | 'green' | 'default'
}

export function Projects() {
  const projects: Project[] = [
    {
      title: 'Essential Oils vs Candida albicans Pathogenesis',
      description:
        'Evaluated antifungal properties of essential oils against C. albicans virulence factors, including biofilm inhibition and growth profiling for therapeutic validation.',
      status: 'UNDER_REVIEW',
      statusVariant: 'amber',
      tags: ['Antifungal', 'Biofilm', 'Microbiology'],
    },
    {
      title: 'Crop Disease Identifier using Machine Learning',
      description:
        'ML-based model detecting plant diseases from leaf images using image-classification algorithms for early and accurate disease identification.',
      status: 'COMPLETED',
      statusVariant: 'green',
      tags: ['Machine Learning', 'Computer Vision', 'Python'],
    },
    {
      title: 'Essential Oil vs Serratia marcescens Pathogenesis',
      description:
        'Evaluating antibacterial properties of essential oils against S. marcescens virulence factors through biofilm inhibition and growth-profiling studies.',
      status: 'IN_PROGRESS',
      statusVariant: 'default',
      tags: ['Antibacterial', 'Biofilm', 'Pathogen Research'],
    },
  ]

  return (
    <section id="projects" className="section-block">
      <div className="section-shell">
        <SectionHeading kicker="RESEARCH_PROJECTS" title="Selected Research" />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col rounded-3xl border border-white/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal-bright/30"
              style={{
                background: 'rgba(14,14,14,0.5)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-3xl font-light text-white/25 transition-colors group-hover:text-teal-bright/40">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <HudBadge label={project.status} variant={project.statusVariant} />
              </div>

              <h3 className="mb-3 font-display text-[19px] font-medium leading-snug text-white">
                {project.title}
              </h3>

              <p className="mb-6 text-[14px] leading-relaxed text-white/65 font-body">
                {project.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2 border-t border-white/8 pt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
