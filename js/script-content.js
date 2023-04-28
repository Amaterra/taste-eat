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