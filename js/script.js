// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

//when supplements menu is clicked

document.querySelector("#supplements").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Click outside of sidebar to disappear nav
const supplements = document.querySelector("#supplements");

document.addEventListener("click", function (e) {
  if (!supplements.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
