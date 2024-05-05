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
            cursors,
            durations,
            timings,
            delays,
            animations,
            backdropBlurs,
            shadow_color,
            clips,
            bimages,
            froms,
            vias,
            tos,
            styles,
            thickness,
            outlines,
            outwidhts,
} from "./constantes";

import { colores, bgs, padd, brd_w, brd_c, brd_r, brd_s, brd_o, font, t_decoration,
shadow, text_align, width, height, scale, rotate, translate, brightnes, contrast,
blur, hue, weight, opacity, cursor, duration, timing, delay, animation, backdropBlur,
shadowColors, clip, bimage, from, via, to, style, thicknes, outline, outwidht } from "./selectors";

const op = (color, c_border) =>{
    const opcion = document.createElement("option");
    opcion.text = color;
    opcion.value = color;
    if(c_border) {
      if (color.startsWith('text')) {const txtColor = color.replace('text', 'bg'); opcion.classList.add(txtColor)}
      if (color.startsWith('border')) {const newColor = color.replace('border', 'bg'); opcion.classList.add(newColor)} 
      if (color.startsWith('shadow')) {const newColor = color.replace('shadow', 'bg'); opcion.classList.add(newColor)}
      if (color.startsWith('from')) {const newColor = color.replace('from', 'bg'); opcion.classList.add(newColor)}
      if (color.startsWith('via')) {const newColor = color.replace('via', 'bg'); opcion.classList.add(newColor)}
      if (color.startsWith('outline')) {const newColor = color.replace('outline', 'bg'); opcion.classList.add(newColor)}
      if (color.startsWith('to')) {const newColor = color.replace('to', 'bg'); opcion.classList.add(newColor)}
    } else {
      opcion.classList.add(color)
    }
    return opcion
  }

bimages.forEach(color => {
    bimage.add(op(color))
})

outlines.forEach(color => {
  outline.add(op(color, true))
})

outwidhts.forEach(color => {
  outwidht.add(op(color))
})

thickness.forEach(color => {
  thicknes.add(op(color, true))
})

styles.forEach(color => {
  style.add(op(color, true))
})

froms.forEach(color => {
  from.add(op(color, true))
})

tos.forEach(color => {
  to.add(op(color, true))
})

vias.forEach(color => {
  via.add(op(color, true))
})

clips.forEach(color => {
    clip.add(op(color))
})

shadow_color.forEach(color => {
  shadowColors.add(op(color, true))
})

backdropBlurs.forEach(color => {
    backdropBlur.add(op(color))
})

animations.forEach(color => {
    animation.add(op(color))
})

delays.forEach(color => {
    delay.add(op(color))
})

timings.forEach(color => {
    timing.add(op(color))
  })

durations.forEach(color => {
    duration.add(op(color))
  })

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
  