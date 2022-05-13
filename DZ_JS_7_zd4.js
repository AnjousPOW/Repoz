// Задание 4
// Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и 
// названия факультета, для которого она предназначена. 
// Написать несколько функций для работы с ним.
// 1. Вывод на экран всех аудиторий. 
// 2. Вывод на экран аудиторий для указанного факультета.
// 3. Вывод на экран только тех аудиторий, которые подходят для 
// переданной группы. Объект-группа состоит из названия, 
// количества студентов и названия факультета. 
// 4. Функция сортировки аудиторий по количеству мест.
// 5. Функция сортировки аудиторий по названию (по алфавиту).
const classRoom = [
    { 
        name: "105", 
        places: "24", 
        faculty: "Software" 
    },
    { 
        name: "112", 
        places: "12", 
        faculty: "Cybernetics" 
    },
    { 
        name: "113", 
        places: "20", 
        faculty: "Techical Cybernetics" 
    },
    { 
        name: "118", 
        places: "14", 
        faculty: "Engineering" 
    },
    { 
        name: "117", 
        places: "25", 
        faculty: "Economic cybernetics" 
    },
    { 
        name: "115", 
        places: "20", 
        faculty: "Software" 
    },
    { 
        name: "100", 
        places: "15", 
        faculty: "Languages" 
    },
    { 
        name: "110", 
        places: "10", 
        faculty: "Techical Cybernetics" 
    },
    { 
        name: "120", 
        places: "28", 
        faculty: "Software" },
];

const group = {
    name: "SW-2019",
    count: "25",
    faculty: "Software",
    };
const showClassRoom = (arr = []) => {
    let classRooms = [];
    for (let i of arr) {
        classRooms.push(i.name);
    }
    return `All rooms: ${classRooms.join('; ')}.`;
}

console.log(showClassRoom(classRoom));  
const showFacultyRooms = (arr = [], faculty = '') => {
    let facultyRooms = [];

    for (const i of arr) {
        if (i.faculty.toLowerCase() === faculty.toLowerCase()) {
            facultyRooms.push(i.name);
        }
    }
    return `All rooms for "${faculty}" faculty: ${facultyRooms.join('; ')}.`;
}

console.log(showFacultyRooms(classRoom, 'Software'));  // All rooms for "Software" faculty: 105; 115; 120.

const showGroupRooms = (arr = [], group = {}) => {
    let groupRooms = [];

    for (const i of arr) {
        if (i.places >= group.count) {
            groupRooms.push(i.name);
        }
    }
    return `All rooms for "${group.name}": ${groupRooms.join('; ')}`;  
}

console.log(showGroupRooms(classRoom, group)); 
const arrSortPlace = (arr = []) => {
    let arr1 = [...arr];
    arr1.sort((a, b) => a.places - b.places);
    return arr1;
};
const arrSortName = (arr = []) => {
    let arr2 = [...arr];
    arr2.sort( (a, b) => a.name - b.name );
    return arr2;
};
                      
console.log(arrSortName(classRoom));
console.log(arrSortPlace(classRoom));
