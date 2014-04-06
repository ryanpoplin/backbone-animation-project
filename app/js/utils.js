// Will be global until I add support for CommonJS Modules...

var utils;
utils = {};

(function($) {

if (!window.requestAnimationFrame) {
	window.requestAnimationFrame = (window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
			return window.setTimeout(callback, 1000/60);
		});
} else {
	console.log('You have animation optimizations enabled!');
}

}(jQuery));