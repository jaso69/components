const $2 = (e) => document.querySelector(e)
const menuLogout = $2('#menuLogout')
const menuLogin = $2('#menuLogin')
const menuRegister = $2('#menuRegister')
const menuGallery = $2('#menuGallery')

if(localStorage.getItem('userId') && localStorage.getItem('userNombre')){
  menuLogout.style.display = 'block'
  menuLogin.style.display = 'none'
  menuRegister.style.display = 'none'
  menuGallery.style.display = 'block'
} else {
    menuLogout.style.display = 'none'
    menuLogin.style.display = 'block'
    menuRegister.style.display = 'block'
    menuGallery.style.display = 'none'
}
