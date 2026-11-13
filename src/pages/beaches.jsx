import { Card } from '../components/Card'
import bessa from '../img/bessa.jpg'
import caboBranco from '../img/cabo_branco.jpg'
import tambau from '../img/tambau.jpg'

export function BeachPage() {
  return (
    <>
      <section class='page-hero'>
        <div class='container reveal'>
          <p class='eyebrow dark-eyebrow'>Sol, mar e tranquilidade</p>
          <h1>
            Praias de <em>João Pessoa</em>
          </h1>
          <p>
            Uma costa de águas mornas e paisagens que convidam a desacelerar.
          </p>
        </div>
      </section>
      <section class='section listing-section'>
        <div class='container'>
          <div class='listing-grid'>
            <Card
              img={tambau}
              alt='Praia de Tambaú em João Pessoa'
              eyebrow='Orla central'
              title='Praia de Tambaú'
              description='O coração turístico da cidade, com águas calmas, coqueiros e uma orla cheia de vida. É daqui que partem os passeios para as piscinas naturais.'
              idealFor='Ideal para: caminhadas e passeios de barco.'
            />

            <Card
              img={caboBranco}
              alt='Praia do Cabo Branco em João Pessoa'
              eyebrow='Cartão-postal'
              title='Praia do Cabo Branco'
              description='Com falésias e uma faixa de areia generosa, Cabo Branco é perfeita para curtir o nascer do sol e a energia acolhedora da orla.'
              idealFor='Ideal para: banho de mar e ciclismo.'
            />

            <Card
              img={bessa}
              alt='Praia do Bessa em João Pessoa'
              eyebrow='Piscinas naturais'
              title='Praia do Bessa'
              description='Conhecida como Caribessa, reúne mar azul-turquesa e piscinas naturais que aparecem na maré baixa, em um clima mais sossegado.'
              idealFor='Ideal para: mergulho e stand up paddle.'
            />
          </div>
        </div>
      </section>
    </>
  )
}
