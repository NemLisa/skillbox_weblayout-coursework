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
//  Swiper
$('.intro__slider').slick({
    infinite: true,
    speed: 750,
    arrows:false,
    fade: true,
    cssEase: 'linear',
    autoplay:true,
    autoplaySpeed:5000,
});
var $statusGallery = $('.gallery__pagingInfo');
$('.gallery__album').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $statusGallery.text(i + ' / ' + slick.slideCount);
});
$('.gallery__album--slides').slick({
  infinite:false,
  rows:2,
  slidesPerRow: 3,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="slick-btn gallery__slick-next slick-next"></button>',
  prevArrow: '<button type="button" class="slick-btn gallery__slick-prev slick-prev"></button>',
})
let $statusEdidtions = $('.editions__pagingInfo');
let $slickElement = $('.editions__album--slides');
let slidesToShowEditions;

function getSlidesToShow(){
  console.log(document.body.clientWidth);
  if(document.body.clientWidth>1024){
    return 3;
  }else{
    return 2;
  }
}
$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  if(!slick.$dots){
    return;
  }
  let i = (currentSlide ?Math.ceil(currentSlide/getSlidesToShow()) : 0) + 1;
  $statusEdidtions.text(i + ' / ' + (slick.$dots[0].children.length));
});
$('.editions__album--slides').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  nextArrow: '<button type="button" class="slick-btn editions__slick-next slick-next"></button>',
  prevArrow: '<button type="button" class="slick-btn editions__slick-prev slick-prev"></button>',
});
// Choices
const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
});
// Accordion
$(".catalog__accordion").accordion({
      collapsible: true,
      active: 0,
      heightStyle:"content"
  });
function isParentData(tabsEvent) {
  var dataPath;
  try {
    var node = tabsEvent.parentNode;
    do {
      dataPath = node.dataset.content;
      node = node.parentNode;
      } while (dataPath === undefined);
    return dataPath;
    } catch (error) {       
  }
}
function myTabs(tabTriggers, tabContents){
  tabTriggers.forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
      event.preventDefault();
      const path = event.currentTarget.dataset.path;  
      const parentData = isParentData(tabsBtn);
      tabContents.forEach(function(tabContent){
        if(tabContent.dataset != path && parentData == isParentData(tabContent)){
          tabContent.classList.remove('active')
        }
      })
      tabTriggers.forEach(function(tabTrigger){
        if(parentData == isParentData(tabTrigger)){
          tabTrigger.parentNode.classList.remove('active');
        }

      })
        document.querySelector(`[data-content="${path}"]`).classList.add('active');
        event.currentTarget.parentNode.classList.add('active');
    });
  });
}
myTabs(document.querySelectorAll('.language-link'), document.querySelectorAll('.catalog__content'));
myTabs(document.querySelectorAll('.catalog__accordion-link'), document.querySelectorAll('.catalog__artists-item'));
// Read more
$('.event__info').readmore({
  speed: 500,
  collapsedHeight: 255,
  lessLink: '<a href="#" class="event__btn-more">Скрыть</a>',
  moreLink: '<a href="#" class="event__btn-more">Подробнее</a>',
  embedCSS:false,
});
// load more
$('.event__info').readmore({
  speed: 500,
  collapsedHeight: 255,
  lessLink: '<a href="#" class="event__btn-more">Скрыть</a>',
  moreLink: '<a href="#" class="event__btn-more">Подробнее</a>',
  embedCSS:false,
});
function loadAll(btnTrigger){
  let cardsClass = '.' + btnTrigger.previousElementSibling.firstElementChild.className;
  btnTrigger.addEventListener('click', function(e){
    if(btnTrigger.classList.contains('active')){
      btnTrigger.classList.remove('active');
      btnTrigger.innerText = 'Все события';
      document.querySelectorAll(cardsClass).forEach(function(e){
        e.classList.remove('active');

      })
    }else{
      btnTrigger.classList.add('active');
      btnTrigger.innerText = 'Свернуть';
      document.querySelectorAll(cardsClass).forEach(function(e){
        e.classList.add('active');
        $(e.lastElementChild.lastElementChild.lastElementChild).readmore({
          speed: 500,
          collapsedHeight: 255,
          lessLink: '<a href="#" class="event__btn-more">Скрыть</a>',
          moreLink: '<a href="#" class="event__btn-more">Подробнее</a>',
          embedCSS:false,
        });
      })

    }
  })
}
loadAll(document.querySelector('.events__load-more'));
// Tooltip
tippy('.projects__tooltip', {
  trigger: 'focusin mouseenter',
  theme: 'gray',
  animation: 'scale',
  duration: 250,
  interactive: true,
});
// Burger
// document.querySelector('.header__burger-block').onclick = function(){
//     document.querySelector('.header__nav').classList.add('is-active');
//     document.querySelector('.header-top__container').classList.add('resize100');
// }
// document.querySelector('.header__nav-close').onclick = function(){
//     document.querySelector('.header__nav').classList.remove('is-active');
//     document.querySelector('.header-top__container').classList.remove('resize100');
// }



