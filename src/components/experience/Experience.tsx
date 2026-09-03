import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { EXPERIENCES } from '../../data/portfolio'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`
export default function Experience() {
  const [expanded, setExpanded] = useState(0)
  return <section id="experience" className="section"><header className="section-heading"><span>02 / EXPERIENCE</span><h2>Building across the<br /><em>full product stack.</em></h2></header>
    <div className="timeline">{EXPERIENCES.map((item, index) => { const open = expanded === index; return <motion.article className={`experience-card ${open ? 'expanded' : ''}`} key={item.company} style={{ '--company-accent': item.accent } as React.CSSProperties} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <button className="experience-header" onClick={() => setExpanded(open ? -1 : index)} aria-expanded={open} aria-controls={`experience-${index}`}>
        <span className="timeline-index">{String(index + 1).padStart(2, '0')}</span><span className="company-logo"><img src={asset(item.logo)} alt={`${item.company} logo`} /></span><span className="experience-title"><b>{item.company}</b><small>{item.role}</small></span><span className="experience-date">{item.dates}</span><ChevronDown className="expand-icon" aria-hidden="true" />
      </button>
      <AnimatePresence initial={false}>{open && <motion.div id={`experience-${index}`} className="experience-content" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}><div className="experience-inner"><p className="project-label">{item.projectLabel}</p><p className="overview">{item.overview}</p><ul>{item.contributions.map(point => <li key={point}>{point}</li>)}</ul><div className="tags">{item.tech.map(tech => <span key={tech}>{tech}</span>)}</div></div></motion.div>}</AnimatePresence>
    </motion.article> })}</div>
  </section>
}
