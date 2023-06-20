window.addEventListener("DOMContentLoaded", function () {
  const tabsContainer = document.querySelector(".combined-tabs__list");
  const tabsBtns = tabsContainer && tabsContainer.querySelectorAll(".tabs__item");
  const tabsItems = tabsContainer && tabsContainer.querySelectorAll(".serves__options");

  function onTabClick(item) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = tabsContainer.querySelector(tabId);

    if (!currentBtn.classList.contains('tabs__item-active')) {
      tabsBtns.forEach(function (item) {
        item.classList.remove('tabs__item-active');
      });

      tabsItems.forEach(function (item) {
        item.classList.remove('serves__options-active');
      });

      currentBtn.classList.add('tabs__item-active');
      currentTab.classList.add('serves__options-active');
    }
  }

  tabsItems && tabsItems.forEach((item) => {
    if (item.querySelector(".combined-tabs__head")) {
      const tabItem = tabsContainer.querySelector(`[data-tab="#${item.id}"]`);

      item.querySelector(".combined-tabs__head").addEventListener("click", () => {
        tabsBtns.forEach(function (item) {
          item.classList.remove('tabs__item-active');
        });

        tabsItems.forEach(function (tab) {
          tab.classList.remove("serves__options-active");
        });

        tabItem.classList.add("tabs__item-active");
        item.classList.add("serves__options-active");
      })
    }
  })

  tabsBtns && tabsBtns.forEach((item) => {
    item.addEventListener("click", () => onTabClick(item));
  })
})