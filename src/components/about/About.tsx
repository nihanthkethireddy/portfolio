import { motion } from 'framer-motion'
import { Braces, Layout, Network, ShieldCheck } from 'lucide-react'
import { ABOUT } from '../../data/portfolio'

const icons = { Network, Braces, ShieldCheck, Layout }

export default function About() {
  return (
    <section id="about" className="section about">
      <header className="section-heading">
        <span>01 / ABOUT</span>
        <h2>
          Engineering at the intersection
          <br />
          of <em>intelligence and systems.</em>
        </h2>
      </header>
      <div className="about-layout">
        <motion.div className="about-copy" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          {ABOUT.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </motion.div>
        <div className="focus-grid">
          {ABOUT.focuses.map((focus, index) => {
            const Icon = icons[focus.icon as keyof typeof icons]
            return <motion.article
              className="focus-card"
              key={focus.title}
              tabIndex={0}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <Icon />
              <span className="focus-index">0{index + 1}</span>
              <h3>{focus.title}</h3>
              <p>{focus.text}</p>
            </motion.article>
          })}
        </div>
      </div>
    </section>
  )
}
