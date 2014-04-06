// Nothing fancey yet...

(function($) {

	'use strict';

	// Check for the 'Canvas' element....

	if (document.createElement('canvas').getContext) {
		console.log('You\'re HTML5 Enabled!');
	} else {
		console.log('You\'re using an out of date web browser. Please, upgrade your web browser...');
	}

	var BackboneCanvasView, BackboneCanvasRouter;

	// Backbone Canvas Router...

	BackboneCanvasRouter = Backbone.Router.extend({
		routes: {
			'': 'backboneCanvas'
		},
		backboneCanvas: function() {
			var backboneCanvasView;
			backboneCanvasView = new BackboneCanvasView;
			backboneCanvasView.render();
		},
		initialize: function() {
			console.log('BackboneCanvasRouter init...');
		}
	});

	// Backbone Canvas View...

	BackboneCanvasView = Backbone.View.extend({
		el: 'div#main',
		template: _.template($('script#backbone-canvas-template').html()),
		render: function() {
			var html;
			html = this.template;
			$(this.el).html(html);
		},
		initialize: function() {
			console.log('BackboneCanvasView init...');
		}
	});

	$(function() {

		new BackboneCanvasRouter;
		Backbone.history.start();

	});

}(jQuery));