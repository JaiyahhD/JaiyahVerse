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

// =========================
// CONTACT FORM
// =========================

const contactForm = document.querySelector(".official-contact-form");

if (contactForm) {

    const formStatus = contactForm.querySelector(".form-status");
    const submitButton = contactForm.querySelector(".contact-submit-button");

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const formData = new FormData(contactForm);

        // Save original button text
        const originalButtonText = submitButton.textContent;

        // Loading state
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        formStatus.textContent = "";

        try {

            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                formStatus.textContent =
                    "Message received. 🦋 I’ll be in touch soon!";

                formStatus.classList.remove("error");
                formStatus.classList.add("success");

                contactForm.reset();

            } else {

                formStatus.textContent =
                    "Something went wrong. Please try again.";

                formStatus.classList.remove("success");
                formStatus.classList.add("error");

            }

        } catch (error) {

            formStatus.textContent =
                "Something went wrong. Please try again.";

            formStatus.classList.remove("success");
            formStatus.classList.add("error");

        } finally {

            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;

        }

    });

}