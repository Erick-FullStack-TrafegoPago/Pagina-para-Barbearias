import { Star } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Rafael Souza',
    role: 'Cliente — desde 2022',
    text: 'Melhor barbearia que já fui. O corte saiu exatamente como eu pedi, a barba ficou impecável e o ambiente é muito confortável. Não troco por nada.',
    metric: 'Cliente fiel há 2 anos',
  },
  {
    name: 'Lucas Mendes',
    role: 'Cliente — Combo Ouro',
    text: 'Fiz o combo corte e barba e saí diferente. O hot towel é relaxante demais e o acabamento com navalha não tem comparação. Vale cada centavo.',
    metric: 'Corte + barba toda semana',
  },
  {
    name: 'Diego Alves',
    role: 'Cliente — Pacote Mensal',
    text: 'Com o pacote mensal economizo e nunca fico sem horário. Prioridade no agendamento é ótimo pra quem tem agenda cheia como a minha.',
    metric: 'Pacote mensal há 8 meses',
  },
  {
    name: 'Thiago Costa',
    role: 'Cliente — Barba Premium',
    text: 'Fui pela primeira vez indicado por um amigo e não saio mais. O cuidado com a barba aqui é outro nível — navalha quente, produto bom e mão precisa.',
    metric: 'Indicou 4 amigos',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonials__header">
          <p className="section-label">Depoimentos</p>
          <h2 className="section-title">
            CLIENTES QUE<br /><span>VOLTAM SEMPRE</span>
          </h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-card__stars">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="var(--gold)" color="var(--gold)" />)}
              </div>
              <p className="testimonial-card__text">"{t.text}"</p>
              <div className="testimonial-card__footer">
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
                <span className="testimonial-card__metric">{t.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
