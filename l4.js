// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// function random() {
//   randNum = Math.round(Math.random()*100);
//   return randNum
// }
// console.log(random())
// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
// function random(min,max) {
//   randNum = Math.round(Math.random() * (max - min) + min);
//   return randNum
// }
// console.log(random(100,1000))
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let randomArrey = [];
// function random(min,max) {
//   for (let i = 0; i < 10; i++) {
//     randomArrey.push(Math.round(Math.random() * (max - min) + min));
//   }
// }
// random(0,100)
// randomArrey.sort(function (a, b) {
//  return   a - b
// })
// console.log(randomArrey)
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
// let randomArrey = [];
// function random(min,max) {
//   for (let i = 0; i < 10; i++) {
//     randomArrey.push(Math.round(Math.random() * (max - min) + min));
//   }
// }
// random(0,100)
// let newArrey = randomArrey.filter(function (a) {
//   if (a % 2 === 0) {
//     return true
//   } else {
//
//     return false
//   }})
// console.log(newArrey)
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
// let randomArrey = [];
// function random(min,max) {
//   for (let i = 0; i < 10; i++) {
//     randomArrey.push(Math.round(Math.random() * (max - min) + min));
//   }
// }
// random(0,100)
// newArr = randomArrey.map(function (a) {
//  return a.toString()
// })
// console.log(newArr)
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id,name,surname,email,phone) {
//   this.id = id;
//   this.name = name;
//   this.surname = surname;
//   this.email = email;
//   this.phone = phone;
// }
// let user1 = new User(1,'Alex', 'Zevs','alex@mail.com','+380655342234');
// console.log(user1)
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [];
function User(id,name,surname,email,phone) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}

for (let i = 0; i < 10; i++) {
  users.push(new User(Math.round(Math.random()*100),'Alex', 'Zevs','alex@mail.com','+380655342234'));
}
console.log(users)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
let newUsers = users.filter(function (a) {
  if (a.id % 2 === 0) {
    return true
  }
    return false
  });
let sortUsers = newUsers.sort(function (a,b) {
  return a.id - b.id;
})
console.log(sortUsers)
