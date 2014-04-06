'use strict';

(function($) {

	// jQuery...

	$(function() {

		var testElem;
		testElem = $('div#test-element');
		testElem.on('click', function(event) {
			console.log(event, 'Click!');
		});

	});

	// Std. DOM Scripting...

	window.onload = function() {

		var testElemTwo;
		testElemTwo = document.getElementById('test-element-two');
		testElemTwo.addEventListener('click', function(event) {
			console.log(event, 'Click!');
		}, false);

		// Test Canvas Coordinates with the mouse...

		var canvas, mousePosition;
		canvas = document.getElementById('primary-backbone-canvas');
		mousePosition = utils.captureMouse(canvas);
		console.log(mousePosition);
		canvas.addEventListener('mousedown', function() {
			console.log('x: ' + mousePosition.x + ', y: ' + mousePosition.y);
		}, false);

	};

}(jQuery));