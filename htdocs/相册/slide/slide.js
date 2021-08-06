var frame = document.querySelector(".frame"),
    image = document.querySelector(".image"),
    imgs = document.getElementsByClassName("img"),
    dots = document.getElementsByClassName("pos"),
    click = true,
    index = 1;
for (var i=0; i<imgs.length; i++){
    imgs[i].style.left = `${i*800}px`;
    imgs[i].style.backgroundImage = `url("photos/${i%6+1}.jpg")`
}
image.onclick = move;
function change(target) {
    image.style.left = `-${(target-1)*800}px`
    // image.classList.remove("to")
    for (var i = 0;i<dots.length;i++){
        dots[i].classList.remove("focus")
    }
    dots[target-1].classList.add("focus")
}
function move() {
    if (click){
        click=false
        index++;
    }
    image.classList.add("to")
    change(index)
}
addEventListener("transitionend", function () {
    click = true;
    if (index===7){
        index =1;
        image.classList.remove("to")
        change(index)
    }
})
var timer= setInterval(move, 2000)

