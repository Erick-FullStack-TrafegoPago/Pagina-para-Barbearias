import { Scissors, Shield, Clock, Award } from 'lucide-react'
import './About.css'

const diferenciais = [
  { icon: <Scissors size={20} />, title: 'Técnica Apurada', desc: 'Anos de prática com navalha, tesoura e máquina. Cada corte é executado com precisão milimétrica e atenção total ao que você quer.' },
  { icon: <Shield size={20} />, title: 'Higiene Total', desc: 'Toalhas descartáveis, navalhas novas por cliente e ambiente sempre limpo. Sua saúde e conforto são prioridade aqui.' },
  { icon: <Clock size={20} />, title: 'Sem Espera com Agendamento', desc: 'Agende pelo WhatsApp e chegue na hora certa. Sem fila, sem perda de tempo. Seu horário é respeitado.' },
  { icon: <Award size={20} />, title: 'Experiência Premium', desc: 'Música boa, ambiente confortável e atendimento personalizado. Vir à barbearia é um momento seu — e a gente cuida disso.' },
]

export default function About() {
  return (
    <section className="about section" id="sobre">
      <div className="container about__inner">
        <div className="about__left">
          <p className="section-label">Sobre a Barbearia</p>
          <h2 className="section-title">
            MAIS QUE UM<br />CORTE — É UM<br /><span>RITUAL</span>
          </h2>
          <p className="about__desc">
            A Navalha de Ouro nasceu para ser o lugar onde o homem chega, senta, 
            relaxa e sai do jeito que sempre quis. Sem pressa, sem erro, sem mediocridade.
          </p>
          <p className="about__desc">
            Cada cliente tem um estilo. Nosso trabalho é entender esse estilo, executar 
            com excelência e fazer você sair daqui pronto para qualquer situação — 
            do trabalho à balada.
          </p>
          <a href="#contato" className="btn-primary about__cta">
            <span>Agendar Meu Horário</span>
          </a>
        </div>

        <div className="about__right">
          <div className="about__diferenciais">
            {diferenciais.map((d, i) => (
              <div key={i} className="diferencial">
                <div className="diferencial__icon">{d.icon}</div>
                <div>
                  <h4>{d.title}</h4>
                  <p>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about__tag-card">
            <div className="about__tag-line">
              <span className="about__tag">Degradê</span>
              <span className="about__tag">Undercut</span>
              <span className="about__tag active">Navalha</span>
            </div>
            <div className="about__tag-line">
              <span className="about__tag active">Barba</span>
              <span className="about__tag">Hot Towel</span>
              <span className="about__tag">Sobrancelha</span>
            </div>
            <div className="about__tag-line">
              <span className="about__tag">Social</span>
              <span className="about__tag active">Premium</span>
              <span className="about__tag">Pompadour</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
