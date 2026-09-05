const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    menuBtn.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        menuBtn.classList.remove("active");
    });
});

document.addEventListener("click", event => {
    if (!menuBtn.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove("show");
        menuBtn.classList.remove("active");
    }
});
