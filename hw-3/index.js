// Задание 1 //
let password = 'пароль';
let enter = prompt ('Введите пароль');
if (enter === password) {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неправильно");
    
}

// Задание 2//
 let c = prompt ('Введите число любое число от 1 до 10');
 if (c>0 && c<10) {
    console.log ('Верно');
 } else {
    console.log ('Неверно');
 }
 // Задание 3//
 let d = prompt ('Введите число');
 let e = prompt ('Введите число');
 if (d>100 || e>100) {
    console.log ('Верно');  
 } else {
    console.log ('Неверно');
 }
 // Задание 4//
 let a = '2';
 let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже:
a = Number (a);
b = Number (b);
alert(a + b);
// Задание 5//
let monthNmber = prompt('Введите номер месяца');

switch (monthNmber) {
    case '1':
case '2': 
case '12': 
console.log('Зима');
break;
case '3':
case '4':
case '5':
  console.log('Весна');
break;
case '6':
case '7':
case '8':
console.log('Лето');
break;
case '9':
case '10':
case '11':
console.log('Осень');               

default:
    console.log('Такого месяца не существует');    
        break;
}
