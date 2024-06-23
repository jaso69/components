const $1 = (e) => document.querySelector(e)
const darkMode = $1('#darkMode')
const lightMode = $1('#lightMode')

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
localStorage.setItem('theme', 'dark')
})
lightMode.addEventListener('click', () => {
document.body.classList.remove('dark')
darkMode.classList.remove('hidden')
lightMode.classList.add('hidden')
localStorage.setItem('theme', 'light')
})