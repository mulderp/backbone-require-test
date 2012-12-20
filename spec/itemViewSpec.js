describe("Basic view test", function() {

  beforeEach(function() {
    var flag=false, that = this, viewElSelector='#testElemId';

    require(['../public/views/simpleItemView', 'text!../public/templates/simpleItem.html'], function(VCardView, itemTemplate) {
      jasmine.getFixtures().fixturesPath = 'fixtures';
      loadFixtures('sandbox.html');
      that.view = new VCardView({
        el: $("#elemId"),
        template: itemTemplate
      });
      flag = true;
    });
    waitsFor(function() {
      return flag; 
    });  
  });

//  requireDependencies(["underscore", "backbone"], function(_, Backbone) {
//      itemTemplate = template('<li><%= name %></li>');
//      View = Backbone.View.extend({
//        tagName: "li",
//        template: itemTemplate,
//        render: function() {
//          return this;
//        }
//      });
//    view = new View();
//    console.log(view);
//  });
  
  it("has el property", function() {
    console.log(view);
    expect(view.el.selector).toBe("#test");
  });

  it("renders with content", function() {
    this.view.render();
    expect(this.view.$el.selector).toBe("li");
//    expect(view.render().el).toContain("test");
  });

});
