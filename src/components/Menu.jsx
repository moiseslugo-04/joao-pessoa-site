import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    alert('Link clicked!')
    setIsOpen(false)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='container header-inner'>
      <Link className='brand' to='/' onClick={handleLinkClick}>
        João<span>Pessoa</span>
        <i>.</i>
      </Link>

      <button
        className='menu-button'
        type='button'
        aria-label='Abrir menu'
        aria-expanded={isOpen}
        aria-controls='primary-navigation'
        onClick={toggleMenu}
      >
        ☰
      </button>

      <div
        id='primary-navigation'
        className={`navigation-menu ${isOpen ? 'is-open' : ''}`}
      >
        <Link to='/' onClick={handleLinkClick}>
          Início
        </Link>

        <Link to='/beaches' onClick={handleLinkClick}>
          Praias
        </Link>

        <Link to='/tourist-spots' onClick={handleLinkClick}>
          Pontos turísticos
        </Link>
      </div>

      <Link className='header-cta' to='/beaches' onClick={handleLinkClick}>
        Explore a cidade <span>→</span>
      </Link>
    </nav>
  )
}
