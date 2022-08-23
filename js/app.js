let header = document.querySelector('.header');
let headerInner = document.querySelector('.header__inner');
let wrapper = document.documentElement;
let navigation = document.querySelectorAll('.header__navigation');
let body = document.querySelector('body');
let burger = document.querySelector('.header__burger');
let names = document.querySelectorAll('.footer__name');
let navs = document.querySelectorAll('.footer__nav');
let sliders = document.querySelectorAll('._slider');

let prev=null;
if (header != null){
   window.addEventListener('scroll',function headerScroll(){
      let headerTop = window.scrollY;
      if(headerTop>=50){
         header.classList.add('_fixed');
      }else{
         header.classList.remove('_fixed');
      }
   })
}
if (burger != null){
   burger.addEventListener('click',function burgerClick(){
      let scrollWidth = window.innerWidth-wrapper.clientWidth;
      let headerDif = window.innerWidth-scrollWidth;
            headerInner.classList.toggle('_active');
            if(headerInner.classList.contains('_active')){
               body.style.cssText = 
                  `overflow:hidden;
                  padding-right:${scrollWidth}px;
                  `
               header.style.width = `${headerDif}px`
            }else{
               body.style.cssText = ``;
               header.style.width = ``
            }
   });
}
let _slideUp = (target,duration = 500) => {
      if (!target.classList.contains('_a')){
         target.classList.add('_a');
         target.style.height = '0px';
      }
}
let _slideDown = (target,duration = 500) => {
   if (target.classList.contains('_a')){
      target.classList.remove('_a');
      let height = target.scrollHeight;
      target.style.height = height + 'px';
   }
}
let _slideToggle = (target,duration = 500) => {
   if (target.classList.contains('_a')){
      return _slideDown(target,duration);
   } else {
      return _slideUp(target,duration);
   }
}
function spoiler(){
   for(let i =0; i<names.length;i++){
      let name = names[i];
         name.addEventListener('click',function nameClick(){
            if(name.classList.contains('_hidden')){
               name.classList.toggle('_open');
               for(let j = 0;j<navs.length;j++){
                  let name = names[j];
                  let nav = navs[j];
                  if(j <= i && prev === i){
                     name.classList.toggle('_hover');
                  }else if(j <= i && prev !== i){
                     name.classList.add('_hover');

                  }
                  else{
                     name.classList.remove('_hover');
                  }
                  if(j===i){
                     _slideToggle(nav,500);
                  }else{
                     _slideUp(nav,500);
                     name.classList.remove('_open');
                  }
               }
               prev = i;
            }
         })
   }
}
function namesHeight(){
   for(let i =0; i<names.length;i++){
      let name = names[i];
      let overflow = getComputedStyle(name).overflow;
      name.classList.remove('_open');
      name.classList.remove('_hover');
      if(overflow === 'hidden'){
         name.nextElementSibling.style.height = '0px';
         name.nextElementSibling.classList.add('_a');
         name.classList.add('_hidden');

      }else{
         name.nextElementSibling.style.height = '';
         name.nextElementSibling.classList.remove('_a');
         name.classList.remove('_hidden');

      }
   }
}
namesHeight();
// window.addEventListener('resize',namesHeight);
spoiler();
let _slideUpFlex = (target,duration = 500) => {
   if (!target.classList.contains('_a')){
      target.classList.add('_a');
      target.style.flex = '0 0 0';
   }
}
let _slideDownFlex = (target,duration = 500) => {
   if (target.classList.contains('_a')){
      target.classList.remove('_a');
      let height = target.scrollHeight;
      target.style.flex = `0 0 ${height}px`;
}
}
let _slideToggleFlex = (target,duration = 500) => {
   if (target.classList.contains('_a')){
      return _slideDownFlex(target,duration);
   } else {
      return _slideUpFlex(target,duration);
   }
}
function spoilerFlex(){
   for(let i=0;i<sliders.length;i++){
      let slider = sliders[i];
      slider.addEventListener('click',function copyrightClick(){
         if(slider.classList.contains('_hidden')){
            slider.parentElement.classList.toggle('_open');
            _slideToggleFlex(slider.nextElementSibling);
         }
      })
   }
}
function copyrightFlex(target){
   for(let slider of sliders){
      let target = slider;
      let overflow = getComputedStyle(target.nextElementSibling).overflow;
      target.parentElement.classList.remove('_open')
      if(overflow === 'hidden'){
         target.nextElementSibling.style.flex = '0 0 0';
         target.nextElementSibling.classList.add('_a');
         target.classList.add('_hidden');

      }else{
         target.nextElementSibling.style.flex = '';
         target.nextElementSibling.classList.remove('_a');
         target.classList.remove('_hidden');
      }
   }
}
copyrightFlex();
// window.addEventListener('resize',copyrightFlex);
spoilerFlex();


