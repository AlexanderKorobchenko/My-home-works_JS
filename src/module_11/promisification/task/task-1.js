// ================ Task 1 ================
const delay = ms => {
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved(ms);
        }, ms)
    })
};

const logger1 = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger1); // Resolved after 2000ms
delay(1000).then(logger1); // Resolved after 1000ms
delay(1500).then(logger1); // Resolved after 1500ms
