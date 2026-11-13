import farolCaboBranco from '../img/Farol_do_Cabo_Branco2.jpg'
import centroCultural from '../img/Centro_Cultural_São_Francisco.jpg'
import estacaoCaboranco from '../img/estacao-cabo-branco-ciencia.jpg'
import { Card } from '../components/Card'
export function TouristPage() {
  return (
    <>
      <section class='page-hero page-hero-alt'>
        <div class='container reveal'>
          <p class='eyebrow dark-eyebrow'>Memória e identidade</p>
          <h1>
            Pontos turísticos <em>de João Pessoa</em>
          </h1>
          <p>
            Uma viagem pela história, pela arte e pelos lugares que fazem a
            cidade especial.
          </p>
        </div>
      </section>
      <section class='section listing-section'>
        <div class='container'>
          <div class='listing-grid'>
            <Card
              img={farolCaboBranco}
              alt='Farol do Cabo Branco em João Pessoa'
              eyebrow='No extremo oriental'
              title='Farol do Cabo Branco'
              description='O monumento marca o ponto mais oriental das Américas e oferece uma vista privilegiada para o litoral paraibano.'
              idealFor='Visita: todos os dias, com acesso livre à área externa.'
            />

            <Card
              img={centroCultural}
              alt='Centro Cultural São Francisco em João Pessoa'
              eyebrow='Centro histórico'
              title='Centro Cultural São Francisco'
              description='Um dos conjuntos barrocos mais importantes do Brasil, com azulejos, talhas douradas e séculos de arte sacra.'
              idealFor='Visita: confira os horários das visitas guiadas.'
            />
            <Card
              img={estacaoCaboranco}
              alt='Estação Cabo Branco em João Pessoa'
              eyebrow='Arte e ciência'
              title='Estação Cabo Branco'
              description='Projetada por Oscar Niemeyer, a estação é um espaço dedicado à cultura, à ciência e às exposições contemporâneas.'
              idealFor='Visita: programação cultural gratuita.'
            />
          </div>
        </div>
      </section>
    </>
  )
}
