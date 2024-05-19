const email = document.querySelector('#email');
const password = document.querySelector('#password');
const nombre = document.querySelector('#nombre');
const submit = document.querySelector('#submit');
const errorState = document.querySelector('#errorState');

email.addEventListener('input', e => {
  const emailValue = email.value;
  if (emailValue.length > 0 && esCorreoValido(emailValue)) {
    email.classList.remove('border-red-500');
  } else {
    email.classList.add('border-red-500');
  }
});

password.addEventListener('input', e => {
  const passwordValue = password.value;
  if (passwordValue.length > 4) {
    password.classList.remove('border-red-500');
  } else {
    password.classList.add('border-red-500');
  }
});

nombre.addEventListener('input', e => {
  const nombref = nombre.value;
  if (nombref.length > 2) {
    nombre.classList.remove('border-red-500');
  } else {
    nombre.classList.add('border-red-500');
  }
});

function esCorreoValido(correo) {
  const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return patron.test(correo);
}

submit.addEventListener('click', e => {
  e.preventDefault();
  if(!esCorreoValido(email.value) || password.value.length < 4 || nombre.value.length < 1) { 
    errorState.classList.remove('hidden');
    return; }
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
        localStorage.setItem('user', JSON.stringify(res.user));
        window.location.href = 'biblio.html';
      } else {
        email.classList.add('border-red-500');
        password.classList.add('border-red-500');
      }
    })
    .catch(err => {
      console.log(err);
    });
});
    