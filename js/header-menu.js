window.addEventListener("DOMContentLoaded", function () {
  const html = document.querySelector("html");
  const headerWithMenu = document.querySelector(".header-with-menu");
  const headerButtonService = headerWithMenu.querySelector(".header-menu__button-service");
  const headerMenu = document.querySelector(".header-menu");

  headerButtonService.addEventListener("click", () => {
    headerWithMenu.classList.toggle("header-menu_opened");
    headerMenu.classList.toggle("header-menu_open");

    if (html.style.overflow === "hidden") {
      html.style.overflow = "visible";
    } else {
      html.style.overflow = "hidden";
    }
  })
})