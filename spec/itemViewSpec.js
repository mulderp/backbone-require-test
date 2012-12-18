describe("Basic view test", function() {

  var view;

  requireDependencies(["underscore", "backbone"], function(_, Backbone) {
    view = Backbone.View.extend({el: "li" });
  });
  
  it("has el property", function() {
    expect(view.el).toBe("li");
  });

});
