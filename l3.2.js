// ---------------ДОП---------------
//
//   -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// let arrey = [9,8,0,4];
// function sort(arr,i) {
//   if (i < arr.length -1) {
//     let num = arr[i]
//     arr[i] = arr[i+1]
//     arr[i+1] = num
//   }
// return arr
// }
// sort(arrey,1)
// console.log(arrey)

// - Дано список імен.
// let n1 = '    Harry       Potter      ';
// let n2 = '    Ron       Whisley      ';
// let n3 = '    Hermione       Granger      ';
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n11 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// function norm(word) {
//  let new1 = word;
//   for (let i = 0; i < word.length; i++) {
//     if ('  ') {
//       new1 = new1.replaceAll('  ',' ').trim()
//     }
//   }
//   return new1
// }
// console.log(norm(n1))
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// let namArray = [1,0,6,0,3];
//
// function sort(array) {
//   let firstArray = [];
//   let secondArray = [];
//   for (let arrayElement of array) {
//     if (arrayElement !== 0) {
//      firstArray.push(arrayElement)
//     } else {
//       secondArray.push(arrayElement)
//     }
//   }
//   let newArray = firstArray.concat(secondArray)
//   return newArray
// }
//
// console.log(sort(namArray))
