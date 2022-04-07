let menubar = document.querySelector('#menubar');

menubar.onclick = () =>{
    document.querySelector('.header .navbar .content').classList.toggle('active');
    menubar.classList.toggle('fa-times');
}

let downarrow = document.querySelector('#downarrow');

downarrow.onclick = () =>{
    document.querySelector('.header .navbar .rightend a').classList.toggle('upper');
}

let slideContainer = document.querySelectorAll('.review .boxcontainer');
let index = 0;

function next(){
    slideContainer[index].classList.remove('active');
    index = (index + 1) % slideContainer.length;
    slideContainer[index].classList.add('active')
}

function previous(){
    slideContainer[index].classList.remove('active');
    index = (index - 1 + slideContainer.length) % slideContainer.length;
    slideContainer[index].classList.add('active')
}