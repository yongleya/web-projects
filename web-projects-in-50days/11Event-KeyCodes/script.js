const key=document.querySelectorAll('.key')[0]
const key_code=document.querySelectorAll('.key-code')[0]
const code=document.querySelectorAll('.code')[0]

window.addEventListener('keydown',function (event) {
    key.innerHTML=event.key
    key_code.innerHTML=event.keyCode
    code.innerHTML=event.code
})
