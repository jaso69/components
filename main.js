import { initFlowbite } from 'flowbite'
import {  clases_el } from './constantes'
import { colores, bgs, padd, brd_w, brd_c, brd_r, brd_s, brd_o, font, t_decoration,
  shadow, text_align, width, height, scale, rotate, translate, brightnes, contrast,
  blur, hue, weight, opacity, cursor, duration, timing, delay, animation, backdropBlur,
  shadowColors, clip, bimage, from, via, to, style, thicknes, outline, outwidht} from "./selectors";
import {warningState, warningTheme, ifr, co } from './selectorsMenu'

const clases = []
clases_el.forEach((el) => {
  clases.push({el:el,clase:null})
})

const $ = (e) => document.querySelector(e)
initFlowbite()

const save = $('#save')
const darkMode = $('#darkMode')
const lightMode = $('#lightMode')
const prev_class = $('#prev_class')
const user = localStorage.getItem('user')
let eleHtml;
let elementSelected
let htmlSelected 
let statusSelected 
let themeSelected
let selector = ''
let clase = ''

save.classList.remove('hidden')

const selElhtml = $('#element')
const selStatus = $('#status')
const selTheme = $('#theme_select')

document.body.classList.add('dark')
searchClass('colors', 'text-white')

function classlistAdd(e){
  searchClass(e.target.name, e.target.value)
}

  thicknes.addEventListener('change', (e) => { classlistAdd(e)})
  style.addEventListener('change', (e) => { classlistAdd(e)})
  to.addEventListener('change', (e) => { classlistAdd(e)})
  via.addEventListener('change', (e) => { classlistAdd(e)})
  from.addEventListener('change', (e) => { classlistAdd(e)})
  colores.addEventListener('change', (e) => { classlistAdd(e)})
  clip.addEventListener('change', (e) => { classlistAdd(e)})
  bimage.addEventListener('change', (e) => { classlistAdd(e)})
  shadowColors.addEventListener('change', (e) => { classlistAdd(e)})
  backdropBlur.addEventListener('change', (e) => { classlistAdd(e)})
  animation.addEventListener('change', (e) => { classlistAdd(e)})
  delay.addEventListener('change', (e) => { classlistAdd(e)})
  timing.addEventListener('change', (e) => { classlistAdd(e)})
  duration.addEventListener('change', (e) => { classlistAdd(e)})
  bgs.addEventListener('change', (e) => { classlistAdd(e)})
  padd.addEventListener('change', (e) => { classlistAdd(e)})
  brd_w.addEventListener('change', (e) => { classlistAdd(e)})
  brd_c.addEventListener('change', (e) => { classlistAdd(e)})
  brd_r.addEventListener('change', (e) => { classlistAdd(e)})
  brd_s.addEventListener('change', (e) => { classlistAdd(e)})
  brd_o.addEventListener('change', (e) => { classlistAdd(e)})
  font.addEventListener('change', (e) => { classlistAdd(e)})
  t_decoration.addEventListener('change', (e) => { classlistAdd(e)})
  shadow.addEventListener('change', (e) => { classlistAdd(e)})
  text_align.addEventListener('change', (e) => { classlistAdd(e)})
  width.addEventListener('change', (e) => { classlistAdd(e)})
  height.addEventListener('change', (e) => { classlistAdd(e)})
  scale.addEventListener('change', (e) => { classlistAdd(e)})
  rotate.addEventListener('change', (e) => { classlistAdd(e)})
  translate.addEventListener('change', (e) => { classlistAdd(e)})
  brightnes.addEventListener('change', (e) => { classlistAdd(e)})
  contrast.addEventListener('change', (e) => { classlistAdd(e)})
  blur.addEventListener('change', (e) => { classlistAdd(e)})
  hue.addEventListener('change', (e) => { classlistAdd(e)})
  weight.addEventListener('change', (e) => { classlistAdd(e)})
  opacity.addEventListener('change', (e) => { classlistAdd(e)})
  outline.addEventListener('change', (e) => { classlistAdd(e)})
  outwidht.addEventListener('change', (e) => { classlistAdd(e)})
  cursor.addEventListener('change', (e) => { classlistAdd(e)})

statusSelected = 'default'
elementSelected = 'button'
themeSelected = 'light'
composeSelector()

selStatus.addEventListener('change', (e) => {
  statusSelected = e.target.value
  composeSelector()
})

selTheme.addEventListener('change', (e) => {
  themeSelected = e.target.value
  composeSelector()
})
selElhtml.addEventListener('change', (e) => {
  elementSelected = e.target.value
  elemento(elementSelected)
})

