// 1

function checkAge(age) {
  if (age >= 18) { // Дополни эту строку
    return 'Вы совершеннолетний человек';
  }

  return 'Вы не совершеннолетний человек';
}

// 2
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:

// удали переменную message;
// удали else;
// код должен работать так же, как и до оптимизации.

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  // Пиши код ниже этой строки

  //  let message;

  // if (password === ADMIN_PASSWORD) {
  //   message = 'Добро пожаловать!';
  // } else {
  //   message = 'Доступ запрещен, неверный пароль!';
  // }
  
  if (password === ADMIN_PASSWORD) {
    return 'Добро пожаловать!';
  } 
    return 'Доступ запрещен, неверный пароль!';
//    Пиши код выше этой строки
}

// 3

function checkStorage(available, ordered) {
  // Пиши код ниже этой строки
  
  if (ordered === 0) {
    return 'В заказе еще нет товаров';
  }
  if (ordered > available) {
    return 'Слишком большой заказ, на складе недостаточно товаров!';
  } 
  return 'Заказ оформлен, с вами свяжется менеджер';
  
  // Пиши код выше этой строки
}

// 4
// При объявлении переменной для объекта или массива программисты
// обычно используют const.Они делают это для того, чтобы случайно
// не перезаписать значение, т.к.попытка перезаписи вызовет ошибку
// до того как код попадет к пользователю.

const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// 5

// Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// 6
// Переопредели значения элементов с индексами 1 и 3. Замени 'слива' на 'персик', а 'апельсин' на 'банан'.

// // Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
// fruits[1] = 'персик';
// fruits[3] = 'банан';

// 7

// // Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки

// const fruitsArrayLength = fruits.length;

// 8

// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// 9
// Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

function getExtremeElements(array) {
    // Пиши код ниже этой строки
 return [array[0], array[array.length - 1]]

    // Пиши код выше этой строки
}
  
// 10

function splitMessage(message, delimeter) {
  let words;
  // Пиши код ниже этой строки
  
 words = message.split(delimeter)
  
  // Пиши код выше этой строки
  return words;
}

// 11
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки
return message.split(' ').length*pricePerWord
  // Пиши код выше этой строки
}

// 12

function makeStringFromArray(array, delimeter) {
  let string;
  // Пиши код ниже этой строки
 
 return array.join(delimeter)
 
  // Пиши код выше этой строки
  return string;
}

// 13

function slugify(title) {
  // Пиши код ниже этой строки
 
 return title.split(' ').join('-').toLowerCase()

  // Пиши код выше этой строки
}

// 14

// firstTwoEls - массив из первых двух элементов.
// nonExtremeEls - массив из всех элементов кроме первого и последнего.
// lastThreeEls - массив из трёх последних элементов.

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,fruits.length-1);
// const lastThreeEls = fruits.slice(-3);

// 15

const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
const newClients = ['Персик', 'Хьюстон'];

const allClients = oldClients.concat(newClients); // Дополни эту строку

// 16
// Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна 
// вернуть копию массива длиной maxLength элементов.

// В противном случае функция должна вернуть новый массив целиком.

function makeArray(firstArray, secondArray, maxLength) {
    // Пиши код ниже этой строки
  
if (firstArray.concat(secondArray).length > maxLength){
 return firstArray.concat(secondArray).slice(0, maxLength)
} else {
return firstArray.concat(secondArray)
}
    
    // Пиши код выше этой строки
}
  
// 17
// --------------
for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}
// В примере объявляется переменная i, инициализируется значением 0
// и цикл выполняется(его тело) до тех пор, пока i <= 20,
//   то есть условие приводится к true.После
// каждой итерации счётчик увеличивается на 5.
// ------------------

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Дополни эту строку
  console.log(i);
}

// 18
// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);
// =====================================
function calculateTotal(number) {
  // Пиши код ниже этой строки
let sum = 0;

for (let i = 0; i <= number; i += 1) {
  sum += i;
}

return sum;

// Пиши код выше этой строки
}

// 19

// Для доступа к элементам используется
// синтаксис квадратных скобок массив[индекс],
//   где индекс - это значение счётчика цикла от 0 и до
// последнего индекса массива, который на единицу меньше длины массива.

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i<fruits.length; i+=1) { // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }

// 20
function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки
for(let i=0; i<order.length; i+=1){
total+=order[i]
}
  // Пиши код выше этой строки
  return total;
}

// 21

// самое длинное слово в этой строке.

function findLongestWord(string) {
  // Пиши код ниже этой строки
   let arrStr = string.split(' ');
  let wordLength = 0;
  let longestWord;

  for (let i = 0; i < arrStr.length; i += 1) {
    wordLength = arrStr[1].length;

    if (arrStr[i].length > wordLength) {
      longestWord = arrStr[i];

      return longestWord;
    }

  }
  // Пиши код выше этой строки
}

// 22

// Дополни код функции createArrayOfNumbers(min, nax) так,
// чтобы она возвращала массив всех целых чисел от значения min до max.

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Пиши код ниже этой строки
for (let i = min; i <= max; i += 1) { // Дополни эту строку
  numbers.push(i)
}
  // Пиши код выше этой строки
  return numbers;
}

// 23

function filterArray(numbers, value) {
  // Пиши код ниже этой строки

 const newArr = [];
  for(let i = 0; i<numbers.length; i+=1) {
if(numbers[i] > value )
  newArr.push(numbers[i]);
  }
return newArr;
  
  // Пиши код выше этой строки
}

// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].

// 24

function checkFruit(fruit) {
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

  return fruits.includes(fruit); // Дополни эту строку
}

// 25

