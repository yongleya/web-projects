const remained=document.querySelectorAll('.remained')[0]
const drank=document.querySelectorAll('.drank')[0]
const small_glasses=document.querySelectorAll('.small-glass')
const remained_capacity=document.querySelectorAll('.remained-capacity')[0]
let capacity=0
let temp
for (let i = 0; i < small_glasses.length; i++) {
    small_glasses[i].addEventListener('click',function () {
        temp=i+1
        console.log('temp='+temp)
        flush()
        console.log("c="+capacity)
    })
}


function flush() {
    if (temp==capacity){
        if (small_glasses[temp-1].classList.value.indexOf("full")!=-1){
            capacity-=1
        }
    }else {
        capacity=temp
    }
    small_glasses.forEach(cup=>cup.classList.remove('full'))
    if (capacity!=0){
        for (let j = 0; j < capacity; j++) {
        small_glasses[j].classList.add('full')
        }
    }
    remained.style.height=100-12.5*capacity+'%'
    drank.style.height=12.5*capacity+"%"
    drank.innerHTML=12.5*capacity+"%"
    remained_capacity.innerHTML=2-0.25*capacity+"L"
}