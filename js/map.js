window.addEventListener("DOMContentLoaded", function () {
  const coordElement = document.querySelector(".scheme__coord");
  const coord = document.querySelector(".coord-copy");
  const coordCopyElement = document.querySelector(".scheme__coord-copy");

  const emailElement = document.querySelector(".scheme__email");
  const emailCopyElement = document.querySelector(".scheme__email-copy");

  ymaps.ready(init);

  let center;

  if (window.innerWidth > 1000) {
    center = [55.69013, 37.522999];
  } else {
    center = [55.683461, 37.527902]
  }

  function init() {
    var myMap = new ymaps.Map("map", {
        center: center,
        zoom: 16,
      }),
      myStreet1 = new ymaps.Placemark(
        [55.690092, 37.52673], {}, {
          iconLayout: "default#image",
          iconImageHref: "img/mapIcon.svg",
          iconImageSize: [93, 93],
          iconImageOffset: [-30, -60],
        }
      );
    myStreet2 = new ymaps.Placemark(
      [55.692865, 37.533091], {}, {
        iconLayout: "default#image",
        iconImageHref: "img/metro-map-icon.svg",
        iconImageSize: [88, 88],
        iconImageOffset: [-30, -60],
      }
    );
    myMap.geoObjects.add(myStreet1);
    myMap.geoObjects.add(myStreet2);
    myMap.behaviors.disable("scrollZoom");
  }

  coordElement.addEventListener("click", () => {
    navigator.clipboard.writeText("info@dantistoff.ru")
      .then(() => {
        coordCopyElement.querySelector('.scheme__coord-copy-container').textContent = 'Скопировано в буфер обмена';
      })
      .then(() => {
        setTimeout(() => {
          coordCopyElement.querySelector('.scheme__coord-copy-container').textContent = 'Скопировать координаты';
        }, 3000)
      })
  })

  emailElement.addEventListener("click", () => {
    navigator.clipboard.writeText(emailElement.innerHTML)
      .then(() => {
        emailCopyElement.querySelector('.scheme__email-copy-container').textContent = 'Скопировано в буфер обмена';
      })
      .then(() => {
        setTimeout(() => emailCopyElement.querySelector('.scheme__email-copy-container').textContent = 'Скопировать координаты', 1600)
      })
  })
})