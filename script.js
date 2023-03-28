let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider__slider-line');

let sliderCard = document.querySelector('.section-five__slider_one');

// if (window.screen.width <= 420) {

//    document.querySelector('.section-five__sider-button-left').addEventListener('click', function () {
//       offset = offset + 10;
//       if (offset > 1200) {
//          offset = 0;
//       }
//       sliderLine.style.left = -offset + 'px';
//    });

//    document.querySelector('.section-five__sider-button-right').addEventListener('click', function () {
//       offset = offset - 10;
//       if (offset < 0) {
//          offset = 1200;
//       }
//       sliderLine.style.left = -offset + 'px';

//    });
// };

document.querySelector('.section-five__sider-button-left').addEventListener('click', function () {
   offset = offset + 280;
   if (offset > 1200) {
      offset = 0;
   }
   sliderLine.style.left = -offset + 'px';
});

document.querySelector('.section-five__sider-button-right').addEventListener('click', function () {
   offset = offset - 280;
   if (offset < 0) {
      offset = 1200;
   }
   sliderLine.style.left = -offset + 'px';

});
