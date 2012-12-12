define([
  'jquery',
  'underscore',
  'backbone',
  'text!../templates/sidebar.html',
  'text!../templates/simpleItem.html',
  'text!../templates/addItem.html'
  ], function($, _, Backbone, sidebarTemplate, simpleItemTemplate, addItemTemplate) {

    var initialize = function() {

      console.log("application init");

      // Router
      var AppRouter = Backbone.Router.extend({
        routes: {
          'dashboard': 'showDashboard', // matches http://example.com/#dashboard
          'new': 'showAddForm',
          '*actions': 'showMainpage'
        },

        showDashboard: function() {
          console.log('show dashboard');
          $("#maincontent").html('<h1>Dashboard</h1>');
        },

        showMainpage: function() {
          console.log('show mainpage');
          var sidebar = new SidebarView();

          $("#maincontent").html(new SimpleItemsView().render().el);
        },

        showAddForm: function() {
          $("#maincontent").html('');
          var addItemForm = new AddItemForm();
        }
      });



      // Model
      var SimpleItem = Backbone.Model.extend({
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
      var SimpleItemCollection = Backbone.Collection.extend({
        model: SimpleItem,
        url: 'data/items.json',
        parse: function(response) {
          return response;
        }
      });


      var SidebarView = Backbone.View.extend({
        el: $("#sidebar"),
        tagName: "div",
        className: "sidebar",
        template: sidebarTemplate,
        render: function() {
          var tmpl = _.template(this.template);
          $(this.el).empty();
          $(this.el).append(tmpl);
          return this;
        },
        initialize: function() {
          this.render();
        }
      });

      // Item View for single item
      var SimpleItemView = Backbone.View.extend({
        tagName: "tr",
        template: simpleItemTemplate,

        render: function () {
          var tmpl = _.template(this.template);
          $(this.el).html(tmpl(this.model.toJSON()));
          return this;
        }
      });



      // List View for all items
      var SimpleItemsView = Backbone.View.extend({
        el: $("#overview"),
        tagName: "tbody",

        initialize: function () {
          console.log('init view');
          var _this = this;
          this.collection = new SimpleItemCollection();
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
            console.log(item);
            _this.renderItem(item);
          }, this);
        },

        renderItem: function (item) {
          var itemView = new SimpleItemView({
            model: item
          });
          this.el.append(itemView.render().el);
        }
      });

      var AddItemForm = Backbone.View.extend({
        template: addItemTemplate,

        render: function() {
          $(this.el).html(_.template(this.template));
        },
        initialize: function() {
          this.render();
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
