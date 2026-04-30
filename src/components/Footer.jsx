import { Scissors, Instagram } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#hero" className="footer__logo">
            <img src="/imgs/logo.png" alt="Tio Jack" style={{width:24,height:24,objectFit:'contain',filter:'brightness(0) invert(1)'}} />
            <span>TIO<strong>JACK</strong></span>
          </a>
          <p>Barbearia, Tattoo e Piercing em São João de Meriti. Arte, estilo e atitude num só lugar.</p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
          </div>
        </div>
        <div className="footer__links">
          <div className="footer__col">
            <h5>Serviços</h5>
            <a href="#barbearia">Barbearia</a>
            <a href="#tattoo">Tattoo</a>
            <a href="#piercing">Piercing</a>
            <a href="#galeria">Galeria</a>
          </div>
          <div className="footer__col">
            <h5>Contato</h5>
            <a href="#planos">Preços</a>
            <a href="#contato">Agendamento</a>
            <a href="https://wa.me/55219xxxx-xxxx" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} Tio Jack. Todos os direitos reservados.</span>
          <span>Barbearia · Tattoo · Piercing ✂️</span>
        </div>
      </div>
    </footer>
  )
}
