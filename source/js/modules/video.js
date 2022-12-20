function setupVideo() {
  const video = document.querySelector('.video');
  const link = video.querySelector('.video__link');
  const button = video.querySelector('.video__btn');

  button.addEventListener('click', () => {
    const iframe = createIframe();

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('is-active');
}

function createIframe() {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('src', 'https://skydubai.com/wp-content/uploads/2022/09/Emirates-Video-with-logo-in-the-middle.mp4');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.classList.add('video__poster');
  iframe.style.zIndex = '10';

  return iframe;
}

export {setupVideo};
