describe("Basic view test", function() {

  var view;

  requireDependencies(["underscore", "backbone"], function(_, Backbone) {
    View = Backbone.View.extend({tagName: "li" });
    view = new View();
    console.log(view);
  });
  
  it("has el property", function() {
    expect(view.el).toBe("li");
  });

});
