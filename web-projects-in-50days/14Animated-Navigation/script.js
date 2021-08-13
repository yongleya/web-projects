const btn=document.querySelector('#btn')
const container=document.querySelectorAll('.container')[0]

btn.addEventListener('click',function () {
    if (container.classList.value.indexOf('close')==-1){
        container.classList.add('close')
    }else {
        container.classList.remove('close')
    }

})