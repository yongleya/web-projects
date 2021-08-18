
const sliders=document.querySelectorAll(".slider")
const next=document.querySelector("#next")
const prev=document.querySelector("#prev")
const body=document.querySelectorAll('body')[0]
let id=1

// flush()
next.addEventListener('click',function () {
    id+=1
    flush()
})


prev.addEventListener('click',function () {
    id-=1
    flush()
})

function flush() {
    if (id<1){
        id=4
    }else if (id>4){
        id=1
    }
    sliders.forEach(slider=>slider.classList.remove('active'))
    sliders[id-1].classList.add('active')
    sliders[0].parentElement.classList.remove('finished')
    sliders[0].parentElement.style.backgroundImage=document.querySelectorAll(".active")[0].style.backgroundImage
    sliders[0].parentElement.classList.add('finished')

}