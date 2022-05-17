const SCROLL = 'scroll'
const MENU_EXPANDED = 'menu-expanded'
const BACK_TO_TOP_BUTTON = 'show'

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  // activateMenuAtCurrentSection(depositions)
  activateMenuAtCurrentSection(contact)
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

const activateMenuAtCurrentSection = section => {
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')

  if (sectionBoundaries) {
    menuElement.classList.add('active')
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
