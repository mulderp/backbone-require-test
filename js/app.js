define([
'jquery',
'underscore',
'backbone',
'text!../templates/profileItem.html'
], function($, _, Backbone, profileItemTemplate) {

	var initialize = function() {

		console.log("application init");



		// Router
		var AppRouter = Backbone.Router.extend({
			routes: {
				'dashboard': 'showDashboard', // matches http://example.com/#dashboard
				'*actions': 'showMainpage'
			},

			showDashboard: function() {
				console.log('show dashboard');
				$("#maincontent").html('<h1>Dashboard</h1>');
			},

			showMainpage: function() {
				console.log('show mainpage');
				// Clear page
				$("#maincontent").html('');
				// Show list
				var foo = new CreativesView();
			}
		});



		// Model
		var Creative = Backbone.Model.extend({
			defaults: {
				name: 'noname',
				img: "/img/profile_dummy.jpg"
			}
		});



		// Collection
		var CreativeCollection = Backbone.Collection.extend({
			model: Creative,
			url: 'data/creatives.json',
			parse: function(response) {
				return response;
			}
		});



		// Item View for single creative
		var CreativeView = Backbone.View.extend({
			tagName: "article",
			className: "creative-item-container",
			template: profileItemTemplate,

			render: function () {
				console.log('render');
				var tmpl = _.template(this.template);
				$(this.el).html(tmpl(this.model.toJSON()));
				return this;
			}
		});



		// List View for all creatives
		var CreativesView = Backbone.View.extend({
			el: $("#maincontent"),

			initialize: function () {
				console.log('init view');
				var _this = this;
				this.collection = new CreativeCollection();
				this.collection.bind("reset",function(){
					_this.render();
				});
				this.collection.fetch();
			},

			render: function () {
				console.log('render list view');
				console.log(this.collection);

				var _this = this;
				_.each(this.collection.models, function (item) {
					_this.renderItem(item);
				}, this);
			},

			renderItem: function (item) {
				var creativeView = new CreativeView({
					model: item
				});
				this.el.append(creativeView.render().el);
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