import color from '../assets/colors.json' assert { type: 'json' };

// let textColor = 'blueviolet - #8A2BE2'

const btn = document.getElementById('btn')
const applyBtn = document.getElementById('apply-btn')
const selectedColor = document.querySelector('.selected-color')
const colorName = document.getElementById('color-name')
const lineBackground = document.querySelector('#lineBackground')
const anchor = document.querySelectorAll('a')
const buttons = document.querySelectorAll('button')
const nav = document.querySelector('.navbar')

colorName.innerHTML = 'blueviolet - #8A2BE2'

const generateNumber = () => {
  const number = parseInt(Math.random() * color.colors.length)
  return number
}

const changeColor = () => {
  const randomNumber = generateNumber()
  selectedColor.style.color = color.colors[randomNumber].hex
  colorName.innerHTML = `${color.colors[randomNumber].name} - ${color.colors[randomNumber].hex.toUpperCase()}`
}

const keepColor = () => {
  const getColor = selectedColor.style.color
  console.log(getColor)
  lineBackground.style.backgroundColor = getColor
  anchor.forEach(a => a.style.color = getColor)  
  buttons.forEach(btn => btn.style.cssText = `
    border-color: ${getColor};
    background: color-mix(in srgb, ${getColor} 25%, transparent);
  `)
  nav.style.cssText = `border-bottom: 1px solid ${getColor};`
  
}

btn.addEventListener('click', changeColor)

applyBtn.addEventListener('click', keepColor)