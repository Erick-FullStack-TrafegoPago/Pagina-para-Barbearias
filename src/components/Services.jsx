import { Scissors, Smile, Sparkles, Star, Zap, Circle } from 'lucide-react'
import './Services.css'

const barberServices = [
  { icon: <Scissors size={28} />, num: '01', title: 'Corte Masculino', desc: 'Degradê, undercut, social ou freestyle. Corte com tesoura e máquina, acabamento com navalha.', tags: ['degradê', 'tesoura', 'navalha'], highlight: true },
  { icon: <Smile size={28} />, num: '02', title: 'Barba Completa', desc: 'Modelagem e acabamento com navalha quente. Hot towel e hidratação inclusos.', tags: ['navalha', 'hot towel', 'hidratação'], highlight: false },
  { icon: <Sparkles size={28} />, num: '03', title: 'Combo Corte + Barba', desc: 'O pacote completo num único atendimento. Saia pronto para qualquer ocasião.', tags: ['combo', 'mais pedido', 'econômico'], highlight: false },
  { icon: <Star size={28} />, num: '04', title: 'Sobrancelha & Acabamento', desc: 'Design de sobrancelha masculina e limpeza de pescoço com navalha.', tags: ['design', 'acabamento', 'navalha'], highlight: false },
]

const tattooServices = [
  { icon: <Zap size={28} />, num: '01', title: 'Tattoo Realismo', desc: 'Traço preciso e sombreamento profissional. Criamos do rascunho ao acabamento final com tinta de qualidade.', tags: ['realismo', 'black & grey', 'colorida'], highlight: true },
  { icon: <Zap size={28} />, num: '02', title: 'Tattoo Freestyle', desc: 'Criação exclusiva na hora. Você traz a ideia, a gente transforma em arte permanente.', tags: ['original', 'exclusiva', 'autoral'], highlight: false },
]

const piercingServices = [
  { icon: <Circle size={28} />, num: '01', title: 'Piercing em Geral', desc: 'Perfuração profissional em orelha, nariz, sobrancelha e mais. Material cirúrgico e higiene total.', tags: ['orelha', 'nariz', 'sobrancelha'], highlight: true },
  { icon: <Circle size={28} />, num: '02', title: 'Joias & Acessórios', desc: 'Linha completa de joias em prata 925, aço cirúrgico e titânio. Piercings de mamilo, septo e industrial.', tags: ['prata 925', 'aço', 'titânio'], highlight: false },
]

function ServiceGrid({ services }) {
  return (
    <div className="services__grid">
      {services.map((s) => (
        <div key={s.num} className={`service-card ${s.highlight ? 'service-card--highlight' : ''}`}>
          <div className="service-card__top">
            <div className="service-card__icon">{s.icon}</div>
            <span className="service-card__num">{s.num}</span>
          </div>
          <h3 className="service-card__title">{s.title}</h3>
          <p className="service-card__desc">{s.desc}</p>
          <div className="service-card__tags">
            {s.tags.map(t => <span key={t} className="service-card__tag">{t}</span>)}
          </div>
          <a href="#contato" className="service-card__link">Agendar <span>→</span></a>
        </div>
      ))}
    </div>
  )
}

export default function Services() {
  return (
    <>
      {/* BARBEARIA */}
      <section className="services section" id="barbearia">
        <div className="container">
          <div className="services__header">
            <div>
              <p className="section-label">Barbearia</p>
              <h2 className="section-title">CORTE <br /><span>PREMIUN</span></h2>
            </div>
            <p className="section-desc services__header-desc">Cada corte executado com atenção ao detalhe, produtos de qualidade e a mão de quem vive a arte da barbearia.</p>
          </div>
          <ServiceGrid services={barberServices} />
        </div>
      </section>

      {/* TATTOO */}
      <section className="services section" id="tattoo" style={{background: 'var(--bg2)'}}>
        <div className="container">
          <div className="services__header">
            <div>
              <p className="section-label">Tattoo</p>
              <h2 className="section-title">ARTE QUE<br /><span>FICA PARA SEMPRE</span></h2>
            </div>
            <p className="section-desc services__header-desc">Tattoos autorais com traço preciso e tinta de qualidade. Do primeiro rascunho ao toque final, cada peça é única.</p>
          </div>
          <ServiceGrid services={tattooServices} />
        </div>
      </section>

      {/* PIERCING */}
      <section className="services section" id="piercing">
        <div className="container">
          <div className="services__header">
            <div>
              <p className="section-label">Piercing</p>
              <h2 className="section-title">PERFURAÇÃO<br /><span>COM SEGURANÇA</span></h2>
            </div>
            <p className="section-desc services__header-desc">Material cirúrgico, técnica profissional e ambiente higienizado. Piercing feito do jeito certo, da primeira vez.</p>
          </div>
          <ServiceGrid services={piercingServices} />
        </div>
      </section>
    </>
  )
}
