import { Collapse } from 'flowbite'

const buttonEl = document.querySelector('#buttonEl')
const aEl = document.querySelector('#aEl')
const divEl = document.querySelector('#divEl')
const imgEl = document.querySelector('#imgEl')
const h1El = document.querySelector('#h1El')
const h2El = document.querySelector('#h2El')
const h3El = document.querySelector('#h3El')
const pEl = document.querySelector('#pEl')
const drop = document.querySelector('#drop')
const el = document.querySelector('#boton')
const menuHtml = new Collapse(drop)

drop.addEventListener('click', () => { menuHtml.expand()})

buttonEl.addEventListener('click', () => {
    drop.innerHTML = 'Button'
})

aEl.addEventListener('click', () => {
    drop.innerHTML = 'Anchor'
})

divEl.addEventListener('click', () => {
    drop.innerHTML = 'Div'
})

imgEl.addEventListener('click', () => {
    drop.innerHTML = 'Img'
})

h1El.addEventListener('click', () => {
    drop.innerHTML = 'H1'
})

h2El.addEventListener('click', () => {
    drop.innerHTML = 'H2'
})

h3El.addEventListener('click', () => {
    drop.innerHTML = 'H3'
})

pEl.addEventListener('click', () => {
    drop.innerHTML = 'Paragraph'
    hidden(pEl)
})

const hidden = (e) => {
    el.innerHTML = '<a>Parrafo</a>'

}