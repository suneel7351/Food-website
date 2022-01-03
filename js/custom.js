let navBar = document.querySelector(".navigation");
console.log(navBar);
window.onscroll = function () {
  if (document.documentElement.scrollTop > 21) {
    navBar.classList.add("onScroll");
  } else {
    navBar.classList.remove("onScroll");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 1287, 3000);
  counter("count2", 100, 5786, 2500);
  counter("count3", 0, 1440, 3000);
  counter("count4", 0, 7110, 3000);
});
let navLink = document.querySelectorAll(".nav-link");
let collapse = document.querySelector(".collapse.navbar-collapse");

navLink.forEach(function (a) {
  a.addEventListener("click", () => {
    collapse.classList.remove("show");
  });
});
