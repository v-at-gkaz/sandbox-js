function example(){
    let closure = 100;

    return function(b, forward=true){

        if(forward){
            closure += b;
        } else {
            closure -= b;
        }
        return closure;
    }
}

const closureExample = example();

console.log(closureExample(100));
console.log(closureExample(100));
console.log(closureExample(100, false));
console.log(closureExample(100, false));

console.log(`
Используя замыкание написать функцию которая будет вычислять объём
параллелепипеда с высотой 10.
`);

function calcVol(){
    const h = 10;
    return function(x, y){
        return x*y*h;
    }
}

// ?
// console.log(calcVol()(3,4));

const calcVolForH10 = calcVol();
console.log(calcVolForH10(3,4));


console.log(`
Используя каррирование написать функцию которая будет 
вычислять объём параллелепипеда.
`);

function calcVolCarry(h){
    return function(x){
        return function(y){
            // h, x, y
            return h*x*y;
        }
    }
}

console.log(calcVolCarry(100)(30)(45));