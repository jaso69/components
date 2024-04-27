import { Collapse } from 'flowbite'

const loading = document.querySelector('#loading')
const pregunta = document.querySelector('#pregunta');
const boton = document.querySelector('#boton')
const codeBoton = document.querySelector('#codeBoton')
const code = document.querySelector('#code')
const divCode = document.querySelector('#divCode')
const drop = document.querySelector('#drop')

const menuHtml = new Collapse(drop)
drop.addEventListener('click', () => { menuHtml.expand()})

let prompt = {}
let question = ''
let message = []
let url;

boton.addEventListener('click', (event) => {
    event.preventDefault();
    const p = String(pregunta.value)
    if(p.length < 1) return
    question = p
    pregunta.value = ''
    prompt = {prompt: p}
    loading.innerHTML = 'Un momento....'
    url = 'https://jaweb.es:3000/api/jaweb?prompt=' + p
    Nuevo(prompt)
})

const respuesta = (resp) => {
    message.push({question : resp})
    loading.innerHTML = ''
    if(resp.message){
        codeBoton.innerHTML = resp.message;
        code.textContent = resp.message
        divCode.classList.remove('hidden')
    } else {
        codeBoton.innerHTML = 'We regret that we are unable to respond at this time, please try again in a few minutes.'
    }

}
async function Nuevo (prompt){
    const data = await fetch( url, 
        {   method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify( prompt ) 
        })
    const resp = await data.json()
    respuesta(resp)
}