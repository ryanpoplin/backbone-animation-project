// Will be global until I add support for CommonJS Modules...

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