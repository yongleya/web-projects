function f(a) {
    var btn = document.getElementById("stylesheet")
    if (a === 1) {
        btn.href = "./css/style1.css"
    } else {
        btn.href = "./css/style2.css"
    }
}

var fun
fun = function (a, b) {
    console.log(a + b)

}
window.onload = function () {
    var lis = document.querySelectorAll(".header_btn")
    for (var i = 0; i < lis.length; i++) {
        var li = lis[i]
        console.log(li.children[0])
    }

}