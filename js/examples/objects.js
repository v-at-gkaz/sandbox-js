console.log('Реализовать функцию которая будет принимать числовой диапазон в качестве параметров [min, max] и будет возвращать случайное целое число из данного диапазона');

function getRandomValue(min, max){

    console.log(`Random number between ${min} and ${max}:`)

    let iterCount = max-min; // 0 - iterCount
    const randomValue = Math.floor(((Math.random())*(iterCount+1)));
    // console.log('iterCount:', iterCount);
    for(let num=min; num <= max; num++){
        if(iterCount===randomValue){
            return num;
        }
        iterCount--;
    }
    
}

console.log('Result:', getRandomValue(30,90));


console.log('Реализовать функцию которая будет определять, в каком регистре записан n элемент переданной строки: если в верхнем то вернуть true, в противном случае вернуть false.');

function isLetterInUpperCase(testString, letterIdx){
    if(letterIdx > testString.length || letterIdx < 0){
        throw new Error('Error find letter');
    }
    return testString[letterIdx] >= (testString[letterIdx]).toLowerCase();
}

const strForTest = "qWeRtYuI";
const testIdx = 30;

console.log(`Test letter with idx ${testIdx} in str "${strForTest}":`, isLetterInUpperCase(strForTest, testIdx));


// Домашнее задание!
// console.log('Реализовать функцию которая заменяет в строке str, все вхождения подстроки ﬁnd, на подстроку replace');