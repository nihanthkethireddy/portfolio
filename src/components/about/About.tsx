import React from 'react'
import { ABOUT } from '../../data/portfolio'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="section">
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
        <h2>About</h2>
        {ABOUT.paragraphs.map((p,i)=>(<p key={i} style={{maxWidth:840}}>{p}</p>))}
        <div style={{marginTop:20}} className="cards-grid">
          {ABOUT.focuses.map((f)=> (
            <div className="card" key={f} role="article" tabIndex={0} aria-label={f}>
              <strong>{f}</strong>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
