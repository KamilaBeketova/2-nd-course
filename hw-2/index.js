// Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);
// Задание 2
let age = 'Презентация первого iPhone была проведена 9 января 2007 года'
alert(age);
// Задание 3
let userName = 'Брендан Эйх'
alert(userName);
// Задание 4
let c = 10;
let d = 2;
alert(c + d, c - d, c*d, c/d);
// Задание 5
let f = 9;
let result2 = f ** 5;	
let g = 2;
let result = f % g;
alert(result2 );
// Задание 6
let h = 9;
let result1 = h ** 5;	
let i = 2;
 result1 = h % i;
alert(result1);
// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
--num;
alert(num);

// Задание 8
let age1 = Number(prompt('Сколько вам лет?'));
alert(age1);
// Задание 9.0
const user = {
    name: "Григорий",
    age: 28,
    isAdmin: false
}
// Задание 9.1
console.log(user);
user['city of residence'] = "Москва"
// Задание 9.2
user.age = 30;
// Задание 9.3
delete user['city of residence']
// Задание 9.4
let user = 'name';
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);
// Задание 10
let name = prompt('Введите ваше имя');
alert('Привет, ${name}!');