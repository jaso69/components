import {  colors,
          bg,
          padding, 
          border_width, 
          border_color, 
          border_radius, 
          border_style, 
          border_opacity,
          fontsize,
        } from './constantes'

const colores = document.querySelector('#colores')
const bgs = document.querySelector('#bg') 
const padd = document.querySelector('#padding')
const brd_w = document.querySelector('#brd-w')
const brd_c = document.querySelector('#brd-c')
const brd_r = document.querySelector('#brd-r')
const brd_s = document.querySelector('#brd-s') 
const brd_o = document.querySelector('#brd-o')
const font = document.querySelector('#font')
const boton = document.querySelector('#boton')

let color_save;
let bg_save;
let padding_save;
let brd_w_save;
let brd_c_save;
let brd_r_save;
let brd_s_save;
let brd_o_save;
let font_save;

const clases = []

fontsize.forEach(color => {
  const opcion = document.createElement("option");
  opcion.text = color;
  opcion.value = color;
  opcion.classList.add(color)
  font.add(opcion)
})

border_opacity.forEach(color => {
  const opcion = document.createElement("option");
  opcion.text = color;
  opcion.value = color;
  opcion.classList.add(color)
  brd_o.add(opcion)
})

border_style.forEach(color => {
  const opcion = document.createElement("option");
  opcion.text = color;
  opcion.value = color;
  opcion.classList.add(color)
  brd_s.add(opcion)
})

border_radius.forEach(color => {
  const opcion = document.createElement("option");
  opcion.text = color;
  opcion.value = color;
  opcion.classList.add(color)
  brd_r.add(opcion)
})

border_color.forEach(color => {
  const opcion = document.createElement("option");
  opcion.text = color;
  opcion.value = color;
  opcion.classList.add(color.replace('border', 'bg'))
  brd_c.add(opcion)
})

border_width.forEach(color => {
  const opcion = document.createElement("option");
  opcion.text = color;
  opcion.value = color;
  opcion.classList.add(color)
  brd_w.add(opcion)
})

padding.forEach(color => {
  const opcion = document.createElement("option");
  opcion.text = color;
  opcion.value = color;
  opcion.classList.add(color)
  padd.add(opcion)
})

colors.forEach(color => {
  const opcion = document.createElement("option");
  opcion.text = color;
  opcion.value = color;
  opcion.classList.add(color)
  colores.add(opcion)
})

bg.forEach(color => {
  const opcion = document.createElement("option");
  opcion.text = color;
  opcion.value = color;
  opcion.classList.add(color)
  bgs.add(opcion)
})

const change_color = (color) => {
  boton.classList.remove('inherit')
  if(color_save){
    boton.classList.remove(color_save)
    color_save = color
    boton.classList.add(color_save)
  } else {
    color_save = color
    boton.classList.add(color_save)
  }
}

const change_bg = (color) => {
  if(bg_save){
    boton.classList.remove(bg_save)
    bg_save = color
    boton.classList.add(bg_save)
  } else {
    bg_save = color
    boton.classList.add(bg_save)
  }
}

const change_padd = (color) => {
  if(padding_save){
    boton.classList.remove(padding_save)
    padding_save = color
    boton.classList.add(padding_save)
  } else {
    padding_save = color
    boton.classList.add(padding_save)
  }
}

const change_brd_w = (color) => {
  if(brd_w_save){
    boton.classList.remove(brd_w_save)
    brd_w_save = color
    boton.classList.add(brd_w_save)
  } else {
    brd_w_save = color
    boton.classList.add(brd_w_save)
  }
}

const change_brd_c = (color) => {
  if(brd_c_save){
    boton.classList.remove(brd_c_save)
    brd_c_save = color
    boton.classList.add(brd_c_save)
  } else {
    brd_c_save = color
    boton.classList.add(brd_c_save)
  }
}

const change_brd_r = (color) => {
  if(brd_r_save){
    boton.classList.remove(brd_r_save)
    brd_r_save = color
    boton.classList.add(brd_r_save)
  } else {
    brd_r_save = color
    boton.classList.add(brd_r_save)
  }
}

const change_brd_s = (color) => {
  if(brd_s_save){
    boton.classList.remove(brd_s_save)
    brd_s_save = color
    boton.classList.add(brd_s_save)
  } else {
    brd_s_save = color
    boton.classList.add(brd_s_save)
  }
}

const change_brd_o = (color) => {
  if(brd_o_save){
    boton.classList.remove(brd_o_save)
    brd_o_save = color
    boton.classList.add(brd_o_save)
  } else {
    brd_o_save = color
    boton.classList.add(brd_o_save)
  }
}

const change_font = (color) => {
  if(font_save){
    boton.classList.remove(font_save)
    font_save = color
    boton.classList.add(font_save)
  } else {
    font_save = color
    boton.classList.add(font_save)
  }
}


colores.addEventListener('change', () => change_color(colores.value))
bgs.addEventListener('change', () => {change_bg(bgs.value)})
padd.addEventListener('change', () => {change_padd(padd.value)})
brd_w.addEventListener('change', () => {change_brd_w(brd_w.value)})
brd_c.addEventListener('change', () => {change_brd_c(brd_c.value)})
brd_r.addEventListener('change', () => {change_brd_r(brd_r.value)})
brd_s.addEventListener('change', () => {change_brd_s(brd_s.value)})
brd_o.addEventListener('change', () => {change_brd_o(brd_o.value)})
font.addEventListener('change', (e) => {change_font(font.value)})