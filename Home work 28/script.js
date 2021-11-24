
// -----------------------task3-------------------
// let number = prompt( 'Введіть тризначне число: ');
// number = number + '';
// if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2])
// {
//     alert('Знайдено співпадіння цифр');
// }
// else
//     alert('Співпадінь незнайдено');

// ---------------task4-----------------------
// let year = prompt('Введіть рік');
//     if (year%4 == 0 && year %100 !== 0)
//     {
//         alert('Високосний рік');
//     }
//     else
//         alert('Не високосний рік');


// -------------------task6-----------------------
// let amount = prompt('Введіть значення USD:');
//     let currency = prompt('EUR = 1, UAH = 2, AZN = 3');
//     switch(currency) {
//         case '1':
//             alert(amount*0.87 + 'EUR');
//             break;
//         case '2':
//             alert(amount*26.10 + 'UAH');
//             break;
//         case '3':
//             alert(amount*1.70 + 'AZN');
//             break;
//     }


// Домашнє завдання

// Мінімум

// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
// let a = 0.1;
// let b = 0.2;
// let sum = 0.1 + 0.2;
// alert( +sum.toFixed(2) ); 


// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
// let num1 = "8";
// let num2 = 2;
// let num = Number(num1); // становится числом 
// alert(num+num2); 

// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
// const flashDriveSize = prompt('Введіть обсяг флешки в Гб', );
// alert(`Флешка ${flashDriveSize} розміром може вміщувати ${Math.floor(flashDriveSize*1024 / 820)} 820мб файлів`);


// Норма

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
// const cash = prompt('Введіть кількість грошей');
// const price = prompt('Введіть вартість шоколаду');
// alert(`Для ${cash} ви можете купити ${Math.floor(cash / price)} шоколадок і ${cash - Math.floor(cash / price) * price} ваша решта`);

// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор% (залишок від ділення).
// let a = prompt("Enter a value");
// let z = a;
// let reverse = 0;
// while(z > 0)
// {
//     let digit = z % 10;
//     reverse = (reverse * 10) + digit;
//     z = parseInt(z / 10);
// }
// alert("reverse = " + reverse);
// Максимум

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
// const sum = +prompt('Enter deposit sum', 0);
// const depositIncrease = 0.05;
// const depositTerm = 2;
// const percentForMonth = depositIncrease / 12;
// let sumIncrease = 0;
// if (isNaN(sum) || sum < 0){
//   alert('Error');
//  } else {
//   let result = percentForMonth * depositTerm * sum;
//   alert(`Your sum increase for two month is ${result}`);
// }
// Що повернуть вираження:
//  2 && 0 && 3 -0

//  2 || 0 || 3 -2 

// 2 && 0 || 3 -3


