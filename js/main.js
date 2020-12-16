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


// DropDown
let navList = document.querySelector('.header-bottom_list');
let selectedItemBlock;
let selectedItem;
navList.onclick = function(event){
    let target = event.target.closest('.header-bottom_list-item');
    if(!target) return;
    if(!navList.contains(target)) return;
    openDropdown(target);
}
function openDropdown(item){
    if(selectedItemBlock && selectedItemBlock!==item.querySelector('.header__dropdown-block')){
        selectedItemBlock.hidden = true;
        selectedItem.classList.remove('is-active');
    }
    if(selectedItemBlock === item.querySelector('.header__dropdown-block')){
        selectedItemBlock.hidden = !selectedItemBlock.hidden;
        selectedItem.classList.toggle('is-active');
    }else{
        selectedItemBlock = item.querySelector('.header__dropdown-block');
        selectedItem = item.querySelector('.header-bottom_list-btn')
        selectedItemBlock.hidden = !selectedItemBlock.hidden;
        selectedItem.classList.toggle('is-active');
    }
}
document.addEventListener('click', function(e){
    let target = e.target;
    const itsMenu = target==navList||navList.contains(target);
    if(!itsMenu){        
        document.querySelectorAll('.header__dropdown-block').forEach(el => el.hidden = true );
        document.querySelectorAll('.header-bottom_list-btn').forEach(el => el.classList.remove('is-active'));
    }
})

// Scroll

Array.prototype.forEach.call(
    document.querySelectorAll('.header__dropdown'),
    el => new SimpleBar()
  );

