const inputEl = document.querySelector('#font-size-control'); // нашли инпут
const inputValue = inputEl.valueAsNumber; // взяли его начальное значение

const textEl = document.querySelector('#text'); // нашли текст
const firstFontSize = parseInt(window.getComputedStyle(textEl).fontSize); // взяли его начальное значение

inputEl.addEventListener('input', onChangeSize);

function onChangeSize(event) {
    textEl.style.fontSize = `${firstFontSize / inputValue * event.target.valueAsNumber}px`;
};