import { Link } from 'react-router-dom'
export function Hero() {
  return (
    <section className='hero-section'>
      <div className='hero-overlay'></div>
      <div className='container hero-content reveal'>
        <p className='eyebrow'>Paraíba • Brasil</p>
        <h1>João Pessoa</h1>
        <p className='hero-description'>
          A capital da Paraíba e um dos destinos mais encantadores do Brasil,
          onde o azul do mar encontra uma história que atravessa séculos.
        </p>
        <div className='hero-actions'>
          <Link className='button button-primary' to='/beaches'>
            Conheça as praias <span>→</span>
          </Link>
          <Link className='button button-ghost' to='/tourist-spots'>
            Pontos turísticos
          </Link>
        </div>
      </div>
      <div className='scroll-cue'>
        Explore <span></span>
      </div>
    </section>
  )
}
