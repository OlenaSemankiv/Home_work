// Завдання 1

// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.   
// ------------------task 1-----------------
// class Ring {
//     constructor(r) {
//       this.r = r;
//     }
//     get radius() {
//       return this.r;
//     }
//     set radius(r) {
//       this.r = r;
//     }
//     get d() {
//       return this.r * 2;
//     }
//     area() {
//       return Math.PI * this.r * this.r;
//     }
//     circumference() {
//       return Math.PI * this.r * 2;
//     }
//   }

//   let ring = new Ring(5);
//   console.log(ring.radius);
//   console.log(ring.d);
//   console.log(ring.area().toFixed(2));
//   console.log(ring.circumference().toFixed(2));

// Завдання 2

// Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, 
// поки в маркері є чорнило; один не пробільний символ — це 0,5% чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера і додай метод для заправки.
// Продемонструй роботу написаних методів.
//   ------------------task 2-----------------
// class Marker {
//   constructor(c, p) {
//     this.c = c;
//     this.p = p;
//   }
//   get markerProps() {
//     return [this.c, this.p];
//   }

//   set markerProps(newProps) {
//     [this.c, this.p] = [...newProps];
//   }

//   print(line) {
//     let t = document.getElementById("content");
//     for (let i = 0; i < line.length; i++) {
//       if (this.p != 0) {
//         if (line[i] == " ") {
//           this.p += 0.5;
//         }
//         t.innerHTML += line[i];
//         t.style.color = this.c;
//         this.p -= 0.5;
//       } else {
//         document.write("Marker is over");
//         break;
//       }
//     }
//   }
// }

// class FilledMarker extends Marker {
//   fill(p) {
//     if (p > 100) {
//       p = 100;
//     } else {
//       this.p += p;
//     }
//   }
// }

// let marker = new FilledMarker("#298",22);

// marker.fill(32);

// const l = `Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера і додай метод для заправки.`;

// marker.print(l);
// document.body.setAttribute("style", "font-size: 25px; text-align: center;");


// Завдання 3

// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

// Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().
//   ------------------task 3-----------------
// const mainDiv = document.getElementById("content");

// const tableDiv = document.createElement("div");
// tableDiv.setAttribute("id", "content__tableDiv");
// tableDiv.className = "content__tableDiv";

// const tableTag = document.createElement("table");
// tableTag.setAttribute("id", "content__table");
// tableTag.className = "content__table";

// tableDiv.append(tableTag);
// mainDiv.append(tableDiv);

// class Employee {
//   constructor(name, position, department, salary) {
//     this.name = name;
//     this.position = position;
//     this.department = department;
//     this.salary = salary;
//   }
// }
// const arrEmp = [
//   new Employee("John", "Manager", "Sales", 5000),
//   new Employee("Bill", "Manager", "Sales", 5000),
//   new Employee("Peter", "Manager", "Sales", 5000),
//   new Employee("Erick", "Manager", "Sales", 5000),
//   new Employee("Chris", "Manager", "Sales", 5000),
// ];
// class EmpTable {
//   constructor(arr) {
//     this.arr = arr;
//   }
//   getHtml() {
//     const table = document.getElementById("content__table");
//     const array = this.arr;
//     const head = document.createElement("tr");
//     head.setAttribute("style", "font-size: 18px;");
//     const th1 = document.createElement("th");
//     th1.textContent = "Name";
//     const th2 = document.createElement("th");
//     th2.textContent = "Position";
//     const th3 = document.createElement("th");
//     th3.textContent = "Department";
//     const th4 = document.createElement("th");
//     th4.textContent = "Salary ($)";
//     head.append(th1);
//     head.append(th2);
//     head.append(th3);
//     head.append(th4);
//     table.append(head);
//     for (let i in array) {
//       let tr = document.createElement("tr");
//       table.append(tr);
//       for (let j in array[i]) {
//         let td = document.createElement("td");
//         td.textContent = array[i][j];
//         tr.append(td);
//         td.setAttribute("style", "padding: 5px 10px; font-size: 18px;");
//       }
//     }
//     table.setAttribute("border", "2");
//     table.setAttribute("bordercolor", "brown");
//     table.setAttribute("width", "60%");
//     table.setAttribute("style", "margin: auto; background-color: lightgrey;");
//   }
// }
// const tableObj = new EmpTable(arrEmp);
// tableObj.getHtml();