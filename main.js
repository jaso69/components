import { Collapse } from 'flowbite'
import {  clases_el,
          colors,
          bg,
          padding, 
          border_width, 
          border_color, 
          border_radius, 
          border_style, 
          border_opacity,
          fontsize,
          decoration,
          shadows,
          text_aligns,
          widths,
          heights,
          scales,
          rotates,
          translates,
          brightness,
          contrasts,
          blurs,
          hues,
          weights,
          opacitys,
          cursors,
          statuss,
        } from './constantes'

const clases = []
clases_el.forEach((el) => {
  clases.push({el:el,clase:null})
})

/******************************************** */
/*** menu***************************************/

let status = 'default';
const defaultEl = document.querySelector('#defaultEl')
const activeEl = document.querySelector('#activeEl')
const focusEl = document.querySelector('#focusEl')
const hoverEl = document.querySelector('#hoverEl')
const visitedEl = document.querySelector('#visitedEl')
const dropStatus = document.querySelector('#dropStatus')

defaultEl.addEventListener('click', () => {
  dropStatus.innerHTML = 'Default'
  status = 'default'
})

activeEl.addEventListener('click', () => {
  dropStatus.innerHTML = 'Active'
  status = 'active'
})

focusEl.addEventListener('click', () => {
  dropStatus.innerHTML = 'Focus'
  status = 'focus'
})

hoverEl.addEventListener('click', () => {
  dropStatus.innerHTML = 'Hover'
  status = 'hover'
})

visitedEl.addEventListener('click', () => {
  dropStatus.innerHTML = 'Visited'
  status = 'visited'
})


const buttonEl = document.querySelector('#buttonEl')
const aEl = document.querySelector('#aEl')
const divEl = document.querySelector('#divEl')
const imgEl = document.querySelector('#imgEl')
const h1El = document.querySelector('#h1El')
const h2El = document.querySelector('#h2El')
const h3El = document.querySelector('#h3El')
const pEl = document.querySelector('#pEl')
const drop = document.querySelector('#drop')
let boton = document.querySelector('#boton')
let element = 'button';

const menuHtml = new Collapse(drop)

drop.addEventListener('click', () => { menuHtml.expand()})

buttonEl.addEventListener('click', () => {
    drop.innerHTML = 'Button'
    element = 'button'
    hidden('button', 'Button')
})

aEl.addEventListener('click', () => {
    drop.innerHTML = 'Anchor'
    element = 'a'
    hidden('a', 'a Element')
})

divEl.addEventListener('click', () => {
    drop.innerHTML = 'Div'
    element = 'div'
    hidden('div', 'Div Element')
})

imgEl.addEventListener('click', () => {
    drop.innerHTML = 'Img'
    element = 'img'
    hidden('img', 'img')
})

h1El.addEventListener('click', () => {
    drop.innerHTML = 'H1'
    element = 'h1'
    hidden('h1', 'H1 Element')
})

h2El.addEventListener('click', () => {
    drop.innerHTML = 'H2'
    element = 'h2'  
    hidden('h2', 'H2 Element')
})

h3El.addEventListener('click', () => {
    drop.innerHTML = 'H3'
    element = 'h3'
    hidden('h3', 'H3 Element')
})

pEl.addEventListener('click', () => {
    drop.innerHTML = 'Paragraph'
    element = 'p'
    hidden('p', 'Paragraph')
})

const hidden = (e, txt) => {
  const newEl = document.createElement(e)
  if(e === 'a') newEl.href = '#'
  newEl.textContent = txt
  newEl.id = "boton"
  newEl.classList = boton.classList
  if(dark) {
    newEl.classList.remove('text-black')
    newEl.classList.add('text-white')
  } else {
    newEl.classList.remove('text-white')
    newEl.classList.add('text-black')
  }
  boton.parentNode.replaceChild(newEl, boton)
  boton = document.querySelector('#boton')
}

/********************************************** */

const root = document.querySelector('html')
const ifr = document.querySelector('#iframe')
const body = document.querySelector('body')
const theme = document.querySelector('#theme')
const colores = document.querySelector('#colores')
const bgs = document.querySelector('#bg') 
const padd = document.querySelector('#padding')
const brd_w = document.querySelector('#brd-w')
const brd_c = document.querySelector('#brd-c')
const brd_r = document.querySelector('#brd-r')
const brd_s = document.querySelector('#brd-s') 
const brd_o = document.querySelector('#brd-o')
const font = document.querySelector('#font')
const t_decoration = document.querySelector('#decoration')
const shadow = document.querySelector('#shadow')
const text_align = document.querySelector('#text_align')
const width = document.querySelector('#widths')
const height = document.querySelector('#heights')
const scale = document.querySelector('#scales')
const rotate = document.querySelector('#rotates')
const translate = document.querySelector('#translates')
const brightnes = document.querySelector('#brightness')
const contrast = document.querySelector('#contrasts')
const blur = document.querySelector('#blurs')
const hue = document.querySelector('#hues')
const weight = document.querySelector('#weights')
const opacity = document.querySelector('#opacitys')
const cursor = document.querySelector('#cursors')
//const boton = document.querySelector('#boton')

let dark = true;

const op = (color, c_border) =>{
  const opcion = document.createElement("option");
  opcion.text = color;
  opcion.value = color;
  if(c_border) {
    if (color.startsWith('text')) {const txtColor = color.replace('text', 'bg'); opcion.classList.add(txtColor)}
    if (color.startsWith('border')) {const newColor = color.replace('border', 'bg'); opcion.classList.add(newColor)} 
  } else {
    opcion.classList.add(color)
  }
  return opcion
}

