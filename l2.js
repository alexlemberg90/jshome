// --створити масив з:
//   - з 5 числових значень
// let num = [2, 3, 4, 99 ,123];
// - з 5 стічкових значень
// let str = ['Alex', 'Robert', 'Bob', 'Jon', 'I see you speak'];
// - з 5 значень стрічкового, числового та булевого типу
// let all = ['Your', 'age', 30, true, false];
// - та вивести його в консоль
// console.log(num,str,all);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let Arr = [];
// Arr[0] = 'Your';
// Arr[1] = 'name';
// Arr[2] = 'Alex?';
// Arr[3] = 'and age';
// Arr[4] = 30;
// Arr[5] = true;
// Arr[6] = false;
// console.log(Arr);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i <= 10; i++) {
//   document.write(`<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, illum.<hr></div>`);
//
// };
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i <= 10; i++) {
//   document.write(`<div><h3>${i}</h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, illum.<hr></div>`);

// };
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i <= 20) {
//   document.write(`<h1>Lorem ipsum dolor sit amet.</h1>`)
//   i++
// };
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i <= 20) {
//   document.write(`${i}<h1><br>Lorem ipsum dolor sit amet.<hr></h1>`)
//   i++
// };
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let nums = [1,2,32,123,4234,32,234,523,1231,122];
// for (let num of nums) {
//   console.log(num);
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let strings = ['Alex', 'Robert', 'Bob', 'Jon', 'I see you speak','Nasho','tak','bagato','pusatu','?'];
// for (let str of strings) {
//   console.log(str);
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arrays = ['Alex', 'Robert', 'Bob',1,2,32,123,true,false,{name: 'Alex'}];
// for (let arr of arrays) {
//   console.log(arr);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arrays = ['Alex', 'Robert', 'Bob',1,2,32,123,true,false,'Alex'];
// for (let array of arrays) {
//   if (typeof array === "boolean") {
//     console.log(array);
//   }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arrays = ['Alex', 'Robert', 'Bob',1,2,32,123,true,false,'Alex'];
// for (let array of arrays) {
//   if (typeof array === "number") {
//     console.log(array);
//   }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arrays = ['Alex', 'Robert', 'Bob',1,2,32,123,true,false,'Alex'];
// for (let array of arrays) {
//   if (typeof array === "string") {
//     console.log(array);
//   }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let Arr = [];
// Arr[0] = 'Your';
// Arr[1] = 'name';
// Arr[2] = 'Alex?';
// Arr[3] = 'and age';
// Arr[4] = 30;
// Arr[5] = true;
// Arr[6] = false;
// Arr[7] = ['Opapa', 'nejdanchik?'];
// Arr[8] = {name: 'Alex', age: 30};
// Arr[9] = 'I sho?';
// for (let arrElement of Arr) {
//   console.log(arrElement);
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <= 9; i++) {
//   console.log(i);
//   document.write(`${i}<hr>`);
//
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <= 99; i++) {
//   console.log(i);
//   document.write(`${i}<hr>`);
//
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <= 9; i += 2) {
//   console.log(i);
//   document.write(`${i}<hr>`);
//
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i <= 99; i += 2) {
//   console.log(i);
//   document.write(`${i}<hr>`);
//
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i <= 99; i += 2) {
//   console.log(i);
//   document.write(`${i}<hr>`);
//
// }
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//   let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
//   ];
//
// let citiesWithId = [
//   {user_id: 3, country: 'USA', city: 'Portland'},
//   {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//   {user_id: 2, country: 'Poland', city: 'Krakow'},
//   {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//   Записати цей об'єкт в новий масив
// Example:
//   let usersWithCities = [
//     {
//       id: 1, // <===
//       name: 'vasya',
//       age: 31,
//       status: false,
//       address: {
//         user_id: 1, // <===
//         country: 'Ukraine',
//         city: 'Ternopil'
//       }
//     },
// let usersWithCities = [];
// for (let usersId of usersWithId) {
//   for (let citiesId of citiesWithId) {
//     if (citiesId.user_id === usersId.id) {
//       usersId.address = citiesId
//       usersWithCities.push(usersId)
//     }
//   }
// }
// console.log(usersWithCities);
//     // TO BE CONTINUED .....
//   ]
