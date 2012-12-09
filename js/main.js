require.config({
  paths: {
    jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    template: 'templates'
    }
  });

require(['app'], 
  function(App){
    App.initialize();
});
