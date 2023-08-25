//Задание 1
const numberArr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numberArr.length; i++) {
    if(numberArr[i] == 10) break;
    console.log(numberArr[i]);   
}
//Задание 2
const numbs = [1, 5, 4, 10, 0, 3];
console.log(numbs.indexOf(4));

//Зaдание 3
const array = [1, 3, 5, 10, 20];
console.log(array.join (' '));

//Зaдание 4
let multArray = [];
for (let i = 0; i < 3; i++) {
  multArray[i] = [];
  for (let j = 0; j < 3; j++) {
    multArray[i][j] = 1;
  };
};
console.log(multArray);

//Зaдание 5
const product = [1,1,1];
product.push (2,2,2);
console.log(product);

//Зaдание 6
const sortArr = [9, 8, 7, 'a', 6, 5];
sortArr.sort();
console.log(sortArr);
sortArr.pop();
console.log(sortArr);

//Зaдание 7
let guessArr = [9, 8, 7, 6, 5];
const userAnswer = prompt('Угадай число');
if (userAnswer>=5 && userAnswer<=9) {
    alert('Угадал');
} else {
   alert('Не угадал'); 
}
//Зaдание 8
const arrayA = ['a','b','c','d','e','f'];
arrayA.reverse ();
console.log(arrayA);

//Зaдание 9
 const arrayB = [
 [1, 2, 3,],
 [4, 5, 6]
];
let resultArr = arrayB[0].concat(arrayB[1]);
 console.log(resultArr);
 
//Зaдание 10

let arrC = [1,2,3,4,5];
for (let i = 0; i < arrC.length - 1; i++)
{
console.log ((arrC[i] +
arrC[i + 1]));
};
//Зaдание 11
const square = [2,4,6,9,8];
let result = square.map(item =>(item**2));
console.log(result);

//Зaдание 12
const arrD = ["слово", "", "слот", "длинное предложение", "буква"];
const getLengthWords = function (arr) {
let lengthArr = arr.map (el =>
el.length);
return lengthArr;
};
console.log(getLengthWords(arrD));

//Зaдание 13
function filterPositive(array) {
    let negativeArr = [];
    for (const value of array) {
    if (value < 0)
    negativeArr.push (value);
    };
    return negativeArr;
    }
    console.log(filterPositive([-1, 0, 5, -10, 56]));
    console. log(filterPositive([-25, 25, 0, -1000, -2]));
//Зaдание 14
//Зaдание 15