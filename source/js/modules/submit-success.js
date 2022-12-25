const overlay = document.querySelector('.sucess-popup__bg');
const popup = document.querySelector('.sucess-popup');
const closeBtn = document.querySelector('.success-popup__close-btn');


function showSuccessMsg() {
  overlay.classList.add('active');
  popup.classList.add('active');

  document.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === closeBtn) {
      overlay.classList.remove('active');
      popup.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      overlay.classList.remove('active');
      popup.classList.remove('active');
    }
  });
}

export {showSuccessMsg};
