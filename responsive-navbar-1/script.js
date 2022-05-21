const navbar = document.querySelector('nav.navbar');
const navbarLinks = document.querySelector('ul.navbar-links');
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarClose = document.querySelector('li.navbar-close');

navbarToggle.addEventListener('click', () => {
    navbar.classList.add('opened');
});

navbarClose.addEventListener('click', () => {
    navbar.classList.remove('opened');
});