const buyButton = document.querySelector('.buy-ticket-btn');
const ticketBanner = document.querySelector('.ticket-banner');
const bannerCloseBtn = document.querySelector('.ticket-banner__close-btn');

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

const jivoContainer = document.querySelector('.globalClass_be5a');
const jivoPopup = document.querySelector('.popupBlock_a3a4');
const jivoChat = document.querySelector('.wrap_b8bd');
const bannerText = document.querySelector('.ticket-banner__text');

function checkNextElement() {
  if (window.innerWidth >= 1366 && jivoContainer) {
    if (jivoChat && jivoChat.classList.contains('__show_e999')) {
      buyButton.style.transform = 'translateX(-260px)';
      bannerText.style.maxWidth = '760px';
    } else if (jivoPopup && jivoPopup.classList.contains('__show_be88')) {
      buyButton.style.transform = 'translateX(-120px)';
      bannerText.style.maxWidth = '890px';
    } else {
      buyButton.style.transform = 'translateX(0)';
      bannerText.style.maxWidth = '890px';
    }
  } else {
    if (jivoPopup && jivoPopup.classList.contains('__show_be88') && ticketBanner.classList.contains('is-hidden')) {
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
