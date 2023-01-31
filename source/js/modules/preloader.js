const preloader = document.querySelector('.preloader');

function initPreloader() {
  window.onload = function () {
    preloader.classList.add('hide-preloader');
  };
  setTimeout(function () {
    preloader.classList.remove('hide-preloader');
    preloader.classList.add('preloader-hidden');
  }, 990);
}

export {initPreloader};
