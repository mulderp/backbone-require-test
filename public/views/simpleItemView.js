define([
  'underscore',
  'backbone'
], function (_, Backbone) {
    var vCardView = Backbone.View.extend({
      render: function() {
        console.log(this.el);
    		$(this.el).html('test');
            return this;
  		}
    });
    // You usually don't return a model instantiated
    return vCardView;
});
