var authentication = require('./modules/authentication/route');
var registration = require('./modules/registration/route');

module.exports = [].concat(
	authentication,
	registration
);