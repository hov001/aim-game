const start = document.getElementById('start')
const screens = document.querySelectorAll('.screen')

start.addEventListener('click', (evt) => {
  evt.preventDefault()
  screens[0].classList.add('up')
})
