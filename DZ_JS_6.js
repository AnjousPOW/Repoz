# Repoz
// Задание 1
// Создать объект, описывающий автомобиль (производитель, 
// модель, год выпуска, средняя скорость), и следующие функции 
// для работы с этим объектом.
// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
const car = {
    manufacturer: 'Wolwo',
    model: 'Mundel',
    year: 2012,
    averageSpeed: 63,
    showInfo() {
        console.log(`Производитель: ${this.manufacturer},\n модель: ${this.model},\n Cредняя скорость: ${this.averageSpeed} `);
    },
    getTravelTime(s = 0, restInterval = 1) {
        if (isNaN(s) || isNaN(restInterval)) {
            return 'Error';
        }
        let travelTime = s / this.averageSpeed;
        let numberOfStops = Math.floor(travelTime / 4);
        travelTime += numberOfStops * restInterval; 
        return travelTime;
    },
}

car.showInfo();
console.log(car.getTravelTime());   
