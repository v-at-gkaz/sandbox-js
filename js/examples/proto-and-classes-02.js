console.log('Функции конструкторы');
console.log('ex. 01 (НЕ функция-конструктор):');
// ex. 01:

function createUser(name, age){
    const res = {};
    res.name = name;
    res.age = age;
    return res;
}

let firstUser = createUser('Ivan', 23);
console.log(firstUser);


console.log('ex. 02 (функция-конструктор):');
// ex. 02:

function CreateUser(name, age){
    this.name = name;
    this.age = age;
}

let firstUser_ = new CreateUser('Ivan', 23);

let secondUser_ = new CreateUser('Alex', 18);

console.log(firstUser_);

console.log(secondUser_);

console.log(' --- ');
console.log('ex. 03 (метод вне prototype):');
// ex. 03:
function CreateUser(name, age){
    this.name = name;
    this.age = age;
    this.sayHi = function(){
        console.log(`My name is: ${this.name}`);
    }
}

let firstUser__ = new CreateUser('Ivan', 23);
let secondUser__ = new CreateUser('Alex', 18);
console.log(firstUser__.__proto__);
console.log(secondUser__);


console.log('ex. 04 (метод через prototype):');

function CreateUser_(name, age){
    this.name = name;
    this.age = age;
}

CreateUser_.prototype.sayHi = function(){
    console.log(`My name is: ${this.name}`);
};

let firstUser___ = new CreateUser_('Sergey', 45);
let secondUser___ = new CreateUser_('Lena', 28);
console.log(firstUser___.__proto__);
console.log(secondUser___);
