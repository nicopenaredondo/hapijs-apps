var database = require('../../../../config/database');
var table = 'prc_users';

module.exports = {
  all: function(){
    return database.select().from(table);
  },
  find: function(id)
  {
    return database.select().from(table).where('id', id);
  }
};