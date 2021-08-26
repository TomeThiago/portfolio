// // ---------- Mobile Menu
const hamburgerIcon = document.querySelector(".hamburgerIcon");
const navMenu = document.querySelector("menu");
const menuListItem = document.querySelectorAll("menu-list-item");

hamburgerIcon.addEventListener("click", mobileMenu);

menuListItem.forEach(ele => closeFunction)

function mobileMenu() {
    hamburgerIcon.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeFunction(){ 
    navMenu.classList.toggle("active")
}

