import './flowbite.min.js'

const loading = document.querySelector('#loading')
const pregunta = document.querySelector('#pregunta');
const boton = document.querySelector('#boton')
const codeBoton = document.querySelector('#codeBoton')
const code = document.querySelector('#code')
const divCode = document.querySelector('#divCode')
const drop = document.querySelector('#drop')
const save = document.querySelector('#save')
const logout = document.querySelector('#logout')

const user = localStorage.getItem('user')
if (user && user !== 'undefined') {
  save.classList.remove('hidden')
  logout.classList.remove('hidden')
} else{
    save.classList.add('hidden')
    logout.classList.add('hidden')
    localStorage.removeItem('user')
    localStorage.removeItem('proyecto')
}

let prompt = {}
let question = ''
let message = []
let url;

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
    localStorage.setItem('gallery', resp.message)
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