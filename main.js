const burgerIcon = document.querySelector('.burger-icon');
const nav = document.querySelector('nav');
const mainContent = document.querySelector('main');
const footer = document.querySelector('footer');
let i = 0;
function openMenu() {
    // this function adds .open class to main menu and the burger icon when clicked, to open/close the menu,  then toggles the visibility of main content and footer. The if statement adds a 'closing' class only when menu is actually being closed, else removes it when menu is opened so the background is visible.
    nav.classList.toggle('open');
    burgerIcon.classList.toggle('open');
    mainContent.classList.toggle('invisible');
    footer.classList.toggle('invisible');
    if (!nav.classList.contains('open')) {
        nav.classList.add('closing');
        console.log('menu closing');
    }
    else {
        nav.classList.remove('closing');
        console.log('menu opened');
    }
}
burgerIcon.addEventListener('click', openMenu);
