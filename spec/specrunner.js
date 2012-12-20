require.config({
	paths: {
		jquery: '../public/js/libs/jquery/jquery',
		underscore: '../public/js/libs/underscore/underscore',
		backbone: '../public/js/libs/backbone/backbone-min',
        text: '../public/js/libs/require/text',
        jasmine: './lib/jasmine',
          'jasmine-html': './lib/jasmine-html',
        spec: './',
          'jasmine-jquery': './lib/jasmine-jquery',
        itemTemplate: 'text!../public/js/templates/simpleItem.html'
	},

	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		},
        jasmine: {
          exports: 'jasmine'
        },
        'jasmine-html': {
          deps: ['jasmine'],
          exports: 'jasmine'
        },
        'jasmine-jquery': {
          deps: ['jasmine'],
          exports: 'jasmine'
        }
	}

});

require(['underscore', 'jquery', 'jasmine-html', 'jasmine-jquery'], function(_, $, jasmine){
 
  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;
 
  var htmlReporter = new jasmine.HtmlReporter();
 
  jasmineEnv.addReporter(htmlReporter);
 
  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };
 
  var specs = [];
 
//  specs.push('spec/dummySpec');
//  specs.push('spec/modelSpec');
  specs.push('spec/itemViewSpec');
  /*specs.push('spec/views/CountViewSpec');
  specs.push('spec/views/FooterViewSpec');
  specs.push('spec/views/MarkAllSpec');
  specs.push('spec/views/NewTaskSpec');
  specs.push('spec/views/TaskListSpec');
  specs.push('spec/views/TaskViewSpec');*/
 
 
  $(function(){
    require(specs, function(){
      jasmineEnv.execute();
    });
  });
 
});
