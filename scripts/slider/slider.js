import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// new Swiper('.swiper-wrapper', {
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   grabCursor: true,
//   slidesPerView: 2,
//   spaceBetween: 80,
//   slidesPerGroup: 2,
//   initialSlide: 1,
//   loop: true,
// });

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 100,
  slidesPerGroup: 2,
  initialSlide: 1,
});