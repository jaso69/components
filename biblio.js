const drop = document.querySelector('#drop')
const menuHtml = new Collapse(drop)
drop.addEventListener('click', () => { menuHtml.expand()})

bt1.addEventListener('click', () => {
    openCode(bt1, divCode1)
})

bt2.addEventListener('click', () => {
    openCode(bt2, divCode2)
})

bt3.addEventListener('click', () => {
    openCode(bt3, divCode3)
})

bt4.addEventListener('click', () => {
    openCode(bt4, divCode4)
})

bt5.addEventListener('click', () => {
    openCode(bt5, divCode5)
})

function openCode(bt, divCode){
    const el = bt.children
    const di = divCode.children
    divCode.classList.remove('hidden')
    di[1].innerHTML = el[0].outerHTML
    di[2].textContent = el[0].outerHTML
    di[3].innerHTML = el[1].outerHTML
    di[4].textContent = el[1].outerHTML
    di[5].innerHTML = el[2].outerHTML
    di[6].textContent = el[2].outerHTML
    di[7].innerHTML = el[3].outerHTML
    di[8].textContent = el[3].outerHTML
    di[9].innerHTML = el[4].outerHTML
    di[10].textContent = el[4].outerHTML
    di[0].addEventListener('click', () => { divCode.classList.add('hidden')}) 
}
