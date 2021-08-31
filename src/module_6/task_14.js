// Пиши код ниже этой строки
const getUserEmails = users => {
  const names = [];

  users.map(user => names.push(user.email));

  return names;
};
  // Пиши код выше этой строки


/* Условия с предедущей задачи
Задание
Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.

Тесты
Объявлена переменная getUserNames.
Переменной getUserNames присвоена стрелочная функция с параметром (users).
Для перебора параметра users используется метод map().
Вызов функции с указанным массивом пользователей возвращает массив ['moorehensley@indexia.com', 'sharlenebush@tubesys.com', 'rossvazquez@xinware.com', 'elmahead@omatom.com', 'careybarr@nurali.com', 'blackburndotson@furnigeer.com', 'shereeanthony@kog.com'].
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение. */