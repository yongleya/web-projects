btns=document.querySelectorAll('button')

btns.forEach(function (btn) {
    btn.addEventListener('click',function () {
        if (this.parentElement.classList.value.indexOf('active') != -1){
            this.parentElement.classList.remove("active")
        }else{
            this.parentElement.classList.add('active')
        }
    })
})