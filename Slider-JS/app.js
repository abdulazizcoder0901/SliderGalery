let imgParent = document.querySelector('#images')
let prevBtn = document.querySelector('.prev')
let nextBtn = document.querySelector('.next')
let img = document.querySelectorAll('img')

let position = 0
function start() {
    position++;
    changeImg()
}

function changeImg() {
    if(position > img.length -1){
        position = 0;
    }else if(position < 0){
        position = img.length -1;
    }
    imgParent.style.transform = `translateX(${-position * 800}px)`;
}

nextBtn.addEventListener('click',() =>{
    position++
    changeImg()
})

prevBtn.addEventListener('click',() =>{
    position--
    changeImg()
})