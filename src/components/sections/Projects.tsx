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
    <section id="projects" className="section-block bg-white">
      <div className="section-shell">
        <SectionHeading kicker="Research projects" title="Selected Research" />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col rounded-2xl border border-[rgba(0,0,0,0.12)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,0,0,0.28)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] sm:p-8"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="text-[28px] font-light leading-none tracking-tight text-black/20 transition-colors group-hover:text-black/40">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <HudBadge label={project.status} variant={project.statusVariant} />
              </div>

              <h3 className="mb-3 text-[19px] font-medium leading-snug tracking-tight text-black">
                {project.title}
              </h3>

              <p className="mb-5 text-[14px] leading-relaxed text-black/55">{project.description}</p>

              <div className="mt-auto flex flex-wrap gap-2 border-t border-[rgba(0,0,0,0.12)] pt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#F4F4F6] px-3 py-1.5 text-[11px] font-medium text-black/60"
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
