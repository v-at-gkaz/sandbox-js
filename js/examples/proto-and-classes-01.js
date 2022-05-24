console.log('ex. 01:');
// ex. 01:
let user = {
    name: "Ivan"
};
let admin = {
    __proto__: user
    // name: "Masha"
};
console.log(admin.name);


// ex. 02:
console.log('ex. 02:');
let animal = {
    jumps: 'Прыжок!'
};

let rabbit = {
    __proto__: animal,
    jumps: "Заяц (Кролик?) прыгнул!"
}

console.log(rabbit.jumps);

delete rabbit.jumps;

console.log(rabbit.jumps);

delete animal.jumps;

console.log(rabbit.jumps);