const mobileNavBtn = document.querySelector(".mobile-nav-btn");
const header = document.querySelector(".header");

mobileNavBtn.addEventListener("click", function () {
    header.classList.toggle("show-mobile-nav");
    const iconOpen = document.querySelector(".icon-mobile-nav.open");
    const iconClose = document.querySelector(".icon-mobile-nav.close");

    if (header.classList.contains("show-mobile-nav")) {
        iconOpen.style.display = "none";
        iconClose.style.display = "block";
    } else {
        iconOpen.style.display = "block";
        iconClose.style.display = "none";
    }
});
