function initEffects() {
  const paragraphs = document.querySelectorAll('.paragraph-transition');
  const headings = document.querySelectorAll('.heading-scale');

  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add('effect');
      }
    });
  });

  paragraphs.forEach((paragraph) => {
    observer.observe(paragraph);
  });

  headings.forEach((heading) => {
    observer.observe(heading);
  });
}

export {initEffects};
