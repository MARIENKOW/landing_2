let header = document.querySelector('.header');
let wrapper = document.documentElement;
let navigation = document.querySelectorAll('.header__navigation');
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
let burger = document.querySelector('.header__burger');
let body = document.querySelector('body');
   burger.addEventListener('click',function burgerClick(){
      for(let i of navigation){
         let nav = i;
         nav.classList.toggle('_active');
         if(nav.classList.contains('_active')){
            body.style.overflow = 'hidden';
         }else{
            body.style.overflow = '';
         }
      }
      
   });
