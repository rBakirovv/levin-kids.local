window.addEventListener("DOMContentLoaded", function () {
  const html = document.querySelector("html");
  const headerWithMenu = document.querySelector(".header-with-menu");
  const headerButtonService = headerWithMenu.querySelector(".header-menu__button-service");
  const headerMenu = document.querySelector(".header-menu");
  const mobileMenuButtonService = document.querySelector(".mobile-menu__button-service");
  const swipeMenu = document.querySelector(".swipe-menu");
  const swipeMenuContainer = swipeMenu.querySelector(".swipe-menu__container")
  //const swipeMenuItem = document.querySelector(".swipe-menu__scroll-item");

  function handleMobileMenu() {
    mobileMenuButtonService.classList.toggle("mobile-menu__button-service_active");
    swipeMenu.classList.toggle("swipe-menu_active");

    if (html.style.overflow === "hidden") {
      html.style.overflow = "visible";
      swipeMenu.style.transform = `translateY(100%)`;
    } else {
      html.style.overflow = "hidden";
      swipeMenu.style.transform = `translateY(0)`;
    }
  }

  function mobileMenuClose() {
    html.style.overflow = "visible";
    mobileMenuButtonService.classList.remove("mobile-menu__button-service_active");
    swipeMenu.classList.remove("swipe-menu_active");
    swipeMenu.style.transform = `translateY(100%)`;
  }

  headerButtonService.addEventListener("click", () => {
    headerWithMenu.classList.toggle("header-menu_opened");
    headerMenu.classList.toggle("header-menu_open");

    if (html.style.overflow === "hidden") {
      html.style.overflow = "visible";
    } else {
      html.style.overflow = "hidden";
    }
  })

  let touchstartY = 0;
  let touchendY = 0;
  let movedY = 0;

  swipeMenu.addEventListener('touchstart', function (event) {
    touchstartY = event.changedTouches[0].screenY;
  }, false)

  swipeMenu.addEventListener('touchmove', function (event) {
    movedY = event.changedTouches[0].screenY;
    if ((movedY - touchstartY > 0)) {
      swipeMenu.style.transform = `translateY(${movedY - touchstartY}px)`;
    }
  })

  swipeMenu.addEventListener('touchend', function (event) {
    touchendY = event.changedTouches[0].screenY;

    if ((movedY - touchstartY > 30) && (swipeMenuContainer.scrollTop === 0 || !event.target.closest(".swipe-menu__container"))) {
      mobileMenuClose();
    } else {
      swipeMenu.style.transform = `translateY(0)`;
    }
  }, false)

  mobileMenuButtonService.addEventListener("click", handleMobileMenu)
})