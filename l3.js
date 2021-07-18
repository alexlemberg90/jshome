
// - створити функцію яка обчислює та повертає площу прямокутника висотою
function rectangle(a,b) {
  return a * b;
}
console.log(rectangle(15, 200));
// - створити функцію яка обчислює та повертає площу кола
const pi = 3.14
function circle(r) {
  return 2 * pi * r;
}
console.log(circle(5));
// - створити функцію яка обчислює та повертає площу циліндру
function cylinder(r,h) {
  return 2 * pi * r * (r + h);
}
console.log(cylinder(10,20))
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minMax(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else {
      max = arr[i];
    }
  }
  console.log(max)
  return min
}
console.log(minMax([8, 2, 3, 4, 44,-33]));

// - створити функцію яка  створює блок з текстом. Текст задати через аргумент
function textDiv(text) {
  document.write(`<div>${text}</div>`);
}
textDiv('some text')
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function someUl(text) {
  document.write(`<ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>`)
}
someUl('HotDog')
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function numUl(text,numOfLi) {
  document.write(`<ul>`)
  for (let i = 0; i < numOfLi; i++) {
    document.write(`<li>${text}</li>`)
  }
  document.write('</ul>')
}
numUl('someLi',3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arr(arrElements) {
  document.write(`<ul>`);
  for (let arrElement of arrElements) {
    if (typeof arrElement === 'number') {
      document.write(`<li> number - ${arrElement}</li>`)
    }else if (typeof arrElement === 'string') {
      document.write(`<li> string - ${arrElement}</li>`)
    }else if (typeof arrElement === 'boolean') {
      document.write(`<li> boolean - ${arrElement}</li>`)
    }
  }
  document.write(`</ul>`);
}
arr([1,2,3,'alex',44,'role','HR',true,123,false,'test']);
