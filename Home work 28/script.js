// ------------------task1-----------------
// let age = prompt('Скільки вам років?');
// if (age >= 0 && age <= 2) {
//     console.log('Дитина');
// }
// else if (age >= 12 && age <=18) {
//     console.log('Підліток');
// }
// else if (age >= 18 && age <= 60) {
//     console.log('Дорослий');
// }
// else if (age > 60 ) {
//     console.log('Пенсіонер');
// }

// -----------------------task2----------------
// let number = prompt('Введіть число від 0 до 9');
// switch(number) {
//     case '0':
//         alert('0 is )');
//         break;
//     case '1':
//         alert('1 is !');
//         break;
//     case '2':
//         alert('2 is @');
//         break;
//     case '3':
//         alert('3 is #');
//         break;
//     case '4':
//         alert('4 is $');
//         break;
//     case '5':
//         alert('5 is %');
//         break;
//     case '6':
//         alert('6 is ^');
//         break;
//     case '7':
//         alert('7 is &');
//         break;
//     case '8':
//         alert('8 is *');
//         break;
//     case '9':
//         alert('9 is (');
//         break;}

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

// -------------------task5-------------------
// let b;
// let c;
// let e;
// let a = +prompt("Введите пятизначное число", "")
// if ((a > 9999) && (a < 100000)) {
//     b = a / 10000;
//     a = a % 10000;
//     c = a / 1000;
//     a = a % 1000;
//     a = a % 100;
//     e = a / 10;
//     a = a % 10;
//     if ((b == a) && (c == e)) {
//         alert("Це число паліндром");
//     }
//     else {
//         alert("Це число не паліндром");
//     }
// }
// else {
//     alert("Ви вивели не пятизначне число");
// }

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

// -------------------task7-----------------------
// let summ = prompt('Сума покупки?');
// if (summ >= 200 && summ <= 300) {
//     alert(summ*0.97 + '$ Сума до оплати з 3% знижки');
// }
// else if (summ >= 300 && summ <= 500) {
//     alert(summ*0.95 + '$ Сума до оплати з 5% знижки');
// }
// else if ( summ > 500) {
//     alert(summ*0.93 + '$ Сума до оплати з 7% знижки');
// }

