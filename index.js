document.addEventListener("DOMContentLoaded", function () {
  console.log("Booty Camp site loaded!");

  // Smooth scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Image hover effect
  document.querySelectorAll(".image img").forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.filter = "brightness(1.2)";
    });
    img.addEventListener("mouseleave", () => {
      img.style.filter = "brightness(1)";
    });
  });
});
