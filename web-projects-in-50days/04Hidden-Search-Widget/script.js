const search=document.querySelectorAll('button')[0]
const input=document.querySelectorAll('input')[0]
let open=false
search.addEventListener('click',function () {
    if (open==false){
        input.style.width='250px'
        open=true
    }else{
        input.style.width='0'
        open=false
    }
})


