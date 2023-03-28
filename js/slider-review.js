window.addEventListener("DOMContentLoaded", function () {
  const swiperReports = new Swiper('.reports-slider', {
    loop: true,
    centeredSlides: true,
    slideToClickedSlide: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: {
      el: '.reports-slider-pagination',
      type: 'bullets',
      clickable: true,
      loop: true,
    },
    navigation: {
      nextEl: '.reports-slider-next',
      prevEl: '.reports-slider-prev',
    },
    breakpoints: {
      600: {
        loop: true,
        centeredSlides: true,
        slideToClickedSlide: true,
        slidesPerView: "auto",
        spaceBetween: 30,
      },
    },
  });

  const reportSlider = document.querySelector('.reports-slider');
  const reportSlide = document.querySelectorAll('.report-slide');

  const fadeOut = (el, timeout) => {
    //el.style.opacity = 1;
    //el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;

    setTimeout(() => {
      el.style.display = 'none';
    }, timeout);
  };

  const fadeIn = (el, timeout, display) => {
    el.style.opacity = 0;
    el.style.display = display || 'flex';
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
      el.style.opacity = 1;
    }, 10);
  };

  if (reportSlide) {
    let stopVideos = (ind) => {
      reportSlide.forEach((elem, index) => {
        let buttonPlay = elem.querySelector('.report__play');
        let video = elem.querySelector('video');
        let trigger = elem.querySelector('.report-slide__trigger')
        video.pause();
        video.load();
        video.removeAttribute('controls');
        trigger.classList.remove('--fade');
        //if (ind != index) {
        //fadeIn(buttonPlay, 300)
        //}
        elem.classList.remove('--is-active');
      })
    };

    window.addEventListener('click', function (e) {
      let target = e.target || e.srcElement || e.currentTarget
      if (document.querySelector(".reports-slider")) {
        if (!reportSlider.contains(target)) {
          stopVideos(100);
        }
      }
    });

    reportSlide.forEach((elem, index) => {
      let buttonPlay = elem.querySelector('.report__play');
      let video = elem.querySelector('.report__video video');
      let trigger = elem.querySelector('.report-slide__trigger');
      let close = elem.querySelector('.slider__close ');

      if (!elem.classList.contains('--is-active')) {
        trigger.addEventListener('mouseover', () => {
          video.muted = true;
          video.play();
        });

        trigger.addEventListener('mouseout', () => {
          video.load();
        });
      }

      elem.addEventListener('click', () => {
        if (!elem.classList.contains('--is-active')) {
          stopVideos(index);
          trigger.classList.add('--fade')
          fadeOut(buttonPlay, 300);
          video.setAttribute('controls', true);
          video.muted = false;
          elem.classList.add('--is-active');
          setTimeout(() => {
            video.currentTime = 0;
            video.play();
          }, 200)
        }
      });

      close.addEventListener('click', () => {
        video.load();
        setTimeout(() => {
          stopVideos(100);
        }, 100)
      })
    })
  }
})