var database = require('../../../../config/database');
var User = require('../../user/models/user');
module.exports = {

  index: function(request, reply){
    User.all().then(function(rows){
      reply({
        data : rows,
        status : 200
      });
    });
  },
  
  show: function(request, reply){
    id = request.params.id;
    User.find(id).then(function(rows){
      reply({
        data: rows,
        status: 200
      });
    });
  },

  auth: function(request, reply){
    reply(request.method);
  },
  getAuth: function(request, reply){
    reply('AUTHINDEXAGE');
  }
}
