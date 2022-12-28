import {iosVhFix} from './utils/ios-vh-fix';
import {openMenu} from './modules/mobile-menu';
import {closeMenu} from './modules/mobile-menu';
import {setupVideo} from './modules/video';
import {initPhotoSlider} from './modules/photo-slider';
import {initSwiper} from './modules/program-slider';
import {initPopup} from './modules/popup';
import {initFormPopup} from './modules/form-popup';
import {initTimer} from './modules/timer';
import {showSuccessMsg} from './modules/submit-success';
import {initEffects} from './modules/effects';
// import {initParallax} from './modules/parallax';
// import {updateMousemoves} from './modules/parallax';

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
    setupVideo();
    initPhotoSlider();
    initSwiper(swiper);
    initPopup();
    initFormPopup();
    initTimer();
    showSuccessMsg();
    // initParallax();
    // updateMousemoves();
  });
});

// ---------------------------------
