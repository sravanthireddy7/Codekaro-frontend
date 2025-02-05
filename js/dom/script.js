function change(){
    let title=document.getElementById('title')
    let btn=document.getElementById('btn')
    title.innerHTML='text changed '
    btn.innerHTML='clicked me'
    btn.style.backgroundColor='red'
    btn.style.display='none'
}
function changeName(){
    let inp=document.getElementById('inpName')
    let el=document.getElementById('name')
    let btn=document.getElementById('nameBtn')
    el.innerText=inp.value   
}