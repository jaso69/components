const logout = document.querySelector('#logout')
logout.addEventListener('click', logoutUser)

function logoutUser() {
  localStorage.removeItem('userNombre')
  localStorage.removeItem('proyecto')
  localStorage.removeItem('html')
  localStorage.removeItem('userId')
  window.location.href = 'index.html'
}