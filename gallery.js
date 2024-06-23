import './flowbite.min.js'

initFlowbite()

let elementosAll = []
let proyectosAll = []
let projects = new Set()
let proyecto 
let proyectoId
let del = []
let showCode 
let showModal = false
let id 

const $ = e => document.querySelector(e)
const projectsSel = $('#projects')
const codeModal = $('#codeModal')
const elemento1 = $('#elemento1')

leerProyectos()

projectsSel.addEventListener('change',e => proyectoChange(e))

function proyectoChange(e){
  proyectoId = proyectosAll.filter(proyectoid => proyectoid.nombre === e.target.value)[0]._id
  eliminarElementos()
  leerElementos()
}

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
          const projects = document.querySelector('#projects')
          proyectosAll = res['proyecto'].filter(proyecto => proyecto.user_id === localStorage.getItem('userId'))
          proyectosAll.forEach(proyecto => {
          projects.add(op(proyecto.nombre))
          })
          if(proyectosAll.length > 0){
              proyecto = proyectosAll[0].nombre
              proyectoId = proyectosAll[0]._id
              leerElementos()
          }
      } else {
          proyectosAll = []
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

function leerElementos(){
  fetch('https://jaweb.es:3000/api/elemento/' + proyectoId, {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      mode: 'cors',
      },
  })
  .then(res => res.json())
  .then(res => {
      if (res) {
          elementosAll = res
          const elemento0 = document.querySelector('#elemento')
          res.forEach(elemento => {
              elemento0.innerHTML = '<div class="flex flex-col gap-6 overflow-auto items-center border p-2 rounded-lg delete w-96 h-72">'
               +  '<div class="flex mt-6 bg-gray-100 dark:bg-gray-800 rounded w-full h-full items-center justify-center delete">' + elemento.classname + '</div>' 
               + '<button id="' + elemento._id + '" class="font-bold text-sm text-black dark:text-white border-2 p-2 border-sky-600 hover:bg-sky-600 rounded-lg delete">Ver código</button>'
               + '<button id="d' + elemento._id + '" class="font-bold text-sm text-black dark:text-white p-2 hover:bg-red-600 rounded-lg delete">Eliminar elemento</button>'
               + '</div>'
              const clon2 = elemento0.cloneNode(true)
              elemento1.appendChild(clon2)
              elemento0.innerHTML = ''
          })
          }
          delButton(res)
  })
  .catch(err => {
      console.log(err)
  });
}

function delButton(res){
  res.forEach(elemento => {
      document.getElementById('d' + elemento._id).addEventListener('click', eliminar)
      document.getElementById(elemento._id).addEventListener('click', verCode)
  })
}

function verCode(e){
  showCode = elementosAll.filter(elemento => elemento._id === e.target.id)[0].classname
  document.getElementById('modalTemp').innerHTML = showCode
  document.getElementById('modalCode').textContent = showCode
  codeModal.showModal()
}

function eliminar(e){
  id = (e.target.id).slice(1)
  showCode = elementosAll.filter(elemento => elemento._id === id)[0].classname
  document.getElementById('modal1Temp').innerHTML = showCode
  document.getElementById('modalEliminarEl').showModal()
}

document.getElementById('eliminarEl').addEventListener('click', eliminarEl)
function eliminarEl(){
  if(!id) return
  fetch('https://jaweb.es:3000/api/elemento/' + id, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            mode: 'cors',
          },
      })
      .then(res => res.json())
      .then(res => {
      if (res.msg === 'success') {
          eliminarElementos() 
          leerElementos()
      }
      })
      .catch(err => {
      console.log(err)
      }); 
      cerrarModal()
}

function eliminarElementos() {
  let elementos = document.querySelectorAll('.delete');
  elementos.forEach(elemento => {
    elemento.remove();
  });
  elementos = document.querySelectorAll('section div #elemento');
  elementos.forEach(elemento => {
    elemento.remove();
  });
  const elemento = document.createElement('div')
  elemento.id = 'elemento'
  document.body.appendChild(elemento)
}

document.getElementById('closeModal').addEventListener('click', cerrarModal)
document.getElementById('closeModal1').addEventListener('click', cerrarModal)
function cerrarModal(){
  codeModal.close()
  document.getElementById('modalEliminarEl').close()  
}