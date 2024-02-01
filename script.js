var startBtn = document.querySelector("#start-btn")
var screen = document.querySelectorAll(".screen")
var elems = document.querySelectorAll('.elem')
// var screen1 = document.querySelector('#page1')

startBtn.addEventListener('click', () => {
    // screen1.style.transform = 'translateY(-100%)
    screen[1].style.transform = 'translateY(-100%)' // new f me 
})
elems.forEach(function (e) {
    e.addEventListener('click', () => {
        screen[2].style.transform = 'translateY(-200%)'
    })
})

// startBtn.addEventListener('click',function(){
//     screen1.style.transform = 'translateY(-100%)';
//     screen2.style.transform = 'translateY(-200%)';
// })