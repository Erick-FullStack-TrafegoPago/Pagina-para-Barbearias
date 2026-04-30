import { useEffect, useState } from 'react'
import { ArrowRight, Scissors, Users, Clock } from 'lucide-react'
import './Hero.css'

const words = ['ESTILO', 'ARTE', 'ATITUDE', 'CLASSE']

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => { setWordIdx(i => (i + 1) % words.length); setVisible(true) }, 300)
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero__grid" />
      <div className="hero__glow" />
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span>Barbearia · Tattoo · Piercing</span>
          </div>
          <h1 className="hero__title">
            SEU ESTILO<br />
            SUA{' '}
            <span className={`hero__word ${visible ? 'hero__word--in' : 'hero__word--out'}`}>
              {words[wordIdx]}
            </span>
          </h1>
          <p className="hero__desc">
            Cortes precisos, tattoos autorais e piercings com segurança total.
            Um lugar onde arte e estilo se encontram. Bem-vindo ao universo do Tio Jack.
          </p>
          <div className="hero__actions">
            <a href="#contato" className="btn-primary">
              <span>Agendar pelo WhatsApp</span>
              <ArrowRight size={16} />
            </a>
            <a href="#barbearia" className="btn-outline">
              <span>Ver Serviços</span>
            </a>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <Scissors size={18} color="var(--gold)" />
              <div><strong>+500</strong><span>Clientes</span></div>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <Users size={18} color="var(--gold)" />
              <div><strong>98%</strong><span>Satisfação</span></div>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <Clock size={18} color="var(--gold)" />
              <div><strong>Seg–Sáb</strong><span>9h às 20h</span></div>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__logo-display">
            <img src="/imgs/logo.png" alt="Tio Jack" className="hero__logo-big" />
            <div className="hero__logo-name">
              <span className="hero__logo-tio">TIO</span>
              <span className="hero__logo-jack">JACK</span>
            </div>
            <p className="hero__logo-sub">Barbearia · Tattoo · Piercing</p>
          </div>
          <div className="hero__card hero__card--sm hero__card--tl">
            <div className="hero__card-icon"><Scissors size={16} /></div>
            <strong>Corte Freestile</strong>
            <span>Acabamento premium</span>
          </div>
          <div className="hero__card hero__card--sm hero__card--br">
            <div className="hero__card-icon"><Users size={16} /></div>
            <strong>Sem fila</strong>
            <span>Agendamento online</span>
          </div>
          <div className="hero__orbit">
            <div className="hero__orbit-ring" />
            <div className="hero__orbit-dot" />
          </div>
        </div>
      </div>

      <div className="hero__marquee">
        <div className="hero__marquee-track">
          {['Corte Masculino', 'Barba', 'Tattoo', 'Piercing', 'Sobrancelha', 'Degradê', 'Freestyle', 'Hot Towel', 'Design de Barba', 'Corte Masculino', 'Barba', 'Tattoo', 'Piercing', 'Sobrancelha', 'Degradê', 'Freestyle', 'Navalha', 'Hot Towel', 'Design de Barba'].map((t, i) => (
            <span key={i} className="hero__marquee-item">{t}<span className="hero__marquee-sep">✦</span></span>
          ))}
        </div>
      </div>
    </section>
  )
}
