import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const links = [
  { label: 'Barbearia', href: '#barbearia' },
  { label: 'Tattoo', href: '#tattoo' },
  { label: 'Piercing', href: '#piercing' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Trava scroll do body quando menu está aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Menu mobile renderizado via Portal direto no <body>
  // Isso escapa completamente do stacking context criado pelo backdrop-filter
  const mobileMenu = open
    ? createPortal(
        <div className="mobile-menu-overlay">
          <button
            className="mobile-menu-close"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
          >
            <X size={22} />
          </button>
          <nav className="mobile-menu-nav">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="navbar__link"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              className="btn-primary navbar__cta"
              onClick={() => setOpen(false)}
            >
              <span>Agendar Agora</span>
            </a>
          </nav>
        </div>,
        document.body
      )
    : null

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <a href="#hero" className="navbar__logo">
            <img src="/imgs/logo.png" alt="Tio Jack" className="navbar__logo-img" />
            <span>TIO<strong>JACK</strong></span>
          </a>

          {/* Nav desktop (mantida igual) */}
          <nav className="navbar__nav navbar__nav--desktop">
            {links.map(l => (
              <a key={l.href} href={l.href} className="navbar__link">
                {l.label}
              </a>
            ))}
            <a href="#contato" className="btn-primary navbar__cta">
              <span>Agendar Agora</span>
            </a>
          </nav>

          <button
            className="navbar__toggle"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Menu mobile via portal — fora do header, sem stacking context */}
      {mobileMenu}
    </>
  )
}
