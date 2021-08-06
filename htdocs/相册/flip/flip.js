window.onload =function () {
    var oLeft = document.querySelector(".left"),
        oPrev = document.querySelector(".prev"),  // 1
        oRight = document.querySelector(".right"),  // 2
        oNext = document.querySelector(".next"),  // 2
        oBg = document.querySelector(".bg"), // 1
        index = 1,
        clickable = true;

    oLeft.onclick = change;
    function change() {
        if (clickable){
            index++;
            if (index === 7){index=1};
            clickable = false;
        }
        oLeft.classList.add("move")
    }
    addEventListener("transitionend", function () {
        oPrev.style.backgroundImage = "url('photos/" + index + ".jpg')";
        oBg.style.backgroundImage = 'url("photos/' + index + '.jpg")';
        oNext.style.backgroundImage = `url('photos/${(index + 1) == 7 ? 1 : (index + 1)}.jpg')`;
        oRight.style.backgroundImage = `url('photos/${(index + 1) == 7 ? 1 : (index + 1)}.jpg')`;
        clickable = true
        oLeft.classList.remove("move");
    })
    setInterval(change, 3000)
}


