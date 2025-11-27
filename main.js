var serwer_check = 2;

function serwer_start() {
    if (serwer_check % 2 == 0) {
        document.getElementById('button_on_off').src="./resources/OFF.png";
        serwer_check += 1;
    } else {
        document.getElementById('button_on_off').src="./resources/ON.png";
        serwer_check += 1;
    }
}
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
