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

function getParent(elemSelector, parentSelector) {
  let parents = document.querySelectorAll(parentSelector);
  for (let i = 0; i < parents.length; i++) {
    let parent = parents[i];
    if (parent.contains(elemSelector)) {
      return parent;
    }
  }
  return;
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

function startActive(element){
    let cardWidth = element.offsetWidth;
    if(cardWidth <= document.body.offsetWidth/3){
      return 3;
    }else if(cardWidth <= document.body.offsetWidth/2){
      return 2;
    }else return 1;
}

function startHidden(list, amount){
  if(list.length>amount){
    for(let i = amount; i<list.length; i++){
      list[i].classList.add('hidden');
    }
  }
}


function loadAll(btnTrigger){
  btnTrigger.addEventListener('click', function(e){
    let cardsClass = '.' + btnTrigger.previousElementSibling.firstElementChild.className;
    if(btnTrigger.classList.contains('active')){
      btnTrigger.classList.remove('active');
      btnTrigger.innerText = 'Все события';
      startHidden(document.querySelectorAll(cardsClass), startActive(document.querySelector(cardsClass)));
    }else{
      btnTrigger.classList.add('active');
      btnTrigger.innerText = 'Свернуть';
      document.querySelectorAll(cardsClass).forEach(function(el){
        el.classList.remove('hidden');
      })
    }

    $('.event__info').readmore({
      speed: 500,
      collapsedHeight: 255,
      lessLink: '<a href="#" class="event__btn-more">Скрыть</a>',
      moreLink: '<a href="#" class="event__btn-more">Подробнее</a>',
      embedCSS:false,
    });
  })
}

startHidden(document.querySelectorAll('.events__item'), startActive(document.querySelector('.events__item')));
loadAll(document.querySelector('.events__load-more'));






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
