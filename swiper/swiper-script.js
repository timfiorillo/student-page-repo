var swiper = new Swiper('.swiper-container', {
  grabCursor: true,
  slidesPerView: 'auto',
  spaceBetween: 25,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: 'auto',
  },

  breakpoints: {
    // when window width is >= 650px
    550: {
      slidesPerView: 2.2,
      spaceBetween: 5
    },
    // when window width is >= 650px
    650: {
      slidesPerView: 2.5,
      spaceBetween: 5,
      scrollbar: {
        draggable: true
      },
    },
    // when window width is >= 730px
    730: {
      slidesPerView: 3,
      spaceBetween: 5
    },
    // when window width is >= 849px
    849: {
      slidesPerView: 3,
      spaceBetween: 15
    }
  }



});