alert("main.js loaded");

document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector(".mobile-menu-button");
    const menu = document.querySelector(".nav-menu");

    if (!button || !menu) {
        alert("menu elements NOT found");
        return;
    }

    alert("menu elements found");

    button.addEventListener("click", function () {

        alert("hamburger clicked");

        menu.classList.toggle("open");
        button.classList.toggle("open");

    });

});