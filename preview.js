const pre = document.querySelector('#pre')
const pCheck = document.querySelector('#pCheck')
const check = document.querySelector('#check')
const pRadio = document.querySelector('#pRadio')
const html_theme = document.querySelector('html')

if( localStorage.getItem('theme') === 'none' || 
    localStorage.getItem('theme') === 'light'){
    html_theme.classList.remove('dark')
}

if(localStorage.getItem('theme') === 'dark'){
    html_theme.classList.add('dark')
}

if(localStorage.getItem('clase')){
    const clase = localStorage.getItem('clase')
    pre.classList = clase
}
if(localStorage.getItem('element')){
    const el = localStorage.getItem('element')
    let typel
    if(localStorage.getItem('type')) {typel = localStorage.getItem('type')}
    const newEl = document.createElement(el)
    if(el === 'img') {newEl.src = './img.avif'}
    if(el === 'input') { newEl.type = typel }
    if(el === 'number') { newEl.type = typel }
    if(el === 'checkbox') { newEl.type = typel }
    newEl.textContent = 'Example'
    newEl.id = "pre"
    newEl.classList = pre.classList
    if(el === 'select'){ newEl.add(op()); newEl.add(op())}
    pre.parentNode.replaceChild(newEl, pre)
    if(typel === 'checkbox' && el === 'input'){check.classList.remove('hidden'); pCheck.classList = pre.classList}
} 

function op () {
    const opcion = document.createElement("option");
    opcion.text = 'Lorem Ipsum';
    opcion.value = 'Value';
    return opcion
  }
