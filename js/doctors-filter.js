window.addEventListener("DOMContentLoaded", function () {
  const filterPoints = document.querySelectorAll(".filter-point");
  const specializationsDropdown = document.querySelector(".sorting-dropdown_specializations");

  var doctorsFilter = new Isotope(document.querySelector(".doctors-list__cards-container"), {
    itemSelector: '.specialist-card',
    layoutMode: 'masonry'
  });

  filterPoints.forEach(el => {
    el.addEventListener("click", (e) => {
      let filterDocPosition = document.querySelector(".sorting__points-lsit-item_active").dataset.filter === "*" ? "" : document.querySelector(".sorting__points-lsit-item_active").dataset.filter;

      if (e.target.closest(".sorting__points-lsit-item")) {
        if (e.currentTarget.dataset.filter === "*") {
          filterDocPosition = "";
        } else {
          filterDocPosition = e.currentTarget.dataset.filter;
        }

        if (specializationsDropdown) {
          specializationsDropdown.querySelector(".sorting-dropdown__text").textContent = e.currentTarget.textContent;
        }
      }

      doctorsFilter.arrange({
        filter: `${filterDocPosition}`
      });
    })
  })
})