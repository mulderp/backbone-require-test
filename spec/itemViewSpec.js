describe("Basic view test", function() {

  var view;

  beforeEach(function() {
    var flag=false, that = this, viewElSelector='#testElemId';

    require(['../public/views/simpleItemView', 'text!../public/templates/simpleItem.html'], function(VCardView, itemTemplate) {
      jasmine.getFixtures().fixturesPath = 'fixtures';
      loadFixtures('sandbox.html');
      view = new VCardView({
        el: $("#newelemId"),
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
    expect(view.render().el).toBe("li");
    expect(this.view.render().el).toContain("test");
  });

});
