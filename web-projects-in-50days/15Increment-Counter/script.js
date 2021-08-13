const twitter=document.querySelectorAll('.twitter')[0]
const youtube=document.querySelectorAll('.youtube')[0]
const facebook=document.querySelectorAll('.facebook')[0]
let twitter_followers=12000
let youtube_subscribers=5000
let facebook_fans=7500


window.onload=function () {
    let pg=0
    var t=setInterval(function () {
        twitter.innerHTML=twitter_followers * pg / 100 +''
        youtube.innerHTML=youtube_subscribers * pg /100 +''
        facebook.innerHTML=facebook_fans * pg / 100 + ''
        if (pg==100){
            clearInterval(t)
        }
        pg++
    },10)
}