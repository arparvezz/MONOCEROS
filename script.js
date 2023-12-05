const swiper = new Swiper('.swiper', {

  loop: true,
  slidesPerView: 3,
  spaceBetween: 1,

  breakpoints: {

    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    780: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 10
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});