console.log('Наследование через extends');
class Parent {
    constructor(name){
        this.name = name;
    };
    sayHi(){
        console.log(`My name is: ${this.name}`);
    }
}

class Child extends Parent {
    constructor(name) {
        super(name); // <-- обязательно !!!
        console.log('Я - конструктор из Child');
    }

    sayHi(){
        console.log('Я - sayHi из Child');
        //super.sayHi(); // <-- опционально
    }
}

const ch1 = new Child('Ivan');
ch1.sayHi();
console.log('ch1', ch1);


//console.log('Наследование через prototype');
function Parent_(name) {
    this.name = name;
}

Parent_.prototype.sayHi = function(){
    console.log(`My name is: ${this.name}`);
}

function Child_(name){
    this.name = name;
};

Child_.prototype.__proto__ = Parent_.prototype; // Важно!

const ch2 = new Child_('Ivan_');
console.log('ch2', ch2);