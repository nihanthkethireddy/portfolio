import { BookOpen, GraduationCap } from 'lucide-react'
import { EDUCATION } from '../../data/portfolio'

export default function Education() {
  return <section id="education" className="section education"><header className="section-heading"><span>05 / EDUCATION</span><h2>Grounded in computer<br /><em>science fundamentals.</em></h2></header><article className="education-card"><div className="degree-icon"><GraduationCap /></div><div><p className="overline">MASTER'S DEGREE · {EDUCATION.date}</p><h3>{EDUCATION.degree}</h3><p className="school">{EDUCATION.school}</p></div><div className="coursework"><p><BookOpen size={16} /> Relevant coursework</p><div className="tags">{EDUCATION.coursework.map(course => <span key={course}>{course}</span>)}</div></div></article></section>
}
