import './flowbite.min.js'

initFlowbite()
const user = localStorage.getItem('user')
if (!user || user === 'undefined') {
  window.location.href = 'biblio.html'
}

const logout = document.getElementById('logout')
logout.classList.remove('hidden')
logout.addEventListener('click', () => {
  localStorage.removeItem('user')
  localStorage.removeItem('proyecto')
  logout.classList.add('hidden')
  window.location.href = 'index.html'
})

const projects = document.querySelector('#proy')
const elemento0 = document.querySelector('#elemento')
const elemento1 = document.querySelector('#elemento1')
let proSel
let proyectosAll = []
let proyectoCurrent
let del = []

if (localStorage.getItem('proyecto')) {
  leerElementos()
}

leerProyectos()

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
      proyectosAll.forEach(proyecto => {
      projects.add(op(proyecto.nombre))
    })
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

projects.addEventListener('change', function(e){
  window.location.reload()
   proyectosAll.forEach(proyecto => {
    if(proyecto.nombre === e.target.value){ proo(proyecto) }
  })
  localStorage.setItem('proyecto', proSel._id)
  let elements = document.querySelectorAll('.delete');
  if(elements){
    elements.forEach(element => element.remove())
  }
  leerElementos()
})

function proo(proyecto){
  proSel = proyecto
  proyectoCurrent = proSel.nombre
}

function leerElementos(){
  fetch('https://jaweb.es:3000/api/elemento', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      mode: 'cors',
    },
  })
  .then(res => res.json())
  .then(res => {
    if (res['elemento']) {
      const elementos = res['elemento'].filter(elemento => elemento.proyecto_id === localStorage.getItem('proyecto') && elemento.status)
      elementos.forEach(elemento => {
        elemento0.innerHTML = elemento.classname
        const clon = elemento0.cloneNode(true)
        elemento1.appendChild(clon)
        const opcion2 = document.createElement('code');
        opcion2.classList = 'font-bold border-2 p-4 rounded-lg select-all delete';
        opcion2.textContent = elemento.classname;
        elemento1.appendChild(opcion2)
        const opcion4 = document.createElement('button');
        opcion4.classList = 'font-bold border-2 p-4 border-red-600 hover:bg-red-600 rounded-lg select-all delete';
        opcion4.textContent = 'Eliminar elemento';
        opcion4.id = elemento._id;
        elemento1.appendChild(opcion4)
        const opcion3 = document.createElement('hr');
        opcion3.classList = 'w-full border-gray-300 border-4 border-double border-sky-600 opacity-45 delete'
        elemento1.appendChild(opcion3)
        del.push(elemento._id)
        elemento0.innerHTML = ''
      })
    }
    delButton()
  })
  .catch(err => {
    console.log(err)
  });
}

function delButton(){
  del.forEach(elemento => {
    if(elemento){
      document.querySelector('#elemento1').addEventListener('click', function(e){
        if(e.target.id === elemento){
          fetch('https://jaweb.es:3000/api/elemento/' + elemento, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              mode: 'cors',
            },
          })
          .then(res => res.json())
          .then(res => {
            if (res.msg === 'success') {
              window.location.reload()
            }
          })
          .catch(err => {
            console.log(err)
          });
        }
      })
    }
  })
}
