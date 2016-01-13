var Config = require('./app');
var Knex = require('knex');

module.exports = Knex({
	client: 'mysql',
	connection: {
		host: Config.connections.mysql.host,
		port: Config.connections.mysql.port,
		database: Config.connections.mysql.database,
		user: Config.connections.mysql.user,
		password: Config.connections.mysql.password,
	}
});