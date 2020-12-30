// window.location.hash = '';

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

var $status = $('.gallery__pagingInfo');
$('.gallery__album').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + ' / ' + slick.slideCount);
});

$('.gallery__album--slides').slick({
    infinite:false,
    rows:2,
    slidesPerRow: 3,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-btn gallery__slick-next slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn gallery__slick-prev slick-prev"></button>',

})

// Gallery
// const galleryAlbum = document.querySelector('.gallery__album');
// const galleryCard = document.querySelector('.gallery__item-card');

// galleryAlbum.onclick = function(event){
//     const target = event.target.closest('.gallery__album-item')
//     console.log(event.target.className);
//     const card = event.target.closest('.gallery__item-card');

//     if(!target) return;
//     if(!galleryAlbum.contains(target)) return;
  
//     if(event.target.className == 'gallery__card-close btn-reset') {
//         card.classList.remove('is-active');
//         target.querySelector('.gallery__item-inner').classList.remove('is-active');
//         return;
//     }
//     target.querySelector('.gallery__item-card').classList.add('is-active');
//     target.querySelector('.gallery__item-inner').classList.add('is-active');
// }

// $('.editions__items').slick({
//     infinite:false,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
//     prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
//     responsive:[
//         {
//             breakpoint: 1400,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//             }
//         },
//     ]
// })



// Burger
// document.querySelector('.header__burger-block').onclick = function(){
//     document.querySelector('.header__nav').classList.add('is-active');
//     document.querySelector('.header-top__container').classList.add('resize100');
// }
// document.querySelector('.header__nav-close').onclick = function(){
//     document.querySelector('.header__nav').classList.remove('is-active');
//     document.querySelector('.header-top__container').classList.remove('resize100');
// }


// Choices
const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
});
