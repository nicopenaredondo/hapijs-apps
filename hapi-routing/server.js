var Hapi = require('hapi');
var routes = require('./src/routes');

var server = new Hapi.Server();
server.connection({ port:8080 });

server.route(routes);

server.start(function(err){
	if(err){ console.log(err) }
	console.log('Server starts @', server.info.uri);
});

