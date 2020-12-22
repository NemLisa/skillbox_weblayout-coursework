window.location.hash = '';
//   Swiper

$('.intro__slider').slick({
    infinite: true,
    speed: 750,
    arrows:false,
    fade: true,
    cssEase: 'linear',
    autoplay:true,
    autoplaySpeed:5000,
});

$('.gallery__album').slick({
    infinite:false,
    rows:2,
    slidesPerRow: 3,
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    responsive:[
        {
            breakpoint: 1645,
            settings: {
            rows:2,
            slidesPerRow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
})

$('.editions__items').slick({
    infinite:false,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    responsive:[
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
})



// Burger
document.querySelector('.header__burger-block').onclick = function(){
    document.querySelector('.header__nav').classList.add('is-active');
    document.querySelector('.header-top__container').classList.add('resize100');
}
document.querySelector('.header__nav-close').onclick = function(){
    document.querySelector('.header__nav').classList.remove('is-active');
    document.querySelector('.header-top__container').classList.remove('resize100');
}
