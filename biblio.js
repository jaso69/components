import { Collapse } from 'flowbite'

const drop = document.querySelector('#drop')
const menuHtml = new Collapse(drop)
drop.addEventListener('click', () => { menuHtml.expand()})