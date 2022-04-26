console.log('Functions Base');

// Написать функцию, которая будет принимать имя пользователя, и выводить
// строку с приветствием данного пользователя, если имени пользователя нет,
// выводить приветствие гостя.

function sayHi(username){
    console.log(`Привет, ${username ? username : 'Гость'}`);
}

/*
sayHi();
sayHi('Ivan');
sayHi('Ivan2');
sayHi('Ivan4');
*/

// Написать функцию, которая в качестве первого параметра будет принимать
// численное значение, а в качестве второго параметра будет принимать степень, в
// которую надо возвести первый аргумент. По умолчанию, второй аргумент
// единица.

function power(value, pow = 1){

    if(!(typeof value === 'number' && typeof pow === 'number')) {
        throw new Error('value and pow nust be a numbers');
    }
    const result = Math.pow(value, pow);
    return result;
}

try {
    console.log(power(12, 12));
    console.log('Success case');
} catch(myErr){
   // myErr <---
   console.log('Error case:', myErr);
} finally {
    console.log('Finally case');
}

console.log('test?');

// console.log(power(2, 2));
// console.log(power(4, 8));
// console.log(power('4', 'a8'));
