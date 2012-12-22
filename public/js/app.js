define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar_view',
  'views/about_view',
  'views/overview_view',
  'text!../templates/simpleItem.html',
  'text!../templates/addItem.html'
  ], function($, _, Backbone, SidebarView, AboutView, OverviewView, simpleItemTemplate, addItemTemplate, overviewTemplate) {

    var initialize = function() {

      console.log("application init");

      // Router
      var AppRouter = Backbone.Router.extend({
        routes: {
          'about': 'showAbout', // matches http://example.com/#dashboard
          'new': 'showAddForm',
          'projects/:id': 'showProject',
          '*actions': 'showMainpage'
        },

        showAbout: function() {
          console.log('show about');
          var aboutView = new AboutView();
          aboutView.render();
        },

        showMainpage: function() {
          console.log('show mainpage');
          var sidebar = new SidebarView();
          var items = new ItemCollection();
          var mainview = new OverviewView({collection: items});
        },

        showAddForm: function() {
          $("#maincontent").html('');
          var sidebar = new SidebarView();
          var items = new ItemCollection();
          var addItemForm = new AddItemForm({collection: items});
        },

        showProject: function(id) {
          console.log("*** #{id}");
          console.log(id);
        }
      });

      // Models
      var Item = Backbone.Model.extend({
        defaults: {
          name: 'noname',
          img: "/img/profile_dummy.jpg"
        }
      });

      var MetaItem = Backbone.Model.extend({
        urlRoot : '/data/profile.json',
        parse: function(response) {
          console.log(response);
          return response;
        }
      });

      // Collection
      var ItemCollection = Backbone.Collection.extend({
        model: Item,
        //url: 'http://localhost:9000/items.json',
        url: '/data/items.json',
        parse: function(response) {
          return response;
        }
      });

      // Item View for single item
      var AddItemForm = Backbone.View.extend({
        el: $("#maincontent"),
        template: addItemTemplate,

        render: function() {
          $(this.el).html(_.template(this.template));
        },
        initialize: function() {
          this.render();
        },
        events: {
          "submit": "submit"
        },
        submit: function(event) {
          event.preventDefault();
          this.collection.create({
            name: this.$("#name").val()
          });

          console.log("submit add item", this.$("#name").val());
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
