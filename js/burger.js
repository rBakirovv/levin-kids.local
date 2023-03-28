window.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".burger-menu-wrap");
  const menuCloseBtn = document.querySelector(".burger-menu-header__close");
  const menuOpenBtn = document.querySelector(".header__burger");

  const openMenu = () => {
    menu.classList.add("burger-menu-wrap--active");
  };
  const closeMenu = () => {
    menu.classList.remove("burger-menu-wrap--active");
  };

  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav__item") || e.target.classList.contains("nav__link")) {
      closeMenu();
    };
  });

  menuOpenBtn.addEventListener("click", openMenu);
  menuCloseBtn.addEventListener("click", closeMenu);
});