const burgerMenu = document.querySelector(".burger-menu");
const mobMenu = document.querySelector(".menu_navigate");

burgerMenu.addEventListener("click", () => {
  mobMenu.classList.toggle("menu-active");
});
