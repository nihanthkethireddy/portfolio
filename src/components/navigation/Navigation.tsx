import React, { useEffect, useState } from 'react'
import { HERO } from '../../data/portfolio'

const items = ['About','Experience','Projects','Skills','Education','Contact']

export default function Navigation(){
  const [active, setActive] = useState('About')
  useEffect(()=>{
    const onScroll = ()=>{
      const sections = items.map(i=>document.getElementById(i.toLowerCase()))
      const y = window.scrollY + 120
      for(const s of sections){
        if(!s) continue
        const top = s.offsetTop
        const height = s.offsetHeight
        if(y >= top && y < top + height){ setActive(s.id.charAt(0).toUpperCase()+s.id.slice(1)); return }
      }
    }
    window.addEventListener('scroll', onScroll, {passive:true})
    return ()=>window.removeEventListener('scroll', onScroll)
  },[])

  const scrollTo = (id:string)=>{
    const el = document.getElementById(id.toLowerCase())
    if(el) el.scrollIntoView({behavior:'smooth',block:'start'})
  }

  return (
    <nav className="nav" aria-label="Primary navigation">
      <div className="nav-inner">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{fontWeight:700}}>{HERO.title}</div>
          <div className="muted" style={{fontSize:12}}>{HERO.label}</div>
        </div>
        <div>
          {items.map(i=> (
            <a key={i} href={`#${i.toLowerCase()}`} onClick={(e)=>{e.preventDefault(); scrollTo(i)}} className={active===i? 'active':''} >{i}</a>
          ))}
          <a style={{marginLeft:12}} href={"mailto:" + 'nihanth.kethireddy@gmail.com'}>Email</a>
        </div>
      </div>
    </nav>
  )
}
