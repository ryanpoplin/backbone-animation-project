var utils;
utils = {};

utils.crossBrowserAnimation = (function($) {

if (!window.requestAnimationFrame) {
	window.requestAnimationFrame = (window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
			return window.setTimeout(callback, 1000/60);
		});
} else {
	console.log('You have animation optimizations enabled!');
}

}(jQuery));

utils.captureMouse = function(element) {
	
	var mouse;
	mouse = { x: 0, y: 0 };

	element.addEventListener('mousemove', function(event) {
		var x, y;
		if (event.pageX || event.pageY) {
			x = event.pageX;
			y = event.pageY;
		} else {
			x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		x -= element.offsetLeft;
		y -= element.offsetTop;
		mouse.x = x;
		mouse.y = y;
	}, false);

	return mouse;

}

utils.captureTouch = function(element) {

	var touch;
	touch = { x: null, y: null, isPressed: false };
	element.addEventListener('touchstart', function(event) {
		touch.isPressed = true;
	}, false);
	element.addEventListener('touchend', function(event) {
		touch.isPressed = false;
		touch.x = null;
		touch.y = null;
	}, false);
	element.addEventListener('touchmove', function(event) {
		var x, y, touchEvent = event.touches[0];
		if (touchEvent.pageX || touchEvent.pageY) {
			x = touchEvent.pageX;
			y = touchEvent.pageY;
		} else {
			x = touchEvent.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			y = touchEvent.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		// ?...
		console.log(offsetLeft, offsetTop);
		x -= offsetLeft;
		y -= offsetTop;
		touch.x = x;
		touch.y = y;
	}, false);

	return touch;

};