var swiper = new Swiper(".mySwiper-comment-list", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    speed: 800,
    loop: true,
    initialSlide: 1,
    centeredSlides: true,
    watchOverflow: true,
    roundLengths: true,
    pagination: {
        el: ".swiper-pagination-comment",
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