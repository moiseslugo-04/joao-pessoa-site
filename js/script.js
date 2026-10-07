document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-button')
  const navigationMenu = document.querySelector('.navigation-menu')
  const backToTop = document.querySelector('.back-to-top')
  const yearElements = document.querySelectorAll('.current-year')

  if (menuButton && navigationMenu) {
    menuButton.addEventListener('click', () => {
      const isOpen = navigationMenu.classList.toggle('is-open')
      menuButton.setAttribute('aria-expanded', String(isOpen))
      menuButton.setAttribute(
        'aria-label',
        isOpen ? 'Fechar menu' : 'Abrir menu'
      )
    })
  }

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
  revealElements.forEach((element) => revealObserver.observe(element))

  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 500)
    })
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }

  yearElements.forEach((element) => {
    element.textContent = new Date().getFullYear()
  })
})
