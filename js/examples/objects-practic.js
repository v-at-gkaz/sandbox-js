console.log(`
Создайте объект и скопируйте данный объект с помощью: Object.assign() и
spread оператора. Изменить любое свойство в копии объекта, и проверить не
изменился ли исходный`);


const user = {
    name: 'Ivan',
    age: 45,
    sex: 'male'
};

// const user2 = Object.assign({}, user);          // v1 
const user2 = {...user};                           // v2
// const user2 = JSON.parse(JSON.stringify(user)); // v3

user.age=56;
console.log(`user: `, user);
console.log(`user2: `, user2);