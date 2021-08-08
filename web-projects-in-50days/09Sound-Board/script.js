lis=document.querySelectorAll('li')
lis.forEach(function (li) {
    li.addEventListener('click',function () {
        document.querySelectorAll('audio').forEach(function (audio) {
            audio.pause()
            audio.currentTime=0

        })
        document.querySelector("#"+li.innerText).play()
    })
})
