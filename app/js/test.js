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

	};

}(jQuery));