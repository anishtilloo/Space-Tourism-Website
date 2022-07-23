const navbarList = document.querySelector(".navbar-list");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", function (event) {
  const visibility = navbarList.getAttribute("data-visible");

  console.log(visibility);
  if (visibility === "false") {
    navbarList.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
  } else if (visibility === "true") {
    navbarList.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  }
});
