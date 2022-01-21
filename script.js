let hamburger = document.getElementById("hamburger");
let nav_list = document.getElementById("nav-list");

hamburger.addEventListener("click", () => {
  nav_list.classList.toggle("active");
});
