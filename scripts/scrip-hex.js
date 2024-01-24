const hexColors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

color.innerHTML = '#FAEBD7'

const randomHexColor = () => {
  let hexColor = '#'
  for (let i = 0; i <= 5; i++) {
    const randomNumber = parseInt(Math.random() * hexColors.length)
    hexColor = hexColor.concat(hexColors[randomNumber])
  }
  document.body.style.backgroundColor = hexColor
  color.textContent = hexColor
}

btn.addEventListener('click', randomHexColor)
