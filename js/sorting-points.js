window.addEventListener("DOMContentLoaded", function () {
  const specializationsList = document.querySelectorAll(".sorting__points-lsit-item");

  specializationsList.forEach(el => {
    el.addEventListener("click", () => {
      specializationsList.forEach(el => {
        el.classList.remove('sorting__points-lsit-item_active');
      })
    })
  })

  specializationsList.forEach(el => {
    el.addEventListener("click", (e) => {
      el.classList.toggle('sorting__points-lsit-item_active');
    })
  })
})