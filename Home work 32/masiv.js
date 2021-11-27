// Мінімум

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
// Створення списку (не) придбаних продуктів.

let soppingList = [
    { name: "Apple", count: 3, bought: true, price: 9.99 },
    { name: "Orange", count: 5, bought: false, price: 5.99 },
    { name: "Strawberry", count: 7, bought: true, price: 18.50 },
    { name: "Potato", count: 9, bought: false, price: 25.00 },
    { name: "Blackberry", count: 5, bought: true, price: 18.00 },
    { name: "Coconut", count: 3, bought: false, price: 185.00 },

];
console.log(soppingList);
let res = soppingList.slice();
let compare = (a, b) => {
    if (a.bought === false && b.bought === true) return -1;
    if (a.bought === true && b.bought === false) return 1;
    return 0;
};

console.log(res.sort(compare));

let buyIt = name => {
    let b = {};
    b.name = name;
    b.count = 2;
    b.bought = true;
    for (let i in res) {
        let nname = res[i].name;
        if (nname.toLowerCase() == name.toLowerCase()) {
            res[i].bought = true;
            break;
        } else if (nname.toLowerCase() != name.toLowerCase()) {
            res.unshift(b);
            break;
        }
    }
};
buyIt("Bread");
res.sort(compare);

// Норма

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість 
// в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, 
// якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
// ------------------task2--------------

// let newLength = soppingList.push({ name: "Nuts", count: 5, price: 188.00 });
// soppingList.forEach(function (name, count, price) {
//     console.log(name, count, price);
// });
// let removedItem = soppingList.splice(4);

//   Максимум

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
// Підрахунок суми всіх (не) придбаних продуктів.
// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

    // let result = soppingList.reduce((count, price) => ((soppingList.count * soppingList.price))+((soppingList.count * soppingList.price)),0);

    // console.log(result);


function sortByPrice(soppingList) {
    soppingList.sort((a, b) => a.price < b.price ? 1 : -1);
}

sortByPrice(soppingList);

console.log(soppingList[0].name);
console.log(soppingList[1].name);
console.log(soppingList[2].name);
console.log(soppingList[3].name);
console.log(soppingList[4].name);
console.log(soppingList[5].name); 