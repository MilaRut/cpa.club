function initPopupLoader() {

  const widgetContainer = document.getElementById('widget-container');
  const iframe = document.querySelector('iframe');
  const loader = document.querySelector('.popup-loader');

  loader.classList.add('active');

  if (!widgetContainer.hasChildNodes || iframe === null) {
    setTimeout(initPopupLoader, 100);
    return;
  }
  iframe.onload = function () {
    loader.classList.remove('active');
  };
  loader.remove();
}

export {initPopupLoader};
