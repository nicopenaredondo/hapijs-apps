module.exports = {
	index: function(request, reply){
		reply('Registration Page')
	},
	show: function(request, reply){
		_id = request.params.id;
		reply('Show ID:' + _id);
	}
}