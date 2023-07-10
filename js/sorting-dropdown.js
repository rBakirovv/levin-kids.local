window.addEventListener("DOMContentLoaded", function () {
  const sortingDropdown = document.querySelectorAll(".sorting-dropdown")

  function handleDropdownClick(e, element) {
    if (!e.target.classList.contains("sorting__title-delete")) {
      element.classList.toggle("sorting-dropdown_active");
    }
  }

  if (sortingDropdown.length) {
    sortingDropdown.forEach(dropdown => {
      dropdown.addEventListener("click", (e) => handleDropdownClick(e, dropdown))
    });
  }
})