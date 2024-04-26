import {    colors,
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
            cursors, } from "./constantes";

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
  