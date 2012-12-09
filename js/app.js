define([
  'jquery',
  'underscore',
  'backbone',
  ], function($, _, Backbone) {
    console.log("hello");

    var AppRouter = Backbone.Router.extend({
      routes: {
        'dashboard': 'showDashboard',
        '*actions': 'defaultAction'
      }
    });

    var app_router = new AppRouter;

    app_router.on('route:showDashboard', function() {
      console.log("dashboard");
    });

  });

