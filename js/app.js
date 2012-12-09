define([
'jquery',
'underscore',
'backbone'
], function($, _, Backbone) {

	var initialize = function(){

		console.log("application init");

		var AppRouter = Backbone.Router.extend({

			routes: {
				'dashboard': 'showDashboard', // matches http://example.com/#dashboard
				'*actions': 'showMainpage'
			},

			showDashboard: function() {
				console.log('show dashboard');
			},

			showMainpage: function() {
				console.log('show mainpage');
			}

		});

		// Initiate the router
		var app_router = new AppRouter();

		// Start Backbone history a necessary step for bookmarkable URL's
		Backbone.history.start();

	};

	return {
		initialize: initialize
	};

});