console.log(`
Реализовать функцию конструктор для создания открыток. Функция должна
создавать объект открытки со свойствами from, to и метод show().

Метод должен возвращать строку в которой будут указаны значения свойств
from и to.
`);

function Card(from, to){
    this.from = from;
    this.to = to;
    // неоптимальный вариант!
    // this.show = function(){
    //     return `${this.from} ${this.to}`;
    //     //return [this.from, this.to].join(' ');
    // }
}

// более оптимальный вариант (чем через this.show выше...)
Card.prototype.show = function(){
        //return `${this.from} ${this.to}`;
        return [this.from, this.to].join(' ');
}

const card1 = new Card('Vasya', 'Masha');

console.log(card1.show());


console.log(' --- ');
console.log(`Добавить в prototype создаваемого объекта метод заменяющий 
текущее значение свойства from на новое переданное значение.`);

Card.prototype.replaceFromValue = function(newValue){
    this.from = newValue;
}

card1.replaceFromValue('Sasha');

console.log(card1.show());