let score = 0
const timeEl = document.getElementById('time')

// Start game
function startGame() {
  setTime(time)
  setInterval(decreaseTime, 1000)
  createRandomCircle()
}
// Decrease time
function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    currentTime = --time
    if (currentTime < 10) currentTime = `0${currentTime}`
    setTime(currentTime)
  }
}
// Set time
function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}

// Click circle
board.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('circle')) {
    score++
    evt.target.remove()
    createRandomCircle()
  }
})
// Finish game
function finishGame() {
  timeEl.parentNode.remove()
  let bestScore = localStorage.getItem('bestScore')
  if (bestScore === null || parseInt(bestScore) < score) {
    localStorage.setItem('bestScore', score)
    bestScore = score
  }
  board.innerHTML = `
    <div class="score-section">
      <h1>Score: <span class="primary">${score}</span></h1>
      <h1>Best score: <span class="primary">${bestScore}</h1>
      <a href="#" class="start" id="restart">Start game</a> 
    </div>
  `

  const restart = document.getElementById('restart')
  restart.addEventListener('click', (evt) => {
    evt.preventDefault()
    window.location.reload()
  })
}
