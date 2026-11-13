import { Link } from 'react-router-dom'
export function Footer() {
  return (
    <>
      <footer className='footer-section'>
        <div className='container footer-inner'>
          <div>
            <a className='brand footer-brand' href='index.html'>
              João<span>Pessoa</span>
              <i>.</i>
            </a>
            <p>
              Um convite para descobrir a cidade
              <br />
              onde o sol nasce primeiro.
            </p>
          </div>
          <nav className='footer-nav'>
            <span>Explore</span>
            <Link to='/beaches'>Praias</Link>
            <Link to='/tourist-spots'>Pontos turísticos</Link>
          </nav>
          <div className='footer-contact'>
            <span>Paraíba, Brasil</span>
            <a href='mailto:ola@joaopessoa.com'>ola@joaopessoa.com</a>
          </div>
        </div>
        <div className='container footer-bottom'>
          <span>
            © <span className='current-year'></span> João Pessoa
          </span>
          <span>Feito com carinho no Nordeste</span>
        </div>
      </footer>
      <button className='back-to-top' type='button' aria-label='Voltar ao topo'>
        ↑
      </button>
    </>
  )
}
