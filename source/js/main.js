import {iosVhFix} from './utils/ios-vh-fix';
import {setupVideo} from './modules/video';
import {initPhotoSlider} from './modules/photo-slider';
import {initSwiper} from './modules/program-slider';
import {initPopup} from './modules/popup';
import {initFormPopup} from './modules/form-popup';
import {initTimer} from './modules/timer';
import {validateForm} from './modules/form-validation';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const swiper = document.querySelector('.swiper');
  const ticketForm = document.querySelector('#ticket-form');
  const sponsorForm = document.querySelector('#sponsor-form');

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    setupVideo();
    initPhotoSlider();
    initSwiper(swiper);
    initPopup();
    initFormPopup();
    initTimer();
    validateForm(ticketForm);
    validateForm(sponsorForm);
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
