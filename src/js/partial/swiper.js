var swiper = new Swiper(".mySwiper-home-hero", {
  slidesPerView: 1,
  speed:1000,
  loop:true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".mySwiper-product-detail", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed:700,
    pagination: {
      el: ".swiper-pagination-product-detail",
      clickable: true,
    },
  });

  var swiper = new Swiper(".mySwiper-question-list", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    speed: 800,
    loop: true,
    initialSlide: 1,
    centeredSlides: true,
    watchOverflow: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination-question",
      clickable: true,
    },
    breakpoints: {
      320: {
        spaceBetween: 10,        
      },
      768: {
        spaceBetween: 30,        
      },
    },
  });
