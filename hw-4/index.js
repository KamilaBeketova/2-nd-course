//Задание 1
let i=0;
while (i<2) {
    console.log('Привет!');
    i++
}
//Задание 2
let a=1;
do{
    console.log (a);
    a++;
} while (a<6);
//Задание 3
let b=7;
do{
    console.log (b);
    b++;
} while (b<23);
//Задание 4
let object = {
'Коля': 200,
'Вася': 300,
'Петя': 400,};
for ( let key in object) {
    console.log([key]+ '- зарпалата'+ object[key]+ 'долларов');  
}
//Задание 5
for (let n=1000, num=1; n>50; num++){
n/=2;
console.log(num,n);
}
//Задание 6
let c = Number(prompt(`число ближайшей пятницы?`));
let friday = c;
do{
console.log(`сегодня пятница ${friday} -е число. Необходимо подготовить отчет.`);
friday= friday+7;
friday++;
}
while(friday <=31);