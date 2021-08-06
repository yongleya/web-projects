const btn_box=document.querySelectorAll('.btn-box')[0]
const next=document.querySelectorAll('.next')[0]
const quit=document.querySelectorAll('.quit')[0]
const container=document.querySelectorAll('.container')[0]
const nav_items=document.querySelectorAll('.nav-item')



next.addEventListener("click",function () {

    btn_box.style.transform='rotate(-90deg)';
    container.style.transform='rotate(-20deg)';
    for (let i = 0; i < nav_items.length; i++) {
        nav_items[i].style.transition='transform 0.2s ease 0.5s'
        nav_items[i].style.transform='translate(' + (200+i*20) + 'px)'
    }
})
quit.addEventListener("click",function () {
    btn_box.style.transform='rotate(0deg)';
    container.style.transform='rotate(0deg)';
    for (let i = 0; i < nav_items.length; i++) {
        nav_items[i].style.transition='transform ease 0.2s'
        nav_items[i].style.transform='translate(0px)'
    }
})