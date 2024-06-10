const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

hamburgerBtn.addEventListener("click", () => {
    header.classList.toggle("show-mobile-menu");
    console.log("Hamburger button clicked!");
});

closeMenuBtn.addEventListener("click", () => {
    header.classList.remove("show-mobile-menu");
    console.log("Close button clicked!");
});