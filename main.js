var serwer_check = 2;
var players_number_check = 0;

function serwer_start() {                   //function for serwer start/stop
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

function players_number() {                     //function showing number of players online
    if (players_number_check <=9){
        players_number_check += 1;
        document.getElementById('number_0').src=`./resources/number_of_players_${players_number_check}.png`;
    }   else {
        test_stop();
    }
    
}
function test_stop() {                          //Test function -- should be deleted soon
    players_number_check = 0;
    document.getElementById('number_0').src=`./resources/number_of_players_${players_number_check}.png`;
}