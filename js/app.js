let header = document.querySelector('.header');
let headerInner = document.querySelector('.header__inner');
let wrapper = document.documentElement;
let navigation = document.querySelectorAll('.header__navigation');
let body = document.querySelector('body');
let burger = document.querySelector('.header__burger');
let names = document.querySelectorAll('.footer__name');
let navs = document.querySelectorAll('.footer__nav');
let sliders = document.querySelectorAll('._slider');
let bod = document.querySelector('.wrapper').children;
const links = document.querySelectorAll('.header__link');
const paralax = document.querySelector('.paralax');
const paralaxItem = document.querySelectorAll('.paralax__item');
const folow = document.querySelector('.folow');
const shop = document.querySelector('.shop');
const footer = document.querySelector('.footer');
const drink = document.querySelector('.drink');
const intro = document.querySelector('.intro');
const headerLogo = document.querySelector('.header__logo');
let paralaxScroll = document.querySelectorAll('.paralaxScrollItem');
const per = 70;
let x = 0;
let y = 0;
let prev=null;
let j = null;
let h = null;
let dbl = null;
let prevs = null;
let ev = new Event('click');
headerLogo.addEventListener('click',function(){
   if(headerInner.classList.contains('_active')){
   burger.dispatchEvent(ev);
}
   intro.scrollIntoView({
   behavior:'smooth',
   })
});
// headerInner.addEventListener('click',function(event){
//    for(let element of event.path){
//       if (element === headerLogo){
//          if(headerInner.classList.contains('_active')){
//             burger.dispatchEvent(ev);
//          }
//          console.log(element);
//          intro.scrollIntoView({
//             behavior:'smooth',
//          })
//       }
//    }
//    for(let i = 0;i<links.length;i++){
//       const link = links[i];
//       if(event.target === links[0] && i ===0){
//          shop.scrollIntoView({
//             behavior:"smooth",
//          })
//          if(headerInner.classList.contains('_active')){
//             burger.dispatchEvent(ev);
//          }
//       }else if(event.target === links[1] && i ===1){
//          footer.scrollIntoView({
//             behavior:"smooth",
//          })
//          if(headerInner.classList.contains('_active')){
//             burger.dispatchEvent(ev);
//          }
//       }else if(event.target === links[2] && i ===2){
//          drink.scrollIntoView({
//             behavior:"smooth",
//          })
//          if(headerInner.classList.contains('_active')){
//             burger.dispatchEvent(ev);
//          }
//       }else if(event.target === links[3] && i ===3){
//          folow.scrollIntoView({
//             behavior:"smooth",
//          })
//          if(headerInner.classList.contains('_active')){
//             burger.dispatchEvent(ev);
//          }
//       }else if(event.target === links[4] && i ===4){
//          if(headerInner.classList.contains('_active')){
//             burger.dispatchEvent(ev);
//          }
//       }else if(event.target === links[5] && i ===5){
//          if(headerInner.classList.contains('_active')){
//             burger.dispatchEvent(ev);
//          }
//       }
//    }
// })
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
      if(overflow === 'hidden'){
         if(!name.classList.contains('_open')){
            name.nextElementSibling.classList.add('_a');
            name.nextElementSibling.style.height = '0px';

         }
         name.classList.add('_hidden');

      }else{
         name.nextElementSibling.style.height = '';
         name.nextElementSibling.classList.remove('_a');
         name.classList.remove('_open');
         name.classList.remove('_hover');
         name.classList.remove('_hidden');

      }
   }
}
namesHeight();
window.addEventListener('resize',namesHeight);
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
      if(overflow === 'hidden'){
         if(!target.parentElement.classList.contains('_open')){
            target.nextElementSibling.classList.add('_a');
         }
         target.classList.add('_hidden');

      }else{
         target.nextElementSibling.style.flex = '';
         target.nextElementSibling.classList.remove('_a');
         target.parentElement.classList.remove('_open')
         target.classList.remove('_hidden');
      }
   }
}
copyrightFlex();
window.addEventListener('resize',copyrightFlex);
spoilerFlex();
for (let i = 0;i<bod.length;i++){
   let bodyElement = bod[i];
   let bk = bod.length - 1;

   if(i>1 && i<bk){
      bodyElement.classList.add('_animationStart')
   }
}
window.addEventListener('scroll',function(event){
   let break1 = window.scrollY + window.innerHeight - window.innerHeight/3;
   for (let i = 0;i<bod.length;i++){
      let bodyElement = bod[i];
      let bk = bod.length - 2;
      if(i>=1 && i <bk){
         let bodyTop = bodyElement.getBoundingClientRect().bottom + window.scrollY
         if(break1 >= bodyTop){
            bodyElement.nextElementSibling.classList.add('_animationEnd')

         }
      }
   }
})
paralax.addEventListener('mousemove',function mouse(event){
   x = event.clientX;
   y = event.clientY;

   const max = 30;
   const may = 10;
   let difX = paralax.offsetWidth/2-event.clientX;
   let dx = max*(difX/((paralax.offsetWidth/2) /100)/100)
   let difY = paralax.offsetHeight/2-event.clientY;
   let dy = may*(difY/((paralax.offsetHeight/2) /100)/100)
   if(!event.sourceCapabilities.firesTouchEvents){
      for(let i of paralaxItem){
         let pal = i;
         pal.style.transition = `0.1s`

         if (pal.classList.contains('min')){
            pal.style.transform = `translate3d(${-dx}px,${dy}px,${dx}px)`
         }else if(!pal.classList.contains('miny')){
            pal.style.transform = `translate3d(${dx}px,${-dy}px,${dx}px)`
         }else{
            pal.style.transform = `translate3d(${dx}px,${dy}px,0)`
         }
      }
   }
})
setInterval(function(){
   if (x === 0 && y ===0 && j !==x  && h !==y){
      for(let i of paralaxItem){
         i.style.transition = `1s`
         i.style.transform = ``
      }
   }
   j = x;
   h = y;
   x = 0;
   y = 0;
},300)
setInterval(function(){
   let sc = window.scrollY
   if(prevs === sc){
      if (dbl !== prevs){
         for(let i of paralaxScroll){
            setTimeout(function(){
               i.style.transition = `1s`;
               i.style.transform = ``;
            },500)
         }
         dbl = prevs;
      }
   }
   prevs = sc;
},300)
window.addEventListener('scroll',function(){
   for(let paralaxScrollItem of paralaxScroll){
      paralaxScrollItem.style.transition = `.3s`
      let test1 = paralaxScrollItem.getBoundingClientRect().top + this.window.scrollY + (paralaxScrollItem.offsetHeight/2)
      let test2 = this.window.scrollY + this.window.innerHeight/2;
      let test3 = (window.innerHeight+paralaxScrollItem.offsetHeight)/2;
      let test4 = test2-test1
      let test5 = test4 / test3
      let test6 = per * test5
      if (!paralaxScrollItem.classList.contains('_reverse')){
         paralaxScrollItem.style.transform = `translateY(${-test6}px)`
      }else{
         let per2 = 30;
         let test6 = per2 * test5
         paralaxScrollItem.style.transform = `translateY(${-test6}px)`
      }
   }
})