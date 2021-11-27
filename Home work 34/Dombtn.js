// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити".
//  Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

// Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.


const btn = document.getElementById("button");
document.body.appendChild(btn);
btn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.setAttribute("id", "modal__div");
  const p = document.createElement("p");
  p.textContent = "There is nothing to read. Close";
  div.append(p);
  const innerBtn = document.createElement("button");
  const innerBtnP = document.createElement("p");
  innerBtnP.textContent = "Close";
  innerBtn.append(innerBtnP);
  div.append(innerBtn);
  document.body.append(div);
  btn.disabled = true;
  innerBtn.addEventListener("click", () => {
    div.remove();
    btn.disabled = false;
  });
});
// ---------------світлофор--------------------
// const trafficLights = document.querySelector("div.traffic__light");

// const redlight = document.getElementById("red");
// const yellowlight = document.getElementById("yellow");
// const greenlight = document.getElementById("green");
// const butn = document.getElementById("btn");

// butn.addEventListener("click", function() {
//   if (redlight.classList.contains("traffic__red")) {
//     redlight.classList.remove("traffic__red");
//     yellowlight.classList.add("traffic__yellow");
//   } else if (yellowlight.classList.contains("traffic__yellow")) {
//     yellowlight.classList.remove("traffic__yellow");
//     greenlight.classList.add("traffic__green");
//   } else if (greenlight.classList.contains("traffic__green")) {
//     greenlight.classList.remove("traffic__green");
//     redlight.classList.add("traffic__red");
//   }
// });