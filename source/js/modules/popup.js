const overlay = document.querySelector('.popup__bg');
const popup = document.querySelector('.popup');
const openBtns = document.querySelectorAll('.open-popup');
const closeBtn = document.querySelector('.popup__close-btn');
const popupItems = document.querySelectorAll('.popup__item');

function resetClasses() {
  popupItems.forEach(function (item) {
    item.classList.remove('active');
  });
}

function prepareClosingPopup() {
  overlay.classList.remove('active');
  popup.classList.remove('active');
  resetClasses();
}

function initPopup() {
  openBtns.forEach((button) => {
    let currentBtn = button;
    let itemId = currentBtn.getAttribute('data-value');
    let currentItem = popup.querySelector(itemId);
    button.addEventListener('click', (e) => {
      e.preventDefault();
      currentItem.classList.add('active');
      overlay.classList.add('active');
      popup.classList.add('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === closeBtn) {
      prepareClosingPopup();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      prepareClosingPopup();
    }
  });
}

export {initPopup};
