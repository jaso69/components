import './flowbite.min.js'

const $ = (e) => document.querySelector(e)
const loading = $('#loading')
const pregunta = $('#pregunta');
const boton = $('#boton')
const codeBoton = $('#codeBoton')
const code = $('#code')
const divCode = $('#divCode')
const drop = $('#drop')
const save = $('#save')
const logout = $('#logout')
let prompt = {}
let question = ''
let message = []
let url;
let userid

if(localStorage.getItem('userId') && localStorage.getItem('userNombre')){
    userid = localStorage.getItem('userId')
    console.log(userid)
}

boton.addEventListener('click', (event) => {
    event.preventDefault();
    const p = String(pregunta.value)
    if(p.length < 1) return
    code.innerHTML = ''
    codeBoton.classList.add('hidden')
    question = p
    pregunta.value = ''
    prompt = {prompt: p}
    loading.innerHTML = 'Wait a moment....'
    url = 'https://jaweb.es:3000/api/jaweb?prompt=' + p
    Nuevo(prompt)
})

const respuesta = (resp) => {
    message.push({question : resp})
    localStorage.setItem('html', resp.message)
    let caracter
    if(resp.message.includes('"')){
        caracter = '"'
    } else {
        caracter = "'"
    }
    let posicion = resp.message.indexOf(caracter) + 1
    let clase1 = resp.message.substring(posicion)
    posicion = clase1.indexOf(">")
    clase1 = clase1.slice(0 , posicion - 1) 
    localStorage.setItem('clase', clase1)
    posicion = resp.message.indexOf("<")
    clase1 = resp.message.substring(posicion + 1)
    posicion = clase1.indexOf(" ")
    clase1 = clase1.slice(0 , posicion + 1) 
    localStorage.setItem('element', clase1)
    loading.innerHTML = ''
    if(resp.message){
        codeBoton.innerHTML = resp.message;
        code.textContent = resp.message
        divCode.classList.remove('hidden')
        codeBoton.classList.remove('hidden')
        if(userid) save.classList.remove('hidden')
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

initFlowbite()