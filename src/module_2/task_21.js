function findLongestWord(string) {
  const words = string.split(" ");
  let longesWord = words[0];
  
  for ( let i = 1; i < words.length; i += 1) {
    if (longesWord.length < words[i].length) {
      longesWord = words[i];
    }
  }
  
  return longesWord;
}

/* Задача: поиск самого длинного слова
Задание
Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из 
слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

Тесты
Объявлена функция findLongestWord(string)
Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
Вызов функции findLongestWord("Google do a roll") возвращает Google
Вызов функции findLongestWord("May the force be with you") возвращает force
Вызов функции findLongestWord() со случайной строкой возвращает правильное значение */