function initPhotoSlider() {
  const prev = document.getElementById('btn-prev');
  const next = document.getElementById('btn-next');
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  let index = 0;

  const activeSlide = function (n) {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[n].classList.add('active');
  };

  const activeDot = function (n) {
    dots.forEach((dot) => dot.classList.remove('active'));
    dots[n].classList.add('active');
  };

  function prepareCurrentSlide() {
    activeSlide(index);
    activeDot(index);
  }

  function nextSlide() {
    if (index === slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
    } else {
      index++;
      prepareCurrentSlide(index);
    }
  }

  function prevSlide() {
    if (index === 0) {
      index = slides.length - 1;
      prepareCurrentSlide(index);
    } else {
      index--;
      prepareCurrentSlide(index);
    }
  }

  dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
      index = indexDot;
      prepareCurrentSlide(index);
    });
  });

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);
}

export {initPhotoSlider};
