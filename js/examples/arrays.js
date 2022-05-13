/**
 * Написать функцию, которая будет принимать массив чисел, содержащий целые
положительные и целые отрицательные числа, в качестве результата возвращать
сумму четных положительных элементов переданного массива.
*/
function calcSumV1(numbers){
    let sum=0;
    for(let i=0; i < numbers.length; i++){
        const testEl = numbers[i];
        if(testEl > 0 && testEl % 2 === 0){
            sum += testEl;
        }
    }
    return sum;
}

const arrayOfNumbers = [-1, 34, -23, 56, 11, 78, 123, -345, 123, -45];
// const sumV1 = calcSumV1(arrayOfNumbers);
// console.log(`Сумма четных положительных элементов массива: ${sumV1}`);

function calcSumV2(numbers){
    let sum=0;
    numbers.forEach(function(testEl){
        if(testEl > 0 && testEl % 2 === 0){
            sum += testEl;
        }
    });
    return sum;
}

// const sumV2 = calcSumV2(arrayOfNumbers);
// console.log(`Сумма четных положительных элементов массива: ${sumV2}`);


function calcSumV3(numbers){
    return numbers.reduce((acc, testEl) => {
        if(testEl > 0 && testEl % 2 === 0){
            acc += testEl;
        }
        return acc;
    }, 0); 
}


const sumV3 = calcSumV3(arrayOfNumbers);
console.log(`Сумма четных положительных элементов массива: ${sumV3}`);