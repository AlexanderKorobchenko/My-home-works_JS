const inputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');
const namesLetters = [];

inputEl.addEventListener('input', onChangeName);


function onChangeName(event) {
    if (event.data === null) {
        namesLetters.pop();
        nameOutputEl.textContent = namesLetters.join('');
    }    
    else 
        namesLetters.push(event.data)
        nameOutputEl.textContent = namesLetters.join('');
        
        if (namesLetters.length === 0) {
            nameOutputEl.textContent = 'незнакомец';
        }    
};