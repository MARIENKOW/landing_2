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
   name.nextElementSibling.style.height = '0px';
   // name.nextElementSibling.style.paddingTop = 0;
   // name.nextElementSibling.style.paddingBottom = 0;
   // name.nextElementSibling.style.marginTop = 0;
   // name.nextElementSibling.style.marginBottom = 0;
   name.nextElementSibling.classList.add('_a');
   name.addEventListener('click',function nameClick(){
      name.classList.toggle('_open');
      for(let j = 0;j<navs.length;j++){
         let nav = navs[j];
         if(j===i){
            _slideToggle(nav,500);
         }
      }
      // for(let d = 0;d<names.length;d++){
      //    let name = names[d];
      //    if (d !=i){
      //       name.classList.remove('_open');
      //    }
      // }
   })
}
let _slideUp = (target,duration = 500) => {
      if (!target.classList.contains('_sliide')){
         target.classList.add('_slide');
         target.classList.add('_a');
         // target.style.transitionProperty = 'height,margin,padding';
         // target.style.transitionDuration = duration + 'ms';
         // target.style.height = target.offsetHeight + 'px';
         // target.offsetHeight;
         target.style.height = '';
         // target.style.paddingTop = 0;
         // target.style.paddingBottom = 0;
         // target.style.marginTop = 0;
         // target.style.marginBottom = 0;
         window.setTimeout(()=>{
            // target.hidden =  true;
            // target.style.removeProperty('height');
            // target.style.removeProperty('padding-top');
            // target.style.removeProperty('padding-bottom');
            // target.style.removeProperty('margin-top');
            // target.style.removeProperty('margin-bottom');
            // target.style.removeProperty('overflow');
            // target.style.removeProperty('transition-duration');
            // target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
         },duration)
      }
}
let _slideDown = (target,duration = 500) => {
   if (!target.classList.contains('_sliide') && target.classList.contains('_a')){
      target.classList.add('_slide');
      if(target.hidden) {
         target.hidden = false;
      }
      let height = target.scrollHeight;
      target.style.transitionProperty = 'height,margin,padding';
      target.style.transitionDuration = duration + 'ms';
      // target.style.height = '';
      // target.style.paddingTop = 0;
      // target.style.paddingBottom = 0;
      // target.style.marginTop = 0;
      // target.style.marginBottom = 0;
      // target.offsetHeight;
      target.style.height = height + 'px';
      // target.style.removeProperty('padding-top');
      // target.style.removeProperty('padding-bottom');
      // target.style.removeProperty('margin-top');
      // target.style.removeProperty('margin-bottom');
      console.log(height);
      window.setTimeout(()=>{
         // target.style.removeProperty('height');
         // target.style.removeProperty('transition-duration');
         // target.style.removeProperty('transition-property');
         target.classList.remove('_slide');
         target.classList.remove('_a');
      },duration)
   }
}
let _slideToggle = (target,duration = 500) => {
   if (target.classList.contains('_a')){
      return _slideDown(target,duration);
   } else {
      return _slideUp(target,duration);
   }
}
