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

//buttons 

const tabLogo = document.querySelector(".head__main-logo");

tabLogo.addEventListener("click", function () {
   tabLogo.onclick = document.location.href = "/taste-eat/index.html";
});

//popup

const tabClosePopup = document.querySelector(".popup-close");
const tabCloseBg = document.querySelector(".popup-background");
const tabCloseWindow = document.querySelector(".popup");

tabClosePopup.addEventListener("click", function () {

   tabCloseBg.classList.toggle("active");
   tabCloseWindow.classList.toggle("active");
   bodyLock.classList.remove("lock");

});

const tabBtnAllDishes = document.querySelector(".section-dishes__button");

tabBtnAllDishes.addEventListener("click", function () {
   tabCloseWindow.classList.toggle("active");
   tabCloseBg.classList.toggle("active");
   bodyLock.classList.toggle("lock");
});

const tabBtnAllDishesTwo = document.querySelector(".section-eight__button");

tabBtnAllDishesTwo.addEventListener("click", function () {
   tabCloseWindow.classList.toggle("active");
   tabCloseBg.classList.toggle("active");
   bodyLock.classList.toggle("lock");
});

document.querySelector('.popup-background').addEventListener('click', () => {
   tabCloseWindow.classList.toggle("active");
   tabCloseBg.classList.toggle("active");
   bodyLock.classList.toggle("lock");
});

//валидность reservation

let form = document.querySelector('.form-reservation'); //форма
let inputs = document.querySelectorAll('.section-eleven__reservation_input'); //общий класс

let inputEmail = document.querySelector('.input-email');
let inputPersons = document.querySelector('.input-persons');

//проверка почты

function validateEmail(email) {
   let regular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return regular.test(String(email).toLowerCase());
}

//проверка количества человек

function validateNumber(number) {
   let regular = /^\d{1,}$/;
   return regular.test(String(number));
}

form.onsubmit = function () {

   let personVal = inputPersons.value;
   let emailVal = inputEmail.value;

   if (validateEmail(emailVal) & validateNumber(personVal)) {

      let messageBooking = 'You have successfully booked a table';
      let messageWindow = document.createElement('div');
      messageWindow.classList.add('message-for-reservation');
      messageWindow.innerText = messageBooking;

      document.body.appendChild(messageWindow);
      setTimeout(
         () => {
            messageWindow.remove();
         },
         3000
      );
   }


   let formReservation = document.getElementById('form-reservation-id');
   let buttonClear = document.getElementById('button-clear');
   buttonClear.addEventListener('click', () => formReservation.reset());

   return false;
}

let formSubs = document.querySelector('.footer__form'); //форма

formSubs.onsubmit = function () {

   let inputEmailSubs = document.querySelector('.footer__email');

   let emailSubsVal = inputEmailSubs.value;

   if (validateEmail(emailSubsVal)) {

      let messageSubscribe = 'Thanks for Subscribing to the TeasteEat newseller';
      let messageSubscribeWindow = document.createElement('div');
      messageSubscribeWindow.classList.add('message-window-subscribe');
      messageSubscribeWindow.innerText = messageSubscribe;

      document.body.appendChild(messageSubscribeWindow);
      setTimeout(
         () => {
            messageSubscribeWindow.remove();
         },
         3000
      );
   }

   document.getElementById('input-sbcrb-email').value = ''

   return false;
}

//плавный скролл к якорю

const anchors = document.querySelectorAll('a.scroll-smooth')

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href')

      document.querySelector(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      })
   })
}

// кнопка scroll-to-top

const goTopBtn = document.querySelector('.go-top');

goTopBtn.addEventListener("click", goTop);
window.addEventListener("scroll", trackScroll);

function trackScroll() {
   const offset = window.pageYOffset;
   const heightWindow = document.documentElement.clientHeight; //определение высоты окна браузера

   if (offset > heightWindow) {
      goTopBtn.classList.add("show");
   } else {
      goTopBtn.classList.remove("show");
   }
}

function goTop() {

   if (window.pageYOffset > 0) {
      window.scrollBy(0, -50);
      setTimeout(goTop, 0);
   }
}