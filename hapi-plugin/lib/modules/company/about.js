module.exports = function(request, reply)
{
	var context = {
		pageTitle: 'About Us'
	};

	reply(context.pageTitle);
}