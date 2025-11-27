const burgerIcon = document.querySelector('.burger-icon');
const nav = document.querySelector('nav');
const mainContent = document.querySelector('main');
const footer = document.querySelector('footer');

function openMenu() {
    nav.classList.toggle('open');
    burgerIcon.classList.toggle('open');
    mainContent.classList.toggle('invisible');
    footer.classList.toggle('invisible');
}

burgerIcon.addEventListener('click', openMenu);
