import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, GitBranch, ShieldCheck } from 'lucide-react'
import { LIFECYCLE, PROJECTS } from '../../data/portfolio'

function Lifecycle() {
  const [active, setActive] = useState(0)
  return <div className="lifecycle"><div className="lifecycle-head"><div><span>INTERACTIVE SYSTEM MAP</span><h3>From intent to governed consumption</h3></div><div className="legend"><span><i className="define" /> Define</span><span><i className="build" /> Build</span><span><i className="govern" /> Govern</span></div></div>
    <div className="lifecycle-track" role="list" aria-label="Agent and MCP platform lifecycle">{LIFECYCLE.map((step, index) => <button role="listitem" key={step} className={index === active ? 'active' : ''} onClick={() => setActive(index)} aria-label={`Step ${index + 1}: ${step}`}><span>{index < active ? <Check size={14} /> : index + 1}</span><b>{step}</b></button>)}</div>
    <div className="lifecycle-note"><GitBranch size={18} /><p><b>Step {active + 1} of {LIFECYCLE.length}</b>{LIFECYCLE[active]}</p><ShieldCheck size={18} /></div>
  </div>
}
export default function Projects() {
  return <section id="projects" className="section projects"><header className="section-heading"><span>03 / SELECTED WORK</span><h2>Platforms designed for<br /><em>real-world complexity.</em></h2></header><Lifecycle />
    <div className="project-grid">{PROJECTS.map((project, index) => <motion.article key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`} tabIndex={0} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }}><div className="project-top"><span>{project.number}</span><ArrowUpRight /></div><p className="project-role">{project.role}</p><h3>{project.title}</h3><div className="project-details"><p><b>Challenge</b>{project.problem}</p><p><b>My contribution</b>{project.contributions}</p></div><div className="tags">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div></motion.article>)}</div>
  </section>
}
