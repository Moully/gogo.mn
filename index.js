const main = document.querySelector('main')
const footer = document.querySelector('footer')
const navbarRightDropDown = document.querySelector('.navbar-right-dropdown')
const menuButton = document.querySelector('.button-menu')
const menuButtonExit = document.querySelector('.button-exit')

menuButton.addEventListener('click', ()=>{
    main.style.display = "none"
    footer.style.display = 'none'
})
menuButtonExit.addEventListener('click', ()=>{
    main.style.display = "block"
    footer.style.display = 'block'
})