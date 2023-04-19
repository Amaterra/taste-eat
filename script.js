
const sliderCard = document.querySelectorAll('.slider-card');
const sliderLine = document.querySelector('.slider__slider-line');
let count = 0;
let width;

if (window.screen.width >= 540) {

   function init() {

      width = document.querySelector('.section-five__slider').offsetWidth; //ширина слайдера
      sliderLine.style.width = width * sliderCard.length + 'px';
      sliderCard.forEach(item => {
         item.style.width = width + 'px';
      });
   }

   window.addEventListener('resize', init);
   init();

   //btn slide next 

   document.querySelector('.section-five__sider-button-next').addEventListener('click', function () {
      count++;
      if (count >= sliderCard.length) {
         count = 0;
      }
      rollSlider();

      function rollSlider() {
         sliderLine.style.transform = 'translate(-' + count * width + 'px)';
      }
   })

   //btn slide prev

   document.querySelector('.section-five__sider-button-prev').addEventListener('click', function () {
      count--;
      if (count < 0) {
         count = sliderCard.length - 1;
      }
      rollSlider();
   });

   function rollSlider() {
      sliderLine.style.transform = 'translate(-' + count * width + 'px)';
   }
}

//<= 540px width screen

const sliderCardOne = document.querySelectorAll('.section-five__slider_one');

if (window.screen.width <= 539) {
   function init1() {
      console.log('resize1');
      width = document.querySelector('.section-five__slider').offsetWidth; //ширина слайдера
      sliderLine.style.width = width * sliderCardOne.length + 'px';
      sliderCardOne.forEach(item => {
         item.style.width = width + 'px';

      });
   }

   window.addEventListener('resize', init1);
   init1();

   document.querySelector('.section-five__sider-button-prev').addEventListener('click', function () {
      count--;
      if (count < 0) {
         count = sliderCardOne.length - 1;
      }
      rollSlider1();
   });

   document.querySelector('.section-five__sider-button-next').addEventListener('click', function () {
      count++;
      if (count >= sliderCardOne.length) {
         count = 0;
      }
      rollSlider1();
   });

   function rollSlider1() {
      sliderLine.style.transform = 'translate(-' + count * width + 'px)';
   }
}

//swipe

function slideNextSwipe() {
   count++;
   if (count >= sliderCard.length) {
      count = 0;
   }
   rollSlider();

   function rollSlider() {
      sliderLine.style.transform = 'translate(-' + count * width + 'px)';
   }
}

function slidePrevSwipe() {
   count--;
   if (count < 0) {
      count = sliderCard.length - 1;
   }
   rollSlider();

   function rollSlider() {
      sliderLine.style.transform = 'translate(-' + count * width + 'px)';
   }
}

function slideNextSwipe540width() {
   count++;
   if (count >= sliderCardOne.length) {
      count = 0;
   }
   rollSlider();

   function rollSlider() {
      sliderLine.style.transform = 'translate(-' + count * width + 'px)';
   }
}

function slidePrevSwipe540width() {
   count--;
   if (count < 0) {
      count = sliderCardOne.length - 1;
   }
   rollSlider();

   function rollSlider() {
      sliderLine.style.transform = 'translate(-' + count * width + 'px)';
   }
}

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
   const firstTouch = event.touches[0];
   x1 = firstTouch.clientX;
   y1 = firstTouch.clientY;
}

function handleTouchMove(event) {
   if (!x1 || !y1) {
      return false;
   }
   let x2 = event.touches[0].clientX;
   let y2 = event.touches[0].clientY;


   let xDiff = x2 - x1;
   let yDiff = y2 - y1;

   if (window.screen.width >= 540) {

      if (Math.abs(xDiff) > Math.abs(yDiff)) {

         if (xDiff > 0) {
            slidePrevSwipe();
         }

         else {
            slideNextSwipe();
         };
      }
   }

   if (window.screen.width < 540) {

      if (Math.abs(xDiff) > Math.abs(yDiff)) {

         if (xDiff > 0) {
            slidePrevSwipe540width();
         }

         else {
            slideNextSwipe540width();
         };
      }
   }

   x1 = null;
   y1 = null;
}

// burger menu

const tabBurgerMenu = document.querySelector(".head__burger");
const tabNavigation = document.querySelector(".burger-menu");
const bodyLock = document.querySelector(".body");
const tabNavLink = document.querySelector(".navigation");

tabBurgerMenu.addEventListener("click", function () {
   tabBurgerMenu.classList.toggle("active");
   tabNavigation.classList.toggle("active");
   bodyLock.classList.toggle("lock");
});

tabNavLink.addEventListener("click", function () {
   tabNavigation.classList.remove("active");
   tabBurgerMenu.classList.remove("active");
   bodyLock.classList.remove("lock");
})
