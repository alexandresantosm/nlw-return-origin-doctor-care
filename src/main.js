const SCROLL = 'scroll'
const MENU_EXPANDED = 'menu-expanded'

const onScroll = () => {
  if (scrollY > 0) {
    navigation.classList.add(SCROLL)
  } else {
    navigation.classList.remove(SCROLL)
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
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card`)
