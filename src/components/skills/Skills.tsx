import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { SKILLS } from '../../data/portfolio'

export default function Skills() {
  const categories = Object.keys(SKILLS) as (keyof typeof SKILLS)[]
  const [active, setActive] = useState<keyof typeof SKILLS>('Programming')
  return <section id="skills" className="section"><header className="section-heading"><span>04 / CAPABILITIES</span><h2>A toolkit built for<br /><em>end-to-end delivery.</em></h2></header>
    <div className="skills-layout"><div className="skill-tabs" role="tablist" aria-label="Skill categories">{categories.map((category, index) => <button key={category} role="tab" aria-selected={active === category} onClick={() => setActive(category)}><span>{String(index + 1).padStart(2, '0')}</span>{category}</button>)}</div>
      <div className="skill-panel" role="tabpanel"><AnimatePresence mode="wait"><motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}><div className="skill-panel-title"><Code2 /><div><span>CATEGORY</span><h3>{active}</h3></div></div><div className="skill-cloud">{SKILLS[active].map((skill, index) => <motion.span key={skill} initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * .025 }}>{skill}</motion.span>)}</div></motion.div></AnimatePresence></div>
    </div>
  </section>
}
