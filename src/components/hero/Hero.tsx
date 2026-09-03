import { motion } from 'framer-motion'
import { ArrowDownRight, Download, Github, Linkedin } from 'lucide-react'
import { GITHUB_REPOSITORY_URL, HERO, PROFILE_IMAGE_PATH, RESUME_URL } from '../../data/portfolio'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`
export default function Hero() {
  return <section id="hero" className="hero section" aria-labelledby="hero-title">
    <div className="network" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
    <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
      <div className="eyebrow"><span className="status-dot" /> {HERO.label}</div>
      <h1 id="hero-title">Nihanth Kumar<br /><span>Reddy Kethireddy</span></h1>
      <p className="hero-role">{HERO.subtitle}</p><p className="hero-blurb">{HERO.blurb}</p>
      <div className="hero-actions"><a className="button primary" href="#projects">View my work <ArrowDownRight size={17} /></a><a className="button secondary" href={RESUME_URL} target="_blank" rel="noopener noreferrer">Resume <Download size={16} /></a></div>
      <div className="social-links"><a href="https://www.linkedin.com/in/nihanth-kethireddy/" target="_blank" rel="noopener noreferrer"><Linkedin size={17} /> LinkedIn</a><a href={GITHUB_REPOSITORY_URL} target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub</a></div>
    </motion.div>
    <motion.div className="portrait-area" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .15 }}>
      <div className="portrait-orbit" aria-hidden="true"><span>LANGGRAPH</span><span>FASTAPI</span><span>REACT</span></div>
      <div className="portrait-frame"><img src={asset(PROFILE_IMAGE_PATH)} alt="Nihanth Kumar Reddy Kethireddy" /></div>
      <div className="portrait-badge"><b>AI</b><span>platform<br />engineer</span></div>
    </motion.div>
    <a className="scroll-cue" href="#about">Scroll to explore <ArrowDownRight size={15} /></a>
  </section>
}
