const sliderCard = document.querySelectorAll('.slider-card');
const sliderLine = document.querySelector('.slider__slider-line');
let count = 0;
let width;

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