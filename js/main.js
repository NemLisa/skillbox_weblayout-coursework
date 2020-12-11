
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
