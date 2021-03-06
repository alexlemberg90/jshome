// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
class User {

  constructor(id,name,username,email,street,suite,city,zipcode,geoLat,geoLng,phone,website,comName,catchPhrase,bs) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = {};
    this.address.street = street;
    this.address.suite = suite;
    this.address.city = city;
    this.address.zipcode = zipcode;
    this.address.geo = {};
    this.address.geo.lat = geoLat;
    this.address.geo.lng = geoLng;
    this.phone = phone;
    this.website = website;
    this.company = {};
    this.company.name = comName;
    this.company.catchPhrase = catchPhrase;
    this.company.bs = bs;
  };
}
let Leanne = new User(1,'Leanne Graham','Bret','Sincere@april.biz','Kulas Light','Apt. 556','Gwenborough','92998-3874'
  ,'-37.3159','81.1496','1-770-736-8031 x56442','hildegard.org','Romaguera-Crona','Multi-layered client-server neural-net',
  'harness real-time e-markets')
console.log(Leanne)
// {
//   id: 1,
//     name: 'Leanne Graham',
//   username: 'Bret',
//   email: 'Sincere@april.biz',
//   address: {
//   street: 'Kulas Light',
//     suite: 'Apt. 556',
//     city: 'Gwenborough',
//     zipcode: '92998-3874',
//     geo: {
//     lat: '-37.3159',
//       lng: '81.1496'
//   }
// },
//   phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//   company: {
//   name: 'Romaguera-Crona',
//     catchPhrase: 'Multi-layered client-server neural-net',
//     bs: 'harness real-time e-markets'
// }
// }
//
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу


class Attr {
  constructor(name,info) {
    this.name = name;
    this.info = info;
  };
}

class Tag {
  constructor(name,info,attributes) {
    this.name = name;
    this.info = info;
    this.attributes = attributes;
    };


}
let tags = [
  new Tag('<a>','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
    [new Attr('href','Задает адрес документа, на который следует перейти.'),new Attr('rel',' Отношения между ссылаемым и текущим документами.')])]
console.log(tags)
// Поля :
//   -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//   titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//   attrs: [
//   {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//   {/*some props and values*/},
//   {/*...*/},
//   {/*...*/},
// ]
//
// }
