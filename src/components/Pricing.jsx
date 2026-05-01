import { Check, Scissors, Star, Sparkles, Crown, Circle, Zap } from "lucide-react";
import "./Pricing.css";

const plans = [
  { name: "Corte Simples", icon: Scissors, price: "R$ 35", desc: "Corte masculino com acabamento na navalha.", includes: ["Corte com tesoura ou máquina", "Acabamento navalha", "Lavagem", "Finalização"], cta: "Agendar Corte", highlight: false, color: "blue" },
  { name: "Combo Ouro", icon: Crown, price: "R$ 65", badge: "Mais Popular", desc: "Corte + barba com hot towel e hidratação.", includes: ["Corte completo", "Barba modelada", "Hot towel", "Hidratação na barba", "Sobrancelha inclusa"], cta: "Quero o Combo", highlight: true, color: "gold" },
  { name: "Barba Premium", icon: Star, price: "R$ 40", desc: "Barba com navalha quente e hidratação.", includes: ["Design e modelagem", "Navalha quente", "Hot towel", "Hidratação premium"], cta: "Agendar Barba", highlight: false, color: "cyan" },
  { name: "Pacote Mensal", icon: Sparkles, price: "R$ 180", desc: "4 combos no mês com prioridade e desconto.", includes: ["4 combos corte + barba", "Prioridade agenda", "Desconto 30%", "Produto de presente"], cta: "Quero o Pacote", highlight: false, color: "purple" },
]

const piercingPlans = [
  { name: "1 Perfuração", price: "R$ 29,99", desc: "Válido para orelha e nariz." },
  { name: "2 Perfurações", price: "R$ 54,99", desc: "Combo com desconto." },
  { name: "3 Perfurações", price: "R$ 79,99", desc: "Melhor custo-benefício." },
]

export default function Pricing() {
  return (
    <section className="pricing section" id="planos">
      <div className="container">
        <div className="pricing__header">
          <p className="section-label">Preços</p>
          <h2 className="section-title">VALORES<br /><span>TRANSPARENTES</span></h2>
          <p className="section-desc">Preços justos, qualidade sem compromisso.</p>
        </div>

        {/* Barbearia */}
        <h3 className="pricing__sub-title">✂️ Barbearia</h3>
        <div className="pricing__grid pricing__grid--models">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div key={plan.name} className={`plan-card plan-card--model ${plan.highlight ? "plan-card--highlight" : ""}`} data-color={plan.color}>
                {plan.badge && <div className="plan-card__badge"><Star size={12} fill="currentColor" />{plan.badge}</div>}
                <div className="plan-card__header">
                  <div className="plan-card__icon"><Icon size={24} /></div>
                  <span className="plan-card__name">{plan.name}</span>
                  <div className="plan-card__price">{plan.price}</div>
                  <p className="plan-card__desc">{plan.desc}</p>
                </div>
                <ul className="plan-card__features">
                  {plan.includes.map((item) => <li key={item}><Check size={14} /><span>{item}</span></li>)}
                </ul>
                <a href="https://wa.me/55219665xxxxx?text=SUA%20Tio%20BARBEARIA!%20Quero%20agendar." target="_blank" rel="noreferrer" className={plan.highlight ? "btn-primary" : "btn-outline"}>
                  <span>{plan.cta}</span>
                </a>
                <div className="plan-card__note">✂️ Agende pelo WhatsApp</div>
              </div>
            );
          })}
        </div>

        {/* Piercing */}
        <h3 className="pricing__sub-title" style={{marginTop: '64px'}}>💎 Piercing — Promoção</h3>
        <div className="pricing__piercing-grid">
          {piercingPlans.map((p, i) => (
            <div key={i} className="piercing-plan">
              <div className="piercing-plan__num">{i + 1}</div>
              <div className="piercing-plan__info">
                <strong>{p.name}</strong>
                <span>{p.desc}</span>
              </div>
              <div className="piercing-plan__price">{p.price}</div>
            </div>
          ))}
        </div>
        <p className="pricing__note">💎 Pagamento via Pix ou dinheiro · Válido para orelha e nariz</p>

        <div className="pricing__cta">
          <div className="pricing__cta-content">
            <h3>Dúvidas sobre qual serviço?</h3>
            <p>Me manda uma mensagem e te ajudo a escolher o que é melhor para você.</p>
            <a href="https://wa.me/552196651xxxx?text=Olá%20SUA%20BARBEARIA!" target="_blank" rel="noreferrer" className="btn-primary">
              <span>Falar no WhatsApp</span><Zap size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
