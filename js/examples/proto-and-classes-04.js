console.log('Получение объектов посредством функций-конструкторов и порсдетсвом классов');

function MyClass_1(x){
    this.q = 'qwerty';
    this.x = x;
}

MyClass_1.prototype.method1 = function(y){
    this.y = y;
}

class MyClass_2 {

    q='qwerty';

    constructor(x){
        this.x = x;
    }

    method1(y){
        this.y = y;
    }

}

const o1 = new MyClass_1(1);
o1.method1(11);

const o2 = new MyClass_2(2);
o2.method1(22);

console.log('o1', o1);

console.log('o2', o2);