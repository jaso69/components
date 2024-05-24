import './flowbite.min.js'

const user = localStorage.getItem('user')
if (!user || user === 'undefined') {
  window.location.href = 'biblio.html'
} 

let proyecto;
if(localStorage.getItem('proyecto')) {proyecto = localStorage.getItem('proyecto')}

const form = document.querySelector('#form')
const pro = document.querySelector('#pro')
const desc = document.querySelector('#desc')
const submit = document.querySelector('#submit')
const projects = document.querySelector('#projects')
const save = document.querySelector('#save')
const pre = document.querySelector('#pre')
let clase = localStorage.getItem('clase')
const el = localStorage.getItem('element')
const newPro = document.querySelector('#newPro')
const proyectoActual = document.querySelector('#proyectoActual')
const gallery = document.querySelector('#gallery')
const elemento = localStorage.getItem('gallery')
gallery.innerHTML = elemento

let proyectoCurrent
let proyectoNombre
let proyectosAll = []
let typel = localStorage.getItem('element')

save.addEventListener('click', function(){
  saveElement()
})

leerProyectos()

newPro.addEventListener('click', function(){
  console.log('object')
  form.classList.remove('hidden')
  save.classList.add('hidden')
  projects.classList.add('hidden')
})

projects.addEventListener('change', function(){
  save.classList.remove('hidden')
  proyectoCurrent = projects.value
  const id = proyectosAll.filter(proyecto => proyecto.nombre === proyectoCurrent)
  if(id){
    localStorage.setItem('proyecto', id[0]._id)
    proyectoActual.textContent = id[0].nombre
  }
})

if(!proyectosAll){
  form.classList.remove('hidden')
  save.classList.add('hidden')
  projects.classList.add('hidden')
}

submit.addEventListener('click', function(e){
  e.preventDefault()
  if(pro.value && desc.value){
    saveProyecto()
  }
})

function leerProyectos(){
  fetch('https://jaweb.es:3000/api/proyecto', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      mode: 'cors',
    },
  })
  .then(res => res.json())
  .then(res => {
    if (res) {
      proyectosAll = res['proyecto'].filter(proyecto => proyecto.user_id === user)
      res['proyecto'].forEach(proyecto => {
        if(proyecto.user_id === user){
          projects.add(op(proyecto.nombre))
        }
    })
  }
    res['proyecto'].map(proy => {if(proy._id === proyecto){
      proyectoNombre = proy
      proyectoActual.textContent = proyectoNombre.nombre
    }})
  })
  .catch(err => {
    console.log(err)
  });
}

if(!proyecto){
  save.classList.add('hidden')
} else {
  save.classList.remove('hidden')
}

function saveElement(){
  const data = {
    proyecto_id: localStorage.getItem('proyecto'),
    user_id: user,
    classname: elemento,
    html: typel
  }
  proyecto = localStorage.getItem('proyecto')
  fetch('https://jaweb.es:3000/api/elemento', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      mode: 'cors',
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => {
    if(res.msg === 'success'){
      window.location.href = 'gallery.html'
    } 
  })
  .catch(err => {
    console.log(err);
  });
}

function saveProyecto(){
  fetch('https://jaweb.es:3000/api/proyecto?nombre=' + pro.value + '&descripcion=' + desc.value + '&user_id=' + user, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      mode: 'cors',
    },
  })
  .then(res => res.json())
  .then(res => {
    if (res._id) {
      localStorage.setItem('proyecto', res._id)
      form.classList.add('hidden')
      save.classList.remove('hidden')
      projects.classList.remove('hidden')
      pro.value = ''
      desc.value = ''
      projects.add(op(res.nombre))
      proyectoActual.textContent = res.nombre
      save.classList.remove('hidden')
    } else {
      form.classList.remove('hidden')
      save.classList.add('hidden')
      projects.classList.add('hidden')
    }
  })
  .catch(err => {
    console.log(err);
  });
}

// pre.classList = clase

// if(el){
//   const el = localStorage.getItem('element')
//   if(localStorage.getItem('type')) {typel = localStorage.getItem('type')}
//   const newEl = document.createElement(el)
//   if(el === 'img') {newEl.src = './img.avif'}
//   if(el === 'input') { newEl.type = typel }
//   if(el === 'number') { newEl.type = typel }
//   if(el === 'checkbox') { newEl.type = typel }
//   newEl.textContent = 'Example'
//   newEl.id = "pre"
//   newEl.classList = pre.classList
//   if(el === 'select'){ newEl.add(op()); newEl.add(op())}
//   pre.parentNode.replaceChild(newEl, pre)
// }

function op(color){
  const opcion = document.createElement("option");
  opcion.text = color;
  opcion.value = color;
  return opcion
}

initFlowbite()
