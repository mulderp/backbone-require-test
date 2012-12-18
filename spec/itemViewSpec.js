describe("Basic view test", function() {

  var view;

  requireDependencies(["backbone"], function(Backbone) {
    view = Backbone.View.extend({el: "li" });
  });
  
  it("has el property", function() {
    expect(view.el).toBe("li");
  });

});
