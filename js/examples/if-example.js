const segment1 = 0;
const segment2 = 5;
const segment3 = 4;

let tmp = segment1; // tmp === 0

console.log('Подсчёт наибольшего отрезка из трёх');

if(segment2 > tmp) {
    tmp = segment2; // tmp === 5
}

if(segment3 > tmp){
    tmp = segment3;  // tmp === 5
}

console.log('Длина наибольшего сегмента = ', tmp);