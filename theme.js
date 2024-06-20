const $ = (e) => document.querySelector(e)
const darkMode = $('#darkMode')
const lightMode = $('#lightMode')

if (localStorage.getItem('theme') === 'dark') {
    darkMode.classList.add('hidden')
    lightMode.classList.remove('hidden')
    document.body.classList.add('dark')
}

if(document.body.classList.contains('dark')) {
    darkMode.classList.add('hidden')
    lightMode.classList.remove('hidden')
}
if(!document.body.classList.contains('dark')) {
darkMode.classList.remove('hidden')
lightMode.classList.add('hidden')
}

darkMode.addEventListener('click', () => {
document.body.classList.add('dark')
darkMode.classList.add('hidden')
lightMode.classList.remove('hidden')
})
lightMode.addEventListener('click', () => {
document.body.classList.remove('dark')
darkMode.classList.remove('hidden')
lightMode.classList.add('hidden')
})