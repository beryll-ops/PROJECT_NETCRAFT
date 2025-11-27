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