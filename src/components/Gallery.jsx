import './Gallery.css'

const photos = [
  { src: '/imgs/freestyle.jpg', label: 'Freestyle — Barbearia', tag: 'barbearia' },
  { src: '/imgs/tattoo.jpg', label: 'Tattoo Realismo', tag: 'tattoo' },
  { src: '/imgs/piercing.jpg', label: 'Joia Prata 925', tag: 'piercing' },
  { src: '/imgs/fidelidade.jpg', label: 'Cartão Fidelidade', tag: 'barbearia' },
  { src: '/imgs/promocoes.jpg', label: 'Promoção Piercing', tag: 'piercing' },
]

export default function Gallery() {
  return (
    <section className="gallery section" id="galeria">
      <div className="container">
        <p className="section-label">Galeria</p>
        <h2 className="section-title">NOSSO<br /><span>TRABALHO</span></h2>
        <p className="section-desc" style={{marginBottom: '48px'}}>
          Cada foto é um trabalho real. Cortes, tattoos e piercings feitos com dedicação e arte.
        </p>

        <div className="gallery__grid">
          {photos.map((p, i) => (
            <div key={i} className="gallery__item">
              <img src={p.src} alt={p.label} loading="lazy" />
              <div className="gallery__overlay">
                <span className="gallery__tag">{p.tag}</span>
                <p>{p.label}</p>
              </div>
            </div>
          ))}
          {/* Slots para fotos futuras */}
          {[...Array(4)].map((_, i) => (
            <div key={`empty-${i}`} className="gallery__item gallery__item--empty">
              <div className="gallery__placeholder">
                <span>+</span>
                <p>Em breve</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
