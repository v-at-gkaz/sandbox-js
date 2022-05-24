const user1 = {
    // __proto__: null,
    name: 'Ivan'
};

user1.name = 'Ivan 1234';

console.log('user1', user1.name);


class User {

    _name = 'Sergey';
    
    get name() {
        return this._name + '<--- USER';
    }

    set name(value) {
        this._name = value;
    }
}

const user2 = new User();

console.log('user2', user2.name);

user2.name = 'Sergey 1234';

console.log('user2', user2.name);

user2.name = 'Sergey from setter';

console.log('user2', user2.name);

