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
