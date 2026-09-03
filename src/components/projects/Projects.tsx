import React from 'react'
import { PROJECTS } from '../../data/portfolio'

export default function Projects(){
  return (
    <section id="projects" className="section">
      <h2>Featured Projects</h2>
      <div className="cards-grid" style={{marginTop:12}}>
        {PROJECTS.map(p=> (
          <article key={p.id} className="card project-card" tabIndex={0} aria-labelledby={`${p.id}-title`}>
            <h3 id={`${p.id}-title`}>{p.title}</h3>
            <div className="muted">{p.role}</div>
            <p style={{marginTop:8}}>{p.problem}</p>
            <div style={{marginTop:8}}>Contribution: {p.contributions}</div>
            <div className="muted" style={{marginTop:8}}>Tech: {p.tech.join(', ')}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
