// Animation logic
function animateHeaderOnLoad() {
    const joinBox = document.getElementById('join-box');
    joinBox.classList.add('active');
}

document.addEventListener('DOMContentLoaded', animateHeaderOnLoad);

// Darkmode logic
const darkModeToggle = document.getElementById('darkmode-toggle');
const inContact = document.getElementById('in-contact');
const notInContactLinks = document.querySelectorAll('.not-in-contact-link');
const socialMediaLinks = document.querySelectorAll('.social-media-link');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('body-darkmode'); 
    
    inContact.classList.toggle('in-contact-darkmode');

    notInContactLinks.forEach(notInContactLink => {
        notInContactLink.classList.toggle('not-in-contact-link-darkmode');
    });

    darkModeToggle.classList.toggle('button-toggle-darkmode');
    
    socialMediaLinks.forEach(socialMediaLink => {
        socialMediaLink.classList.toggle('social-media-link-darkmode');
    });
});