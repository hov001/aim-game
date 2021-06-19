const start = document.getElementById('start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('.time-list')
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

const timeEl = document.getElementById('time')

function startGame() {
  setTime(time)
  setInterval(decreaseTime, 1000)
}

function decreaseTime() {
  if (time === 0) {
  } else {
    currentTime = --time
    if (currentTime < 10) currentTime = `0${currentTime}`
    setTime(currentTime)
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}
