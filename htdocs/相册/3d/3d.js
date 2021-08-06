window.onload = function () {
    var max = document.querySelector(".max"),
        maxLi = max.getElementsByClassName("close"),
        box = document.querySelector(".box");

    box.onmouseover = function () {
        for (var i = 0; i < maxLi.length; i++) {
            maxLi[i].classList.add("open")
        }
    };
    box.onmouseout = function () {
        for (var i = 0; i < maxLi.length; i++) {
            maxLi[i].classList.remove("open");
        }

    };
};
