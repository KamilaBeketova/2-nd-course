//Задание 1
const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];
people.sort((a,b) => a.age > b.age ? 1 : -1);
console.log(people.sort());

//Задание 2
function isPositive(n) {
  if (n > 0) {
    return n;
  }
  };
  function isMale(n) {
    if (n.gender === 'male') {
      return n;
    }
  }
  function filter(arr, ruleFunction) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
if (ruleFunction(arr[i]))
  output.push ((ruleFunction(arr[i])));
  }
  return output;
  }
  
  console.log(filter([3, -4, 1, 9, 'x'], isPositive));
  
  const person = [
     {name: 'Глеб', gender: 'male'},
     {name: 'Анна', gender: 'female'},
     {name: 'Олег', gender: 'male'},
     {name: 'Оксана', gender: 'female'}
  ];
  
  console.log(filter(person, isMale));

//Задание 3
let time = setInterval(() => {
  console.log(new Date());}, 3000);
setTimeout(() => {clearInterval(time);
   console.log('Прошло 30 секунд');}, 1000 * 30);

//Задание 4
function delayForSecond(callback) {
  setTimeout (callback , 1000);

}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

//Задание 5
function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) { 	cb(); }

  }, 1000)
}
function sayHi (name) {
  console.log(`Привет, ${name}!`);
}
delayForSecond((cb) => sayHi('Глеб'))