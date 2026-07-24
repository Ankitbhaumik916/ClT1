import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { FlaskConical, Dna, Terminal } from 'lucide-react'
import { MoleculeOrbCanvas } from '../canvas/MoleculeOrb'
import { Suspense } from 'react'

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: i * 0.05 },
    }),
  }

  return (
    <section id="skills" className="section-block">
      <div className="section-shell">
        <SectionHeading kicker="SKILLS_MATRIX" title="Technical Arsenal" />

        <div className="mb-8 flex justify-center opacity-90">
          <Suspense fallback={<div className="h-[160px] w-[160px]" />}>
            <MoleculeOrbCanvas />
          </Suspense>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="flex h-full flex-col rounded-3xl border border-white/10 p-7"
              style={{
                background: 'rgba(14,14,14,0.5)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-teal-bright/25 bg-teal-bright/10 text-teal-bright">
                  {category.icon}
                </span>
                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-wider text-teal-bright/80">
                    {category.category}
                  </h3>
                  <h4 className="font-display text-[15px] text-white">{category.label}</h4>
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
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[12px] text-white/75"
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
