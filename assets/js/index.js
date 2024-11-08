function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateOnScroll() {
    const joinBox = document.getElementById('join-box');

    if (isElementInViewport(joinBox) && !joinBox.classList.contains('active')) {
        joinBox.classList.add('active');
    }
}

function animateHeaderOnLoad() {
    const header = document.querySelector('header');
    header.classList.add('active');
}

document.addEventListener('DOMContentLoaded', animateHeaderOnLoad);
window.addEventListener('scroll', animateOnScroll);