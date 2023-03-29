window.addEventListener("DOMContentLoaded", function () {
  const swiperBeforeAfter = new Swiper('.before-after__swiper', {
    loop: true,
    slideToClickedSlide: true,
    centeredSlides: true,
    slidesPerView: "auto",
    direction: "horizontal",
    navigation: {
      nextEl: ".before-after-slider-next",
      prevEl: ".before-after-slider-prev",
    },
    pagination: {
      el: ".before-after-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      1000: {
        centeredSlides: false,
        loop: true,
        slideToClickedSlide: true,
        slidesPerView: "auto",
        direction: "horizontal",
      },
    },
  });
})