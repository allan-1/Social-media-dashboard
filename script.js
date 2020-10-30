const darkModeBtn = document.querySelector('.ld-btn');
const body = document.querySelector('body')
const cards = document.querySelectorAll('.card')
const clickBox = document.querySelector('.clickable')


// event listener
darkModeBtn.addEventListener('click', lightDarkMode)
// functions
function lightDarkMode() {
    clickBox.classList.toggle('dark-btn')
    clickBox.classList.toggle('light-btn')
    body.classList.toggle('dark')
    body.classList.toggle('light')
    cards.forEach((card) => {
        card.classList.toggle('bg-dark')
        card.classList.toggle('bg-light')
    })
}