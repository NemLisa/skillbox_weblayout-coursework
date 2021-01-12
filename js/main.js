window.location.hash = '';


// Scroll
const anchors = document.querySelector('.header__nav').querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

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

// Accordion

$(".catalog__accordion").accordion({
    collapsible: true,
    active: false,
});

// Tabs
$(".catalog__container").tabs({
  active:3,
});

// Tabs in accordion
var tabTriggers = document.querySelectorAll(".tabs-tab");
var tabContent = document.querySelectorAll(".tab-content");
tabTriggers.forEach(function(trigger){
  trigger.addEventListener('click', function(){
    var id = this.querySelector(".tabs-anchor").getAttribute('href').slice(1);
    var content = document.querySelector('.tab-content__item[id="'+id+'"]');
    var activeTrigger = document.querySelector('.tabs-tab.active');
    var activeContent = document.querySelector('.tab-content__item.active');
    activeTrigger.classList.toggle('active');
    trigger.classList.toggle('active');

    activeContent.classList.toggle('active');
    content.classList.toggle('active');
  })
})



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
