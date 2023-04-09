window.addEventListener("DOMContentLoaded", function () {
  const main = document.querySelector(".main");
  const navList = document.querySelector(".header__nav-list-container");
  const headerMenuWrapper = document.querySelector(".header-menu-wrapper");

  const bannerTop = document.querySelector(".start-screen").clientHeight;

  window.addEventListener("scroll", () => {
    let scrollDistance = window.scrollY;

    if ((scrollDistance > bannerTop)) {
      headerMenuWrapper.classList.add("display-none");
      navList.classList.add("header__nav-list-container_active");
    } else {
      navList.classList.remove("header__nav-list-container_active");
      headerMenuWrapper.classList.remove("display-none");
    }

    main.querySelectorAll("section").forEach((el, index) => {
      if (el.offsetTop - document.querySelector(".header-menu-wrapper").clientHeight - document.querySelector(".header").clientHeight <= scrollDistance) {
        navList.querySelectorAll(".nav__link").forEach((el) => {
          if (el.classList.contains("nav__link_active")) {
            el.classList.remove("nav__link_active")
          }
        })

        navList.querySelectorAll(".nav__link").forEach((linkEl) => {
          if (linkEl.getAttribute("href").includes(el.id) && !linkEl.classList.contains("nav__link_active")) {
            navList.querySelector(`[href="${linkEl.getAttribute("href")}"]`).classList.add("nav__link_active");
            /*
            navList.querySelector(".nav__link_active").scrollIntoViewIfNeeded({
              inline: "center",
            });
            */
          }
        })
      }
    })
  })
})