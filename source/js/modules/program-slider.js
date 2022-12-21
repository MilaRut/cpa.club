import Swiper, {Navigation} from 'swiper';

const initSwiper = (swiper) => {
  if (swiper) {
    // eslint-disable-next-line
    new Swiper('#swiper', {
      modules: [Navigation],
      navigation: {
        nextEl: '#program-btn-next',
        prevEl: '#program-btn-prev',
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 22,
          initialSlide: 2,
        },

        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 22,
          initialSlide: 2,
        },

        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
          initialSlide: 2,
        },

        1440: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 80,
          initialSlide: 1,
        },
      },
    });
  }
};

export {initSwiper};
