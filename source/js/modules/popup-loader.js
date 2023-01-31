const iframe = document.querySelector('iframe');
const loader = document.querySelector('.popup-loader');

loader.classList.add('active');

function initPopupLoader() {

  iframe.onload = function () {
    loader.classList.remove('active');
  };
  loader.remove();
}

export {initPopupLoader};
