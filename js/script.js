"use strict";

const accordionTitle = document.querySelectorAll(".item__title");

// console.log(accordionTitle);

// const toggleItem = function () {
//   console.log(document.querySelector(".item__title").parentElement.className);
//   document
//     .querySelector(".item__title")
//     .parentElement.classList.toggle("active-item");
// };

const toggleItem = function () {
  console.log(document.querySelector(".item__title").parentElement.className);
  document
    .querySelector(".item__title")
    .parentElement.classList.toggle("active-item");
};

for (let i = 0; i < accordionTitle.length; i++) {
  accordionTitle[i].addEventListener("click", toggleItem);
}
