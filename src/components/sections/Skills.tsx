import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { FlaskConical, Dna, Terminal } from 'lucide-react'

interface SkillCategory {
  icon: React.ReactNode
  category: string
  label: string
  skills: string[]
}

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      icon: <FlaskConical className="h-5 w-5" />,
      category: 'LAB_SKILLS',
      label: 'Laboratory Techniques',
      skills: [
        'MIC Determination',
        'Growth Profile Study',
        'Biofilm Inhibition Assay',
        'Hyphal Inhibition Assay',
        'Swimming & Swarming Assay',
        'H₂O₂ Assay',
        'Prodigiosin Assay',
        'Live Dead Staining',
      ],
    },
    {
      icon: <Dna className="h-5 w-5" />,
      category: 'MOLECULAR_TECH',
      label: 'Molecular Techniques',
      skills: [
        'Gene Isolation',
        'RNA Extraction',
        'cDNA Synthesis',
        'Competent Cell Transformation',
        'Column Chromatography',
        'Pathogen Identification',
      ],
    },
    {
      icon: <Terminal className="h-5 w-5" />,
      category: 'COMPUTATIONAL',
      label: 'Computational Skills',
      skills: ['MATLAB', 'C Programming', 'Bioinformatics', 'Machine Learning', 'Image Classification'],
    },
  ]

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: i * 0.04 },
    }),
  }

  return (
    <section id="skills" className="section-block bg-white">
      <div className="section-shell">
        <SectionHeading kicker="Skills matrix" title="Technical Arsenal" />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="flex h-full flex-col rounded-2xl border border-[rgba(0,0,0,0.12)] bg-white p-6 transition-all duration-300 hover:border-[rgba(0,0,0,0.28)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] sm:p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  {category.icon}
                </span>
                <div>
                  <p className="text-[11px] font-medium text-black/45">
                    {category.category.replace(/_/g, ' ')}
                  </p>
                  <h3 className="text-[15px] font-medium tracking-tight text-black">{category.label}</h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    custom={i}
                    variants={pillVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="rounded-full bg-[#F4F4F6] px-3 py-1.5 text-[12px] text-black/65"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
