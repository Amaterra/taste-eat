if (sliderCard.style.width < 255) {

   document.querySelector('.section-five__sider-button-left').addEventListener('click', function () {
      offset = offset + 50;
      if (offset > 1200) {
         offset = 0;
      }
      sliderLine.style.left = -offset + 'px';
   })

   document.querySelector('.section-five__sider-button-right').addEventListener('click', function () {
      offset = offset - 50;
      if (offset < 0) {
         offset = 1200;
      }
      sliderLine.style.left = -offset + 'px';


   });
};

if (window.screen.width < 500) {
   function init() {
      width = document.querySelector('slider').offsetWidth;
      sliderLine.style.width = width * sliderCard.length + 'px';
      sliderCard.forEach(item => {
         item.style.width = width + 'px';
      });

      rollSlider();
   }

   window.addEventListener('resize', init);

   // init();


   document.querySelector('.section-five__sider-button-left').addEventListener('click', function () {
      count++;
      if (count >= sliderCard.length) {
         count = 0;
      }
      rollSlider();
   });

};

function rollSlider() {
   sliderLine.style.transform = 'translate(- ' + count * width + 'px)';
};




