const t = 35;

console.log("Рекомендации в зависимости от температуры.");
console.log(`Сейчас на улице: ${t} градусов Цельсия`);

if(t < -30){
    console.log('Оставайтесь дома!');
} else if(t <= -10){
    console.log('Сегодня холодно');
} else if(t <= 5){
    console.log('Не холодно');
} else if(t <= 15){
    console.log('Тепло');
} else if(t <= 25){
    console.log('Очень тепло');
} else if(t < 35){
    console.log('Жарко');
} else {
    console.log('Пекло!');
}