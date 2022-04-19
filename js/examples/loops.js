console.log('Loops');

// ex 1
// while(!true){
//     console.log('repeat me');
// }


// ex 2
// do {
//     console.log('test');
// } while(false);

// ex 3
// let i;
// console.log('i (before loop)=', i);
// for(let i=0;i<=3;i+=3){
//     console.log('now i=', i);
// }
// console.log('i(after loop)=', i);

// ex 4

// let q = 0;
// for(;q < 6;){
//     console.log('repeat me', q);
//     q+=2;
// }

// let q1 = 0;
// while(q1 < 8){
//     console.log('repeat me (while)', q1);
//     q1+=3;
// }

// ex 5

// while(true){
//     console.log('repeat me');
//     break;
// }
// console.log('Ура, нет бесконечного цикла!');

// for(let j=0; j<=20;j++){

//     if(j%2 === 1){
//         continue;
//     }

//     console.log('repeat me (for)', j);
// }
// console.log('Ура, нет бесконечного цикла for!');

// Practic

console.log('Вывести в консоль заданную строку N раз');

const someString = 'Hello, loops!';
const counter = 2;

for(let n=0;n<counter;n++){
    console.log(`Attempt ${n+1}`, someString);
}


console.log('Ежедневно количество доступных автомобилей в салоне ' +
'уменьшается в два раза. Выяснить, на какой день продаж, количество доступных ' +
'к покупке авто станет меньше M, если известно, что в первый день продаж всего ' + 
'было N автомобилей.');

let totalCount=100;
const testM=2;

console.log(`Всего автомобилей: ${totalCount}. Ищем день, в который автомобилей ` 
+ `станет меньше ${testM}`);

let currentDay = 1;
while(totalCount > testM){
    totalCount = Math.floor(totalCount/2);
    currentDay++;
}

currentDay--;

console.log(`На ${currentDay} день продаж доступных машин для покупке: ${testM}`);


//console.log('Проанализировав временной промежуток начиная с 1800 и до 2020 года найти и вывести в консоль:');

//console.log('-Год первого полета человека в космос и количество итераций которое потребовалось для поиска.');

//console.log('-Количество високосных годов принадлежащих данному отрезку и количество итераций которое потребовалось для поиска.');