function initEffects() {
  const paragraphs = document.querySelectorAll('.paragraph-transition');
  const headings = document.querySelectorAll('.heading-scale');
  const timerShadow = document.querySelector('.timer-shadow');

  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add('effect');
      }
    });
  });

  paragraphs.forEach((el) => {
    observer.observe(el);
  });

  headings.forEach((el) => {
    observer.observe(el);
  });

  observer.observe(timerShadow);
}

export {initEffects};
