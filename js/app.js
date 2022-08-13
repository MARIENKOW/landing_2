let header = document.querySelector('.header');
let wrapper = document.documentElement;
let navigation = document.querySelectorAll('.header__navigation');
let body = document.querySelector('body');
let burger = document.querySelector('.header__burger');
if (header != null){
   window.addEventListener('scroll',function headerScroll(){
      
      let headerTop = wrapper.getBoundingClientRect().top;
      if(headerTop<=-50){
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
            header.classList.toggle('_active');
            if(header.classList.contains('_active')){
               body.style.cssText = 
                  `overflow:hidden;

                  `
               header.style.width = `${headerDif}px`
            }else{
               body.style.cssText = ``;
               header.style.width = ``
            }
   });
}