localStorage.setItem('clase', 'text-white')
localStorage.setItem('element', 'button')

if(document.body.classList.contains('dark')) {
  localStorage.setItem('theme', 'dark')
  darkMode.classList.add('hidden')
  lightMode.classList.remove('hidden')
  reload()
}
if(!document.body.classList.contains('dark')) {
  localStorage.setItem('theme', 'light')
  darkMode.classList.remove('hidden')
  lightMode.classList.add('hidden')
  reload()
}

darkMode.addEventListener('click', () => {
  localStorage.setItem('theme', 'dark')
  document.body.classList.add('dark')
  darkMode.classList.add('hidden')
  lightMode.classList.remove('hidden')
  reload()
})
lightMode.addEventListener('click', () => {
  localStorage.setItem('theme', 'light')
  document.body.classList.remove('dark')
  darkMode.classList.remove('hidden')
  lightMode.classList.add('hidden')
  reload()
})

co.addEventListener('click', () => {
  const temp = document.createElement('input')
  document.body.append(temp)
  temp.value = co.textContent
  temp.select()
  document.execCommand('copy')
  document.body.removeChild(temp)
  clipEffect()
})

function clipEffect(){
  const tooltip = $('#tooltip')
  tooltip.classList.remove('opacity-0')
	tooltip.classList.remove('hidden')
	tooltip.classList.add('duration-700')
	tooltip.classList.add('opacity-100')
	tooltip.classList.add('-translate-y-10')
  setTimeout(() => {
    tooltip.classList.remove('duration-700')
    tooltip.classList.remove('opacity-100')
    tooltip.classList.remove('-translate-y-10')
    tooltip.classList.add('opacity-0')
    tooltip.classList.add('hidden')
  }, 1000)
}

function elemento(el) {
  let typel = ''
  localStorage.setItem('element', el)
  if(el === 'input') {typel = ''; localStorage.setItem('element', 'input'); localStorage.setItem('type', '')}
  if(el === 'file') { el = 'input'; typel = 'file'; localStorage.setItem('element', 'input')}
  if(el === 'number') { el = 'input'; typel = 'number'; localStorage.setItem('element', 'input')}
  if(el === 'radio') { el = 'input'; typel = 'radio'; localStorage.setItem('element', 'input')}
  if(el === 'checkbox') { el = 'input'; typel = 'checkbox'; localStorage.setItem('element', 'input')}
  if(el === 'input' && typel === 'radio') { localStorage.setItem('type', typel)}
  if(el === 'input' && typel === 'checkbox') { localStorage.setItem('type', typel)}
  if(el === 'input' && typel === 'file') { localStorage.setItem('type', typel)}
  if(el === 'input' && typel === 'number') { localStorage.setItem('type', typel)}
  searchClass('')
  reload()
}

function composeSelector() {
  if(themeSelected !== 'light' && statusSelected !== 'default') { selector = themeSelected + ':' + statusSelected + ':' }
  if(themeSelected === 'light' && statusSelected !== 'default') { selector = statusSelected + ':' }
  if(statusSelected === 'default' && themeSelected !== 'light') { selector = themeSelected + ':' }
  if(statusSelected === 'default' && themeSelected === 'light') { selector = '' }
}

function searchClass(ele, clase) {
  const sc = selector + ele
  clases.forEach(el => {
    if (el.el === sc) {
      if(prev_class.classList.contains(el.clase)) { prev_class.classList.remove(el.clase)}
      el.clase = clase
      prev_class.classList.add(selector + clase)
    } 
  })
  localStorage.setItem('clase', prev_class.classList)
  const newEl = document.createElement(localStorage.getItem('element'))
  if(localStorage.getItem('element') === 'img') {newEl.src = './img.avif'}
  if(localStorage.getItem('element') === 'input' && localStorage.getItem('type') === 'radio') { newEl.type = 'radio' }
  if(localStorage.getItem('element') === 'input' && localStorage.getItem('type') === 'checkbox') { newEl.type = 'checkbox' }
  if(localStorage.getItem('element') === 'input' && localStorage.getItem('type') === 'file') { newEl.type = 'file' }
  if(localStorage.getItem('element') === 'input' && localStorage.getItem('type') === 'number') { newEl.type = 'number' }
  newEl.classList = prev_class.classList
  newEl.textContent = 'JaWeB Generator'
  eleHtml= newEl.outerHTML
  co.textContent = eleHtml
  reload()
}

function reload(){
  ifr.contentWindow.location.reload()
}
