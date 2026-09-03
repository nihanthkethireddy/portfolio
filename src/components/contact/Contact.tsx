import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { CONTACT, PORTFOLIO_OWNER } from '../../data/portfolio'

export default function Contact() {
  return <footer id="contact" className="section contact"><div className="contact-glow" aria-hidden="true" /><span className="overline">06 / LET'S CONNECT</span><h2>Have an ambitious<br />system to build?</h2><p>I’m always interested in thoughtful conversations about AI platforms, secure enterprise systems, and full stack product engineering.</p><a className="email-link" href={`mailto:${CONTACT.email}`}>{CONTACT.email}<ArrowUpRight /></a>
    <div className="contact-links"><a href={`mailto:${CONTACT.email}`}><Mail /> Email</a><a href={`tel:${CONTACT.phoneHref}`}><Phone /> {CONTACT.phone}</a><a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin /> LinkedIn</a><a href={CONTACT.github} target="_blank" rel="noopener noreferrer"><Github /> GitHub</a></div>
    <div className="footer-row"><span>© {new Date().getFullYear()} {PORTFOLIO_OWNER}</span><a href="#hero">Back to top ↑</a></div>
  </footer>
}
