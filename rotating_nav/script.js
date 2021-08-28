const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))

let rants = 0;

let rant = function (message) {
    while (rants < 3) {
    console.log(message.toUpperCase());
    rant++;
    } 
};

rant("woop");
