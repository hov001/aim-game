let time = 0

start.addEventListener('click', (evt) => {
  evt.preventDefault()
  screens[0].classList.add('up')
})

timeList.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('time-list__item')) {
    time = parseInt(evt.target.dataset.time)
    screens[1].classList.add('up')
    startGame()
  }
})
