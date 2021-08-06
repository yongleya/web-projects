var selected = document.querySelector(".selected"),
    slider = document.querySelector(".input-slider");

slider.addEventListener("input", function () {
    selected.innerHTML = slider.value;
    console.log(slider.value)
})