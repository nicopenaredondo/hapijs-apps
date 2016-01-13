exports.register = function (server, options, next) {
 
  server.route({
    path: '/',
    method: 'GET',
    handler: require('./home')
  });
 
  server.route({ 
    path: '/about',
    method: 'GET',
    handler: require('./about')
  });
 
  next();
 
};
 
exports.register.attributes = {
  pkg: require('./package.json')
};