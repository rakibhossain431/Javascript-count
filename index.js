
let decrementBtn = document.querySelector('.btn_decrement');
let incrementBtn = document.querySelector('.btn_increment');
let resetBtn = document.querySelector('.btn_reset');
let count = document.querySelector('.count');

function decrement(){
    count.innerHTML--;
}
decrementBtn.addEventListener('click',decrement);

function increment(){
    count.innerHTML++;
}

incrementBtn.addEventListener('click',increment);

function reset(){
    count.innerHTML=0;
}


resetBtn.addEventListener('click',reset);