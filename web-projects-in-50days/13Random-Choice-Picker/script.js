const text=document.querySelectorAll('.input')[0]
const choices=document.querySelectorAll('.choices')[0]

text.focus()

text.addEventListener('keyup',function (event) {
    if (event.key=='Enter'){
        random_select()
        text.value=''
    }else {
        createTags(event.target.value)
    }

})

function createTags(value) {
    let tags=value.split(',').filter(ele=>(ele!=''))
    choices.innerHTML=''
    tags.forEach(function (tag) {
        choices.innerHTML+='<li class="li">'+tag+'</li>'
    })
}

function random_select() {
    const tags=document.querySelectorAll('.choices')[0].children
    let id = random(0,tags.length)
    selecting()
    // tags[id].classList.add('high')


    function random(a,b) {
        return Math.floor(Math.random()*(b-a)+a)
    }
    function selecting() {
        var i=0
        var t=setInterval(function () {
            for (let j = 0; j < tags.length; j++) {
                tags[j].classList.remove('high')
            }
            tags[i%(tags.length)].classList.add('high')
            if (i==id+tags.length*2){
                clearInterval(t)
            }
            i++
        },50)
    }

}