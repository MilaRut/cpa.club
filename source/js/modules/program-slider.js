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
          initialSlide: 0,
        },

        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 22,
          initialSlide: 0,
        },

        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 30,
          initialSlide: 0,
        },

        1440: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 60,
          initialSlide: 0,
        },
      },
    });
  }
};

export {initSwiper};
