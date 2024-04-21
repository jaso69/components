const pre = document.querySelector('#pre')
console.log(pre)
if(localStorage.getItem('clase')){
    clase = localStorage.getItem('clase')
    pre.classList = clase
}