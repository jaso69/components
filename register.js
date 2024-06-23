import './flowbite.min.js'

initFlowbite()

const $ = (e) => document.querySelector(e);
const email = $('#email');
const password = $('#password');
const nombre = $('#nombre');
const submit = $('#submit');
const errorState = $('#errorState');
const password1 = $('#password1');
let compOk = false;

submit.style.display = 'none';

email.addEventListener('input', e => {
  email.style.borderColor = 'red';
  if (esCorreoValido(e.target.value)) {
    email.style.borderColor = '';
  }
  camposOk();
});

password.addEventListener('input', e => {
  password.style.borderColor = 'red';
  if (e.target.value.length > 5) {
    password.style.borderColor = '';
  }
  camposOk();
});

password1.addEventListener('input', e => {
  password1.style.borderColor = 'red';
  if (e.target.value.length > 5 && password.value === password1.value) {
    password1.style.borderColor = '';
  }
  camposOk();
});

nombre.addEventListener('input', e => {
  nombre.style.borderColor = 'red';
  if (e.target.value.length > 2) {
    nombre.style.borderColor = '';
  }
  camposOk();
});

function camposOk() {
  if (!esCorreoValido(email.value) || password.value.length < 5 || nombre.value.length < 2) 
    {
      submit.style.display = 'none';
      compOk = false;
      return;
    }
  if(password1.value !== password.value) {
    password1.style.borderColor = 'red';
    submit.style.display = 'none';
    compOk = false;
    return;
  }
  submit.style.display = 'block';
  compOk = true;

}

function esCorreoValido(correo) {
  const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return patron.test(correo);
}

submit.addEventListener('click', e => {
  e.preventDefault();
  camposOk();
  if (!compOk) { return; }

  const emailValue = email.value;
  const passwordValue = password.value;
  const nameValue = nombre.value;
  
  fetch('https://jaweb.es:3000/api/users?mail=' + emailValue + '&password=' + passwordValue + '&nombre=' + nameValue, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      mode: 'cors',
    },
  })
    .then(res => res.json())
    .then(res => {
      if (res.msg === 'success') {
        window.location.href = '/login.html';
      } else {
        email.classList.add('border-red-500');
        password.classList.add('border-red-500');
      }
    })
    .catch(err => {
      console.log(err);
    });
});
    