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
   let j = null;
   name.addEventListener('click',function nameClick(){
      name.classList.toggle('_open');
      j = i;
      for(let d = 0;d<names.length;d++){
         let name = names[d];
         if (d !=j){
            name.classList.remove('_open');
         }
      }
   })
}