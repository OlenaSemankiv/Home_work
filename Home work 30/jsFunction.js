// ---------task1-----------
// function summ(a, b) {
//     if (a < b) {
//         return (-1);
//     }
//     else if (a > b) {
//         return (1);
//     }
//     else if (a = b) {
//         return (0);
//     }
// }
// let result = summ(2, 2);
// alert( result );

// --------- task2----------
//     function factorial(n) {
//         return (n != 1) ? n * factorial(n - 1) : 1;
//     }

// alert(factorial(4));

// --------- task3----------
// let number = (a,b,c) => (`${a}${b}${c}`);
// alert( number (1,2,3) );

// --------- task4----------
// function check(a, b = 0) {
//     if (b == 0) { return a ** 2; }
//     return a * b;
// }

// console.log(check(5));
// console.log(check(2, 4));

// --------- task5----------
// const n = +prompt('Enter a number',0);
// let perfect = (num) => {
//     let s = 0;
//     for (let i = 0; i <= num; i++){
//         if(num % i == 0){
//             s += i;
//         }
//     }
//     if(num == s) return console.log('This number is perfect');
//     else return console.log('This number is not perfect');
// };
// perfect(n);

// --------- task6----------
// const start = +prompt('Enter start of range', 0);
// const end = +prompt('Enter end of range', 100);
// let perfectInRange = (a, b) => {
//     for (let i = a; i <= b; i++){
//         let s = 0;
//         for(let j = 0; j < i; j++){
//             if(i % j == 0){
//                 s += j;
//             }
//         }
//         if(i == s){
//             console.log(i);
//         }
//     }
// };
// perfectInRange(start, end);
// --------- task7----------
// function setTime(h) {
//     return function setMinutes(m = '00') {
//       return function setSeconds(s = '00') {
//         return `${h}:${m}:${s}`
//       }
//     }
//   }

//   let time = setTime(12)()();
//   console.log(time);

// --------- task8----------
// h = +prompt('hour');
// m = +prompt('minute');
// s = +prompt('seconds');
// function seconds (a,b,c) {
// return (h * 3600) + (m * 60) + s
// }
// alert(seconds(h,m,s));

// --------- task9----------
// const seconds = prompt('Enter count of seconds', );
// let time = (n) => {
//     let hoursFloat = n / 3600;
//     console.log(hoursFloat);
//     let hours = Math.floor(hoursFloat);
//     console.log(hours);
//     let minutes = Math.floor((hoursFloat - hours) * 60);
//     console.log(minutes);
//     let seconds  = n - ((minutes * 60) + (hours * 3600));
//     function zero (num){
//         return num > 9 ? num : '0' + num;
//     }
//     return `${zero(hours)}:${zero(minutes)}:${zero(seconds)}`;
// }
// console.log(time(seconds));