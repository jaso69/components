import { Collapse } from 'flowbite'
import {  clases_el,
          rules,
          q_status,
          txtButton,
        } from './constantes'

import { colores, bgs, padd, brd_w, brd_c, brd_r, brd_s, brd_o, font, t_decoration,
  shadow, text_align, width, height, scale, rotate, translate, brightnes, contrast,
  blur, hue, weight, opacity, cursor, duration, timing, delay, animation, backdropBlur } from "./selectors";

const clases = []
clases_el.forEach((el) => {
  clases.push({el:el,clase:null})
})

const warningState = document.querySelector('#warningState')
const warningTheme = document.querySelector('#warningTheme')
const defaultEl = document.querySelector('#defaultEl')
const activeEl = document.querySelector('#activeEl')
const focusEl = document.querySelector('#focusEl')
const hoverEl = document.querySelector('#hoverEl')
const visitedEl = document.querySelector('#visitedEl')
const dropStatus = document.querySelector('#dropStatus')
const buttonEl = document.querySelector('#buttonEl')
const aEl = document.querySelector('#aEl')
const divEl = document.querySelector('#divEl')
const imgEl = document.querySelector('#imgEl')
const h1El = document.querySelector('#h1El')
const h2El = document.querySelector('#h2El')
const h3El = document.querySelector('#h3El')
const pEl = document.querySelector('#pEl')
const drop = document.querySelector('#drop')
const html_theme = document.querySelector('html')
const ifr = document.querySelector('#iframe')
const body = document.querySelector('body')
const theme = document.querySelector('#theme')
const theme_select = document.querySelector('#theme_select')
const tooltip = document.querySelector('#tooltip')
const co = document.querySelector('#code')
const menuHtml = new Collapse(drop)
let boton = document.querySelector('#boton')
let dark_op = false;
let tmp_theme = true;
let status = 'default';

colores.addEventListener('change', () => { change(colores.value, colores.name, rules[0]); })
backdropBlur.addEventListener('change', () => {change(backdropBlur.value, backdropBlur.name)})
animation.addEventListener('change', () => {change(animation.value, animation.name)})
delay.addEventListener('change', () => {change(delay.value, delay.name)})
timing.addEventListener('change', () => {change(timing.value, timing.name)})
duration.addEventListener('change', () => {change(duration.value, duration.name)})
bgs.addEventListener('change', () => {change(bgs.value, bgs.name)})
padd.addEventListener('change', () => {change(padd.value, padd.name)})
brd_w.addEventListener('change', () => {change(brd_w.value, brd_w.name)})
brd_c.addEventListener('change', () => {change(brd_c.value, brd_c.name)})
brd_r.addEventListener('change', () => {change(brd_r.value, brd_r.name)})
brd_s.addEventListener('change', () => {change(brd_s.value, brd_s.name)})
brd_o.addEventListener('change', () => {change(brd_o.value, brd_o.name)})
font.addEventListener('change', () => {change(font.value, font.name)})
t_decoration.addEventListener('change', () => {change(t_decoration.value, t_decoration.name)})
shadow.addEventListener('change', () => {change(shadow.value, shadow.name)})
text_align.addEventListener('change', () => {change(text_align.value, text_align.name)})
width.addEventListener('change', () => {change(width.value, width.name)})
height.addEventListener('change', () => {change(height.value, height.name)})
scale.addEventListener('change', () => {change(scale.value, scale.name)})
rotate.addEventListener('change', () => {change(rotate.value, rotate.name)})
translate.addEventListener('change', () => {change(translate.value, translate.name)})
brightnes.addEventListener('change', () => {change(brightnes.value, brightnes.name)})
contrast.addEventListener('change', () => {change(contrast.value, contrast.name)})
blur.addEventListener('change', () => {change(blur.value, blur.name)})
hue.addEventListener('change', () => {change(hue.value, hue.name)})
weight.addEventListener('change', () => {change(weight.value, weight.name)})
opacity.addEventListener('change', () => {change(opacity.value, opacity.name)})
cursor.addEventListener('change', () => {change(cursor.value, cursor.name)})
theme_select.addEventListener('change', () => { themeHandler() })
theme.addEventListener('click', () => { darkLight() })

localStorage.setItem('element', 'button')
noneTheme()
change('text-white', 'colors')

defaultEl.addEventListener('click', () => {
  dropStatus.innerHTML = q_status[0]
  status = q_status[0]
  if (!warningState.classList.contains('hidden')) warningState.classList.add('hidden')
})

activeEl.addEventListener('click', () => {
  warn('ACTIVE')
  dropStatus.innerHTML = q_status[1]
  status = q_status[1]
})

focusEl.addEventListener('click', () => {
  warn('FOCUS')
  dropStatus.innerHTML = q_status[2]
  status = q_status[2]
})

hoverEl.addEventListener('click', () => {
  warn('HOVER')
  dropStatus.innerHTML = q_status[3]
  status = q_status[3]
})

visitedEl.addEventListener('click', () => {
  warn('VISITED')
  dropStatus.innerHTML = q_status[4]
  status = q_status[4]
})

