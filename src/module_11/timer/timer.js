// Сласс-конструктор, который ведет отсчет времени и обновляет интерфейс выбранного элемента
class Timer {
    // Передаваемые параметры
    constructor({ selector, targetDate }) {
        this.selector = selector, // DOM-элемент, на котором проводим обновления
            this.targetDate = targetDate // Задаваемая дата отсчета
    }

    // Запуск процесса
    start() {
        const targetTime = this.targetDate.getTime();// Дата -> секунды
        const startDeltaTime = targetTime - Date.now();

        // Если дата уже прошла
        if (startDeltaTime < 0) {
            return console.log(`Дата для ${this.selector} введена не корректно. Введите дату из будущего!`);
        }

        // Дата введена верно, считаем...
        const interval = setInterval(() => {
            const deltaTime = targetTime - Date.now();

            // если счетчит досчитал, то выходим
            if (deltaTime < 0) {
                //this.updateInterface(this.separator(0));
                clearInterval(interval);
                return console.log(`Время ${this.selector} вышло!`);
            }

            // если еще нет, то считаем...
            this.updateInterface(this.separator(deltaTime));
        }, 1000)
    }

    // Превращаем значение в понятные числа
    separator(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);

        return { days, hours, mins, secs };
    }

    // Функция, которая обновляет интерфейс 
    updateInterface({ days, hours, mins, secs }) {
        const CountdownTimer = document.querySelector(this.selector).children;

        CountdownTimer[0].childNodes[1].innerText = days < 10 ? `0${days}` : days;
        CountdownTimer[1].childNodes[1].innerText = hours < 10 ? `0${hours}` : hours;
        CountdownTimer[2].childNodes[1].innerText = mins < 10 ? `0${mins}` : mins;
        CountdownTimer[3].childNodes[1].innerText = secs < 10 ? `0${secs}` : secs;
    };
};

// Передаем условия задачи...
const timer = new Timer({
    selector: '#timer-1',
    targetDate: new Date('Aug 9, 2021')
});

timer.start();

//Новый год...
const timer2 = new Timer({
    selector: '#timer-2',
    targetDate: new Date('Jan 1, 2022')
});

timer2.start();
// Думаю, разбежность в час выплывает из-за перехода летнее/зимнее время
