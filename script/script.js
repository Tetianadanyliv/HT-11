// Створіть функцію, яка повертає проміс getRandomChinese(length).
// Функція працює таким чином:
// Запускається цикл (підказка: можна використовувати while) length раз, кожен
// прохід циклу дивимось на останні 5 цифр результату виклику методу Date.now()
// Наприклад отримали const sign = 16086;.

// Конвертуємо отриману цифу в рядок String.fromCharCode(sign); та чекаємо 50 ms
// Функція gerRandomChinese(length) повинна повернути рядок довжиною (length) з
// китайськими ієрогліфами.
// Час роботи проміса має складати length * 50ms.
// (Якщо викликати getRandomChinese(4), отримаємо результат "촛궻簽紙" за 200ms

const delay = (time) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });

async function getRandomChinese(length) {
  let symbols = "";
  let i = 0;
  while (length > i) {
    let numbers = Date.now();
    let sign = numbers.toString().slice(-5);
    symbols += String.fromCharCode(sign);
    i++;
    await delay(50 * length);
  }
  return symbols;
}

getRandomChinese(4).then((symbols) => {
  document.getElementsByClassName("box")[0].textContent = symbols;
});
