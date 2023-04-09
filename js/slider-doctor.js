window.addEventListener("DOMContentLoaded", function () {

if (document.getElementById('doctor')) {

  const swiperDoctor = new Swiper('.doctor__container', {
    autoHeight: true, //enable auto height
    loop: true,
    centeredSlides: true,
    slideToClickedSlide: true,
    slidesPerView: "auto",
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-doc-button-next",
      prevEl: ".swiper-doc-button-prev",
    },
    breakpoints: {
      600: {
        autoHeight: true, //enable auto height
        loop: true,
        centeredSlides: true,
        slideToClickedSlide: true,
        slidesPerView: "auto",
        direction: "horizontal",
      },
    },
  });

  const swiperDoctorSmall = new Swiper('.doctor-swiper-review', {
    slidesPerView: "auto",
    slideToClickedSlide: true,
    centeredSlides: true,
    spaceBetween: 6,
    loop: true,
    breakpoints: {
      500: {
        spaceBetween: 32,
      }
    }
  });

  swiperDoctor.controller.control = swiperDoctorSmall;
  swiperDoctorSmall.controller.control = swiperDoctor;

}

})