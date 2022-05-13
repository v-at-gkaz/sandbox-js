console.log(`Написать функцию которая будет принимать n-ое количество аргументов, в
качестве результата функция будет возвращать сумму всех четных элементов.
Для решения использовать цикл for (... of …).`);

function sumElements(...args){
    let sum=0;
    for(let arg of args){
        sum += (arg%2===0) ? arg : 0;
    }
    return sum;
}

console.log(`result: ${sumElements(1,3,5,8,12,4,7)}`);