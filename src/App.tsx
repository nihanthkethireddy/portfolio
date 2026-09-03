import React from 'react'
import Navigation from './components/navigation/Navigation'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Education from './components/education/Education'
import Contact from './components/contact/Contact'

export default function App() {
  return (
    <div className="site-root">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
