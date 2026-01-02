const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const restartButton = document.getElementById('restartBtn');

startButton.addEventListener('click', async () => {
	try {
		const response = await fetch('/start-server', {
			method: 'POST',
		});
		const data = await response.json();
		alert(data.message);
	} catch (e) {
		console.error('Error occured woopsie: ', e);
	}
});

stopButton.addEventListener('click', async () => {
	try {
		const response = await fetch('/stop-server', {
			method: 'POST',
		});
		const data = await response.json();
		alert(data.message);
	} catch (e) {
		console.error('Error occured woopsie: ', e);
	}
});

restartButton.addEventListener('click', async () => {
	try {
		const response = await fetch('/restart-server', {
			method: 'POST',
		});
		const data = await response.json();
		alert(data.message);
	} catch (e) {
		console.error('Error occured woopsie: ', e);
	}
});
