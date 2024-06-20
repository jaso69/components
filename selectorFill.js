import { colores, bgs, padd, brd_w, brd_c, brd_r, brd_s, brd_o, font, t_decoration,
    shadow, text_align, width, height, scale, rotate, translate, brightnes, contrast,
    blur, hue, weight, opacity, cursor, duration, timing, delay, animation, backdropBlur,
    shadowColors, clip, bimage, from, via, to, style, thicknes, outline, outwidht} from "./selectors";
import {  clases_el,
    rules,
    q_status,
    txtButton,
    } from './constantes'
import { ifr, co } from './selectorsMenu'

const clases = []
clases_el.forEach((el) => {
clases.push({el:el,clase:null})
})

export default function fill() {

    let dark_op = false
    if(localStorage.getItem('theme') === 'dark'){
        dark_op = true
    } else {
        dark_op = false
    }

    thicknes.addEventListener('change', () => {change(thicknes.value, thicknes.name)})
    style.addEventListener('change', () => {change(style.value, style.name)})
    to.addEventListener('change', () => {change(to.value, to.name)})
    via.addEventListener('change', () => {change(via.value, via.name)})
    from.addEventListener('change', () => {change(from.value, from.name)})
    colores.addEventListener('change', () => { change(colores.value, colores.name, rules[0]); })
    clip.addEventListener('change', () => {change(clip.value, clip.name)})
    bimage.addEventListener('change', () => {change(bimage.value, bimage.name)})
    shadowColors.addEventListener('change', () => {change(shadowColors.value, shadowColors.name)})
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
    outline.addEventListener('change', () => {
    change(outline.value, outline.name)
    change('outline', 'outs')
    })
    outwidht.addEventListener('change', () => {
    change(outwidht.value, outwidht.name)
    change('outline', 'outs')
    })
    cursor.addEventListener('change', () => {change(cursor.value, cursor.name)})

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
        localStorage.setItem('gallery', co.textContent)
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

}