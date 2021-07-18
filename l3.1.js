// - створити функцію яка приймає масив та виводить його
function getArr(arr) {
  console.log(arr)
}
getArr([1,2,4,'qwe']);
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNum(num1,num2,num3) {
  if (num1 < num2 && num1 < num3) {
    console.log(num1);
  } else if (num2 < num1 && num2 < num3) {
    console.log(num2);
  } else {
    console.log(num3);
  }

}
minNum(2,-23,1);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNum(num1,num2,num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(num1);
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2);
  } else {
    console.log(num3);
  }

}
maxNum(2,-23,1);
// - створити функцію яка повертає найбільше число з масиву
function maxNumOfArr(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
console.log(maxNumOfArr([12,22,1234,-22,99999,-213]))

// - створити функцію яка повертає найменьше число з масиву
function minNumOfArr(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}
console.log(minNumOfArr([12,22,1234,-22,99999]))
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumOfArr(arr) {
  let sum = 0;
  for (let arrElement of arr) {
    sum += arrElement
  }
  return sum;
}
console.log(sumOfArr([12,22,1,-22,99]))
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function meanValue(arr) {
  let sum = 0;
  for (let arrElement of arr) {
    sum += arrElement
  }
  return sum / arr.length;
}
// console.log(meanValue([12,22,1,-22,99]))
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//   Для виведення використати попередню функцію.
function pushArr(numofArr) {
  let arrey = [];
  for (let i = 0; i < numofArr; i++) {
    arrey.push(Math.round(Math.random() * 100))
  }
  return arrey
}

console.log(meanValue(pushArr(5)))

let simpsons = [
  {
    name: 'Bart',
    surname: 'Simpson',
    age: 10,
    info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
    photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
  },
  {
    name: 'Homer',
    surname: 'Simpson',
    age: 40,
    info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
    photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
  },
  {
    name: 'Marge',
    surname: 'Simpson',
    age: 38,
    info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
  },
  {
    name: 'Lisa',
    surname: 'Simpson',
    age: 9,
    info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
  },
  {
    name: 'Maggie',
    surname: 'Simpson',
    age: 1,
    info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
  },
];
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// function objKey(arrOfObj) {
//   let key = [];
//   for (let arrOfObjElement of arrOfObj) {
//
//     for (let arrOfObjKey in arrOfObjElement) {
//       key.push(arrOfObjKey)
//     }
//   }
//   return key
// }
// console.log(objKey(simpsons))
//   - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// function objValue(arrOfObj) {
//   let key = [];
//   for (let arrOfObjElement of arrOfObj) {
//
//     for (let arrOfObjKey in arrOfObjElement) {
//       key.push(arrOfObjElement[arrOfObjKey])
//     }
//   }
//   return key
// }
// console.log(objValue(simpsons))
//   - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
// let nums1 = [1,2,3,4];
// let nums2 = [2,3,4,5];
// // результат
// //   [3,5,7,9]
// function calc(arr1,arr2) {
//   let newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (i === j) {
//         newArr.push(arr1[i] + arr2[j])
//       }
//     }
//   }
//   return newArr
// }
// console.log(calc(nums1,nums2));
//
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arr = ['a', 'b', 'c'];
// for (let i = 0; i < 3; i++) {
//   arr.push(i + 1);
//
// }
// console.log(arr)
// // - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arrOfNum = [1, 2, 3];
// arrOfNum.splice(0,3,3,2,1)
// console.log(arrOfNum)
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arrOfNum = [1, 2, 3];
// arrOfNum.splice(3,3,4,5,6)
// console.log(arrOfNum)
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arrOfNum = [1, 2, 3];
// arrOfNum.splice(0,0,4,5,6)
// console.log(arrOfNum)
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// let someArr = [1, 2, 3, 4, 5]
// someArr.splice(0,3)
// console.log(someArr)
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// let someArr = [1, 2, 3, 4, 5]
// someArr.splice(2,5)
// console.log(someArr)
// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
// let someArr = [1, 2, 3, 4, 5]
// someArr.splice(3,5,'a','b','c')
// console.log(someArr)
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let tenArr = [1,2,3,4,5,6,7,8,9,10];
// for (let number of tenArr) {
//   if (number % 2 === 0) {
//     console.log(number)
//   }
// }
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let tenArr = [1,2,3,4,5,6,7,8,9,10];
// let clon = [];
// for (let number of tenArr) {
//   clon.push(number)
// }
// console.log(clon)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let str = [ 'a', 'b', 'c'];
// let newStr = '';
// for (let i = 0; i < str.length; i++) {
//    newStr += str[i];
// }
// console.log(newStr)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let str = [ 'a', 'b', 'c'];
// let newStr = '';
//
// let i = 0;
// while (i < str.length) {
//   newStr += str[i];
//   i++
// }
// console.log(newStr)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let str = [ 'a', 'b', 'c'];
// let newStr = '';
// for (let string of str) {
//   newStr += string;
// }
// console.log(newStr)
