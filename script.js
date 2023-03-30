const sliderCard = document.querySelectorAll('.slider-card');
const sliderLine = document.querySelector('.slider__slider-line');
let count = 0;
let width;


if (window.screen.width >= 540) {

   function init() {
      console.log('resize');
      width = document.querySelector('.section-five__slider').offsetWidth; //ширина слайдера
      sliderLine.style.width = width * sliderCard.length + 'px';
      sliderCard.forEach(item => {
         item.style.width = width + 'px';

      });

   }

   window.addEventListener('resize', init);
   init();




   document.querySelector('.section-five__sider-button-prev').addEventListener('click', function () {
      count--;
      if (count < 0) {
         count = sliderCard.length - 1;
      }
      rollSlider();
   });

   document.querySelector('.section-five__sider-button-next').addEventListener('click', function () {
      count++;
      if (count >= sliderCard.length) {
         count = 0;
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




