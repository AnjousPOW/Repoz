const receipt = [
    {
        name: 'bread',
        count: 2,
        price: 8,
    },
    {
        name: 'butter',
        count: 1,
        price: 30,
    },
    {
        name: 'milk',
        count: 3,
        price: 23,
    },
    {
        name: 'egg',
        count: 6,
        price: 2,
    },
    {
        name: 'tomato',
        count: 8,
        price: 26,
    },
    {
        name: 'sauce',
        count: 1,
        price: 18,
    },
];

// 2.1, 2.2  Распечатка чека на экран; Подсчет общей суммы покупки;
const showReceipt = (arr = []) => {
    let res = [...arr];

    res.forEach(product => {
    let sum = product.count * product.price;
    console.log(`${product.count} x ${product.price}\n ${product.name}.....Sum: ${sum}`);
    
    });

    let total = res.map((product) => product.count * product.price )  
                    .reduce((sum, current) => sum + current, 0);

    console.log(`Total: ${total}`);

    return res;
}

showReceipt(receipt); 


// 2.3 Получение самой дорогой покупки в чеке;
const mostExpensivePurchase = (arr = []) => {
    let res = [...arr];
    let maxCost = 0;
    for (const product of res) {
        let cost = product.price * product.count
        if ( cost > maxCost) {
            maxCost = cost;
        }
    }
    return maxCost;
}

console.log(mostExpensivePurchase(receipt));  // 208


// 2.4 Подсчет средней стоимости одного товара в чеке.
const averageCost = (arr = []) => {
    
    let res = [...arr];
    let sum = 0;

    for (const product of res) {
        sum += product.price * product.count;
    }

    return (sum / res.length).toFixed(2);
}

console.log(averageCost(receipt));   // 58.83
