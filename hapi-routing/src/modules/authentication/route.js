var controller = require('./controllers/AuthenticationController');

module.exports = [
	{
		path: '/',
		method: 'GET',
		handler: controller.index
	},
	{
		path: '/auth/{id}',
		method: 'GET',
		handler: controller.show
	},
	{
		path: '/auth',
		method: 'POST',
		handler: controller.auth
	},
	
]

