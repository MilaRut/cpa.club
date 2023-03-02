const buyButton = document.querySelector('.buy-ticket-btn');
const ticketBanner = document.querySelector('.ticket-banner');
const bannerCloseBtn = document.querySelector('.ticket-banner__close-btn');
const bannerText = document.querySelector('.ticket-banner__text');

function showButton() {

  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= 150 && (window.innerHeight + window.pageYOffset) < document.body.offsetHeight - 100) {
      buyButton.classList.add('active');
      ticketBanner.classList.add('active');
    } else {
      buyButton.classList.remove('active');
      ticketBanner.classList.remove('active');
    }
  });

  bannerCloseBtn.addEventListener('click', function () {
    ticketBanner.classList.add('is-hidden');
    buyButton.classList.add('is-accent');
  });
}

function checkNextElement() {
  const jivoContainer = document.querySelector('jdiv');
  const jivoPopup = document.querySelector('div[class^="popupBlock"]');
  const jivoChat = document.querySelector('#jivo_action');

  if (window.innerWidth >= 1366 && jivoContainer) {
    if (jivoChat && jivoChat.matches('[class*="show"]')) {
      buyButton.style.transform = 'translateX(-260px)';
      bannerText.style.maxWidth = '760px';
    } else if (jivoPopup && jivoPopup.matches('[class*="show"]')) {
      buyButton.style.transform = 'translateX(-120px)';
      bannerText.style.maxWidth = '900px';
    } else {
      buyButton.style.transform = 'translateX(0)';
      bannerText.style.maxWidth = '900px';
    }
  } else {
    if (jivoPopup && jivoPopup.matches('[class*="show"]') && ticketBanner.classList.contains('is-hidden')) {
      buyButton.style.transform = 'translateY(-120px)';
    } else {
      buyButton.style.transform = 'translateY(0)';
    }
  }
}

const moveButton = () => {
  checkNextElement();
  setTimeout(moveButton, 1000);
};

export {showButton, moveButton};
