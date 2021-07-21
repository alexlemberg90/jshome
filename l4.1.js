//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
  constructor(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
  }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let Clients = [];

  Clients.push(new Client(1,'Alex','Submit','alex@mail.com','+380655342234',['milk','bread','lemon']));
  Clients.push(new Client(1,'Alex1','Submit1','alex1@mail.com','+380655342231',['milk','bread','lemon','bread','lemon']));
  Clients.push(new Client(1,'Alex2','Submit2','alex2@mail.com','+380655342232',['milk','bread','lemon','bread','lemon','bread','lemon']));
  Clients.push(new Client(1,'Alex3','Submit3','alex3@mail.com','+380655342233',['milk','bread','lemon','bread','lemon','bread','lemon','bread','lemon']));
  Clients.push(new Client(1,'Alex4','Submit4','alex4@mail.com','+380655342244',['milk','bread','lemon','bread']));
  Clients.push(new Client(1,'Alex5','Submit5','alex5@mail.com','+380655342235',['milk','bread','lemon','lemon','bread','lemon']));
  Clients.push(new Client(1,'Alex6','Submit6','alex6@mail.com','+380655342236',['milk','bread','lemon','bread','lemon','bread','lemon','bread','lemon','bread','lemon']));
  Clients.push(new Client(1,'Alex7','Submit7','alex7@mail.com','+380655342237',['milk','bread','lemon','bread','lemon','bread','lemon','bread']));
  Clients.push(new Client(1,'Alex8','Submit8','alex8@mail.com','+380655342238',['milk','bread']));
  Clients.push(new Client(1,'Alex9','Submit9','alex9@mail.com','+380655342239',['milk']))
console.log(Clients)
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
Clients.sort(function (a, b) {
 return   a.order.length - b.order.length
})
console.log(Clients)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// function Car(model,producer,year,maxSpeed,engine) {
//   this.model = model;
//   this.producer = producer;
//   this.year = year;
//   this.maxSpeed = maxSpeed;
//   this.engine = engine;
//   this.drive = function () {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)};
//   this.info = function () {
//     console.log(`модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.engine}`)
//   };
//   this.increaseMaxSpeed = function (newSpeed) {
//     this.maxSpeed = newSpeed};
//   this.changeYear = function (newValue) {
//     this.year = newValue};
//   this.addDriver = function (driver) {
//     this.driver = driver;
//   };
// }
// let Mazda = new Car('z3','MazdaCo',1999,300,6000,'3l');
// Mazda.addDriver({name: 'Valera', age: 33});
// Mazda.changeYear(2021)
// console.log(Mazda)
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
class Car {
  constructor(model,producer,year,maxSpeed,engine) {
      this.model = model;
  this.producer = producer;
  this.year = year;
  this.maxSpeed = maxSpeed;
  this.engine = engine;

  }
  drive () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)};
  info () {
    console.log(`модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.engine}`)
  };
  increaseMaxSpeed (newSpeed) {
    this.maxSpeed = newSpeed};
  changeYear (newValue) {
    this.year = newValue};
  addDriver (driver) {
    this.driver = driver;
  };
}
let Mazda = new Car('z3','MazdaCo',1999,300,6000,'3l');
  Mazda.drive();
Mazda.info();
Mazda.increaseMaxSpeed(500);
Mazda.addDriver({name: 'Valera', age: 33});
Mazda.changeYear(2021);
console.log(Mazda);
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
class Cinderella {
  constructor(name,age,footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
  };
}

let Cinderellas = [
  new Cinderella('Olha',28,35),
  new Cinderella('Angelina',6,26),
  new Cinderella('Ira',20,37),
  new Cinderella('Natalia',50,38),
  new Cinderella('Yana',23,40),
  new Cinderella('Masha',28,38),
  new Cinderella('Dana',22,36),
  new Cinderella('Nika',29,39),
  new Cinderella('Katya',25,37),
  new Cinderella('Nastya',30,41)
]
console.log(Cinderellas)
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
  constructor(name,age,foundShoe) {
    this.name = name;
    this.age = age;
    this.foundShoe = foundShoe;
  };
}
let princeAlex = new Prince('Alex',31,35);
//   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let cinderella of Cinderellas) {
  if (cinderella.footSize === princeAlex.foundShoe) {
    console.log(`Happy End for Prince ${princeAlex.name} and Cinderella ${cinderella.name}`);
  };
}
//   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let happyCinderella = Cinderellas.find((cinderella) => {
  return cinderella.footSize === princeAlex.foundShoe;
})

console.log(happyCinderella)
