export function NatureSection() {
  return (
    <section id='natureza' className='split-section'>
      <div
        className='split-image'
        role='img'
        aria-label='Paisagem natural com mar e vegetação'
      ></div>
      <div className='split-copy reveal'>
        <p className='eyebrow dark-eyebrow'>Natureza e cultura</p>
        <h2>
          Uma cidade para <em>sentir</em>
        </h2>
        <p>
          Em João Pessoa, cada passeio revela um novo encontro: o traçado das
          ruas históricas, a sombra dos coqueiros e o ritmo tranquilo de quem
          sabe aproveitar a vida.
        </p>
        <div className='stat-row'>
          <div>
            <strong>40 km</strong>
            <span>de litoral</span>
          </div>
          <div>
            <strong>1585</strong>
            <span>ano de fundação</span>
          </div>
          <div>
            <strong>7h</strong>
            <span>primeiro sol</span>
          </div>
        </div>
      </div>
    </section>
  )
}
