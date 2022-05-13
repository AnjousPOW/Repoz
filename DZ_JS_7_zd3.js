// Задание 3
// Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 
// Написать функцию, которая принимает массив стилей и 
// текст, и выводит этот текст с помощью document.write() в тегах 
// <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве. 
const styles = [
    { 
        name: "text-align", 
        value: "center" 
    },
    {
        name: "text-transform", 
        value: "capitalize" 
    },
    { 
        name: "text-overflow", 
        value: "ellipsis" 
    },
    { 
        name: "font-size", 
        value: "1rem" 
    },
    { 
        name: "color", 
        value: "#555555" 
    },
    { 
        name: "letter-spacing", 
        value: "2px" 
    },
    { 
        name: "font-weight", 
        value: "300" 
    },
    { 
        name: "border", 
        value: "1px solid red" 
    },
    { 
        name: "font-style", 
        value: "oblique" 
    },
    { 
        name: "font-stretch", 
        value: "extra-expanded" 
    }
];
  
  const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Reprehenderit, rem sit eaque temporibus sint explicabo. 
    Quod placeat quos inventore quas magni architecto, cupiditate assumenda enim, 
    eum exercitationem ex sunt iste?`;
  
    let styleText = (arr = [], text = '') => {
        document.write('<p style = "');

        for (let i of arr) {
            document.write(`${i.name}: ${i.value}; `);
        }

        document.write('">' + text + "</p>");
    };
  
styleText(styles, text);
