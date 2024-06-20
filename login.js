import './flowbite.min.js'

initFlowbite()

const $ = (e) => document.querySelector(e)

const emailValue = $('#email')
const passwordValue = $('#password')
const buttonLogin = $('#login')

let correo = false
let contrasena = false
let email = ''
let password = ''

emailValue.addEventListener('input', () => {
    if(!esCorreoValido(emailValue.value)) {
        errorMail()
    } else {
        email = emailValue.value
        emailValue.classList.remove('border-2')
        emailValue.classList.remove('border-red-500')
        correo = true
        botonloginOK()
    }
})

passwordValue.addEventListener('input', () => {
    if(passwordValue.value.length > 5) {
        password = passwordValue.value
        passwordValue.classList.remove('border-2')
        passwordValue.classList.remove('border-red-500')
        contrasena = true
        botonloginOK()
    } else {
        errorPassword()
    }
})

buttonLogin.addEventListener('click', (e) =>
{
    e.preventDefault();
    fetch('https://jaweb.es:3000/api/users?mail=' + email + '&password=' + password, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        mode: 'cors',
        },
    })
        .then(res => res.json())
        .then(res => {
        if (res.user) {
            localStorage.setItem('userNombre', res.user.nombre)
            localStorage.setItem('userId', res.user._id)
            window.location.href = '/index.html'
        } else {
            console.log(res)
            errorMail()
            errorPassword()
        }
        })
    .catch(err => {
    console.log(err);
    });
})

function botonloginOK() {
    if(correo && contrasena) { buttonLogin.disabled = false }
}

function esCorreoValido(correo) {
    const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patron.test(correo);
}

function errorMail() {
    emailValue.classList.add('border-2')
    emailValue.classList.add('border-red-500')
}

function errorPassword() {
    passwordValue.classList.add('border-2')
    passwordValue.classList.add('border-red-500')
}
