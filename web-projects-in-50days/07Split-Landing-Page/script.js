const left=document.querySelectorAll('.left')[0]
const right = document.querySelectorAll('.right')[0]

left.addEventListener("mouseover",function () {
    left.style.width='80vw'
    right.style.width='20vw'
})
left.addEventListener('mouseleave',function () {
    left.style.width='50vw'
    right.style.width='50vw'
})

right.addEventListener("mouseover",function () {
    right.style.width='80vw'
    left.style.width='20vw'
})
right.addEventListener('mouseleave',function () {
    left.style.width='50vw'
    right.style.width='50vw'
})