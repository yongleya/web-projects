let current=1
const prev=document.querySelector('#prev')
const next=document.querySelector('#next')
const circles=document.querySelectorAll('.circle')
const progress=document.querySelector('#progress')

prev.addEventListener('click',function (){
    current-=1
    flush()
})
next.addEventListener('click', function () {
    current+=1
    flush()
})

function flush() {
    if (current==1){
        prev.disabled=true
    }else if (current==4){
        next.disabled=true
    }else{
        next.disabled=false
        prev.disabled=false
    }
    for (let i = 0; i < circles.length; i++) {
        circles[i].classList.remove('active')
    }
    for (let i = 0; i < current; i++) {
        circles[i].classList.add('active')
    }
    progress.style.width=133 * (current-1) + 'px'
}