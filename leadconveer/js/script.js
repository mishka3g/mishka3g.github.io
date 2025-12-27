let headerBurger = document.querySelector(".header-burger");
let headerMob = document.querySelector(".header-mob");

headerBurger.addEventListener('click', () => {
  headerMob.classList.toggle("active");
  headerBurger.classList.toggle("active");
});
