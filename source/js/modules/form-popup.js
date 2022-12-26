const formOverlay = document.querySelector('.form-popup__bg');
const formPopup = document.querySelector('.form-popup');
const openBtns = document.querySelectorAll('.open-form-popup');
const closeBtn = document.querySelector('.form-popup__close-btn');
const formPopupItems = document.querySelectorAll('.form-popup__item');

function resetClasses() {
  formPopupItems.forEach(function (item) {
    item.classList.remove('active');
  });
}

function prepareClosingPopup() {
  formOverlay.classList.remove('active');
  formPopup.classList.remove('active');
  resetClasses();
}

function initFormPopup() {
  openBtns.forEach((button) => {
    let currentBtn = button;
    let itemId = currentBtn.getAttribute('data-value');
    let currentItem = formPopup.querySelector(itemId);
    button.addEventListener('click', (e) => {
      e.preventDefault();
      currentItem.classList.add('active');
      formOverlay.classList.add('active');
      formPopup.classList.add('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (e.target === formOverlay || e.target === closeBtn) {
      prepareClosingPopup();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      prepareClosingPopup();
    }
  });
}

export {initFormPopup};
