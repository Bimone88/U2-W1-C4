window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const section = document.querySelector("section");

  const sectionHeight = section.offsetHeight;

  const scrollPosition = window.scrollY;

  if (scrollPosition > sectionHeight) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
