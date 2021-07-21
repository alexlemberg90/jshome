// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//Done
//   - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let content = document.getElementById('content');
console.log(content.textContent);
// -- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules');
console.log(rules.textContent);
// -- замініть текст параграфа з id 'content' на будь-який інший
content.innerText ='azaza';
// -- замініть текст параграфа з id 'rules' на будь-який інший
rules.innerHTML ='qwerty';
// -- змініть кожному елементу колір фону на червоний
content.style.backgroundColor = 'red';
rules.style.backgroundColor = 'red';
// -- змініть кожному елементу колір тексту на синій
content.style.color = 'blue';
rules.style.color = 'blue';
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let allClass = rules.classList;
console.log(allClass.value)
// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
let rulesClass = document.getElementsByClassName('fc_rules');
for (let rule of rulesClass) {
  rule.onclick = () => console.log(rule.textContent);
  rule.onclick = () => console.log(rule.innerHTML = 'some text');
}
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
for (let rule of rulesClass) {
  rule.style.color = 'red';
}
