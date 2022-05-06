console.log('objects-base');

// вариант 1
const myFavoriteFilm = {
    name: 'House M.D.',
    created: '2004',
    director: 'David Shor',
    country: 'USA',
    // printName: function(){       // см. вариант 3
    //     console.log(this.name);
    // }
};
console.log('Вывод объекта вариант 1: ', myFavoriteFilm);

// вариант 2. Развитие задачи: добавить свойство, содержащее значение выручки в прокате
myFavoriteFilm.revenue = '1000000$';

console.log('Вывод объекта вариант 2: ', JSON.stringify(myFavoriteFilm));


// вариант 3. Развитие задачи: Добавить метод, выводящий название фильма в консоль

myFavoriteFilm.printName = function(){
    console.log(this.name);
}

console.log('Вывод объекта вариант 3: ', JSON.stringify(myFavoriteFilm));
console.log('Проверка работы метода printName у объекта myFavoriteFilm:');
myFavoriteFilm.printName();


// вариант 4. Развитие задачи: Удалить свойство с годом выпуска

delete myFavoriteFilm.created;
console.log('Вывод объекта вариант 4: ', myFavoriteFilm);

// вывод объекта в консоль

console.log(myFavoriteFilm);