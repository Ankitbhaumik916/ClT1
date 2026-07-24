import { Suspense, lazy } from 'react'
import { Sidebar } from './components/ui/Sidebar'
import { ContactFab } from './components/ui/ContactFab'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Achievements } from './components/sections/Achievements'
import { Contact } from './components/sections/Contact'
import './index.css'

const VideoBackground = lazy(() =>
  import('./components/canvas/VideoBackground').then((m) => ({
    default: m.VideoBackground,
  }))
)

function App() {
  return (
    <>
      <Suspense fallback={<div className="fixed inset-0 z-0 bg-[#0a0a0a]" />}>
        <VideoBackground />
      </Suspense>
      <div className="relative z-10 w-full overflow-x-hidden">
        <Sidebar />
        <ContactFab />
        {/* Offset for the fixed sidebar (desktop) and bottom tab bar (mobile) */}
        <main className="w-full pt-14 pb-24 md:pl-[220px] md:pt-0 md:pb-0">
          <Suspense fallback={<div />}>
            <Hero />
          </Suspense>
          <Suspense fallback={<div />}>
            <About />
          </Suspense>
          <Suspense fallback={<div />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<div />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<div />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<div />}>
            <Achievements />
          </Suspense>
          <Suspense fallback={<div />}>
            <Contact />
          </Suspense>
        </main>
      </div>
    </>
  )
}

export default App
