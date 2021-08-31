// импортируем массив картинок
import galleryItems from './app.js';

// элементы HTML, к которым будем обращаться
const ulGalleryEl = document.querySelector('ul.js-gallery');
const modalWindowEl = document.querySelector('div.js-lightbox')
const bigImg = modalWindowEl.querySelector('img.lightbox__image');

// создание разметки HTML
const ItemCreateEl = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
                <a
                    class="gallery__link"
                    href="${original}"
                >
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </li>`;
});

ulGalleryEl.insertAdjacentHTML('afterbegin', ItemCreateEl.join(' '));

// слушатели событий
ulGalleryEl.addEventListener('click', onOpenModalWindow);
modalWindowEl.addEventListener('click', onControlClick);
window.addEventListener('keydown', onControlKey);

// открытие модалки
function onOpenModalWindow(event) {
    event.preventDefault(); // отмена действий по умолчанию (переход по ссылке)

    if (event.target.nodeName !== 'IMG') {
        return;
    };

    modalWindowEl.classList.add('is-open');

    bigImg.src = event.target.dataset.source;
    bigImg.alt = event.target.alt;

};

// управление кликами при открытой модалке
function onControlClick(event) {
    if (event.target.dataset.action === 'prev-lightbox') {
        prevImg();
    };

    if (event.target.dataset.action === 'next-lightbox') {
        nextImg();
    };

    if (event.target.dataset.action !== 'close-lightbox' && event.target.nodeName !== 'DIV') {
        return;
    };

    closeModalWindow();
};

// управление клавишами при открытой модалке
function onControlKey(event) {
    if (modalWindowEl.classList.value.includes('is-open')) {
        if (event.keyCode === 27) {
            //console.log('esc');
            closeModalWindow();
        };
        
        if (event.keyCode === 37) {
            //console.log('влево');
            prevImg();
        };

        if (event.keyCode === 39) {
            //console.log('вправо');
            nextImg();
        };
    };
};

// поиск в списке элемента, который отображается на модалке в текущий момент
function findCurrentElement() {
    let index;

    for (let i = 0; i < ulGalleryEl.children.length; i++) {
        if (ulGalleryEl.children[i].children[0].href === bigImg.src) {
            index = i;
            break;
        }
    }

    return index;
};

// пред. картинка на модалке
function prevImg() {
    const index = findCurrentElement();

    if (index === 0) {
        bigImg.src = ulGalleryEl.children[ulGalleryEl.children.length-1].children[0].children[0].dataset.source;
        bigImg.alt = ulGalleryEl.children[ulGalleryEl.children.length-1].children[0].children[0].alt;
    }
    
    else {
        bigImg.src = ulGalleryEl.children[index - 1].children[0].children[0].dataset.source;
        bigImg.alt = ulGalleryEl.children[index - 1].children[0].children[0].alt;
    };
};

// след. картинка на модалке
function nextImg() {
    const index = findCurrentElement();

    if (index === ulGalleryEl.children.length-1) {
        bigImg.src = ulGalleryEl.children[0].children[0].children[0].dataset.source;
        bigImg.alt = ulGalleryEl.children[0].children[0].children[0].alt;
    }

    else {
        bigImg.src = ulGalleryEl.children[index + 1].children[0].children[0].dataset.source;
        bigImg.alt = ulGalleryEl.children[index + 1].children[0].children[0].alt;
    };
};

// закрытие модалки
function closeModalWindow() {
    modalWindowEl.classList.remove('is-open');
    bigImg.src = '';
    bigImg.alt = '';
};