import React, { useState } from 'react'
import { SKILLS } from '../../data/portfolio'

export default function Skills(){
  const categories = Object.keys(SKILLS)
  const [active, setActive] = useState(categories[0])
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:12}}>
        {categories.map(c=> (
          <button key={c} onClick={()=>setActive(c)} style={{background: active===c? 'linear-gradient(90deg,var(--accent1),var(--accent2))':undefined}}>{c}</button>
        ))}
      </div>
      <div style={{marginTop:12}}>
        <div className="card">
          <strong>{active}</strong>
          <div style={{marginTop:8,display:'flex',flexWrap:'wrap',gap:8}}>
            {SKILLS[active as keyof typeof SKILLS].map((s:string)=>(<span key={s} className="card" style={{padding:'6px 10px'}}>{s}</span>))}
          </div>
        </div>
      </div>
    </section>
  )
}
