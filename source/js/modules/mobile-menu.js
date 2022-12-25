const headerContainer = document.querySelector('.header__container');
const menuOpenBtn = document.querySelector('.header__menu-btn');
const headerNav = document.querySelector('.header__nav');
const headerLinks = headerNav.querySelectorAll('.header__link');

function openMenu() {
  menuOpenBtn.addEventListener('click', function () {
    menuOpenBtn.classList.toggle('active');
    headerNav.classList.toggle('active');
    headerContainer.classList.toggle('.active');
  });
}

function closeMenu() {
  headerLinks.forEach((link) => {
    link.addEventListener('click', function () {
      menuOpenBtn.classList.remove('active');
      headerNav.classList.remove('active');
    });
  });
}

export {openMenu, closeMenu};
