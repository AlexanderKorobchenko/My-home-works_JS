const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
    },
  
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `В ассортименте нет пиццы с названием «${pizzaName}».`;
    }

    return `Заказ принят, готовим пиццу «${pizzaName}».`;
  },
  
};


/* Шаблонные строки
Шаблонные строки это альтернатива конкатенации с более удобным синтаксисом. Шаблонная строка заключена в обратные (косые) кавычки вместо двойных или одинарных и может содержать местозаполнители, которые обозначаются знаком доллара и фигурными скобками - ${выражение}.

const guestName = "Mango";
const roomNumber = 207;
const greeting = `Добро пожаловать ${guestName}, вы поселены в номер ${roomNumber}`;
Задание
Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате: "You picked <имя товара>, price per item is <цена товара> credits". Где <имя товара> и <цена товара> это значения переменных productName и pricePerItem. Используй синтаксис шаблонных строк.

Тесты
Объявлена переменная productName
Значение переменной productName это строка "Droid"
Объявлена переменная pricePerItem
Значение переменной price это число 3500
Объявлена переменная message
Значение переменной message это строка "You picked Droid, price per item is 3500 credits" */