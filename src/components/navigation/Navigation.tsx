import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const items = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact']
export default function Navigation() {
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-35% 0px -55%' })
    items.forEach(item => { const element = document.getElementById(item.toLowerCase()); if (element) observer.observe(element) })
    return () => observer.disconnect()
  }, [])
  return <header className="nav-shell"><nav className="nav" aria-label="Primary navigation">
    <a className="brand" href="#hero" aria-label="Nihanth Kethireddy, home"><span>NK</span><b>Nihanth Kethireddy</b></a>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="nav-links" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X /> : <Menu />}</button>
    <div id="nav-links" className={`nav-links ${open ? 'is-open' : ''}`}>{items.map(item => <a key={item} href={`#${item.toLowerCase()}`} className={active === item.toLowerCase() ? 'active' : ''} onClick={() => setOpen(false)}>{item}</a>)}</div>
  </nav></header>
}
