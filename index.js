const navOpen = document.querySelector('#nav-open')
const navClose = document.querySelector('#nav-close')
const navModal = document.querySelector('#nav-modal')
navOpen.addEventListener('click', ()=>{
  navModal.setAttribute('data-state', 'is-active')
  document.documentElement.style.overflow = 'hidden'
})
navClose.addEventListener('click', ()=>{
  navModal.setAttribute('data-state', 'not-active')
  document.documentElement.style.overflow = 'auto'
})