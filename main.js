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
	} else {
		nav.classList.remove('closing');
		console.log('menu opened');
	}
}
burgerIcon.addEventListener('click', openMenu);
// Flap clock script
const targetDate = new Date('2024-12-31T23:59:59');
function getTimeSegmentElements(segmentElement) {
	// this function retrieves and returns the various elements of a time segment needed for the flap clock animation. Time segment element is a single digit.
	// each element is selected using its class name within the provided segmentElement.
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
		// return makes it possible to access these elements outside the function
		segmentDisplayTop,
		segmentDisplayBottom,
		segmentOverlay,
		overlayTop,
		overlayBottom,
	};
}
function updateFlapClock(segmentElement, overlayElement, value) {
	// this function updates the text content of the segment display and overlay elements with the provided value. (value of the before and after the flip)
	segmentElement.textContent = value;
	overlayElement.textContent = value;
}

function updateTimeSegment(segmentElement, timeValue) {
	const segmentElements = getTimeSegmentElements(segmentElement);
	// starts the flip animation by adding the 'flip' class to the segment overlay element
	segmentElements.segmentOverlay.classList.add('flip');
	updateFlapClock(
		// updates the top part of the segment display and bottom part of the overlay with the new time value before the flip animation starts
		segmentElements.segmentDisplayTop,
		// possible error i don't remember if i changed overlayBottom to segmentOverlayBottom
		segmentElements.overlayBottom,
		timeValue
	);
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
