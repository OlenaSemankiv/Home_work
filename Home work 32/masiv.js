// Мінімум

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
// Створення списку (не) придбаних продуктів.

let soppingList = [
    { name: "Apple", count: 3, bought: true },
    { name: "Orange", count: 5, bought: false },
    { name: "Strawberry", count: 7, bought: true },
    { name: "Potato", count: 9, bought: false },
    { name: "Blackberry", count: 5, bought: true },
    { name: "Coconut", count: 3, bought: false },

];
console.log(soppingList);
let res = soppingList.slice();
let compare = (a, b) => {
    if (a.bought === false && b.bought === true) return -1;
    if (a.bought === true && b.bought === false) return 1;
    return 0;
};

console.log(res.sort(compare));

let addPurchase = (name, count) => {
    let b = {};
    b.name = name;
    b.count = count;
    b.bought = false;
    for (let i in res) {
        let nname = res[i].name;
        if (nname.toLowerCase() == name.toLowerCase()) {
            res[i].count += count;
            res[i].bought = false;
            break;
        } else if (nname.toLowerCase() != name.toLowerCase()) {
            res.unshift(b);
            break;
        }
    }
    return res;
};

addPurchase("bread", 2);

let buyIt = name => {
    let b = {};
    b.name = name;
    b.count = 1;
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
buyIt("Plates");
res.sort(compare);

// Норма

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість 
// в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, 
// якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
// ------------------task2--------------
let list = [
    { name: "Apple", count: 5, price: 9.99 },
    { name: "Orange", count: 3, price: 5.99 },
    { name: "Coconut", count: 2, price: 15.99 },
    { name: "Bread", count: 1, price: 10.0 },
    { name: "Blackberry", count: 5, price: 18.0 },
];

