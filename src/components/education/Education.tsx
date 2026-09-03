import React from 'react'
import { EDUCATION } from '../../data/portfolio'

export default function Education(){
  return (
    <section id="education" className="section">
      <h2>Education</h2>
      <div className="card">
        <div style={{fontWeight:700}}>{EDUCATION.degree}</div>
        <div className="muted">{EDUCATION.school} • {EDUCATION.date}</div>
        <div style={{marginTop:8}}>Relevant coursework: {EDUCATION.coursework.join(', ')}</div>
      </div>
    </section>
  )
}
