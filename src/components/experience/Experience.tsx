import React from 'react'
import { EXPERIENCES } from '../../data/portfolio'

export default function Experience(){
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="timeline">
        {EXPERIENCES.map((e)=> (
          <article key={e.company} className="card" aria-labelledby={`role-${e.company}`}>
            <div style={{display:'flex',alignItems:'center',gap:12}}>
              <img src={e.logo} alt={`${e.company} logo`} className="logo" />
              <div>
                <div id={`role-${e.company}`} style={{fontWeight:700}}>{e.company}</div>
                <div className="muted">{e.role} • {e.dates}</div>
                <div style={{marginTop:6,fontStyle:'italic'}}>{e.projectLabel}</div>
              </div>
            </div>
            <p style={{marginTop:12}}>{e.overview}</p>
            <ul>
              {e.contributions.map((c,i)=>(<li key={i}>{c}</li>))}
            </ul>
            <div className="muted">Tech: {e.tech.join(', ')}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
