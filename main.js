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
          rules,
          q_status,
          txtButton,
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
  dropStatus.innerHTML = q_status[0]
  status = q_status[0]
})

activeEl.addEventListener('click', () => {
  dropStatus.innerHTML = q_status[1]
  status = q_status[1]
})

focusEl.addEventListener('click', () => {
  dropStatus.innerHTML = q_status[2]
  status = q_status[2]
})

hoverEl.addEventListener('click', () => {
  dropStatus.innerHTML = q_status[3]
  status = q_status[3]
})

visitedEl.addEventListener('click', () => {
  dropStatus.innerHTML = q_status[4]
  status = q_status[4]
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

//drop.addEventListener('click', () => { menuHtml.expand()})

buttonEl.addEventListener('click', () => {
    drop.innerHTML = 'Button'
    element = 'button'
    hidden('button', txtButton)
})

aEl.addEventListener('click', () => {
    drop.innerHTML = 'Anchor'
    element = 'a'
    hidden('a', txtButton)
})

divEl.addEventListener('click', () => {
    drop.innerHTML = 'Div'
    element = 'div'
    hidden('div', txtButton)
})

imgEl.addEventListener('click', () => {
    drop.innerHTML = 'Img'
    element = 'img'
    hidden('img', txtButton)
})

h1El.addEventListener('click', () => {
    drop.innerHTML = 'H1'
    element = 'h1'
    hidden('h1', txtButton)
})

h2El.addEventListener('click', () => {
    drop.innerHTML = 'H2'
    element = 'h2'  
    hidden('h2', txtButton)
})

h3El.addEventListener('click', () => {
    drop.innerHTML = 'H3'
    element = 'h3'
    hidden('h3', txtButton)
})

pEl.addEventListener('click', () => {
    drop.innerHTML = 'Paragraph'
    element = 'p'
    hidden('p', txtButton)
})
localStorage.setItem('element', 'button')

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
  const co = document.querySelector('#code')
  co.textContent = boton.outerHTML
  localStorage.setItem('element', e)
  ifr.contentWindow.location.reload()
}

/********************************************** */

const html_theme = document.querySelector('html')
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
const theme_select = document.querySelector('#theme_select')
//const boton = document.querySelector('#boton')

let dark_op = false;

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

const change = (color, e) => {
  let statusClass;
  if(status === q_status[0] && dark_op) {
    statusClass = 'dark:' + color
    e = 'dark:' + e
  } else {
    statusClass = color
  }
  if(status === q_status[1] && dark_op) {
    statusClass = q_status[5] + color; 
    e = q_status[5] + e
  } else if(status === q_status[1] && !dark_op) {
    e = q_status[1] + e
    statusClass = q_status[1] + color
  }
  if(status === q_status[2] && dark_op) {
    statusClass = q_status[6] + color; 
    e = q_status[6] + e
  } else if (status === q_status[2] && !dark_op){
    e = q_status[2] + e
    statusClass = q_status[2] + color
  }
  if(status === q_status[3] && dark_op) {
    statusClass = q_status[7] + color; 
    e = q_status[7] + e
  } else if (status === q_status[3] && !dark_op){
    statusClass = q_status[3] + color; 
    e = q_status[3] + e
  }
  if(status === q_status[4] && dark_op) {
    statusClass = q_status[8] + color; 
    e = q_status[8] + e
  } else if(status === q_status[4] && !dark_op){
    statusClass = q_status[4] + color; 
    e = q_status[4] + e
  }
  console.log(status)
  console.log(statusClass)
  
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
change('text-white', 'colors')
colores.addEventListener('change', () => {
  //dark ? boton.classList.remove('text-white') : boton.classList.remove('text-black')
  change(colores.value, colores.name, rules[0]); 
})
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

let tmp_theme = true;
function themeHandler() {
  if (theme_select.value === 'none') {
    html_theme.classList.remove('dark')
    dark_op = false
    localStorage.setItem('theme', 'none')
  }
  if (theme_select.value === 'dark') {
    html_theme.classList.add('dark')
    dark_op = true
    body.classList.remove('bg-slate-200')
    body.classList.add('bg-gray-900')
    localStorage.setItem('theme', 'dark')
  }
  if (theme_select.value === 'light') {
    html_theme.classList.remove('dark')
    body.classList.add('bg-slate-200')
    body.classList.remove('bg-gray-900')
    dark_op = false
    tmp_theme = false
    localStorage.setItem('theme', 'light')
  }
  ifr.contentWindow.location.reload()
}

function darkLight() {
  if(tmp_theme){
    body.classList.remove('bg-gray-900')
    body.classList.add('bg-slate-200')
    localStorage.setItem('theme', 'light')
  } else {
    body.classList.remove('bg-slate-200')
    body.classList.add('bg-gray-900')
    localStorage.setItem('theme', 'dark')
  }
  tmp_theme = !tmp_theme
  ifr.contentWindow.location.reload()
}