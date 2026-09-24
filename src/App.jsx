import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Education from './sections/Education'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash)
      if (el) {
        el.scrollIntoView({ behavior: 'instant' })
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-poseidon text-paper flex flex-col selection:bg-pumpkin selection:text-paper">
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-pumpkin focus:text-paper focus:font-mono focus:text-xs uppercase tracking-wider"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Education />
        <Projects />
      </main>

      <Contact />
    </div>
  )
}

export default App
