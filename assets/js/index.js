// Animations logic
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


// Darkmode logic
const darkModeToggle = document.getElementById('darkmode-toggle');
const inHome = document.getElementById('in-home');
const socialMediaLinks = document.querySelectorAll('.social-media-link');
const notInHomeLinks = document.querySelectorAll('.not-in-home-link');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('body-darkmode'); 
    
    inHome.classList.toggle('in-home-darkmode');

    notInHomeLinks.forEach(notInHomeLink => {
        notInHomeLink.classList.toggle('not-in-home-link-darkmode');
    });

    darkModeToggle.classList.toggle('button-toggle-darkmode');
    
    socialMediaLinks.forEach(socialMediaLink => {
        socialMediaLink.classList.toggle('social-media-link-darkmode');
    });
});