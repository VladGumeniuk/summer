let header__burger = document.querySelector(".header__burger");
let header_menu = document.querySelector(".header__menu");
let back = document.querySelector("body");
let header__list = document.querySelector(".header__list");

header__burger.onclick = function () {
  header__burger.classList.toggle("actived");
  header_menu.classList.toggle("actived");
  //   back.classList.toggle("lock");
};

header__list.onclick = function () {
  header_menu.classList.remove("actived");
  header__list.classList.remove("actived");
  header__burger.classList.remove("actived");
  //   back.classList.classList.remove("lock");
  //   header__list.classList.remove("lock");
};
