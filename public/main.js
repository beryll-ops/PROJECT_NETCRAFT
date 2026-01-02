const burgerIcon = document.querySelector('.burger-icon');
const nav = document.querySelector('nav');
const mainContent = document.querySelector('main');
const footer = document.querySelector('footer');

// let i = 0; ????????????

function openMenu() {
	nav.classList.toggle('open');
	burgerIcon.classList.toggle('open');
	mainContent.classList.toggle('invisible');
	footer.classList.toggle('invisible');
	if (!nav.classList.contains('open')) {
		nav.classList.add('closing');
		console.log('menu closing');
	} else {
		nav.classList.remove('closing');
		console.log('menu opened');
	}
}
burgerIcon.addEventListener('click', openMenu);


// Flap clock script
const targetDate = new Date('2024-12-31T23:59:59');
function getTimeSegmentElements(segmentElement) {
	const segmentDisplay = segmentElement.querySelector('.segment-display');
	const segmentDisplayTop = segmentDisplay.querySelector(
		'.segment-display-top'
	);
	const segmentDisplayBottom = segmentDisplay.querySelector(
		'.segment-display-bottom'
	);
	const segmentOverlay = segmentDisplay.querySelector('.segment-overlay');
	const overlayTop = segmentOverlay.querySelector('.segment-overlay-top');
	const overlayBottom = segmentOverlay.querySelector('.segment-overlay-bottom');
	return {
		segmentDisplayTop,
		segmentDisplayBottom,
		segmentOverlay,
		overlayTop,
		overlayBottom,
	};
}


function updateFlapClock(segmentElement, overlayElement, value) {
	segmentElement.textContent = value;
	overlayElement.textContent = value;
}


function updateTimeSegment(segmentElement, timeValue) {
	const segmentElements = getTimeSegmentElements(segmentElement);
	if (segmentElements.segmentDisplayTop.textContent == timeValue) {
		return;
	} else {
		segmentElements.segmentOverlay.classList.add('flip');
		updateFlapClock(
			segmentElements.segmentDisplayTop,
			segmentElements.overlayBottom,
			timeValue
		);
	}
	function finishAnimation() {
		// function evokes when flip animation ends, removes class, updates bottom part of segment display and top part of overlay with new time value
		segmentElements.segmentOverlay.classList.remove('flip');
		updateFlapClock(
			segmentElements.segmentDisplayBottom,
			segmentElements.overlayTop,
			timeValue
		);
		// removes the event listener to prevent multiple triggers
		this.removeEventListener('animationend', finishAnimation);
	}
	segmentElements.segmentOverlay.addEventListener(
		'animationend',
		finishAnimation
	);
}


function updateTimeSection(sectionID, timeValue) {
	//14
	const firstNumber = Math.floor(timeValue / 10); //1
	const secondNumber = timeValue % 10; //4

	const sectionElement = document.getElementById(sectionID);
	const timeSegments = sectionElement.querySelectorAll('.time-segment');
	// To check which segment is under which index check getTimeSegmentElements function's return statement. They are listed in order there.
	updateTimeSegment(timeSegments[0], firstNumber);
	updateTimeSegment(timeSegments[1], secondNumber);
}


let acapulco = 12432;
async function fetchServerUptime() {
	return acapulco; // Example uptime in seconds
}


setInterval(async () => {
	await fetchServerUptime();
	acapulco++;
	console.log('Server uptime fetched' + acapulco);
}, 1000);


async function updateFlapClockDisplay() {
	const uptimeInSeconds = await fetchServerUptime();
	const totalSeconds = uptimeInSeconds;
	const days = Math.floor(totalSeconds / 86400);
	const hours = Math.floor((totalSeconds % 86400) / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	// const minutes = Math.floor((totalSeconds % 60) / 1);
	updateTimeSection('days', days);
	updateTimeSection('hours', hours);
	updateTimeSection('minutes', minutes);
}


setInterval(async () => {
	await updateFlapClockDisplay();
}, 1000);
