import React from 'react'
import { HERO, PROFILE_IMAGE_PATH, RESUME_URL, GITHUB_REPOSITORY_URL } from '../../data/portfolio'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section id="hero" className="hero section">
      <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.6}} style={{display:'flex',gap:24,alignItems:'center'}}>
        <div className="profile" aria-hidden>
          <img src={PROFILE_IMAGE_PATH} alt={`${HERO.title} profile`} style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
        <div>
          <h1>{HERO.title}</h1>
          <div style={{marginTop:6,fontWeight:600}}>{HERO.subtitle}</div>
          <p style={{maxWidth:680,marginTop:12}}>{HERO.blurb}</p>
          <div style={{marginTop:12,display:'flex',gap:8}}>
            <a href="#projects"><button>View My Work</button></a>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer"><button>Download Resume</button></a>
            <a href={GITHUB_REPOSITORY_URL} target="_blank" rel="noopener noreferrer"><button>GitHub</button></a>
            <a href="https://www.linkedin.com/in/nihanth-kethireddy/" target="_blank" rel="noopener noreferrer" style={{alignSelf:'center',marginLeft:8}}>LinkedIn</a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
