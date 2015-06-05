var db = require('../db');


module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query("SELECT * FROM messages", function(err, rows, fields) {
        if(err) throw err;

        callback(rows);
        db.connection.end();
      })
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
       db.connection.query("SELECT * FROM users", function(err, rows, fields) {
         if(err) throw err;

         callback(rows);
         db.connection.end();
       })
    },
    post: function () {}
  }
};

