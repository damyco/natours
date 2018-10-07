// BASIC INTERACTIVITY

// close nav when link is clicked
const navigationItems = document.querySelectorAll(".navigation__item");
const navigation = document.querySelector(".navigation__nav");
const navigationButton = document.querySelector(".navigation__button");

const selectNavItem = () => {
  if ((navigation.style.opacity = "1")) {
    navigationButton.click();
  }
};

navigationItems.forEach(navItem => {
  navItem.addEventListener("click", selectNavItem);
});

// close popup when clicked on darkened background
const modalWindow = document.getElementById("popup");
const modalClose = document.querySelector(".popup__close");

const toggleModal = () => {
  if ((modalWindow.style.opacity = "1")) {
    modalClose.click();
  }
};

const windowClick = e => {
  if (e.target === modalWindow) {
    toggleModal();
  }
};

window.addEventListener("click", windowClick);
