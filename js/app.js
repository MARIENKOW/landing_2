let header = document.querySelector('.header');
let headerInner = document.querySelector('.header__inner');
let wrapper = document.documentElement;
let navigation = document.querySelectorAll('.header__navigation');
let body = document.querySelector('body');
let burger = document.querySelector('.header__burger');
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
let names = document.querySelectorAll('.footer__name');
let navs = document.querySelectorAll('.footer__nav');
for(let i =0; i<names.length;i++){
   let name = names[i];
   let overflow = getComputedStyle(name).overflow;
   if(overflow === 'hidden'){
      name.nextElementSibling.style.height = '0px';
      name.nextElementSibling.classList.add('_a');
      name.addEventListener('click',function nameClick(){
         name.classList.toggle('_open');
         for(let j = 0;j<navs.length;j++){
            let name = names[j];
            let nav = navs[j];
            if(j===i){
               _slideToggle(nav,500);
            }else{
               _slideUp(nav,500);
               name.classList.remove('_open');
            }
         }
      })
   }
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
