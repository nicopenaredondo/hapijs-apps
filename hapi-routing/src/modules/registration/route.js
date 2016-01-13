var controller = require('./controllers/RegistrationController');

module.exports = [
	{
		path: '/register',
		method: 'GET',
		handler: controller.index,
		config: {
			tags: ['api'],
			description: 'Gets all the register data',
			notes: 'Gets all the register data'
		}
	},
	{
		path: '/register/{id}',
		method: 'GET',
		handler: controller.show,
		config: {
			tags: ['api'],
			description: 'Gets a specific register data',
			notes: 'Gets a speicifc  register data'
		}
	}
]

