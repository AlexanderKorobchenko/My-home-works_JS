var _ = require('lodash');// lodash.debounce
import createList from '../templates/list.hbs';// handlebars
import createItem from '../templates/item.hbs';// handlebars
import { error } from '../../../node_modules/@pnotify/core/dist/PNotify.js';// pnotify

// выбираем нужные элементы в разметке
const refs = {
    inputEl: document.getElementById('input'),
    createMarkupEl: document.getElementById('create-markup')
};

// слушаем форму
refs.inputEl.addEventListener('input', _.debounce(onSeach, 500));

// вызов отправки из формы
function onSeach(event) {
    const inputValue = event.target.value;

    if (inputValue === '') {
        refs.createMarkupEl.innerHTML = '';
        return;
    };

    send(inputValue);
};

// отправка, получение, рендер
function send(inputValue) {
    fetch(`https://restcountries.eu/rest/v2/name/${inputValue}`)
        .then((response) => {
            if (!response.ok) {
                error({ text: `Country named ${inputValue} does not exist` });
                refs.createMarkupEl.innerHTML = '';
                return;
            };
            return response.json()
        })
        .then((countries) => {
            if (countries.length > 10) {
                error({ text: 'Too many matches found. Please enter a more specific query!' });
                refs.createMarkupEl.innerHTML = '';
            };

            if (countries.length >= 2 && countries.length <= 10) {
                refs.createMarkupEl.innerHTML = createList(countries); //рендерим список
                // слушаем список
                refs.createMarkupEl.addEventListener('click', (currentElement) => {
                    send(currentElement.target.outerText);
                    refs.inputEl.value = currentElement.target.outerText;
                })
            };

            if (countries.length === 1) {
                refs.createMarkupEl.innerHTML = createItem(countries)
            };
        })
        .catch(errorMessage => {
            console.warn(errorMessage);
        })
}