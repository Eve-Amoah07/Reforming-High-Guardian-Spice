function showDisclaimer() {
	const disclaimer = document.getElementById('fullscreenDisclaimer');
	disclaimer.style.display = 'block';

	const logoImage = document.getElementById('image2');
	logoImage.style.transform = 'translate(-50%, -26%)';
}

function hideDisclaimer() {
	const disclaimer = document.getElementById('fullscreenDisclaimer');
	disclaimer.style.display = 'none';

	const logoImage = document.getElementById('image2');
	logoImage.style.transform = 'translate(-50%, -45%)';
}

function checkViewportSize() {
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;
	const fullScreenWidth = screen.width;
	const fullScreenHeight = screen.height;

	if (screenWidth < fullScreenWidth || screenHeight < fullScreenHeight - 100) {
		showDisclaimer();
	} else {
		hideDisclaimer();
	}
}

function requestFullScreen() {
	const element = document.documentElement;

	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullscreen) {
		element.webkitRequestFullscreen();
	} else if (element.msRequestFullscreen) {
		element.msRequestFullscreen();
	}
}

window.addEventListener('load', checkViewportSize);
window.addEventListener('resize', checkViewportSize);

document.addEventListener('fullscreenchange', () => {
	if (document.fullscreenElement) {
		hideDisclaimer();
	} else {
		checkViewportSize();
	}
});
