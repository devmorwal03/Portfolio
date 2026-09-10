import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
// import Resume from './resume/resume'
import {
  coursework,
  experience,
  extras,
  marquee,
  profile,
  projects,
  skills,
  type ProjectTrack,
} from './data'

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

function CustomCursor() {
  const [pos, setPos] = useState({ x: -40, y: -40 })
  
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return <div className="cursor" style={{ left: pos.x, top: pos.y }} />
}

export default function App() {
  const [track, setTrack] = useState<ProjectTrack>('software')
  const visible = projects.filter((p) => p.track === track)
  const loop = [...marquee, ...marquee]

  return (
    <>
      <CustomCursor />
      <div className="orb-layer" aria-hidden>
        <div className="orb a" />
        <div className="orb b" />
        <div className="orb c" />
      </div>
      <div className="grid-overlay" aria-hidden />

      <nav className="nav">
        <a className="nav-logo" href="#top">
          DM
        </a>
        <a href="#work">Work</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a className="nav-cta" href="#contact">
          Contact
        </a>

      </nav>

      <main className="site" id="top">
        <header className="hero">
          <motion.div variants={fade} initial="hidden" animate="show">
            <p className="eyebrow">
              <span className="pulse" />
              {profile.school} · Dual Degree EE
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.8 }}
          >
            Dev <em>Morwal</em>
          </motion.h1>
          <div className="hero-row">
            <motion.p
              className="lead"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              I build product-grade web apps and research-grade ML systems — from
              AI SaaS and payments to fault detection on power converters.
            </motion.p>
            <div className="actions">
              <a className="btn solid" href="#projects">
                See projects
              </a>
              <a className="btn" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
          </div>
          <div className="stats">
            {[
              ['95%', 'EV charger fault accuracy'],
              ['92%', 'LSTM forecast accuracy'],
              ['2020–25', 'IIT Bhubaneswar'],
            ].map(([k, v]) => (
              <motion.div
                className="stat"
                key={v}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <strong>{k}</strong>
                <span>{v}</span>
              </motion.div>
            ))}
          </div>
        </header>

        <div className="marquee-wrap" aria-hidden>
          <div className="marquee">
            {loop.map((item, i) => (
              <span key={`${item}-${i}`}>{item}</span>
            ))}
          </div>
        </div>

        <section id="work">
          <div className="section-head">
            <h2>Experience</h2>
            <p>
              Research fellow and intern at IIT Bhubaneswar, focused on ML for
              power electronics reliability.
            </p>
          </div>
          <div className="timeline">
            {experience.map((job) => (
              <motion.article
                className="job"
                key={job.title}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
              >
                <time>{job.period}</time>
                <div>
                  <h3>{job.title}</h3>
                  <p>{job.org}</p>
                  <div className="tags">
                    {job.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul>
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects">
          <div className="section-head">
            <h2>Selected work</h2>
            <div className="switch" role="tablist">
              <button
                className={track === 'software' ? 'active' : ''}
                onClick={() => setTrack('software')}
              >
                Software
              </button>
              <button
                className={track === 'ml' ? 'active' : ''}
                onClick={() => setTrack('ml')}
              >
                Data science
              </button>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              className="cards"
              key={track}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              {visible.map((project) => (
                <article className="card" key={project.name}>
                  <h3>{project.name}</h3>
                  <p className="stack">{project.stack}</p>
                  <ul>
                    {project.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>

        <section id="skills">
          <div className="section-head">
            <h2>Toolkit</h2>
            <p>Languages, product stack, ML libraries, and coursework.</p>
          </div>
          <div className="skill-grid">
            {(
              [
                ['Languages', skills.languages],
                ['Web', skills.web],
                ['Data', skills.data],
                ['Machine learning', skills.ml],
                ['Tools', skills.tools],
                ['Coursework', coursework],
              ] as const
            ).map(([title, list]) => (
              <motion.div
                className="skill-box"
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3>{title}</h3>
                <div className="chips">
                  {list.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        

        <section>
          <div className="section-head">
            <h2>Beyond the lab</h2>
          </div>
          <div className="extras">
            {extras.map((item) => (
              <motion.p
                className="extra"
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {item}
              </motion.p>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div>
            <h2>
              Let’s build the next
              <br />
              reliable system.
            </h2>
            <p style={{ marginTop: 18 }}>
              <a className="big" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </p>
          </div>
          <div className="links">
            <a href={profile.gfg} target="_blank" rel="noreferrer">
              GeeksforGeeks <span>↗</span>
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
          </div>
        </section>

        <footer>
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Designed in React · Vite · Framer Motion</span>
        </footer>
      </main>
    </>
  )
}
