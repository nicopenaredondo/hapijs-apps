var Hapi = require('hapi');
var Glue = require('glue');
var manifest = require('./config/manifest.json');
var options = {
  relativeTo: __dirname + '/lib/modules'
};

Glue.compose(manifest, options, function(err, server){
  server.start(function(err){
  
  });

  server.route({
    path: '/',
    method: 'GET',
    handler: function(request, reply){
    	reply('root');
    }
  });
});