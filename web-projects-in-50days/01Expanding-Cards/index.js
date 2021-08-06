window.onload = function (){
    const panels = document.querySelectorAll(".panel");
    function removeActiveClassName() {
        for (let i = 0; i < panels.length; i++) {
            panels[i].classList.remove('active')
        }
        this.classList.add('active');
    }

    for (let i = 0; i < panels.length; i++) {
        panels[i].addEventListener('click',removeActiveClassName)
}
}