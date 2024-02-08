//Задание 1
// Выведите числа от 1 до 10 в консоль
for (let i = 1; i <= 10; i++) {
   //console.log(i);
}
//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
for (let i = 1; i <= 20; i++) {
   //if(i % 2 === 0) console.log(i)
}
//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
for (let i = 10; i >= 1; i--) {
   //console.log(i);
}
//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
for (let i = 1; i <= 10; i++) {
   //console.log(i * 5);
}
//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let sum = 0;
for (let i = 1; i <= 100; i++) {
   sum += i;
   //console.log(sum);
}
//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
   //console.log(array[i]);
}
//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
   sum1 += numbers[i];
   //console.log(sum1);
}
//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Собака", "Мышь", "Слон"];
let animals1 = [];
for (let i = 0; i < animals.length; i++) {
   animals1.push(animals[i] + " - прекрасное животное");
   //console.log(animals1);
}
//Задание 9
// Выведите символы в строке в консоль
const str = "Hello";
for (let word of str) {
   //console.log(word);
}
//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for (let num of array) {
   //console.log(num);
}
//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ["Hello, world!", "How are you?"];
let newSentences = sentences.join(" ").split(" ");
for (let word of newSentences) {
   //console.log(word);
}
//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
let sum2 = 0;
for (let num of numbers) {
   sum2 += num;
   //console.log(sum2);
}
//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ["apple", "banana", "cherry"];
for (let fruit of list) {
   //console.log(fruit);
   //console.log(fruit.length);
}
//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
list.forEach((friut) => {
   let fruits = [];
   fruits = friut.toUpperCase();
   //console.log(fruits);
});
//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = "Hello, world!";
let vowelCount = 0;
const vowels = ["a", "e", "i", "o", "u"];
for (let i = 0; i < greeting.length; i++) {
   if (vowels.includes(greeting[i])) {
      vowelCount++;
      //console.log(vowelCount)
   }
}

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words = ["Hello", "world", "!"];
let words1 = words.join(" ");
//console.log(words1);
//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let n = 1;
while (n <= 10) {
   //console.log(n);
   n++;
}
//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let m = 10;
while (m >= 1) {
   //console.log(m);
   m--;
}
//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
let i = 0;
while (i < allNumbers.length && allPositive) {
   if (allNumbers[i] <= 0) {
      break;
   }
   i++;
}

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
do {
   //console.log(random[i]);
   i++;
} while (random[i] >= 0 && i < random.length);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
let num = 1;
do {
   //console.log(num)
   num++;
   if (num % 3 == 0) {
      num++;
   }
} while (num < 100);
//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
let sum3 = 0;
while (sum3 <= 100) {
   let userNum = prompt("Введите число:");
   userNum = parseFloat(userNum);
   if (isNaN(userNum)) {
      alert("Введите корректное число!");
      continue;
   }
   sum3 += userNum;
}
alert('Сумма чисел превысила 100')
//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
let elements = document.querySelectorAll("h4");
elements.forEach((elem) => {
   elem.style.color = "blue";
});

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomString = "";
function getRandomWord() {
   let randomIndex = Math.floor(Math.random() * alphabet.length);
   return alphabet[randomIndex];
}

for (let i = 0; i <= 6; i++) {
   randomString += getRandomWord();
}
console.log(randomString);
