import { motion } from 'framer-motion'
import { Trophy, Presentation, Zap, Star } from 'lucide-react'
import { HudBadge } from '../ui/HudBadge'
import { SectionHeading } from '../ui/SectionHeading'

interface Achievement {
  icon: React.ReactNode
  title: string
  subtitle?: string
  badge: string
  /** Bento placement: column span + vertical offset to break the grid line */
  span: string
}

export function Achievements() {
  const achievements: Achievement[] = [
    {
      icon: <Trophy className="h-6 w-6" />,
      title: 'International Conference of Bioengineering',
      subtitle: 'National Symposium on Microbial Technologies — 3Bs (Biofuels, Biofilms, Bioproducts)',
      badge: 'WINNER',
      span: 'lg:col-span-7 lg:row-span-2',
    },
    {
      icon: <Presentation className="h-5 w-5" />,
      title: 'National Conference on Applied Microbiology & Antimicrobial Resistance',
      subtitle: 'Poster Presentation',
      badge: 'PRESENTER',
      span: 'lg:col-span-5 lg:mt-10',
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: 'ULTRON 2.0 — Top 25 Teams',
      subtitle: 'SIH Hackathon — University Level Participant',
      badge: 'TOP_25',
      span: 'lg:col-span-5 lg:mt-4',
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: 'Multi-level Awardee',
      subtitle: 'Dance · Debate · Recitation · Bionexus (SRM Cultural Club)',
      badge: 'MULTI_AWARD',
      span: 'lg:col-span-7 lg:-mt-6',
    },
  ]

  return (
    <section id="achievements" className="section-block bg-white">
      <div className="section-shell">
        <SectionHeading kicker="Achievement gallery" title="Achievements & Awards" />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {achievements.map((achievement, idx) => {
            const isHero = idx === 0
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={achievement.span}
              >
                <div
                  className={`flex h-full flex-col rounded-2xl border border-[rgba(0,0,0,0.12)] transition-all duration-300 hover:border-[rgba(0,0,0,0.28)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] ${
                    isHero ? 'justify-center bg-[#F4F4F6] p-8 sm:p-10' : 'bg-white p-6 sm:p-8'
                  }`}
                >
                  <span
                    className={`mb-5 flex shrink-0 items-center justify-center rounded-full bg-black text-white ${
                      isHero ? 'h-14 w-14' : 'h-11 w-11'
                    }`}
                  >
                    {achievement.icon}
                  </span>

                  <h3
                    className={`font-medium leading-snug tracking-tight text-black ${
                      isHero ? 'text-[24px] lg:text-[30px]' : 'text-[17px]'
                    }`}
                  >
                    {achievement.title}
                  </h3>

                  {achievement.subtitle && (
                    <p
                      className={`mt-2.5 leading-relaxed text-black/55 ${
                        isHero ? 'text-[15px]' : 'text-[14px]'
                      }`}
                    >
                      {achievement.subtitle}
                    </p>
                  )}

                  <div className="mt-5">
                    <HudBadge label={achievement.badge} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
