const pre = document.querySelector('#pre')
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
    //localStorage.removeItem('element')
    const newEl = document.createElement(el)
    if(el === 'img') {newEl.src = './img.avif'}
    newEl.textContent = 'Example'
    newEl.id = "pre"
    newEl.classList = pre.classList
    pre.parentNode.replaceChild(newEl, pre)
} 
