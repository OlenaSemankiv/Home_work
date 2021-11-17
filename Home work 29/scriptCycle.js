// -------------------task1-------------------
// let a = Number(prompt("введіть початок діапазону",""));
// let n = Number(prompt("введіть кінець діапазону",""));
// let sum = 0;

// while (a<=n) {
//     sum += a;
//     a++;
// }
// alert(sum)


// -------------------task2-------------------
// let a = Number(prompt("введіть перше число", ""));
// let n = Number(prompt("введіть друге число", ""));
// for (let i = a; i <= a; i--) {
//     if (a % i == 0 && n % i == 0) {
//         alert(`${i}`);
//         break;
//     }
// }
// -------------------task3-------------------
// let n = Number(prompt("введіть число", ""));
// for (let i = n; i <= n; i++) {
//     if (n%i== 0 ) {
//         alert(`${i}`);
//         break;
//     }
// }
// -------------------task4-------------------
// let n = Number(prompt("введіть число", ""));
//     for(let i = 0; n > 1; i++) {
//        n /= 10;
//        console.log(`${i}`);
//     }
// -------------------task5-------------------
// let count = 0;
// let arr = new Array();
// for (let i = 0; i <= 10; i++){
//     arr.push(prompt('Enter a number', 0));
//     if (arr[i] >= 0){
//         count++;
//     }
//     if (isNaN(arr[i])){
//         alert('Error');
//         break;
//     }
// }
// alert(`You have entered ${count} numbers that is positive`);

// -------------------task6-------------------
// while (true) {
//     const a = +prompt('Введіть 1 число');
//     const b = +prompt('Введіть 2 число');
//     const op = prompt('Виберіть знак - + / *');
//     const action = {
//         '+': () => a + b,
//         '-': () => a - b,
//         '/': () => a / b,
//         '*': () => a * b
//     }[op];
//     if (action) alert(action());
//     if (!confirm('Чи хочете ви розвязати ще один приклад?')) break;
// }

// -------------------task7-------------------
// const num = prompt('Enter a number', 0);
// const sliceNum = prompt('Enter a shift number',0);
// if(isNaN(num) || isNaN(sliceNum)){
//     alert('Error');
// } else {
//     alert(`Result number is ${num.slice(sliceNum) + num.slice(0, sliceNum)}`);
// }

// -------------------task8-------------------
// const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let currDay = 0;

// while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
//     currDay = (currDay + 1) % days.length;
// }
