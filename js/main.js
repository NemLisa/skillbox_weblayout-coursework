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

function myTabs(tabTriggers, tabContents, dataParentContent = ''){
  tabTriggers.forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
      event.preventDefault();
      const path = event.currentTarget.dataset.path;
      
      tabContents.forEach(function(tabContent){
        tabContent.classList.remove('active')
      })
      tabTriggers.forEach(function(tabTrigger){
        tabTrigger.parentNode.classList.remove('active')
      })

      const parentData = isParentData(tabsBtn);
      if(parentData!=undefined && parentData.includes(dataParentContent)){
        document.querySelector(`[data-content="${parentData}"]`).querySelector(`[data-content="${path}"]`).classList.add('active');

        document.querySelectorAll(`[data-content="${path}"]`).forEach(function(e){
          e.classList.add('active');
          
        })

        document.querySelectorAll('.ui-accordion-content').forEach(function(e){
          e.style.display = 'none';
        })
        document.querySelectorAll(`[data-path="${path}"]`).forEach(function(e){
            e.parentNode.classList.add('active');
          getParent(e,'.ui-accordion-content').style.display = 'block';
        })

      }else{
        document.querySelector(`[data-content="${path}"]`).classList.add('active');
      }
        event.currentTarget.parentNode.classList.add('active');
    });
  });
}

myTabs(document.querySelectorAll('.language-link'), document.querySelectorAll('.catalog__content'));
myTabs(document.querySelectorAll('.catalog__accordion-link'), document.querySelectorAll('.catalog__artists-item'), 'catalog');



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
