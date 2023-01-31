const subscribeOverlay = document.querySelector('.subscribe-popup__bg');
const subscribePopup = document.querySelector('.subscribe-popup');

const preloader = document.querySelector('.preloader');

function prepareOpenPopup() {
  subscribeOverlay.classList.add('active');
  subscribePopup.classList.add('active');
}

function initPreloader() {
  window.onload = function () {
    preloader.classList.add('hide-preloader');
  };
  setTimeout(function () {
    preloader.classList.remove('hide-preloader');
    preloader.classList.add('preloader-hidden');
  }, 990);
  setTimeout(function () {
    prepareOpenPopup();
  }, 5000);
}

export {initPreloader};
