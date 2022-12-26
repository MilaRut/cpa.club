const menuOpenBtn = document.querySelector('.header__menu-btn');
const headerNav = document.querySelector('.header__nav');
const headerLinks = document.querySelectorAll('.header__link');

function openMenu() {
  menuOpenBtn.addEventListener('click', function () {
    if (headerNav.classList.contains('active')) {
      menuOpenBtn.classList.remove('active');
      headerNav.classList.remove('active');
    } else {
      menuOpenBtn.classList.add('active');
      headerNav.classList.add('active');
    }
  });
}

function closeMenu() {
  headerLinks.forEach((link) => {
    link.addEventListener('click', function () {
      headerNav.classList.remove('active');
      menuOpenBtn.classList.remove('active');
    });
  });

  document.addEventListener('click', function (e) {
    const target = e.target;
    const itsMenu = target === headerNav || headerNav.contains(target);
    const itsBtnMenu = target === menuOpenBtn;
    const navIsOpen = headerNav.classList.contains('header__nav--open');

    if (!itsMenu && !itsBtnMenu && navIsOpen) {
      menuOpenBtn.classList.remove('active');
      headerNav.classList.remove('active');
    }
  });
}

export {openMenu, closeMenu};
