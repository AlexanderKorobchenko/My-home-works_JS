// Заготовка цветов
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
    '#008B8B',
    '#FA8072',
    '#87CEFA',
    '#9ACD32',
    '#1E90FF'
];

// Функция для генерации случ числа в заданом промежутке
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// Выбираем нужные DOM-элементы
const refs = {
    body: document.body,
    btnStart: document.getElementById('start'),
    btnStop: document.getElementById('stop'),
}

//Выключаем кнопку "Стоп" изначально
refs.btnStop.disabled = true;

// Слушаем кнопки
refs.btnStart.addEventListener('click', colorSwith);
refs.btnStop.addEventListener('click', stopColorSwith);

// Переменная для ф-ции интервала
let interval = null;

// Вкл. изменение цвета
function colorSwith() {
    interval = setInterval(() => {
        refs.body.style.background = colors[randomIntegerFromInterval(0, colors.length)];
        refs.btnStart.disabled = true;
        refs.btnStop.disabled = false;
    }, 1000)
}

// Выкл. изменение цвета
function stopColorSwith() {
    clearInterval(interval);
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
}