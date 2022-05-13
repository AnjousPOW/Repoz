// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом.
// 1. Функция вывода времени на экран.
// 2. Функция изменения времени на переданное количество 
// секунд.
// 3. Функция изменения времени на переданное количество 
// минут.
// 4. Функция изменения времени на переданное количество 
// часов.
// Учтите, что в последних 3-х функциях, при изменении одной 
// части времени, может измениться и другая. Например: если ко 
// времени «20:30:45» добавить 30 секунд, то должно получиться 
// «20:31:15», а не «20:30:75»    
const time = {
    h: 2,
    m: 23,
    s: 40,
    showTime() {
        console.log(`${this.h}:${this.m}:${this.s}`); 
    },
    changeSeconds(sec) {
        let hours = sec / 3600;
        this.h += Math.floor(hours);
        let minutes = (sec - Math.floor(hours) * 3600) / 60;
        this.m += Math.floor(minutes);
        this.s = sec - (Math.floor(hours) * 3600) - (Math.floor(minutes) * 60);

        if (this.s >= 60) {
            this.s %= 60;
            this.m += Math.floor(this.s / 60);
        }
        if (this.m >= 60) {
            this.m %= 60;
            this.h += Math.floor(this.m / 60);
        }

        return time;
    },
    changeMinutes(min) {
        let hours = min / 60;
        this.h += Math.floor(hours);
        this.m += min - (Math.floor(hours) * 60);
        
        if (this.m >= 60) {
            this.m %= 60;
            this.h += Math.floor(hours / 60);
        }

        return time;
    },
    changeHours(hour) {
        this.h = this.h + hour;

        return time;
    },
}

console.log(time);   // {h: 2, m: 23, s: 40, showTime: ƒ, changeSeconds: ƒ, …}

time.showTime();     // 2:23:40
console.log(time.changeSeconds(4500));       // {h: 3, m: 38, s: 0, showTime: ƒ, changeSeconds: ƒ, …}
console.log(time.changeSeconds(8050));       // {h: 5, m: 52, s: 10, showTime: ƒ, changeSeconds: ƒ, …}
console.log(time.changeSeconds(108050));     // {h: 35, m: 52, s: 50, showTime: ƒ, changeSeconds: ƒ, …}

console.log(time);       // {h: 35, m: 52, s: 50, showTime: ƒ, changeSeconds: ƒ, …}

console.log(time.changeMinutes(85));         // {h: 36, m: 17, s: 50, showTime: ƒ, changeSeconds: ƒ, …}
console.log(time.changeMinutes(12));         // {h: 36, m: 29, s: 50, showTime: ƒ, changeSeconds: ƒ, …}

console.log(time);       // {h: 36, m: 29, s: 50, showTime: ƒ, changeSeconds: ƒ, …}

console.log(time.changeHours(3));             // {h: 39, m: 29, s: 50, showTime: ƒ, changeSeconds: ƒ, …}
console.log(time.changeHours(4));             // {h: 43, m: 29, s: 50, showTime: ƒ, changeSeconds: ƒ, …}

console.log(time);       // {h: 43, m: 29, s: 50, showTime: ƒ, changeSeconds: ƒ, …}


const makeTime = (h = 0, m = 0, s = 0) => {
    (h < 9 && h >= 0) ? (h = `0${h}`) : h ;

    (m >= 0 && m < 9) ? (m = `${m}`) : (m >= 0 && m < 60) ? m : console.log('error.Enter 0 < m < 60');
    
    (s >= 0 && s < 9) ? (s = `${s}`) : (s >= 0 && s < 60) ? s : console.log('error.Enter 0 < s < 60');

    return {
        h, 
        m,
        s, 
    };
}

const time1 = makeTime(6, 12, 50);   
const time3 = makeTime(3, 47, 62);  // error. Enter 0 < s < 60
const time4 = makeTime(18, 38, 22);

console.log(time1);    // {h: "06", m: 12, s: 50}
console.log(time4);    // {h: 18, m: 38, s: 22}


const showTime = (time = {}) => {
    return console.log(`${time.h}:${time.m}:${time.s}`);
    
}  
showTime(time1);     // 06:12:50
showTime(time4);     // 18:38:22  
