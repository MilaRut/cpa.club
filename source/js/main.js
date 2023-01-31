import {iosVhFix} from './utils/ios-vh-fix';
import {initPreloader} from './modules/preloader';
import {openMenu} from './modules/mobile-menu';
import {closeMenu} from './modules/mobile-menu';
import {setupVideo} from './modules/video';
import {initPhotoSlider} from './modules/photo-slider';
import {initSwiper} from './modules/program-slider';
import {initPopup} from './modules/popup';
import {initFormPopup} from './modules/form-popup';
import {closeMerchantPopup} from './modules/custom-popup';
import {initTimer} from './modules/timer';
import {showSuccessMsg} from './modules/submit-success';
import {initEffects} from './modules/effects';
import {initParallax} from './modules/parallax';
import {updateMousemoves} from './modules/parallax';
import {initPopupLoader} from './modules/popup-loader';
import {closeSubscribePopup} from './modules/subscribe-popup';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  openMenu();
  closeMenu();
  initEffects();
  const swiper = document.querySelector('.swiper');

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    initPreloader();
    closeSubscribePopup();
    setupVideo();
    initPhotoSlider();
    initSwiper(swiper);
    initPopup();
    initFormPopup();
    closeMerchantPopup();
    initTimer();
    showSuccessMsg();
    initParallax();
    updateMousemoves();
    initPopupLoader();
  });
});

// ---------------------------------
