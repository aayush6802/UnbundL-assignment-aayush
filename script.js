// const dropDown = document.querySelector('.dropdown');

const dropDown = document.querySelector(".dropDown");

const BookBtn = document.querySelector(".BookBtn");
const helpBTn = document.querySelector(".help-btn");

dropDown.addEventListener("click", function (e) {
  console.log(e.target);
  const submenu = document.querySelector(".submenu");
  document.querySelector(".form-container").style.display = "none";
  document.querySelector(".help-card").style.display = "none";

  if (submenu.style.display === "none") {
    submenu.style.display = "block";
  } else {
    submenu.style.display = "none";
  }
});

BookBtn.addEventListener("click", function (e) {
  document.querySelector(".submenu").style.display = "none";
  document.querySelector(".help-card").style.display = "none";
  const formContainer = document.querySelector(".form-container");

  if (formContainer.style.display === "none") {
    formContainer.style.display = "block";
  } else {
    formContainer.style.display = "none";
  }
});



helpBTn.addEventListener("click", function (e) {
  document.querySelector(".submenu").style.display = "none";
  document.querySelector(".form-container").style.display = "none";
  const helpCard = document.querySelector(".help-card");

  if (helpCard.style.display === "none") {
    helpCard.style.display = "block";
  } else {
    helpCard.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const categories = document.querySelectorAll(".category");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      const category = this.getAttribute("data-category");

      categories.forEach((cat) => {
        if (cat.classList.contains(category)) {
          cat.classList.add("active");
        } else {
          cat.classList.remove("active");
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  let index = 0;

  function showNextSlide() {
    index = (index + 1) % 2; // Assuming there are only 2 slides
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(showNextSlide, 5000); // Change slide every 5 seconds
});

const imageContainer = document.querySelector(".image-container");

let isDown = false;
let startX;
let scrollLeft;

imageContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  imageContainer.classList.add("active");
  startX = e.pageX - imageContainer.offsetLeft;
  scrollLeft = imageContainer.scrollLeft;
});

imageContainer.addEventListener("mouseleave", () => {
  isDown = false;
  imageContainer.classList.remove("active");
});

imageContainer.addEventListener("mouseup", () => {
  isDown = false;
  imageContainer.classList.remove("active");
});

imageContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - imageContainer.offsetLeft;
  const walk = (x - startX) * 3; // Scroll speed
  imageContainer.scrollLeft = scrollLeft - walk;
});
