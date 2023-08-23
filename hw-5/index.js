//Задание 1
function min(a, b) {
   if (a < b) {
    return a;
   } else {
    return b;
   } 
}
console.log(min(8, 4)); 
console.log(min(6, 6));

//Задание 2
function number(n) {
  if (n % 2 == 0) {
    return ('Число четное');
  } else {
    return ('Число нечетное');
  }  
}
n = prompt('Введите любое число');
console.log(number(n));

//Задание 3.1
function square(c) {
    c**2; 
}
c = prompt('Введите любое число');
console.log(square(c));

//Задание 3.2
function square(c) {
    return c**2; 
 }
 c = prompt('Введите любое число');
 console.log(square(c));

 //Задание 4
 let age = prompt('Сколько вам лет');
 
   if (age <= 12) {
    function printMessage() {
        console.log ('Привет, друг!');
    }    
   } else {
    function printMessage() {
        console.log ('Добро пожаловать!');
    }  
 }
 if (age < 0) {
    function printMessage() {
     console.log ('Вы ввели неверное значение');
    } 
 }
 printMessage();

 //Задание 5
let mult=(d=prompt('Введите первое число'),f=prompt('Введите второе число'))=> {
if(isNaN(d) || isNaN(f)){
    return alert('Одно или оба значения не является числом');
} else{
    return alert (d*f);
}
}
mult();

//Задание 6
let checkNumber = (userNumber=prompt('Введите число')) =>{
    if(isNaN(userNumber)){
        return alert('Переданный параметр не является числом');
    }else{
        return alert(`Ваше число в кубе является ${userNumber**3}`);
    }
}
checkNumber();

//Задание 7
function getArea() {
return Math.PI * this.radius ** 2;
}
function getPerimetr() {
    return 2 * Math.Pi * this.radius;
}

const circle1 = {
    radius: 10,
    getCircleArea: getArea,
    getCirclePerimetr: getPerimetr,
};
const circle2 = {
    radius: 5,
    getCircleArea: getArea,
    getCirclePerimetr: getPerimetr,
};
 console.log(circle1.getCircleArea().toFixed(2));
 console.log(circle1.getCirclePerimetr().toFixed(2));
 console.log(circle2.getCircleArea().toFixed(2));
 console.log(circle2.getCirclePerimetr().toFixed(2));

//Задание 8 return 2 * Math.PI * this.radius;