cursors.forEach(color => {
  cursor.add(op(color))
})

opacitys.forEach(color => {
  opacity.add(op(color))
})

weights.forEach(color => {
  weight.add(op(color))
})

hues.forEach(color => {
  hue.add(op(color))
})

blurs.forEach(color => {
  blur.add(op(color))
})

contrasts.forEach(color => {
  contrast.add(op(color))
})

brightness.forEach(color => {
  brightnes.add(op(color))
})

translates.forEach(color => {
  translate.add(op(color))
})

rotates.forEach(color => {
  rotate.add(op(color))
})

scales.forEach(color => {
  scale.add(op(color))
})

heights.forEach(color => {
  height.add(op(color))
})

widths.forEach(color => {
  width.add(op(color))
})

text_aligns.forEach(color => {
  text_align.add(op(color))
})

shadows.forEach(color => {
  shadow.add(op(color))
})

decoration.forEach(color => {
  t_decoration.add(op(color))
})

fontsize.forEach(color => {
  font.add(op(color))
})

border_opacity.forEach(color => {
  brd_o.add(op(color))
})

border_style.forEach(color => {
  brd_s.add(op(color))
})

border_radius.forEach(color => {
  brd_r.add(op(color))
})

border_color.forEach(color => {
  brd_c.add(op(color, true))
})

border_width.forEach(color => {
  brd_w.add(op(color))
})

padding.forEach(color => {
  padd.add(op(color))
})

colors.forEach(color => {
  colores.add(op(color, true, 'text'))
})

bg.forEach(color => {
  bgs.add(op(color))
})

const change = (color, e, select) => {
  let statusClass;
  if(status === 'default') statusClass = color
  if(status === 'active') {statusClass = statuss[0] + color; select = 'active'}
  if(status === 'focus') {statusClass = statuss[1] + color; select = 'focus'}
  if(status === 'hover') {statusClass = statuss[2] + color; select = 'hover'}
  if(status === 'visited') {statusClass = statuss[3] + color; select = 'visited'}
  clases.forEach(clase => {
    if(clase['el'] === e) {
      if(clase['clase']){
        if (clase['clase'].startsWith(select)) boton.classList.remove(clase['clase'])
        if(e === 'decoration' && clase['clase']) boton.classList.remove(clase['clase'])
      }
      clase['clase'] = statusClass
      boton.classList.add(clase['clase'])
      localStorage.setItem('clase', boton.classList)
      ifr.contentWindow.location.reload()
    }
  })
  const co = document.querySelector('#code')
  co.textContent = boton.outerHTML
  boton.addEventListener('click', () => {
    const temp = document.createElement('input')
    body.append(temp)
    temp.value = co.textContent
    temp.select()
    document.execCommand('copy')
    document.body.removeChild(temp)
  })
  boton.removeEventListener('click', () =>{})
}

colores.addEventListener('change', () => {
  dark ? boton.classList.remove('text-white') : boton.classList.remove('text-black')
  change(colores.value, 'colors', 'text'); 
})
bgs.addEventListener('change', () => {change(bgs.value, 'bg', 'bg')})
padd.addEventListener('change', () => {change(padd.value, 'padding', 'p')})
brd_w.addEventListener('change', () => {change(brd_w.value, 'border_width', 'border')})
brd_c.addEventListener('change', () => {change(brd_c.value, 'border_color', 'border')})
brd_r.addEventListener('change', () => {change(brd_r.value, 'border_radius', 'rounded')})
brd_s.addEventListener('change', () => {change(brd_s.value, 'border_style', 'border')})
brd_o.addEventListener('change', () => {change(brd_o.value, 'border_opacity', 'border')})
font.addEventListener('change', () => {change(font.value, 'fontsize', 'text')})
t_decoration.addEventListener('change', () => {change(t_decoration.value, 'decoration')})
shadow.addEventListener('change', () => {change(shadow.value, 'shadows', 'shadow')})
text_align.addEventListener('change', () => {change(text_align.value, 'text_aligns', 'text')})
width.addEventListener('change', () => {change(width.value, 'widths', 'w')})
height.addEventListener('change', () => {change(height.value, 'heights', 'h')})
scale.addEventListener('change', () => {change(scale.value, 'scales', 'scale')})
rotate.addEventListener('change', () => {change(rotate.value, 'rotates', 'rotate')})
translate.addEventListener('change', () => {change(translate.value, 'translates', 'translates')})
brightnes.addEventListener('change', () => {change(brightnes.value, 'brightness', 'brightness')})
contrast.addEventListener('change', () => {change(contrast.value, 'contrasts', 'contrast')})
blur.addEventListener('change', () => {change(blur.value, 'blurs', 'blur')})
hue.addEventListener('change', () => {change(hue.value, 'hues', 'hue')})
weight.addEventListener('change', () => {change(weight.value, 'weights', 'font')})
opacity.addEventListener('change', () => {change(opacity.value, 'opacitys', 'opacity')})
cursor.addEventListener('change', () => {change(cursor.value, 'cursors', 'cursor')})

theme.addEventListener('click', () => {
  if(dark){
    body.classList.remove('bg-gray-900')
    boton.classList.remove('text-white')
    body.classList.remove('dark')
    body.classList.add('bg-[#eee]')
    boton.classList.add('text-black')
  } else {
    body.classList.remove('bg-[#eee]')
    boton.classList.remove('text-black')
    body.classList.add('bg-gray-900')
    body.classList.add('dark')
    boton.classList.add('text-white')
  }
  dark = !dark

})