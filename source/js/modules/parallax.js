function initParallax() {

  const parallaxLayers = document.querySelectorAll('.parallax-layer');
  const speeds = [0.2, 0.2, 0.6, 0.8, 0.3, 0.5, 0.3, 0.2, 0.2];
  const diffs = [400, 200, 2500, 3200, 4200, 3400, 18000, 19500, 17000];

  function updateParallax() {
    for (let i = 0; i < parallaxLayers.length; i++) {
      const layer = parallaxLayers[i];
      layer.style.top = -(speeds[i] * (window.pageYOffset - diffs[i])) + 'px';
    }
  }
  document.addEventListener('scroll', updateParallax);
}

function updateMousemoves() {

  const mouseMoves = document.querySelectorAll('.mousemove');
  const index = [5, 8, 3, 7, 5];

  for (let i = 0; i < mouseMoves.length; i++) {
    const elem = mouseMoves[i];

    document.addEventListener('mousemove', (event) => {
      elem.style.transform = 'translate3d(' + ((event.clientX * 0.2) / index[i]) + 'px,' + ((event.clientY * 0.3) / index[i]) + 'px,0px)';
    });
  }
}

export {initParallax, updateMousemoves};
