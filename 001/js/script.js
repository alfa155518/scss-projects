const bars = document.querySelector("header i");

const navBar = document.querySelector("nav");

bars.addEventListener("click", () => {
  navBar.classList.toggle("appear");
});
