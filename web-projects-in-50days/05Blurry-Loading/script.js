window.onload=function () {
    let times=0
    const background_item=document.querySelectorAll('.background')[0]
    const progress=document.querySelectorAll('.progress')[0]
    var my_var = setInterval(function (){
        progress.innerHTML=times+ "%"
        progress.style.opacity=1-times/100
        background_item.style.filter='blur('+(100-times)/4+'px)'
        times+=1
        if (times==101){
            clearInterval(my_var)
        }
    },30)

}