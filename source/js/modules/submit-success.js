const submitBtn = document.querySelectorAll('.form__submit-btn');
const submitMsgOverlay = document.querySelector('.success-popup__bg');
const popup = document.querySelector('.success-popup');
const closeBtn = document.querySelector('.success-popup__close-btn');
const popupOverlays = document.querySelectorAll('.popup__bg');
const popups = document.querySelectorAll('.popup');
const popupItems = document.querySelectorAll('.popup__item');
const formPopupOverlays = document.querySelectorAll('.form-popup__bg');
const formPopups = document.querySelectorAll('.form-popup');
const formPopupItems = document.querySelectorAll('.form-popup__item');

function closeAllPopups() {
  popupOverlays.forEach((item) => {
    item.classList.remove('active');
  });
  popups.forEach((item) => {
    item.classList.remove('active');
  });
  popupItems.forEach((item) => {
    item.classList.remove('active');
  });
  formPopupOverlays.forEach((item) => {
    item.classList.remove('active');
  });
  formPopups.forEach((item) => {
    item.classList.remove('active');
  });
  formPopupItems.forEach((item) => {
    item.classList.remove('active');
  });
}

// TODO: change type of event acconding to backend

function showSuccessMsg() {
  submitBtn.forEach((button) => {
    button.addEventListener('submit', (e) => {
      e.preventDefault();
      submitMsgOverlay.classList.add('active');
      popup.classList.add('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (e.target === submitMsgOverlay || e.target === closeBtn) {
      submitMsgOverlay.classList.remove('active');
      popup.classList.remove('active');
      closeAllPopups();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      submitMsgOverlay.classList.remove('active');
      popup.classList.remove('active');
      closeAllPopups();
    }
  });
}

export {showSuccessMsg};
