const SCROLL = 'scroll'
const MENU_EXPANDED = 'menu-expanded'
const BACK_TO_TOP_BUTTON = 'show'

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

const showNavOnScroll = () => {
  if (scrollY > 0) {
    navigation.classList.add(SCROLL)
  } else {
    navigation.classList.remove(SCROLL)
  }
}

const showBackToTopButtonOnScroll = () => {
  if (scrollY > 500) {
    backToTopButton.classList.add(BACK_TO_TOP_BUTTON)
  } else {
    backToTopButton.classList.remove(BACK_TO_TOP_BUTTON)
  }
}

const openMenu = () => {
  document.body.classList.add(MENU_EXPANDED)
}

const closeMenu = () => {
  document.body.classList.remove(MENU_EXPANDED)
}

const optionsScrollReveal = {
  origin: 'top',
  distance: '30px',
  duration: 600
}

ScrollReveal(optionsScrollReveal).reveal(`
  #home,
  #home header,
  #home header h4,
  #home header h1,
  #home header p,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header h4,
  #about header h2,
  #about .content,
  #about .content p,
  #about .content img,
  #contact,
  #contact header,
  #contact header h2,
  #contact .content,
  #contact .content ul,
  #contact .content a,
  #contact .content img
  `)

window.addEventListener('scroll', onScroll)
onScroll()
