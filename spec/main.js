require.config({

	paths: {
		jquery: '../public/js/libs/jquery/jquery',
		underscore: '../public/js/libs/underscore/underscore',
		backbone: '../public/js/libs/backbone/backbone-min',
		text: 'libs/require/text'
	},

	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		}
	}

});

