function showButton() {

  const buyButton = document.querySelector('.concept__byu-ticket-btn');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= 100 && window.pageYOffset < 17000) {
      buyButton.classList.add('active');
    } else {
      buyButton.classList.remove('active');
    }
  });
}

export {showButton};

