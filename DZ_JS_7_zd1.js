// Создать массив «Список покупок». Каждый элемент массива 
// является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// 1. Вывод всего списка на экран таким образом, чтобы сначала 
// шли некупленные продукты, а потом – купленные.
// 2. Добавление покупки в список. Учтите, что при добавлении 
// покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, 
// а не добавлять новую. 
// 3. Покупка продукта. Функция принимает название продукта 
// и отмечает его как купленный

const shoppingList = [
    {
        name: 'bread',
        count: 2,
        isBought: true,
    },
    {
        name: 'butter',
        count: 1,
        isBought: true,
    },
    {
        name: 'milk',
        count: 3,
        isBought: false,
    },
    {
        name: 'egg',
        count: 6,
        isBought: false,
    },
    {
        name: 'tomato',
        count: 8,
        isBought: false,
    },
    {
        name: 'sauce',
        count: 1,
        isBought: true,
    },
]

const sortedShoppingList = [...shoppingList];

sortedShoppingList.sort( (a, b) => {

    if (a.isBought === true && b.isBought === false) {
        return 1;
    }
    if (a.isBought === false && b.isBought === true) {
        return -1;
    }
    return 0;
})

// b)
sortedShoppingList.sort( (a, b) => a.isBought - b.isBought);

console.log(sortedShoppingList);
let addPurchase = (name = '', count = 0, arr = []) => {
    let res = [...arr];
    if (res.find(item => item.name === name)) {
        for (let i = 0; i < res.length; i++) 
            if (name === res[i].name) {
                res[i].count += count;
            }
    } else {
        res.push({
                name,
                count,
                isBought: false,
        }) 
    }

    return res; 
}

const newList1 = [...shoppingList];
console.log(newList1); 
console.log(addPurchase('egg', 4, newList1)); 
console.log(addPurchase('banana', 2, newList1)); 
const addBuyingProduct = (arr = [], name = '') => {
    let res = [...arr];
    for (let i = 0; i < res.length; i++) {
        if (name === res[i].name) {
            res[i].isBought = true;
        }
    }

    return res;
}

const addPurchasedProduct = (arr = [], name = '') => {
    let res = [...arr];

    res.forEach(product => {
        if (name === product.name) {
            product.isBought = true;
        }        
    });
    return res;
}
                    
console.log(addPurchasedProduct(shoppingList, 'milk'));
console.log(addBuyingProduct(shoppingList, 'milk'));
console.log(addBuyingProduct(shoppingList, 'egg'));   
