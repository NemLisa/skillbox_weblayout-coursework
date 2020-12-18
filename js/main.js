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
let navList = document.querySelector('.header-bottom__list');

navList.onmouseover = function(event){
    const target = event.target.closest('.header-bottom__list-item');
    openDropdown(target);
}
navList.onmouseout = function(event){
    const target = event.target.closest('.header-bottom__list-item');
    closeDropdown(target);
}
navList.onclick = function(event){
    const target = event.target.closest('.header-bottom__list-item');
    dropDownClick(target);
}
let index = 0;

navList.onkeydown = function(event){
    const target = event.target.closest('.header-bottom__list-item');
    if(event.keyCode == 9){
        closeDropdown(target);
    }

    if(event.keyCode == 38 || event.keyCode == 40){

        let dropdownItems = target.querySelector('.header__dropdown-block').querySelectorAll('.dropdown-link');
        if(document.activeElement == target.querySelector('.header-bottom__list-link')){
            index = 0;
        }else{
            switch(event.keyCode){
                case 38:  
                    index--;     
                    break;
                case 40:
                    index++;
                    break;
            }
        }
        if(index>dropdownItems.length-1){
            index = dropdownItems.length-1;
        }
        if(index < 0 ){
           index=0;
        }
        dropdownItems[index].focus();
    }
}


navList.querySelectorAll(".header-bottom__list-item").forEach(element => {
    element.querySelector(".header-bottom__list-link").onfocus = function(event){
        openDropdown(element);
    }

});


function dropDownClick(item){
    if(item.querySelector('.header-bottom__list-link').classList.contains('is-active')){
        closeDropdown(item);
    }else{
    openDropdown(item);
    }
}

function openDropdown(item){
    if(!item) return;
    item.querySelector('.header__dropdown-block').hidden = false;
    item.querySelector('.header-bottom__list-link').classList.add('is-active');
}

function closeDropdown(item){
    if(!item) return;
    item.querySelector('.header__dropdown-block').hidden = true;
    item.querySelector('.header-bottom__list-link').classList.remove('is-active');
}

// Burger
document.querySelector('.header__burger-block').onclick = function(){
    document.querySelector('.header__nav').classList.add('is-active');
    document.querySelector('.header-top__container').classList.add('resize100');
}
document.querySelector('.header__nav-close').onclick = function(){
    document.querySelector('.header__nav').classList.remove('is-active');
    document.querySelector('.header-top__container').classList.remove('resize100');
}
