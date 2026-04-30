import { useEffect, useRef, useState } from 'react'
import './Results.css'

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

const metrics = [
  { value: 500, suffix: '+', label: 'Clientes Atendidos', desc: 'Homens que saíram da cadeira com o visual que queriam' },
  { value: 98, suffix: '%', label: 'Taxa de Satisfação', desc: 'Clientes que voltam e indicam para amigos e família' },
  { value: 5, suffix: ' anos', label: 'De Experiência', desc: 'Anos dedicados à arte do corte masculino e barbearia' },
  { value: 4, suffix: '★', label: 'Avaliação Média', desc: 'Nota média no Google e no Instagram da barbearia' },
]

export default function Results() {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); obs.disconnect() }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="results section" id="resultados" ref={ref}>
      <div className="results__bg" />
      <div className="container">
        <div className="results__header">
          <p className="section-label">Números</p>
          <h2 className="section-title">
            QUALIDADE QUE<br /><span>OS NÚMEROS PROVAM</span>
          </h2>
        </div>

        <div className="results__grid">
          {metrics.map((m, i) => (
            <MetricCard key={i} {...m} started={started} delay={i * 150} />
          ))}
        </div>

        <div className="results__logos">
          <p className="results__logos-label">O que você encontra aqui</p>
          <div className="results__logos-row">
            {['Corte Masculino', 'Barba Modelada', 'Navalha Quente', 'Hot Towel', 'Sobrancelha', 'Ambiente Premium'].map(p => (
              <span key={p} className="results__platform">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function MetricCard({ value, prefix, suffix, label, desc, started, delay }) {
  const count = useCountUp(value, 2000, started)
  return (
    <div className="metric-card" style={{ animationDelay: delay + 'ms' }}>
      <div className="metric-card__value">
        {prefix && <span className="metric-card__prefix">{prefix}</span>}
        {count}
        <span className="metric-card__suffix">{suffix}</span>
      </div>
      <h4 className="metric-card__label">{label}</h4>
      <p className="metric-card__desc">{desc}</p>
    </div>
  )
}
