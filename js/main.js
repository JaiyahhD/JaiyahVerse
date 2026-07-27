document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       MOBILE NAVIGATION
    ===================================== */

    const menuButton = document.querySelector(".mobile-menu-button");
    const navMenu = document.querySelector(".nav-menu");

    if (menuButton && navMenu) {

        menuButton.addEventListener("click", () => {

            const isOpen = navMenu.classList.toggle("open");

            menuButton.classList.toggle("open", isOpen);

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });


        const navigationLinks = navMenu.querySelectorAll("a");

        navigationLinks.forEach((link) => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("open");
                menuButton.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =====================================
       FEATURED BOOK CAROUSEL
    ===================================== */

    const carousel = document.querySelector(
        "#featured-book-carousel"
    );

    const previousButton = document.querySelector(
        ".carousel-prev"
    );

    const nextButton = document.querySelector(
        ".carousel-next"
    );


    if (carousel && previousButton && nextButton) {

        const getScrollAmount = () => {

            const firstBook = carousel.querySelector(
                ".carousel-book"
            );

            if (!firstBook) {
                return 300;
            }

            const carouselStyles = window.getComputedStyle(
                carousel
            );

            const gap = parseFloat(
                carouselStyles.columnGap ||
                carouselStyles.gap ||
                "0"
            );

            return firstBook.offsetWidth + gap;

        };


        previousButton.addEventListener("click", () => {

            carousel.scrollBy({
                left: -getScrollAmount(),
                behavior: "smooth"
            });

        });


        nextButton.addEventListener("click", () => {

            carousel.scrollBy({
                left: getScrollAmount(),
                behavior: "smooth"
            });

        });


        carousel.addEventListener("keydown", (event) => {

            if (event.key === "ArrowLeft") {

                carousel.scrollBy({
                    left: -getScrollAmount(),
                    behavior: "smooth"
                });

            }

            if (event.key === "ArrowRight") {

                carousel.scrollBy({
                    left: getScrollAmount(),
                    behavior: "smooth"
                });

            }

        });

    }


    /* =====================================
       NEWSLETTER PLACEHOLDER
    ===================================== */

    const newsletterForm = document.querySelector(
        ".newsletter-form"
    );

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const emailInput = newsletterForm.querySelector(
                'input[type="email"]'
            );

            if (!emailInput || !emailInput.value.trim()) {
                return;
            }

            alert(
                "Thank you for joining the JaiyahVerse!"
            );

            newsletterForm.reset();

        });

    }

});