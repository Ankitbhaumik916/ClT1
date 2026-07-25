import { Suspense, lazy } from 'react'
import { Navbar } from './components/ui/Navbar'
import { Hero } from './components/sections/Hero'
import './index.css'

const About = lazy(() => import('./components/sections/About').then((m) => ({ default: m.About })))
const Projects = lazy(() => import('./components/sections/Projects').then((m) => ({ default: m.Projects })))
const Experience = lazy(() => import('./components/sections/Experience').then((m) => ({ default: m.Experience })))
const Skills = lazy(() => import('./components/sections/Skills').then((m) => ({ default: m.Skills })))
const Achievements = lazy(() =>
  import('./components/sections/Achievements').then((m) => ({ default: m.Achievements }))
)
const Contact = lazy(() => import('./components/sections/Contact').then((m) => ({ default: m.Contact })))

function App() {
  return (
    <div className="relative w-full overflow-x-hidden bg-white">
      <Navbar />
      <main className="w-full">
        <Hero />
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
  )
}

export default App
