// // ---------- Mobile Menu
const hamburgerIcon = document.querySelector(".hamburgerIcon");
const navMenu = document.querySelector("menu");

hamburgerIcon.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburgerIcon.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeFunction(){ 
    navMenu.classList.toggle("active")
}
