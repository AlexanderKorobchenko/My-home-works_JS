// const ulEl = document.querySelector('ul#categories');
//console.log(ulEl);

const itemsEl = document.querySelectorAll('ul#categories li.item');
console.log(`В основном списке ${itemsEl.length} категории:`);

const findTitleAndLi = ((array) => {
    return itemsEl.forEach((element) => {
        console.log(`Категория: ${element.querySelector('h2').textContent}`);
        console.log(`Количество элементов: ${element.querySelectorAll('li').length}`)
    });
});

findTitleAndLi(itemsEl);