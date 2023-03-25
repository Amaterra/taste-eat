let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider__slider-line');

document.querySelector('.section-five__sider-button-left').addEventListener('click', function () {
   offset = offset + 280;
   if (offset > 1188) {
      offset = 0;
   }
   sliderLine.style.left = -offset + 'px';


});


document.querySelector('.section-five__sider-button-right').addEventListener('click', function () {
   offset = offset - 280;
   if (offset < 0) {
      offset = 1188;
   }
   sliderLine.style.left = -offset + 'px';


});