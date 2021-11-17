// let arr = [
//   { name: "Apple", count: 3, bought: true },
//   { name: "Orange", count: 5, bought: false },
//   { name: "Strawberry", count: 7, bought: true },
//   { name: "Potato", count: 9, bought: false },
//   { name: "Blackberry", count: 5, bought: true },
//   { name: "Coconut", count: 3, bought: false },
//   { name: "Muesli", count: 5, bought: true },
//   { name: "Milk", count: 2, bought: false }
// ];
// console.log(arr);
// let res = arr.slice();
// let compare = (a, b) => {
//   if (a.bought === false && b.bought === true) return -1;
//   if (a.bought === true && b.bought === false) return 1;
//   return 0;
// };

// console.log(res.sort(compare));

// let addPurchase = (name, count) => {
//   let b = {};
//   b.name = name;
//   b.count = count;
//   b.bought = false;
//   for (let i in res) {
//     let nname = res[i].name;
//     if (nname.toLowerCase() == name.toLowerCase()) {
//       res[i].count += count;
//       res[i].bought = false;
//       break;
//     } else if (nname.toLowerCase() != name.toLowerCase()) {
//       res.unshift(b);
//       break;
//     }
//   }
//   return res;
// };

// addPurchase("bread", 1);

// let buyIt = name => {
//   let b = {};
//   b.name = name;
//   b.count = 1;
//   b.bought = true;
//   for (let i in res) {
//     let nname = res[i].name;
//     if (nname.toLowerCase() == name.toLowerCase()) {
//       res[i].bought = true;
//       break;
//     } else if (nname.toLowerCase() != name.toLowerCase()) {
//       res.unshift(b);
//       break;
//     }
//   }
// };
// buyIt("Plates");
// res.sort(compare);

// ------------------task2--------------
// let list = [
//   { name: "Apple", count: 5, price: 9.99 },
//   { name: "Orange", count: 3, price: 5.99 },
//   { name: "Coconut", count: 2, price: 15.99 },
//   { name: "Bread", count: 1, price: 10.0 }
// ];

// let res = list.slice();

// let print = () => {
//   for (let i in res) {
//     let p = document.createElement("p");
//     p.className = res[i].name;
//     p.innerHTML = `<strong>Receipt position #${+i + +1}:</strong> 
//     Product name: ${res[i].name} | 
//     Quantity of product: ${res[i].count} | 
//     Price: ${res[i].price};`;
//     document.getElementById("receipt").append(p);
//   }
// };

// let calc = () => {
//   let s = 0;
//   for (let i in res) {
//     s += +res[i].price;
//   }
//   let p = document.createElement("p");
//   p.className = "Total";
//   p.innerHTML = `<strong>The total amount:</strong> ${s}`;
//   document.getElementById("receipt").append(p);
// };

// let maxPrice = () => {
//   let max = 0;
//   for (let i in res) {
//     if (max < res[i].price) {
//       max = res[i].price;
//     }
//   }
//   for (let i in res) {
//     if (max == res[i].price) {
//       let p = document.createElement("p");
//       p.className = res[i].name;
//       p.innerHTML = `<strong>The higest price is for:</strong> 
        
//       Product name: ${res[i].name} | 
//       Quantity of product: ${res[i].count} | 
//       Price: ${res[i].price};`;
//       document.getElementById("receipt").append(p);
//     }
//   }
// };

// let avaragePrice = () => {
//   let s = 0;
//   let av = 1;
//   for (let i in res) {
//     s += res[i].price;
//   }
//   av = s / res.length;
//   p = document.createElement("p");
//   p.className = "Average";
//   p.innerHTML = `<strong>The average price is:</strong> ${av.toFixed(2)}`;
//   document.getElementById("receipt").append(p);
// };

// print();
// maxPrice();
// calc();
// avaragePrice();

// ---------------------task3-------------------------
// const arr = [
//   { name: "text-align", value: "center" },
//   { name: "text-transform", value: "capitalize" },
//   { name: "text-overflow", value: "ellipsis" },
//   { name: "font-size", value: "1em" },
//   { name: "color", value: "#555" },
//   { name: "letter-spacing", value: "2px" },
//   { name: "font-weight", value: "300" },
//   { name: "line-height", value: "1" },
//   { name: "font-style", value: "oblique" },
//   { name: "font-stretch", value: "extra-expanded" }
// ];

// const text = `Lorem ipsum dolor sit amet, 
// consectetur adipisicing elit. 
// Reprehenderit, rem sit eaque 
// temporibus sint explicabo. 
// Quod placeat quos inventore 
// quas magni architecto, 
// cupiditate assumenda enim, 
// eum exercitationem ex sunt iste?`;

// let styleText = (arr, text) => {
//   document.write('<p style = "');
//   for (let i in arr) {
//     document.write(arr[i].name + ":" + arr[i].value + ";");
//   }
//   document.write('">' + text + "</p>");
// };

// styleText(arr, text);


// ---------------------task4-------------------------
