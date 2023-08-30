//Задание 1
const string = 'js';
console.log(string.toUpperCase());

//Задание 2
const products = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const search = 'ко';
products.forEach((product) => {
	
	if (product.toLowerCase().includes(search.toLowerCase())) {
		console.log(product);
	}
});

//Задание 3
let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

//Задание 4
function minmax(...nums){
  return[Math.min(...nums), Math.max(...nums)];
}
console.log(minmax(52,53,77,21,32));

//Задание 5
function getRandomInt(minValue, maxValue) {
  return Math.random() * maxValue;
  
  }
  console.log(getRandomInt(0, 10));
  
//Задание 6
function getRandomArrNumbers(num){
  const arrLength = Math.floor(num/2);
  const result = [];
  for(let i = 0; i<arrLength; i++){
    const randomNum = Math.floor(Math.random()*(num+1));
    result.push(randomNum);
  }
  return result;
}
console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

//Задание 7

function randomNums(min,max){
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
console.log(randomNums(5,10));

//Задание 8
let currentDate = new Date();
console.log(currentDate);

//Задание 9
let currDate = new Date();
currDate.setDate(currDate.getDate()+73);
console.log(currDate);

//Зaдание 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date();
let fullDate = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() +", " + days[myDate.getDay()];

console.log(fullDate); 
let myDate1 = new Date(); 
let hour = myDate.getHours(); 
let minute = myDate.getMinutes(); 
let second = myDate.getSeconds(); 

if (minute < 10) { 
	minute = "0" + minute; 
}
if (second < 10) { 
	second = "0" + second; 
}
console.log("Текущее время: " + hour + ":" + minute + ":" + second);


//Зaдание 11

