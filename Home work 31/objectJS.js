// Створи об'єкт, що описує автомобіль 
// (виробник, модель, рік випуску, середня швидкість, обсяг паливного бака, середня витрата палива на 100 км., водії), 
// і наступні функції для роботи з цим об'єктом:
// Висновок на екран з інформацією про автомобіль.
// Додавання водія, який має право керувати автомобілем.
// Заправка автомобіля.
// Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю. 
// Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину, а також потрібно 
// перевіряти чи має право водій керувати даним автомобілем (ім'я водія функція приймає другим аргументом). 
// Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки, якщо палива не вистачить потрібно вивести повідомлення, 
// про це і запропонувати заправити автомобіль.
// ---------------task1---------------
let newCar = new Object("Toyota", "GT86", 2012, "226 km/h", "50 l.", "7,8 l/100km", "Peter Pan");
function Object(producer, model, year, speed, fuel_tank, fuel_consumption, driver) {
  this.producer = producer;
  this.model = model;
  this.year = year;
  this.fuel_tank = fuel_tank;
  this.fuel_consumption = fuel_consumption;
  this.driver = driver;
}
console.log(newCar);
let ran = new Person("Rand McKinnon","Ken Jones");
function Person(driver1,driver2) {
  this.driver1 = driver1;
  this.driver2 = driver2;
};
console.log(newCar.driver);
console.log(ran.driver1);
console.log(ran.driver2);
// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передане кількість секунд.
// Зміни часу на передане кількість хвилин.
// Зміни часу на передане кількість годин.
// Врахуйте, що в останніх 3-х функціях, при зміні однієї частини часу,
//  може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то
//  повинно вийти «21:00:15», а не «20:30:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.
// ---------------task2---------------
// let time = {
//   hours: '',
//   minutes: '',
//   seconds: '',

//   show() {
//     alert(`${this.hours}:${this.minutes}:${this.seconds}`);
//   },

//   changeSeconds(sec) {
//     let h = sec / 3600;
//     this.hours += Math.floor(h);
//     let m = (sec - Math.floor(h) * 3600) / 60;
//     this.minutes += Math.floor(m);
//     this.seconds += sec - Math.floor(h) * 3600 - Math.floor(m) * 60;

//     let d = 0;
//     if (this.seconds >= 60) {
//       this.seconds %= 60;
//       this.minutes += Math.floor(this.seconds / 60);
//     }
//     if (this.minutes >= 60) {
//       this.minutes %= 60;
//       this.hours += Math.floor(this.minutes / 60);
//     }
//     if (this.hours > 23) {
//       this.hours %= 24;
//       this.days = Math.floor(this.hours / 24);
//     }
//     return time;
//   },

//   changeMinutes(min) {
//     let h = min / 60;
//     this.hours += Math.floor(h);
//     this.minutes += min - Math.floor(h) * 60;
//     if (this.minutes >= 60) {
//       this.minutes %= 60;
//       this.hours += Math.floor(h / 60);
//     }
//     if (this.hours > 23) {
//       this.hours %= 24;
//       this.days = Math.floor(this.hours / 24);
//     }
//     return time;
//   },

//   changeHours(hour) {
//     this.hours = (this.hours + hour) % 24;
//     let d = 0;
//     if (this.hours > 23) {
//       this.days = Math.floor(this.hours / 24);
//     }
//     return time;
//   }
// };

// time.hours = +prompt("Enter hours");
// time.minutes = +prompt("Enter minutes");
// time.seconds = +prompt("Enter seconds");

// time.show();
// console.log(time.changeSeconds(3600));
// time.show();
// console.log(time.changeMinutes(1400));
// time.show();
// console.log(time.changeHours(45));
// time.show();