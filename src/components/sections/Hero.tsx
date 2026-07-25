import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const tags = ['Molecular Biology', 'Bioinformatics', 'Machine Learning']

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-white"
    >
      {/* ---------- Background video ---------- */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
        className="absolute inset-0 z-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="h-[80%] w-[80%] md:h-full md:w-full">
          <video
            src="/hero-bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      {/* Spacer so footer content is pushed to the bottom */}
      <div />

      {/* ---------- Footer content over gradient fade-up ---------- */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: EASE }}
        className="relative z-30 w-full"
        style={{
          background:
            'linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
        }}
      >
        <div className="section-shell flex flex-col gap-8 pb-10 pt-24 md:flex-row md:items-end md:justify-between md:gap-12 md:pb-12">
          {/* Left block */}
          <div className="flex flex-col">
            {/* Subtitle */}
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
              className="flex items-center gap-2.5"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-black" />
              <span className="text-[13px] text-black/55">
                Biotechnology Engineer &amp; Research Enthusiast
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
              className="mt-6 font-light text-black"
              style={{
                fontSize: 'clamp(2rem, 8vw, 4.5rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}
            >
              <span className="md:text-[clamp(2.5rem,5.5vw,4.5rem)]">
                Bridging Biology
                <br />
                and Computation.
              </span>
            </motion.h1>

            {/* Buttons */}
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button
                type="button"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full bg-black px-6 py-3 text-[13px] font-medium text-white transition-opacity hover:opacity-85"
              >
                View Research
              </button>
              <button
                type="button"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full border border-[rgba(0,0,0,0.35)] px-6 py-3 text-[13px] font-medium text-black transition-colors hover:bg-black/5"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>

          {/* Right block: tag pills */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: EASE }}
            className="flex flex-wrap items-center gap-2 md:justify-end"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[rgba(0,0,0,0.12)] bg-white px-4 py-2 text-[11px] font-medium text-black/70"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
