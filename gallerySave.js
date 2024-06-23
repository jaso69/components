import './flowbite.min.js'
initFlowbite()

const user = localStorage.getItem('userId')
if (!user || user === 'undefined') {
  window.location.href = 'login.html'
} 

let proyectosAll = []
let proyecto 
let proyectoId 
let okCampos = false
let proyectosVoid = true
let name 
let desc 
let okCamposProyecto = false

const el = document.querySelector('#elhtml')
const pex = document.querySelector('#proyectoExist')
const pexn = document.querySelector('#proyectoNo')
const pact = document.querySelector('#proyectoActual')
const el2 = localStorage.getItem('html')
el.innerHTML = el2
leerProyectos()

document.querySelector('#projects').addEventListener('change',(e) => proyectoChange(e))
const proyectoChange = (e) => {
  proyecto = e.target.value
  const temp = proyectosAll.filter(proyecto1 => proyecto1.nombre === proyecto )
      if(temp.length > 0){
          proyectoId = temp[0]._id
          proyecto = temp[0].nombre
          pact.innerHTML = proyecto
          okCampos = true
      } else {
          proyecto = null
          okCampos = false
          proyectosVoid = false
          el.innerHTML = localStorage.getItem('html')
      }
}

document.querySelector('#newProyecto').addEventListener('click', newProyecto)
function newProyecto() {
  pexn.style.display = 'block'
  pex.style.display = 'none'
  document.querySelector('#newProyecto').style.display = 'none'
  el.innerHTML = localStorage.getItem('html')  
}

document.querySelector('#proyectoNuevo').addEventListener('click', (e) => proyectoNuevo(e))
function proyectoNuevo(e) {
  e.preventDefault()
  if (okCamposProyecto) {
    saveProyecto()
  }
}

document.querySelector('#name').addEventListener('input', (e) => nameValid(e))
function nameValid(e) {
  if (e.target.value.length > 4) {
    name = e.target.value
    okCamposProyecto = true
  }
}

document.querySelector('#desc').addEventListener('input', (e) => descValid(e))
function descValid(e) {
  if (e.target.value.length > 4) {
    desc = e.target.value
  }
}

function leerProyectos(){
  proyectosVoid = true
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
      }   
      if(proyectosAll.length > 0){
          const projects = document.querySelector('#projects')
          proyectosAll.map(proyecto => {
              projects.add(op(proyecto.nombre))
          })
          pexn.style.display = 'none'
          pex.style.display = 'block'
          proyecto = proyectosAll[0].nombre
          pact.innerHTML = proyectosAll[0].nombre
          proyectoId = proyectosAll[0]._id
          okCampos = true
      } else {
          proyecto = null
          okCampos = false
          pex.style.display = 'none'
          pexn.style.display = 'block'
          el.innerHTML = localStorage.getItem('html')
      }
  })
  .catch(err => {
      console.log(err)
  });
}

function op(color){
  const opcion = document.createElement("option");
  opcion.text = color;
  opcion.value = color;
  return opcion
}

function saveProyecto(){
  fetch('https://jaweb.es:3000/api/proyecto?nombre=' + name + '&descripcion=' + desc + '&user_id=' + user, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      mode: 'cors',
    },
  })
  .then(res => res.json())
  .then(res => {
    if (res) {
      name = ''
      desc = ''
      proyecto = null
      window.location.reload()
    } 
  })
  .catch(err => {
    console.log(err);
  });
}

document.querySelector('#save').addEventListener('click', (e) => saveElement(e))
function saveElement(e){
  e.preventDefault()
  const data = {
    proyecto_id: proyectoId,
    user_id: user,
    classname: localStorage.getItem('html'),
    html: 'void'
  }
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