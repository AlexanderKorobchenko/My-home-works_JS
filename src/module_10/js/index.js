import card from '../js/menu.json'; // Импорт базы данных
import templateFunction from '../templates/card.hbs'; // Подключаем шаблон для разметки

// ================ Создаем разметку ===============
const menuEl = document.querySelector('ul.js-menu');
menuEl.innerHTML = templateFunction(card);

// ================ Работа с темами ================
const checkBoxEl = document.querySelector('#theme-switch-toggle'); // Ищем кнопку
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
}; // Создаем название классов

checkBoxEl.checked = Boolean(localStorage.getItem('checkBox')); // Задаем кнопке сохраненное ранее значение

if (checkBoxEl.checked) {
    document.body.classList.add(Theme.DARK);
}; // Если "Вкл"
if (!checkBoxEl.checked) {
    document.body.classList.add(Theme.LIGHT);
}; //Если "Выкл"

checkBoxEl.addEventListener('input', changeTheme); // Слушатель на кнопке

// Управление кнопкой
function changeTheme(event) {        
    if (event.target.checked) {
        document.body.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('checkBox', 'On');
    };
    
    if (!event.target.checked) {
        document.body.classList.replace(Theme.DARK, Theme.LIGHT);
        localStorage.setItem('checkBox', '');
    }
};