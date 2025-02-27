document.addEventListener("DOMContentLoaded", function () {
    let lastScrollY = window.scrollY;
    let navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled"); // Adds background
        } else {
            navbar.classList.remove("scrolled"); // Removes background when at top
        }

        if (window.scrollY > lastScrollY) {
            navbar.classList.add("hidden"); // Hides navbar when scrolling down
        } else {
            navbar.classList.remove("hidden"); // Shows navbar when scrolling up
        }

        lastScrollY = window.scrollY;
    });
});
