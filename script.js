
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


   function slidePrev1() {
      console.log('slevaNaPravo');
   }


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



//540

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



function slideNextSwipe() {

   count++;
   if (count >= sliderCard.length) {
      count = 0;
   }
   rollSlider();

   function rollSlider() {
      sliderLine.style.transform = 'translate(-' + count * width + 'px)';
   }

   console.log('12');
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






// var touchstartX = 0;
// var touchstartY = 0;
// var touchendX = 0;
// var touchendY = 0;

// var gesuredZone = document.getElementById('slider-cards');

// gesuredZone.addEventListener('touchstart', function (event) {
//    touchstartX = event.screenX;
//    touchstartY = event.screenY;
// }, false);

// gesuredZone.addEventListener('touchend', function (event) {
//    touchendX = event.screenX;
//    touchendY = event.screenY;
//    handleGesure();
// }, false);

// function handleGesure() {
//    // var swiped = 'swiped: ';
//    if (touchendX < touchstartX) {
//       console.log('prprpr');
//    }
//    if (touchendX > touchstartX) {
//       console.log('plplpl');
//    }
//    if (touchendY < touchstartY) {
//       console.log('p2prpr');
//    }
//    if (touchendY > touchstartY) {
//       console.log('p7prpr');
//    }
//    if (touchendY == touchstartY) {
//       slideNext12();
//    }
// }


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

   if (Math.abs(xDiff) > Math.abs(yDiff)) {
      //r-l
      if (xDiff > 0) {
         slidePrevSwipe();
      }

      else {
         slideNextSwipe();
      };
   }

   x1 = null;
   y1 = null;
}








// let slideIndex = 0;

// let slides = document.getElementsByClassName(".section-five__slider_one");
// let sliderContainer = document.getElementsByClassName(".slider__slider-line")[0];

// // if (typeof sliderContainer !== 'undefined') {
// // };


// let touchStartX = 0;
// let touchEndX = 0;

// let MIN_SWIPE_DISTANCE = 50; // Minimum distance to trigger a swipe

// function showSlide(n) {
//    slides[slideIndex].style.display = "none";
//    slideIndex = (n + slides.length) % slides.length;
//    slides[slideIndex].style.display = "block";
// }

// Swipe gesture handling

// sliderContainer.addEventListener("touchstart", function (event) {
//    touchStartX = event.touches[0].clientX;
// });

// sliderContainer.addEventListener("touchend", function (event) {
//    touchEndX = event.changedTouches[0].clientX;
//    let swipeDistance = touchEndX - touchStartX;

//    if (swipeDistance > MIN_SWIPE_DISTANCE) {
//       // Swipe left to right
//       showSlide(-1);
//    } else if (swipeDistance < -MIN_SWIPE_DISTANCE) {
//       // Swipe right to left
//       showSlide(1);
//    }
// });
