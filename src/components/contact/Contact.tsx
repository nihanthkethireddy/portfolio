import React from 'react'
import { CONTACT, RESUME_URL } from '../../data/portfolio'

export default function Contact(){
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <div className="card">
        <div><strong>Email</strong>: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
        <div><strong>Phone</strong>: <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a></div>
        <div><strong>LinkedIn</strong>: <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">Profile</a></div>
        <div><strong>GitHub</strong>: <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">{CONTACT.github}</a></div>
        <div style={{marginTop:12}}><a href={RESUME_URL} target="_blank" rel="noopener noreferrer"><button>Download Resume</button></a></div>
      </div>
    </section>
  )
}
