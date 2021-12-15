"use strict";

const accordionTitle = document.querySelectorAll(".item__title");

let status;
const showItem = function () {
  for (let i = 0; i < accordionTitle.length; i++) {
    accordionTitle[i].parentElement.classList.remove("active-item");
  }
  this.parentElement.classList.toggle("active-item");
};

for (let i = 0; i < accordionTitle.length; i++) {
  accordionTitle[i].addEventListener("click", showItem);
}
