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
    if (isElementInViewport(joinBox)) {
        joinBox.classList.add('active');
        window.removeEventListener('scroll', animateOnScroll);
    }
}

window.addEventListener('scroll', animateOnScroll);