window.onload = function () {
    const aT = document.getElementsByClassName("t");
    const aC = document.getElementsByClassName("content");
    const aR = document.getElementsByClassName("r");
    const bo = document.getElementById("bottom")
    const cu = document.getElementById("conn_us")
    for (var i = 0; i < aT.length; i++) {
        var t = i
        aT[i].onclick = function () {
            for (var j = 0; j < aT.length; j++) {
                aT[j].className = "t";
                aC[j].className = "content nshow";
            }
            this.className = "t focus_t";
            // aC[this.index].className="content show"
            for (var p = 0; p < aT.length; p++) {
                if (aT[p] === this) {
                    aC[p].className = "content show";
                }
            }

        }
    }


    for (var i = 0; i < aR.length; i++) {
        aR[i].onclick = function () {
            for (var j = 0; j < aR.length; j++) {
                aR[j].className = "r";
            }
            this.className = "r focus_r";
        }
    }
    bo.onmouseover = function () {
        bo.innerHTML = "&nbsp;&nbsp;&nbsp;QQ:1539772681<br>&nbsp;&nbsp;&nbsp;Phone:15178274270"
    }
    bo.onmouseout = function () {
        bo.innerHTML = "<span id='conn_us'>联系我们</span>"

    }

}