function warn(state){
  warningState.classList.remove('hidden')
  warningState.innerHTML = `The classes only apply to the ${state} state.`
}
//drop.addEventListener('click', () => { menuHtml.expand()})

buttonEl.addEventListener('click', () => {
    drop.innerHTML = 'Button'
    hidden('button', txtButton)
})

aEl.addEventListener('click', () => {
    drop.innerHTML = 'Anchor'
    hidden('a', txtButton)
})

divEl.addEventListener('click', () => {
    drop.innerHTML = 'Div'
    hidden('div', txtButton)
})

imgEl.addEventListener('click', () => {
    drop.innerHTML = 'Img'
    hidden('img', txtButton)
})

h1El.addEventListener('click', () => {
    drop.innerHTML = 'H1'
    hidden('h1', txtButton)
})

h2El.addEventListener('click', () => {
    drop.innerHTML = 'H2'
    hidden('h2', txtButton)
})

h3El.addEventListener('click', () => {
    drop.innerHTML = 'H3'
    hidden('h3', txtButton)
})

pEl.addEventListener('click', () => {
    drop.innerHTML = 'Paragraph'
    hidden('p', txtButton)
})

const hidden = (e, txt) => {
  localStorage.setItem('element', e)
  const newEl = document.createElement(e)
  if(e === 'a') newEl.href = '#' 
  if(e=== 'img') { newEl.src = './img.avif' }
  newEl.textContent = txt
  newEl.id = "boton"
  newEl.classList = boton.classList
  boton.parentNode.replaceChild(newEl, boton)
  boton = document.querySelector('#boton')
  co.textContent = boton.outerHTML
  localStorage.setItem('element', e)
  ifr.contentWindow.location.reload()
}

function change(color, e) {
  let statusClass;

  q_status.forEach( (estado, index) => {
    if(index === 0 && dark_op){
      statusClass = 'dark:' + color
      e = 'dark:' + e
    }
    if(index === 0 && !dark_op){
      statusClass = color
    }
    if(estado === status && dark_op && index > 0){
        statusClass = q_status[index + 4] + color
        e = q_status[index + 4] + e
    }
    if(estado === status && !dark_op && index > 0){
        statusClass = estado + color
        e = estado + e
    }
  })

  addClass(e, statusClass)
  copy()
}

function addClass(e, statusClass){
  clases.forEach(clase => {
    if(clase['el'] === e) {
      if(clase['clase']){
        if (clase['clase']) boton.classList.remove(clase['clase'])
        if(e === 'decoration' && clase['clase']) boton.classList.remove(clase['clase'])
      }
      clase['clase'] = statusClass
      boton.classList.add(clase['clase'])
      localStorage.setItem('clase', boton.classList)
      ifr.contentWindow.location.reload()
    }
  })
}

function copy(){
  co.textContent = boton.outerHTML
  boton.addEventListener('click', () => {
    const temp = document.createElement('input')
    body.append(temp)
    temp.value = co.textContent
    temp.select()
    document.execCommand('copy')
    document.body.removeChild(temp)
    clipEffect()
  })
  boton.removeEventListener('click', () =>{})
}

function clipEffect(){
  tooltip.classList.remove('opacity-0')
    tooltip.classList.remove('hidden')
    tooltip.classList.add('duration-700')
    tooltip.classList.add('opacity-100')
    tooltip.classList.add('-translate-y-4')
  setTimeout(() => {
    tooltip.classList.remove('duration-700')
    tooltip.classList.remove('opacity-100')
    tooltip.classList.remove('-translate-y-4')
    tooltip.classList.add('opacity-0')
    tooltip.classList.add('hidden')
  }, 1000)
}

function themeHandler() {
  if (theme_select.value === 'none') {
    themeStorage( 'dark', 'none')
    noneTheme()
    warningTheme.classList.add('hidden')
    dark_op = false
  }
  if (theme_select.value === 'dark') {
    html_theme.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    warningTheme.classList.remove('hidden')
    warningTheme.innerHTML = 'The classes only apply to the Dark Mode.'
    dark_op = true
    bgGray()
  }
  if (theme_select.value === 'light') {
    warningTheme.classList.remove('hidden')
    themeStorage( 'dark', 'light')
    bgSlate()
    dark_op = false
    tmp_theme = false
  }
  ifr.contentWindow.location.reload()
}

function noneTheme(){
  if(body.classList.contains('bg-gray-900')){ 
    localStorage.setItem('theme', 'dark') 
    ifr.contentWindow.location.reload()
  }
}

function darkLight() {
  if(tmp_theme){
    bgSlate()
    localStorage.setItem('theme', 'light')
  } else {
    bgGray()
    localStorage.setItem('theme', 'dark')
  }
  tmp_theme = !tmp_theme
  ifr.contentWindow.location.reload()
}

function themeStorage( theme, item){
  html_theme.classList.remove(theme)
  localStorage.setItem('theme', item)
}

function bgSlate(){
  body.classList.remove('bg-gray-900')
  body.classList.add('bg-slate-200')
}
function bgGray(){
  body.classList.remove('bg-slate-200')
  body.classList.add('bg-gray-900')
}