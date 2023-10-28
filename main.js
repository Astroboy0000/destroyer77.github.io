// Header toogle

let MenuBtn = document.getElementById("MenuBtn");

MenuBtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  this.classList.toggle("fa-xmark");
});

// Typing Effect

let typed = new Typed(".auto-input", {
  strings: ["Front-End Developer!", "Freelancer!", "UI Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// Active Link State On Scroll
// Get ALL Links
let navLinks = document.querySelectorAll("nav ul li a");
// Get All Sections
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  const scrollpos = this.window.scrollY;
  sections.forEach((sections) => {
    if (
      scrollpos > sections.offsetTop &&
      scrollpos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (
          section.getAtribute("id") === link.getAttribute("href").substring(1)
        ) {
          link.classList.add("active");
        }
      });
    }
  });
});
