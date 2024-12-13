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
    const aboutBox = document.getElementById('about-box');

    if (isElementInViewport(joinBox) && !joinBox.classList.contains('active')) {
        joinBox.classList.add('active');
    }

    if (isElementInViewport(aboutBox) && !aboutBox.classList.contains('active')) {
        aboutBox.classList.add('active');
    }
}

function animateHeaderOnLoad() {
    const header = document.querySelector('header');
    header.classList.add('active');
}

window.addEventListener('scroll', animateOnScroll);
document.addEventListener('DOMContentLoaded', animateHeaderOnLoad);

// Darkmode logic
const darkModeToggle = document.getElementById('darkmode-toggle');
const inProfile = document.getElementById('in-profile');
const notInProfileLinks = document.querySelectorAll('.not-in-profile-link');
const initiativesWorked = document.querySelectorAll('.initiative-worked');
const socialMediaLinks = document.querySelectorAll('.social-media-link');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('body-darkmode'); 
    
    inProfile.classList.toggle('in-profile-darkmode');

    notInProfileLinks.forEach(notInProfileLink => {
        notInProfileLink.classList.toggle('not-in-profile-link-darkmode');
    });

    darkModeToggle.classList.toggle('button-toggle-darkmode');

    initiativesWorked.forEach(initiativeWorked => {
        initiativeWorked.classList.toggle('initiative-worked-darkmode');
    });
    
    socialMediaLinks.forEach(socialMediaLink => {
        socialMediaLink.classList.toggle('social-media-link-darkmode');
    });
});