const boxes=document.querySelectorAll('.box')

window.addEventListener('scroll',function () {
    const triggerBottom=window.innerHeight
    for (let i = 0; i < boxes.length; i++) {
        box_top=boxes[i].getBoundingClientRect().top
        if (triggerBottom-box_top>100){
            boxes[i].classList.add('show')
        }else {
            boxes[i].classList.remove('show')
        }
    }

})