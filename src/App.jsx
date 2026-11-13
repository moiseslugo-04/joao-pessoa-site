import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import { Menu } from './components/Menu'
import { Footer } from './components/Footer'
import { BeachPage } from './pages/beaches'
import { TouristPage } from './pages/TouristPage'
import { Home } from './components/Home'

import './App.css'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    const backToTop = document.querySelector('.back-to-top')
    const yearElements = document.querySelectorAll('.current-year')

    yearElements.forEach((element) => {
      element.textContent = new Date().getFullYear()
    })
    const revealElements = document.querySelectorAll('.reveal')

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    revealElements.forEach((element) => {
      revealObserver.observe(element)
    })

    const handleScroll = () => {
      if (backToTop) {
        backToTop.classList.toggle('visible', window.scrollY > 500)
      }
    }

    const handleBackToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    if (backToTop) {
      window.addEventListener('scroll', handleScroll)
      backToTop.addEventListener('click', handleBackToTop)
    }
    return () => {
      revealObserver.disconnect()

      window.removeEventListener('scroll', handleScroll)

      if (backToTop) {
        backToTop.removeEventListener('click', handleBackToTop)
      }
    }
  }, [location.pathname])

  return (
    <div>
      {/* Header */}
      <header className='site-header site-header-overlay'>
        <Menu />
      </header>

      {/* Main content */}
      <main>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/tourist-spots' element={<TouristPage />} />

          <Route path='/beaches' element={<BeachPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
