var sheet = document.getElementById("stylesheet"),
    style_btn = document.querySelector(".style_btn"),
    image = document.querySelector(".image"),
    dots = document.querySelectorAll(".dot"),
    container = document.querySelector(".container"),
    index = 0,
    autoPlay,
    next = document.querySelector("#next"),
    prev = document.querySelector("#prev"),
    imgs = document.querySelectorAll(".img");


function roteTo(index) {
    image.style.transform = `rotateY(-${index * 60}deg)`;
    for (var i = 0; i < dots.length; i++) {
        // console.log("---------------")
        // console.log(dots[i])
        dots[i].classList.remove("active")
        dots[index % 6].classList.add("active")
    }
}

function op(index) {
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = "0"
    }
    imgs[index % 6].style.opacity = "1";
    for (var j = 0; j < dots.length; j++) {
        // console.log("---------------")
        // console.log(dots[i])
        dots[j].classList.remove("active")
    }
    dots[index % 6].classList.add("active")
}

function change(index) {
    if (sheet.href.indexOf("css1.css") == -1) {
        op(index)
    } else {
        roteTo(index)
    }
}


next.addEventListener("click", function () {
    index++;
    // console.log(index);
    change(index)
})
prev.addEventListener("click", function () {
    index--;
    // console.log(index)
    change(index)
})
autoPlay = setInterval(function () {
    index++;
    change(index)
}, 2000)
container.addEventListener("mouseover", function () {
    // console.log('mouseover')
    clearInterval(autoPlay)
})
container.addEventListener("mouseout", function () {
    // console.log("mouseout")
    autoPlay = setInterval(function () {
        index++;
        change(index);
    }, 2000)

})