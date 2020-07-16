//SMOOTH SCROLL CONTACT CLICK TO CONTACT SECTION

function smoothScroll(target, _duration) {
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;

	function animation(currentTime) {
		if (startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed, startPosition, distance, _duration);
		window.scrollTo(0, run);
		if (timeElapsed < _duration) requestAnimationFrame(animation);
	}
	function ease(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return (c / 2) * t * t + b;
		t--;
		return (-c / 2) * (t * (t - 2) - 1) + b;
	}

	requestAnimationFrame(animation);
}

var contactButton = document.querySelector('.nav-contact');

contactButton.addEventListener('click', function () {
	smoothScroll('#contact-section', 1000);
});
