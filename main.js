// showing navbar when click menu btn on mobile view
const mobile = document.querySelector(".menu-toggle");
const mobileLink = document.querySelector(".sidebar");

mobile.addEventListener("click", function () {
  mobile.classList.toggle("is-active");
  mobileLink.classList.toggle("active");
});

//close menu when click
mobileLink.addEventListener("click", function () {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
  }
});

//move menu right and left

// let step = 100;
// let stepFilter = 60;
// let scrolling = true;

// $(".back").bind("click", function (e) {
//   e.preventDefault();
//   $("highlight-wrapper").animate({
//     scrollLeft: "-=" + step + "px",
//   });
// });

// $(".next").bind("click", function (e) {
//   e.preventDefault();
//   $("highlight-wrapper").animate({
//     scrollLeft: "+=" + step + "px",
//   });
// });

let scrollContainer = document.querySelector(".highlight-wrapper");
let backBtn = document.querySelector(".back");
let nextBtn = document.querySelector(".next");

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
});
nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 200;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 200;
});

// move menu category

let scrollCategory = document.querySelector(".filter-wrapper");
let backMenuBtn = document.querySelector(".back-menus");
let nextMenuBtn = document.querySelector(".next-menus");

scrollCategory.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollCategory.scrollLeft += e.deltaY;
});
nextMenuBtn.addEventListener("click", () => {
  scrollCategory.style.scrollBehavior = "smooth";
  scrollCategory.scrollLeft += 100;
});

backMenuBtn.addEventListener("click", () => {
  scrollCategory.style.scrollBehavior = "smooth";
  scrollCategory.scrollLeft -= 100;
});
