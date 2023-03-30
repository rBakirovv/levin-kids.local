window.addEventListener("DOMContentLoaded", function () {
  const swiperBraces = new Swiper('.braces-types__swiper', {
    loop: true,
    centeredSlides: true,
    slideToClickedSlide: true,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".braces-slider-next",
      prevEl: ".braces-slider-prev",
    },
    pagination: {
      el: ".braces-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      1000: {
        loop: true,
        centeredSlides: false,
        slideToClickedSlide: true,
        slidesPerView: "auto",
      },
    },
  });
})