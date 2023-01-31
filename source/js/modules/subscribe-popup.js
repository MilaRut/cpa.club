const subscribeOverlay = document.querySelector('.subscribe-popup__bg');
const subscribePopup = document.querySelector('.subscribe-popup');
const closeBtn = document.querySelector('.subscribe-popup__close-btn');

function prepareClosingPopup() {
  subscribeOverlay.classList.remove('active');
  subscribePopup.classList.remove('active');
}

function closeSubscribePopup() {

  document.addEventListener('click', (e) => {
    if (e.target === subscribeOverlay || e.target === closeBtn) {
      prepareClosingPopup();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      prepareClosingPopup();
    }
  });
}

export {closeSubscribePopup};
