"use strict";

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
var burgerBtn = document.querySelector('.header__menu_icon');
var btnLines = burgerBtn.querySelectorAll("span");
var navbar = document.querySelector(".header__nav");
burgerBtn.addEventListener("click", function () {
  if (!navbar.classList.contains("toggle")) {
    navbar.classList.add("toggle");
    document.body.style.overflow = 'hidden';
    btnLines[0].classList.add("first_line");
    btnLines[2].classList.add("second_line");
    btnLines[1].classList.add("third_line");
  } else {
    navbar.classList.remove("toggle");
    document.body.style.overflow = "";
    btnLines[0].classList.remove("first_line");
    btnLines[2].classList.remove("second_line");
    btnLines[1].classList.remove("third_line");
  }
});