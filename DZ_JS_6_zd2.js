// Задание 2
// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби.
const fraction1 = {
    numerator : 1,
    denominator : 5,
}

const showFraction = () => console.log(`${fraction1.numerator}/${fraction1.denominator}`); 
console.log(showFraction(fraction1));                 
function makeFraction(numerator, denominator) {
    return {
        numerator, 
        denominator, 
    };
}

const fraction2 = makeFraction(2, 9);
console.log(fraction2);  


// общий знаменатель:
const commonDenominator = (fraction1 = {}, fraction2 = {}) => {
    return fraction1.denominator * fraction2.denominator;
}


// сложение дробей
const sumOfFractions = (fraction1 = {}, fraction2 = {}) => {

    return `${fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator} / ${commonDenominator(fraction1, fraction2)}`;
}

console.log(sumOfFractions(fraction1, fraction2));      
console.log(sumOfFractions({numerator: 3, denominator: 5}, {numerator: 4, denominator: 5}));   


// вычитание дробей
const subtractionOfFractions = (fraction1 = {}, fraction2 = {}) => {

    return `${fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator} / ${commonDenominator(fraction1, fraction2)}`;
}

console.log(subtractionOfFractions(fraction1, fraction2));      
console.log(subtractionOfFractions({numerator: 7, denominator: 9}, {numerator: 2, denominator: 8}));   

// умножение дробей
const multiplicationOfFrations = (fraction1 = {}, fraction2 = {}) => {
    return `${fraction1.numerator * fraction2.numerator}/${fraction1.denominator * fraction2.denominator}`;
}

console.log(multiplicationOfFrations(fraction1, fraction2));

// деление дробей
const divisionOfFrations = (fraction1 = {}, fraction2 = {}) => {
    return `${fraction1.numerator * fraction2.denominator}/${fraction1.denominator * fraction2.numerator}`;
}

console.log(divisionOfFrations(fraction1, fraction2));  

// сокращение дробей
const fractionReduction = (fraction = {}, coefficient) => {
    return `${fraction.numerator / coefficient}/${fraction.denominator / coefficient}`
}

const fraction = makeFraction(3, 9);
console.log(fractionReduction(fraction, 3));
