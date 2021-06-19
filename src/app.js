const start = document.getElementById('start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('.time-list')
const board = document.getElementById('board')
let time = 0
let score = 0

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

board.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('circle')) {
    score++
    evt.target.remove()
    createRandomCircle()
  }
})

function startGame() {
  setTime(time)
  setInterval(decreaseTime, 1000)
  createRandomCircle()
}

function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    currentTime = --time
    if (currentTime < 10) currentTime = `0${currentTime}`
    setTime(currentTime)
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}

function finishGame() {
  timeEl.parentNode.remove()
  board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
  const circle = document.createElement('div')
  circle.classList.add('circle')

  const size = randomSize(10, 60)
  const { width, height } = board.getBoundingClientRect()
  const x = randomSize(0, width - size)
  const y = randomSize(0, height - size)
  const color = getRandomColor()

  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  circle.style.backgroundColor = `#${color}`
  circle.style.boxShadow = `0 0 2px #${color}, 0 0 2px #fff`

  board.append(circle)
}

function randomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16)
}
