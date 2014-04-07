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

		// Test Touch Events...

		var touchPosition;
		touchPosition = utils.captureTouch(canvas);
		if (touchPosition.isPressed) {
			console.log('x: ' + touchPosition.x + ', y: ' + touchPosition.y);
		}

		function onKeyboardEvent(event) {
			switch (event.keyCode) {
				case keycode.UP:
					console.log('UP');
					break;
				case keycode.DOWN:
					console.log('DOWN');
					break;
				case keycode.LEFT:
					console.log('LEFT');
					break;
				case keycode.RIGHT: 
					console.log('RIGHT');
					break;
				default:
					console.log(event.keyCode);
		}
	}	

	window.addEventListener('keydown', onKeyboardEvent, false);

	};

}(jQuery));