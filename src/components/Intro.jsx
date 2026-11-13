import { Link } from 'react-router-dom'

export function Intro() {
  return (
    <section className='section intro-section'>
      <div className='container'>
        <div className='section-heading reveal'>
          <p className='eyebrow dark-eyebrow'>Um destino singular</p>
          <h2>
            Onde o tempo encontra o <em>mar</em>
          </h2>
          <p>
            Conhecida como a cidade onde o sol nasce primeiro, João Pessoa
            combina praias urbanas, paisagens naturais e um patrimônio cultural
            único.
          </p>
        </div>
        <div className='feature-grid'>
          <article className='feature-card reveal'>
            <span className='feature-icon'>◒</span>
            <h3>Praias paradisíacas</h3>
            <p>
              Águas mornas, coqueiros e piscinas naturais em uma costa
              inesquecível.
            </p>
            <Link to='/beaches'>Ver praias →</Link>
          </article>
          <article className='feature-card reveal'>
            <span className='feature-icon'>✦</span>
            <h3>História viva</h3>
            <p>
              Arquitetura colonial e monumentos que contam a história da
              terceira cidade mais antiga do Brasil.
            </p>
            <Link to='/tourist-spots'>Descobrir história →</Link>
          </article>
          <article className='feature-card reveal'>
            <span className='feature-icon'>♧</span>
            <h3>Natureza exuberante</h3>
            <p>
              Mangues, parques e o verde preservado que respira junto com a
              cidade.
            </p>
            <a href='#natureza'>Conhecer natureza →</a>
          </article>
        </div>
      </div>
    </section>
  )
}
