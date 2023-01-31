const customPopupOverlay = document.querySelector('.custom-popup__bg');
const customPopup = document.querySelector('.custom-popup');
const closeBtn = document.querySelector('.custom-popup__close-btn');

function closeMerchantPopup() {
  function prepareClosingPopup() {
    customPopupOverlay.classList.remove('active');
    customPopup.classList.remove('active');
  }

  document.addEventListener('click', (e) => {
    if (e.target === customPopupOverlay || e.target === closeBtn) {
      prepareClosingPopup();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      prepareClosingPopup();
    }
  });
}

export {closeMerchantPopup};
