module.exports = function(request, reply)
{
	var context = {
		pageTitle: 'Home'
	};

	reply(context.pageTitle);
}