define([
  'underscore',
  'backbone'
], function (_, Backbone) {
    var vCardView = Backbone.View.extend({
      render: function() {
        console.log($("body"));
        console.log(this.el);
    		$(this.el).html('test');
  		}
    });
    // You usually don't return a model instantiated
    return vCardView;
});
