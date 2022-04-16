let a = document.getElementById('btn1')
let b = document.getElementById('nav')
let c = document.getElementById('btn2')
a.addEventListener('click', function () {
    b.style.transform='translateX(0%)'
    c.style.visibility = 'visible'
    a.style.visibility = 'hidden'
})
c.addEventListener('click', function () {
    b.style.transform = 'translateX(260%)'
    a.style.visibility = 'visible'
    c.style.visibility = 'hidden'
})

// slider

let nextbtn = document.querySelector('.nextbtn')
let prevbtn = document.querySelector('.prevbtn')
let dot = document.querySelectorAll('.dots')
let slideshow = document.querySelectorAll('.slide')
let count = 0
let number=slideshow.length
nextbtn.addEventListener('click', function () {
    dot[count].classList.remove('active2')
    slideshow[count].classList.remove('active1')
    count++
    if (count>number-1) {
        count=0
    }
    dot[count].classList.add('active2')
    slideshow[count].classList.add('active1')
})
prevbtn.addEventListener('click', function () {
    dot[count].classList.remove('active2')
    slideshow[count].classList.remove('active1')
    count--
    if (count < 0) {
        count = number-1
    }
    dot[count].classList.add('active2')
    slideshow[count].classList.add('active1')
})

let info = document.getElementById('info')
let content = document.getElementById('cardcontent')
let lost = document.getElementById('lost')
let cross = document.getElementById('cross')
info.addEventListener('click',function(){
content.style.display = 'flex'
info.style.display = 'none'
lost.style.display = 'none'
})
cross.addEventListener('click', function () {
    content.style.display = 'none'
    info.style.display = 'block'
    lost.style.display = 'block'
})
