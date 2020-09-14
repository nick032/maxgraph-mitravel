const swiper1 = document.querySelector('.slider-container'),
      swiper2 = document.querySelector('.swiper-container'),
      burger = document.querySelector('.burger'),
      closeMenu = document.querySelector('.menu__close-btn'),
      menu = document.querySelector('.menu');

let swiperSlider1 = new Swiper(swiper1, {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 105,
});

let swiperSlider2 = new Swiper(swiper2, {
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    fadeEffect: {
        crossFade: true
    },
    effect: 'fade',
    navigation: {
        nextEl: '.btn-right',
        prevEl: '.btn-left'
    }
});

burger.addEventListener('click', () => {
    menu.classList.add('menu--visible');
});
closeMenu.addEventListener('click', () => {
    menu.classList.remove('menu--visible');
});

