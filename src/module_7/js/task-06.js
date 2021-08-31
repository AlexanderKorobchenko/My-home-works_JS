const form = document.querySelector('#validation-input');

form.addEventListener('blur', onCheckForm);

function onCheckForm(event) {
    //console.log('Нужно ввести: ', +event.target.dataset.length);
    //console.log('Ты ввел: ', event.target.value.length);
    
    if (event.target.value.length === +event.target.dataset.length) {
        form.className = 'valid';
    }
    
    else {
        form.className = 'invalid';
    }
};