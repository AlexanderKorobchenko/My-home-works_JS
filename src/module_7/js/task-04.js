const spanEl = document.querySelector('span#value');
const decrementBtn = document.querySelector('#counter').firstElementChild;
const incrementBtn = document.querySelector('#counter').lastElementChild;

let counterValue = 0;

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function decrement () {
    counterValue -= 1;
    spanEl.textContent = counterValue;
};

function increment () {
    counterValue += 1;
    spanEl.textContent = counterValue;
};