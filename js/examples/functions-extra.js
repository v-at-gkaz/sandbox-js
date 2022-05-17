console.log(`Создать объект который будет описывать любой населенный пункт (на ваш выбор).
Объект должен содержать свойства описывающие: название и численность. Так же
объект должен содержать два метода: первый должен возвращать название города, а
второй должен возвращать численность.

*Дополнительно, добавить метод, который будет устанавливать новое значение для
выбранного свойства из объекта описывающего город.`);

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

console.log(city.getName());
console.log(city.getPupulation());

city.set('population', 1400000);
console.log(city.getName());
console.log(city.getPupulation());

city.set('cityName', 'NN City');
console.log(city.getName());
console.log(city.getPupulation());