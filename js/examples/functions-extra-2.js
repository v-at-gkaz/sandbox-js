console.log(`
Создайте второй объект описывающий город (первый возьмите из решения задачи №1).
Второй объект должен содержать только свойства: названия и численность.

1. Используя метод call() / apply() вызовите методы объекта первого города в 
контексте объекта второго города.

2. Используя метод bind(), изменить свойства объекта второго города на 
произвольные значения.`);

const city = {
    cityName: 'Gorod N',
    population: 1300000,
    getName: function(){
        return this.cityName;
    },
    getPupulation: function(){
        return this.population;
    },
    set: function(prop, value){
        this[prop]=value;
    }
};

const city2 = {
    cityName: 'Gorod X',
    population: 18000
};

console.log('1.:');
console.log(city.getName());
console.log(city.getName.call(city2));

console.log(city.getPupulation());
console.log(city.getPupulation.apply(city2));

console.log('2.:');
const changeName = city.set.bind(city2, 'cityName', 'Moscow');

changeName();

console.log('city2:', city2);