const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');

const user = localStorage.getItem('user')
if(user && user !== 'undefined'){
  window.location.href = 'gallery.html'
}

email.addEventListener('input', e => {
  const emailValue = email.value;
  if (emailValue.length > 0) {
    email.classList.remove('border-red-500');
  } else {
    email.classList.add('border-red-500');
  }
});

password.addEventListener('input', e => {
  const passwordValue = password.value;
  if (passwordValue.length > 0) {
    password.classList.remove('border-red-500');
  } else {
    password.classList.add('border-red-500');
  }
});

submit.addEventListener('click', e => {
  e.preventDefault();
  if(!email.value || password.value.length < 1) { 
    email.classList.add('border-red-500');
    password.classList.add('border-red-500');
    return; }
  const emailValue = email.value;
  const passwordValue = password.value;
  
  fetch('https://jaweb.es:3000/api/users?mail=' + emailValue + '&password=' + passwordValue, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      mode: 'cors',
    },
  })
    .then(res => res.json())
    .then(res => {
       
      if (res.user) {
        localStorage.setItem('user', JSON.stringify(res.user._id));
        window.location.href = 'gallery.html';
      } else {
        email.classList.add('border-red-500');
        password.classList.add('border-red-500');
      }
    })
    .catch(err => {
      console.log(err);
    });
});
    